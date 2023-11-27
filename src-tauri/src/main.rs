// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]
use std::{fs, io, path::Path};
use tauri::{Manager, Window};

#[tauri::command]
async fn close_splashscreen(window: Window) {
    window.get_window("splashscreen").expect("no splash window found").close().unwrap();
    window.get_window("main").expect("no main window found").show().unwrap();
}

#[tauri::command]
fn check_file_exists(path: &str) -> Result<bool, ()> {
    let file_path = Path::new(path);

    if file_path.exists() {
        Ok(true)
    } else {
        Ok(false)
    }
}

#[tauri::command]
fn read_file_to_string(path: &str) -> Result<String, String> {
    fs::read_to_string(path)
        .map_err(|err| err.to_string())
}

#[tauri::command]
fn write_string_to_file(path: &str, content: &str) -> Result<(), String>{
    fs::write(path, content)
        .map_err(|err| err.to_string())
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![
            close_splashscreen,
            check_file_exists,
            read_file_to_string,
            write_string_to_file
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
