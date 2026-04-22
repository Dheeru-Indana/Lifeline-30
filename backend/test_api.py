import requests
import json

def test_evaluate(query):
    url = "http://127.0.0.1:8000/evaluate"
    payload = {"query": query, "assets": []}
    headers = {'Content-Type': 'application/json'}
    
    response = requests.post(url, data=json.dumps(payload), headers=headers)
    print(f"Input: {query}")
    if response.status_code == 200:
        print(f"Output:\n{response.json()['output']}")
    else:
        print(f"Error: {response.status_code} - {response.text}")
    print("-" * 50)

if __name__ == "__main__":
    # Test cases from prompt
    test_evaluate("Patient feels dizzy, hasn't moved in 6 hours, heart rate is high")
    test_evaluate("Feeling slightly tired and skipped walking today")
    test_evaluate("I feel fine today, just checking in")
