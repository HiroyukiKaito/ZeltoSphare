"""Zelto-Sphare Python service — sidecar lokal (FASE 3).

Bind HANYA ke 127.0.0.1 sesuai aturan keamanan Master Plan.
"""
from __future__ import annotations

from contextlib import asynccontextmanager
from datetime import datetime, timezone

import uvicorn
from fastapi import FastAPI

from db import DB_PATH, init_db, connect

SERVICE_NAME = "zelto-sphare-python"
SERVICE_VERSION = "0.1.0"
HOST = "127.0.0.1"
PORT = 8710
STARTED_AT = datetime.now(timezone.utc).isoformat()


@asynccontextmanager
async def lifespan(app: FastAPI):
    init_db()
    yield


app = FastAPI(title="Zelto-Sphare Python Service", version=SERVICE_VERSION, lifespan=lifespan)


@app.get("/health")
def health() -> dict:
    """Status hidup service + kesiapan database."""
    return {
        "status": "ok",
        "service": SERVICE_NAME,
        "version": SERVICE_VERSION,
        "started_at": STARTED_AT,
        "db_path": str(DB_PATH),
        "db_ready": DB_PATH.exists(),
    }


@app.get("/status")
def status() -> dict:
    """Ringkasan isi database (jumlah baris per tabel)."""
    conn = connect()
    try:
        tables = [
            row["name"]
            for row in conn.execute(
                "SELECT name FROM sqlite_master WHERE type='table' ORDER BY name"
            )
        ]
        counts = {
            table: conn.execute(f"SELECT COUNT(*) AS n FROM {table}").fetchone()["n"]
            for table in tables
        }
    finally:
        conn.close()
    return {"status": "ok", "tables": counts}


if __name__ == "__main__":
    init_db()
    uvicorn.run(app, host=HOST, port=PORT, log_level="info")