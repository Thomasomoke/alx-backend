#!/usr/bin/env python3
from flask import Flask, render_template, request
from flask_babel import Babel
from typing import List


class Config:
    """Configuration class for Flask-Babel settings."""
    LANGUAGES: List[str] = ["en", "fr"]
    BABEL_DEFAULT_LOCALE = "en"
    BABEL_DEFAULT_TIMEZONE = "UTC"


app = Flask(__name__)
app.config.from_object(Config)
babel = Babel(app)


@babel.localeselector
def get_locale() -> str:
    """Selects the best-matching language based on client request."""
    return request.accept_languages.best_match(app.config['LANGUAGES'])


@app.route('/')
def index() -> str:
    """Route to render the homepage."""
    return render_template('2-index.html')


if __name__ == "__main__":
    app.run(debug=True)
