from PIL import Image
img = Image.open('assets/logo_original.png').convert("RGBA")
bbox = img.getbbox()
print(bbox)
