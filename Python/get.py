# ce code renvoie la couleur correspondante des maisons

import time
import requests  
color = ""
houses = {
    "Gryffindor" : "red",
    "Slytherin" : "green",
    "Ravenclaw" : "blue",
    "Hufflepuff" : "yellow"
}

url = "http://127.0.0.1:3000/houses"

while(True): 
    time.sleep(1)
    r = requests.get(url)
    print (r)
    print(r.json())
    if (r.json()["message"] == None) :
        continue

    color = (houses[r.json()["message"]])
    print(color)