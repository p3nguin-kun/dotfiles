local setup, null_ls = pcall(require, "null-ls")
if not setup then
    return
end

local diagnostics = null_ls.builtins.diagnostics -- to setup linters

null_ls.setup({
    debug = true,
    -- configure format on save
    on_attach = function(client, bufnr)
        if client.supports_method("textDocument/formatting") then
            vim.api.nvim_clear_autocmds({ buffer = bufnr })
            vim.api.nvim_create_autocmd("BufWritePre", {
                buffer = bufnr,
                callback = function()
                    vim.lsp.buf.format({ bufnr = bufnr, timeout = 100 })
                end,
            })
        end
    end,
})
