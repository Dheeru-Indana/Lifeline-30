from backend.models import NormalizedSignals
from typing import List

class AnomalyDetector:
    def detect(self, signals: NormalizedSignals) -> List[str]:
        anomalies = []
        
        # Check for inactivity duration
        if "PROLONGED_INACTIVITY_HIGH" in signals.risk_flags:
            anomalies.append("Dangerous inactivity detected (>4 hours)")
            
        # Specific combinations
        if "dizzy" in signals.symptoms and "ABNORMAL_VITALS_HIGH_HR" in signals.risk_flags:
            anomalies.append("Combination of dizziness and high heart rate (Tachycardia risk)")
            
        if "pain" in signals.symptoms and "PROLONGED_INACTIVITY_HIGH" in signals.risk_flags:
            anomalies.append("Persistent pain coupled with immobility")
            
        # Critical symptoms are anomalies themselves
        critical_flags = [f for f in signals.risk_flags if f.startswith("CRITICAL_SYMPTOM")]
        for flag in critical_flags:
            anomalies.append(f"Critical medical signal: {flag.replace('CRITICAL_SYMPTOM_', '').lower()}")

        return anomalies
