import os
import json

def rename_property_in_json(obj, path, new_key):
    keys = path.split('/')
    if not keys:
        return obj

    current_key = keys.pop(0)

    if current_key in obj:
        if not keys:  # If this is the last key in the path
            obj[new_key] = obj.pop(current_key)
        else:
            rename_property_in_json(obj[current_key], '/'.join(keys), new_key)

def process_json_files(folder_path, path, new_key):
    for root, dirs, files in os.walk(folder_path):
        for filename in files:
            if filename.endswith('.json'):
                file_path = os.path.join(root, filename)
                print(file_path)
                with open(file_path, 'r', encoding='utf-8') as file:
                    data = json.load(file)

                rename_property_in_json(data, path, new_key)

                with open(file_path, 'w', encoding='utf-8') as file:
                    json.dump(data, file, ensure_ascii=False, indent=4)

# Example usage
folder_path = 'patches'
property_path = 'heroes/tank/Doomfist/abilities/Rocket Punch/Maximum empowered wall stun duration'
new_property_name = 'Maximum empowered wall stun'
process_json_files(folder_path, property_path, new_property_name)