from flask import Flask, render_template, request, jsonify
import json
import os

from flask import Flask, render_template

app = Flask(__name__, template_folder='.', static_folder='.', static_url_path='/ATI')

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/perfil')
def renderPerfil():
    return render_template('perfil.html')


@app.route('/perfiles')
def obtener_perfiles():
    ruta_json = os.path.join(app.root_path, 'datos', 'index.json')
    with open(ruta_json, encoding='utf-8') as archivo:
        perfiles = json.load(archivo)
    return jsonify(perfiles)

@app.route('/DatosPerfiles')
def enviar_perfiles():
    ruta_json = os.path.join(app.root_path, 'datos', 'perfiles.json')
    with open(ruta_json, encoding='utf-8') as archivo:
        perfiles = json.load(archivo)
    return jsonify(perfiles)

application = app