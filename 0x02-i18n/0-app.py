#!/usr/bin/env python3
from flask import Flask, render_template
from typing import Any

app = Flask(__name__)


@app.route('/')
def index() -> str:
    """Route to render the homepage."""
    return render_template('0-index.html')


if __name__ == "__main__":
    app.run(debug=True)
