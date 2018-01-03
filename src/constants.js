export const APP = {
    SET_STATE: "SET_STATE",
    CHANGE_LANGUAGE: "CHANGE_LANGUAGE",
    
    LANG: {
        RUS: "rus",
        ENG: "eng",
    },
    
    STATE: {
        EDIT: "EDIT",
        MODAL: "MODAL"
    },
    
    MENU: {
        FILE: {
            NEW: "NEW",
            SAVE: "SAVE",
            LOAD: "LOAD"
        },
        TOOLS: {
            SHIFT_LAYER: "SHIFT_LAYER"
        }
    },

    SHORTCUTS: {
        NEW: "Ctrl + B",
        LOAD: "Ctrl + O",
        SAVE: "Ctrl + S",
        SHIFT_LAYER: "Ctrl + Q",
        PEN: "Ctrl + 1",
        ERASE: "Ctrl + 2"
    }
} 

export const MODAL_WINDOWS = {
    ADD_MODAL: "ADD_MODAL",
    DISABLE_ALL: "DISABLE_ALL_MODALS",
    CLOSE: "CLOSE_MODALS"
}

export const TILESET_AREA = {
    SET_SIZE: "SET_SIZE",
    SET_PEN_AREA: "SET_PEN_AREA",
    LEVEL: {
        SET_SIZE: "LEVEL_SET_SIZE",
        SET_TILE_SIZE: "LEVEL_SET_TILE_SIZE",
        PLACE_TILE: "LEVEL_PLACE_TILE",
        RERENDER_SUCCESS: "LEVEL_RERENDER_SUCCESS",
        RERENDER_NEED: "LEVEL_NEED_RERENDER",
        CLEAR: "LEVEL_CLEAR",
    },
    TOOL: {
        PEN: "PEN",
        ERASE: "ERASE",
        SET_TOOL: "SET_TOOL"
    },
    UPDATE_LEVEL_INPUTS: "UPDATE_LEVEL_INPUTS",

    TOGGLE_PARAMS_WINDOW: "TOGGLE_PARAMS_WINDOW",

    ADD_LAYER: "ADD_LAYER",
    LOAD_LAYER: "LOAD_LAYER",
    LAYER_SET_VISIBLE: "LAYER_SET_VISIBLE",
    LAYER_SET_CURRENT: "LAYER_SET_CURRENT",
    LAYER_SET_NAME: "LAYER_SET_NAME",
    LAYER_SHIFT: "LAYER_SHIFT",
    LAYER_SHIFT_BY_TILE: "LAYER_SHIFT_BY_TILE",
    LAYER_SHIFT_BY_TILE_ALL: "LAYER_SHIFT_BY_TILE_ALL",
    LAYER_DELETE: "LAYER_DELETE",

    TRIGGER_SAVE: "TRIGGER_SAVE",
    TRIGGER_LOAD: "TRIGGER_LOAD"
}

export const TILESET_LOADER = {
    LOAD_TILESET: "LOAD_TILESET",
    CLEAR_TILESETS: "CLEAR_TILESETS",
    SET_CURRENT: "SET_CURRENT_TILESET",
    TILESET_SET_WIDTH: "TILESET_SET_WIDTH",
    TILESET_SET_HEIGHT: "TILESET_SET_HEIGHT",
    TILESET_SET_OFFSET_X: "TILESET_SET_OFFSET_X",
    TILESET_SET_OFFSET_Y: "TILESET_SET_OFFSET_Y",
    TILESET_SET_SEP_X: "TILESET_SET_SEP_X",
    TILESET_SET_SEP_Y: "TILESET_SET_SEP_Y",
    TILESETS_RECALCULATE_IDS: "TILESETS_RECALCULATE_IDS"
}

export const TILESET_SETTINGS = {
    ASSIGN_INPUT_VALUES: "ASSIGN_INPUT_VALUES",
    LEFT_PERC: 0.75
}