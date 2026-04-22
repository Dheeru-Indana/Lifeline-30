from backend.models import TriageLevel

class ActionGenerator:
    def generate(self, triage: TriageLevel) -> str:
        if triage == TriageLevel.RED:
            return "Initiate emergency response, call 112, share live location, provide voice-guided first aid"
        elif triage == TriageLevel.AMBER:
            return "Alert care coordinator and schedule teleconsult"
        else:
            return "Log status and schedule next check-in"
