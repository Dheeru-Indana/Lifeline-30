from backend.models import NormalizedSignals, TriageLevel, ConfidenceLevel, TriageResult
from typing import List

class TriageEngine:
    def evaluate(self, signals: NormalizedSignals, anomalies: List[str]) -> TriageResult:
        # RED (Emergency)
        red_indicators = [
            "CRITICAL_SYMPTOM_CHEST_PAIN",
            "CRITICAL_SYMPTOM_UNCONSCIOUS",
            "CRITICAL_SYMPTOM_BREATHLESS",
            "CRITICAL_SYMPTOM_STROKE"
        ]
        
        has_critical_symptom = any(flag in signals.risk_flags for flag in red_indicators)
        has_prolonged_inactivity = "PROLONGED_INACTIVITY_HIGH" in signals.risk_flags
        has_high_hr = "ABNORMAL_VITALS_HIGH_HR" in signals.risk_flags
        has_dizziness = "dizzy" in signals.symptoms
        
        # RED Logic according to user specifications
        if has_critical_symptom or (has_prolonged_inactivity and (has_dizziness or has_high_hr)) or (has_dizziness and has_high_hr):
            detected_signals = []
            if has_prolonged_inactivity: detected_signals.append("Prolonged inactivity")
            if has_dizziness: detected_signals.append("dizziness")
            if has_high_hr: detected_signals.append("elevated heart rate")
            if has_critical_symptom: detected_signals.append("critical symptoms")
            
            reason = f"{', '.join(detected_signals).capitalize()} indicate possible acute medical event"
            if not detected_signals:
                reason = "Multiple critical risk factors detected"
                
            return TriageResult(
                triage=TriageLevel.RED,
                reason=reason,
                action="Map to RED actions",
                confidence=ConfidenceLevel.HIGH
            )

        # AMBER (Moderate Risk)
        amber_indicators = ["dizzy", "fatigue", "skipped_meds"]
        has_amber_signal = any(s in signals.symptoms for s in amber_indicators) or \
                          "ABNORMAL_VITALS_BP" in signals.risk_flags or \
                          "MODERATE_INACTIVITY" in signals.risk_flags or \
                          "ABNORMAL_VITALS_HIGH_HR" in signals.risk_flags

        if has_amber_signal:
            detected = []
            if "fatigue" in signals.symptoms: detected.append("Mild fatigue")
            if "dizzy" in signals.symptoms: detected.append("dizziness")
            if "MODERATE_INACTIVITY" in signals.risk_flags or "inactivity" in signals.behavior: detected.append("reduced activity")
            
            reason = f"{', '.join(detected).capitalize()} indicate moderate risk requiring follow-up"
            if not detected:
                reason = "Moderate risk signals detected requiring follow-up"
                
            return TriageResult(
                triage=TriageLevel.AMBER,
                reason=reason,
                action="Map to AMBER actions",
                confidence=ConfidenceLevel.MEDIUM
            )

        # GREEN (Stable)
        return TriageResult(
            triage=TriageLevel.GREEN,
            reason="No symptoms or abnormal signals detected",
            action="Map to GREEN actions",
            confidence=ConfidenceLevel.HIGH
        )
