local status, bufferline = pcall(require, "bufferline")
if not status then
    return
end

bufferline.setup({
    options = {
        always_show_bufferline = false,
        indicator_icon = "",
        modified_icon = "#",
        buffer_close_icon = "x",
        close_icon = "x",
        left_trunc_marker = "",
        right_trunc_marker = "",
        numbers = "ordinal",
        max_name_length = 15,
        max_prefix_length = 6,
        diagnostics = "nvim_lsp",
        show_buffer_icons = true,
        show_buffer_close_icons = true,
        show_close_icon = true,
        persist_buffer_sort = true,
        enforce_regular_tabs = true,
        diagnostics_indicator = function(count, level)
            local icon = level:match("error") and "x " or "! "
            return icon .. count
        end,
    },
})
