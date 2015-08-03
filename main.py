from flask import Flask

app = Flask(__name__, static_url_path='')

@app.route('/')
def get_main_page():
	return app.send_static_file('index.html')

if __name__ == '__main__':
	app.debug = True
	app.run('0.0.0.0', port=6021)
