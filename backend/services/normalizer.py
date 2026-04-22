from backend.models import ExtractedSignals, NormalizedSignals, Tone
from typing import List

class SignalNormalizer:
    def normalize(self, signals: ExtractedSignals) -> NormalizedSignals:
        risk_flags = []
        
        # Determine risk flags based on extracted data
        if "chest_pain" in signals.symptoms:
            risk_flags.append("CRITICAL_SYMPTOM_CHEST_PAIN")
        if "unconscious" in signals.symptoms:
            risk_flags.append("CRITICAL_SYMPTOM_UNCONSCIOUS")
        if "breathless" in signals.symptoms:
            risk_flags.append("CRITICAL_SYMPTOM_BREATHLESS")
        if "stroke" in signals.symptoms:
            risk_flags.append("CRITICAL_SYMPTOM_STROKE")

        # Behavior risk flags
        if "inactivity" in signals.behavior:
            # Check duration if available
            if "hour" in signals.time_context:
                try:
                    hours = int(signals.time_context.split()[0])
                    if hours > 4:
                        risk_flags.append("PROLONGED_INACTIVITY_HIGH")
                    else:
                        risk_flags.append("MODERATE_INACTIVITY")
                except:
                    risk_flags.append("MODERATE_INACTIVITY")
            else:
                risk_flags.append("MODERATE_INACTIVITY")

        # Vitals risk flags
        hr = signals.vitals.get("heart_rate")
        if hr and hr > 100:
            risk_flags.append("ABNORMAL_VITALS_HIGH_HR")
        
        systolic = signals.vitals.get("systolic")
        if systolic and (systolic > 160 or systolic < 90):
            risk_flags.append("ABNORMAL_VITALS_BP")

        return NormalizedSignals(
            symptoms=signals.symptoms,
            behavior=signals.behavior,
            vitals=signals.vitals,
            risk_flags=risk_flags,
            time_context=signals.time_context
        )
