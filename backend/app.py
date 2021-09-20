import os
from flask import Flask, request, jsonify
from flask_pymongo import PyMongo
from flask_cors import CORS
from bson import ObjectId

application = Flask(__name__)
CORS(application)

# container
mongodb_username = os.environ['MONGODB_USERNAME']
mongodb_password = os.environ['MONGODB_PASSWORD']
mongodb_hostname = os.environ['MONGODB_HOSTNAME']
mongodb_database = os.environ['MONGODB_DATABASE']

# local
# mongodb_username = 'user'
# mongodb_password = 'password'
# mongodb_hostname = 'localhost'
# mongodb_database = 'testdb'

application.config["MONGO_URI"] = 'mongodb://' + mongodb_username + ':' + mongodb_password + '@' + mongodb_hostname + ':27017/' + mongodb_database

mongo = PyMongo(application)
db = mongo.db

@application.route('/')
def index():
    return jsonify(
        status=True,
        message='Welcome to the Dockerized Flask MongoDB app!'
    )

@application.route('/products')
def get_products():
    products = db.products.find()

    item = {}
    data = []
    for product in products:
        item = {
            'id': str(product['_id']),
            'title': product['title'],
            'description': product['description']
        }
        data.append(item)

    return jsonify(
        status=True,
        data=data
    )

@application.route('/product/create', methods=['POST'])
def create_product():
    request_data = request.get_json(force=True)
    
    db.products.insert_one({
        "title": request_data["title"],
        'description': request_data['description']
    })

    return jsonify(
        status=True,
        message="product inserted successfully!"
    ), 201

@application.route('/products/<id>', methods=['DELETE'])
def deleteProduct(id):
    db.products.delete_one({"_id": ObjectId(id)})

    return jsonify({'message': 'Product Deleted'})

if __name__ == "__main__":
    # container
    ENVIRONMENT_DEBUG = os.environ.get("APP_DEBUG", True)
    ENVIRONMENT_PORT = os.environ.get("APP_PORT", 5000)

    # local
    # ENVIRONMENT_DEBUG = True
    # ENVIRONMENT_PORT = 5000
    application.run(port=ENVIRONMENT_PORT, debug=ENVIRONMENT_DEBUG)