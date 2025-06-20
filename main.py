from flask import Flask, render_template, make_response
from flask_restful import Api, Resource
from flask_cors import CORS,cross_origin
from  database import get_person_info

app = Flask(__name__)
@app.route('/main', methods=['GET'])
def get():

     return get_person_info(), 200
     
app.config['CORS_HEADERS'] = 'Content-Type'
cors = CORS(app, resources={r"/*": {"origins": "*"}})
api = Api(app)

if __name__ == '__main__':
    app.run(debug=True)
