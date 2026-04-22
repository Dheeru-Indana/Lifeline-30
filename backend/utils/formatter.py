from backend.models import TriageResult

class ResponseFormatter:
    def format(self, result: TriageResult) -> str:
        """ Returns the EXACT structured string format:
        TRIAGE: <GREEN | AMBER | RED>
        REASON: <clear explanation>
        ACTION: <specific actions>
        CONFIDENCE: <LOW | MEDIUM | HIGH>
        """
        lines = [
            f"TRIAGE: {result.triage.value}",
            f"REASON: {result.reason}",
            f"ACTION: {result.action}",
            f"CONFIDENCE: {result.confidence.value}"
        ]
        return "\n".join(lines)
