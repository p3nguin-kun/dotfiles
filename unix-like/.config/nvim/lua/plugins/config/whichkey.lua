local status_ok, which_key = pcall(require, "which-key")
if not status_ok then
    return
end

local config = {
    operators = { gc = "Comments" },
    key_labels = {
        ["<space>"] = "Space",
        ["<leader>"] = "Leader",
        ["<cr>"] = "Return",
        ["<tab>"] = "Tab",
    },
    icons = {
        breadcrumb = "»",
        separator = "~",
        group = " ",
    },
    window = {
        border = "none",
        position = "bottom",
        margin = { 1, 0, 1, 0 },
        padding = { 1, 2, 1, 2 },
        winblend = 0,
    },
    layout = {
        height = { min = 2, max = 25 },
        width = { min = 20, max = 50 },
        spacing = 5,
        align = "left",
    },
    ignore_missing = true,
    -- hidden = { "<silent>", "<cmd>", "<Cmd>", "<CR>", "call", "lua", "^:", "^ " },
    show_help = true,
    triggers = { "<leader>" },
    triggers_blacklist = {
        i = { "j", "k" },
        v = { "j", "k" },
    },
}


local mappings = {
    ["/"] = { "<Plug>(comment_toggle_linewise_current)", "Comment" },
    ["e"] = { "<cmd>Neotree toggle<cr>", " Neotree" },
    f = {
        name = "Telescope",
        f = { "<cmd>Telescope find_files<cr>", "Find File" },
        a = { "<cmd>Telescope find_files follow=true no_ignore=true hidden=true<cr>", "Find All" },
        r = { "<cmd>Telescope oldfiles<cr>", "Recent File" },
        w = { "<cmd>Telescope live_grep<cr>", "Find Text" },
        m = { "<cmd>Telescope keymaps<cr>", "Keymaps" },
        s = { "<cmd>Telescope grep_string <cr>", "Find String" },
        l = { "<cmd>Telescope resume<cr>", "Last Search" },
        M = { "<cmd>Telescope man_pages<cr>", "Man Pages" },
        R = { "<cmd>Telescope registers<cr>", "Registers" },
        j = { "<cmd>Telescope commands<cr>", "Commands" },
        h = { "<cmd>Telescope highlights<cr>", "Help" },
        c = { "<cmd>Telescope colorscheme<cr>", "Colorschemes" },
    },
    l = {
        name = "LSP",
        a = { "<cmd>lua vim.lsp.buf.code_action()<cr>", "Code Action" },
        d = { "<cmd>TroubleToggle<cr>", "Diagnostics" },
        w = { "<cmd>Telescope lsp_workspace_diagnostics<cr>", "Workspace Diagnostics" },
        f = { "<cmd>lua vim.lsp.buf.format({ async = true })<cr>", "Format" },
        F = { "<cmd>LspToggleAutoFormat<cr>", "Toggle Autoformat" },
        i = { "<cmd>LspInfo<cr>", "Info" },
        j = { "<cmd>lua vim.diagnostic.goto_next({buffer=0})<CR>", "Next Diagnostic" },
        k = { "<cmd>lua vim.diagnostic.goto_prev({buffer=0})<cr>", "Prev Diagnostic" },
        l = { "<cmd>lua vim.lsp.codelens.run()<cr>", "CodeLens Action" },
        o = { "<cmd>Lspsaga outline<cr>", "Outline" },
        q = { "<cmd>lua vim.lsp.diagnostic.set_loclist()<cr>", "Quickfix" },
        r = { "<cmd>lua vim.lsp.buf.rename()<cr>", "Rename" },
        R = { "<cmd>TroubleToggle lsp_references<cr>", "References" },
        s = { "<cmd>Telescope lsp_document_symbols<cr>", "Document Symbols" },
        S = { "<cmd>Telescope lsp_dynamic_workspace_symbols<cr>", "Workspace Symbols" },
        u = { "<cmd>LuaSnipUnlinkCurrent<cr>", "Unlink Snippet" },
    },
    g = {
        name = "Git",
        g = { '<cmd>lua require("core.functions").LazyGit()<cr>', "Lazygit" },
        j = { "<cmd>lua require 'gitsigns'.next_hunk()<cr>", "Next Hunk" },
        k = { "<cmd>lua require 'gitsigns'.prev_hunk()<cr>", "Prev Hunk" },
        p = { "<cmd>lua require 'gitsigns'.preview_hunk()<cr>", "Preview Hunk" },
        r = { "<cmd>lua require 'gitsigns'.reset_hunk()<cr>", "Reset Hunk" },
        R = { "<cmd>lua require 'gitsigns'.reset_buffer()<cr>", "Reset Buffer" },
        s = { "<cmd>lua require 'gitsigns'.stage_hunk()<cr>", "Stage Hunk" },
        u = { "<cmd>lua require 'gitsigns'.undo_stage_hunk()<cr>", "Undo Stage Hunk" },
        o = { "<cmd>Telescope git_status<cr>", "Open changed file" },
        b = { "<cmd>Telescope git_branches<cr>", "Checkout branch" },
        c = { "<cmd>Telescope git_commits<cr>", "Checkout commit" },
        d = { "<cmd>Gitsigns diffthis HEAD<cr>", "Diff" },
    },
    t = {
        name = "Terminal",
        ["1"] = { ":1ToggleTerm<cr>", "1" },
        ["2"] = { ":2ToggleTerm<cr>", "2" },
        ["3"] = { ":3ToggleTerm<cr>", "3" },
        ["4"] = { ":4ToggleTerm<cr>", "4" },
        f = { "<cmd>ToggleTerm direction=float<cr>", "Float" },
        h = { "<cmd>ToggleTerm size=15 direction=horizontal<cr>", "Horizontal" },
        v = { "<cmd>ToggleTerm size=50 direction=vertical<cr>", "Vertical" },
    },
    w = {
        name = "Windows",
        v = { "<C-w>v", "Vertical Split" },
        h = { "<C-w>s", "Horizontal Split" },
        e = { "<C-w>=", "Make Splits Equal" },
        q = { ":close<CR>", "Close Split" },
    },
    p = {
        name = "Packages",
        h = { "<cmd>Lazy home<cr>", "Lazy" },
        i = { "<cmd>Lazy install<cr>", "Install plugins" },
        u = { "<cmd>Lazy update<cr>", "Update plugins" },
        s = { "<cmd>Lazy sync<cr>", "Sync plugins" },
        x = { "<cmd>Lazy clean<cr>", "Clean plugins" },
        c = { "<cmd>Lazy check<cr>", "Check plugins" },
        m = { "<cmd>Mason<cr>", "Mason (lsp)" },
        M = { "<cmd>MasonUpdateAll<cr>", "Mason update" },
    },
    o = {
        name = "Options",
        n = {
            name = "Number",
            n = { "<cmd>set nu!<cr>", "Toggle number" },
            r = { "<cmd>set rnu!<cr>", "Toggle relative number" },
        },
        t = { '<cmd>lua require("core.functions").toggle_tabline()<cr>', "Toggle Tab line" },
    },
    b = {
        name = "Buffer",
        n = { "<cmd>enew<cr>", "New buffer" },
        j = { "<cmd>BufferLineCycleNext<cr>", "Next buffer" },
        k = { "<cmd>BufferLineCyclePrev<cr>", "Previous buffer" },
        x = { "<cmd>enew<bar>bd! #<cr>", "Close buffer" },
    },
}

local opts = {
    mode = "n", -- NORMAL mode
    prefix = "<leader>",
    buffer = nil,
    silent = true,
    noremap = true,
    nowait = true,
}

---@diagnostic disable-next-line: unused-local
local vopts = {
    mode = "v", -- VISUAL mode
    prefix = "<leader>",
    buffer = nil,
    silent = true,
    noremap = true,
    nowait = true,
}

which_key.setup(config)
which_key.register(mappings, opts)
