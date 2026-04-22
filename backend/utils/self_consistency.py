from backend.models import TriageResult

class SelfConsistencyMechanism:
    def process(self, pipeline_func, query: str, assets: list) -> TriageResult:
        # Run the pipeline twice
        result1 = pipeline_func(query, assets)
        result2 = pipeline_func(query, assets)
        
        # In a real scenario, this might involve different variations or model parameters
        # Here we ensure if they differ, we pick the most conservative (highest risk)
        
        if result1.triage == result2.triage:
            return result1
            
        # Preference: RED > AMBER > GREEN
        priority = {"RED": 3, "AMBER": 2, "GREEN": 1}
        if priority[result1.triage.value] >= priority[result2.triage.value]:
            return result1
        return result2
