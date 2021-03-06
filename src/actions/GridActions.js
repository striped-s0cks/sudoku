import ec from '../eventConstants';

export default {
    inputValue(row, col, value) {
        return {
            type: ec.GRID_INPUT_VALUE,
            data: {
                row,
                col,
                value
            }
        };
    },

    clear() {
        return {
            type: ec.GRID_CLEAR
        };
    },

    undo() {
        return {
            type: ec.GRID_UNDO
        };
    },

    solve() {
        return {
            type: ec.GRID_SOLVE
        };
    },

    check() {
        return {
            type: ec.GRID_CHECK
        };
    },

    generate() {
        return {
            type: ec.GRID_GENERATE
        };
    },

    stopEditing() {
        return {
            type: ec.GRID_STOP_EDITING
        };
    },

    help() {
        return {
            type: ec.GRID_HELP
        };
    }
};
