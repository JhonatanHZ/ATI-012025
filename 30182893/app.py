from flask import Flask, render_template, request, jsonify
import json
import os

app = Flask(__name__, template_folder='ATI', static_folder='ATI')

@app.route('/')
def home():
    ruta_template = os.path.join(app.template_folder, 'index.html')
    ruta_completa = os.path.join(app.root_path, ruta_template)
    return render_template('index.html')

@app.route('/perfil')
def renderPerfil():
    ruta_template = os.path.join(app.template_folder, 'perfil.html')
    ruta_completa = os.path.join(app.root_path, ruta_template)
    return render_template('perfil.html')

@app.route('/perfiles')
def obtener_perfiles():
    ruta_json = os.path.join(app.root_path, 'ATI', 'datos', 'index.json')
    with open(ruta_json, encoding='utf-8') as archivo:
        perfiles = json.load(archivo)
    return jsonify(perfiles)

@app.route('/DatosPerfiles')
def enviar_perfiles():
    ruta_json = os.path.join(app.root_path, 'ATI', 'datos', 'perfiles.json')
    with open(ruta_json, encoding='utf-8') as archivo:
        perfiles = json.load(archivo)
    return jsonify(perfiles)

application = app