#!/usr/bin/env python3
from flask import Flask, render_template, request
from flask_babel import Babel, _


app = Flask(__name__)
babel = Babel(app)


class Config:
    LANGUAGES = ["en", "fr"]
    BABEL_DEFAULT_LOCALE = "en"
    BABEL_DEFAULT_TIMEZONE = "UTC"


app.config.from_object(Config)


@babel.localeselector
def get_locale() -> str:
    # Check if `locale` is in request arguments and is a supported language
    locale = request.args.get('locale')
    if locale in app.config['LANGUAGES']:
        return locale
    # Default to the best match from request headers
    return request.accept_languages.best_match(app.config['LANGUAGES'])


@app.route('/')
def index():
    return render_template('4-index.html')


if __name__ == "__main__":
    app.run()
