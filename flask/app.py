from flask import Flask
from flask_cors import CORS, cross_origin
import json

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route('/')
def index():
    return {"status": "App is up and running"}

@app.route('/data')
def data():
    return {"users": ["test", "test1"]}

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000, debug=True)
