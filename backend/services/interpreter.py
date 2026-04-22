import re
from typing import List, Dict, Any
from backend.models import ExtractedSignals

class InputInterpreter:
    def __init__(self):
        # Patterns for extraction
        self.symptom_keywords = {
            "pain": [r"pain", r"ache", r"sore", r"discomfort"],
            "dizzy": [r"dizzy", r"dizziness", r"lightheaded", r"spinning", r"unsteady"],
            "fatigue": [r"tired", r"fatigue", r"exhausted", r"weak", r"low energy"],
            "breathless": [r"breath", r"breathing", r"shortness", r"dyspnea", r"gasping"],
            "chest_pain": [r"chest pain", r"tightness in chest", r"heart pain", r"sternum"],
            "fever": [r"fever", r"chills", r"cold sweat", r"temperature"],
            "unconscious": [r"fainted", r"passed out", r"unconscious", r"blacked out"],
            "stroke": [r"numbness", r"slurred", r"weakness one side", r"facial droop"]
        }
        
        self.behavior_keywords = {
            "inactivity": [r"not moved", r"stayed in bed", r"inactive", r"laying down", r"hasn't moved", r"skipped walking"],
            "sleep": [r"sleeping", r"overslept", r"can't wake"],
            "phone_usage": [r"not using phone", r"unresponsive"],
            "skipped_meds": [r"missed medication", r"forgot pills"]
        }

        self.severity_keywords = [
            r"severe", r"extreme", r"sudden", r"acute", r"worst", r"unbearable", r"intense", r"rapid"
        ]

    def interpret(self, query: str) -> ExtractedSignals:
        query = query.lower()
        signals = ExtractedSignals()

        # Extract symptoms
        for symptom, patterns in self.symptom_keywords.items():
            for pattern in patterns:
                if re.search(pattern, query):
                    signals.symptoms.append(symptom)
                    break

        # Extract behavior
        for behavior, patterns in self.behavior_keywords.items():
            for pattern in patterns:
                if re.search(pattern, query):
                    signals.behavior.append(behavior)
                    break

        # Extract vitals (simple regex for HR, BP)
        # e.g. "heart rate is 110", "BP 140/90"
        hr_match = re.search(r"heart rate (?:is )?(\d+)", query)
        if hr_match:
            signals.vitals["heart_rate"] = int(hr_match.group(1))
        elif "high heart rate" in query:
            signals.vitals["heart_rate"] = 110 # Default "high" for logic

        bp_match = re.search(r"bp (?:is )?(\d+)/(\d+)", query)
        if bp_match:
            signals.vitals["systolic"] = int(bp_match.group(1))
            signals.vitals["diastolic"] = int(bp_match.group(2))

        # Extract time context
        # e.g. "for 6 hours", "since morning", "2 days", "in 6 hours"
        time_match = re.search(r"(?:for |since |last |in |during )(\d+ \w+)", query)
        if time_match:
            signals.time_context = time_match.group(1)
        
        # Extract severity
        for pattern in self.severity_keywords:
            if re.search(pattern, query):
                signals.severity_keywords.append(pattern)

        # Deduplicate
        signals.symptoms = list(set(signals.symptoms))
        signals.behavior = list(set(signals.behavior))
        
        return signals
