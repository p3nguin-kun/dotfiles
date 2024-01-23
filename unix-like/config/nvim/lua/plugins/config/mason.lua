local mason_status_ok, mason = pcall(require, "mason")
if not mason_status_ok then
    return
end

local config = {
    ui = {
        icons = {
            package_pending = "-",
            package_installed = "✓",
            package_uninstalled = "x",
        },
        keymaps = {
            toggle_server_expand = "<CR>",
            install_server = "i",
            update_server = "u",
            update_all_servers = "U",
            check_server_version = "c",
            check_outdated_servers = "C",
            uninstall_server = "X",
            cancel_installation = "<C-c>",
        },
    },
}

mason.setup(config)
local install_server = {
    "lua-language-server",
    "prettier",
    "clangd",
    "clang-format",
}
vim.api.nvim_create_user_command("MasonInstallAll", function()
    vim.cmd("MasonInstall " .. table.concat(install_server, " "))
end, {})
