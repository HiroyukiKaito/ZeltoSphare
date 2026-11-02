use serde::{Deserialize, Serialize};
use tauri::command;

/// Struktur respons dari endpoint /health Python service
#[derive(Debug, Serialize, Deserialize)]
struct HealthResponse {
    status: String,
    service: String,
    version: String,
    started_at: String,
    db_path: String,
    db_ready: bool,
}

/// Perintah Tauri: memanggil GET http://127.0.0.1:8710/health
/// Mengembalikan Result<HealthResponse, String> agar bisa ditangani di frontend
#[command]
async fn python_health() -> Result<HealthResponse, String> {
    let client = reqwest::Client::new();
    let url = "http://127.0.0.1:8710/health";

    match client.get(url).send().await {
        Ok(response) => {
            if response.status().is_success() {
                match response.json::<HealthResponse>().await {
                    Ok(health) => Ok(health),
                    Err(e) => Err(format!("Gagal parse JSON: {}", e)),
                }
            } else {
                Err(format!("HTTP error: {}", response.status()))
            }
        }
        Err(e) => Err(format!("Gagal menghubungi Python service: {}", e)),
    }
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(tauri::generate_handler![python_health])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}