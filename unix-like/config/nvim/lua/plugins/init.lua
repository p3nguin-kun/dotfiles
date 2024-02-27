local plugins = {
    -- Colorscheme
    {
        'navarasu/onedark.nvim',
        name = 'onedark',
        config = function()
            require("plugins.config.colorscheme")
        end
    },
    {
        "nvim-neo-tree/neo-tree.nvim",
        cmd = "Neotree",
        branch = "v3.x",
        dependencies = {
            "nvim-lua/plenary.nvim",
            "MunifTanjim/nui.nvim",
        },
        config = function()
            require("plugins.config.neotree")
        end
    },

    -- Lualine
    {
        "nvim-lualine/lualine.nvim",
        config = function()
            require("plugins.config.lualine")
        end
    },
    -- Whichkey
    {
        "folke/which-key.nvim",
        event = "VeryLazy",
        config = function()
            require("plugins.config.whichkey")
        end,
        init = function()
            vim.o.timeout = true
            vim.o.timeoutlen = 0
        end,
    },
    -- Toggle term
    {
        'akinsho/toggleterm.nvim',
        version = "*",
        config = true
    },
    -- Bufferline
    {
        'akinsho/bufferline.nvim',
        version = "*",
        config = function()
            require("plugins.config.bufferline")
        end
    },
    {
        "windwp/nvim-autopairs",
        event = "InsertEnter",
        lazy = true,
        config = function()
            require("plugins.cmp.autopairs")
        end
    },
    -- Indent blankline
    {
		  "lukas-reineke/indent-blankline.nvim",
		  event = "BufRead",
		  version = "2.20.8",
		  dependencies = {
			  {
				  "shellRaining/hlchunk.nvim",
				  config = function()
					  require("hlchunk").setup {
						  chunk = { notify = false },
						  indent = { enable = false },
						  line_num = { enable = false },
						  blank = { enable = false }
					  }
				    end
			  },
		  },
		  config = function()
			  require("indent_blankline").setup({
				  char = "▏",
				  show_first_indent_level = false,
			  })
		  end
	  },
    -- Comment
    {
		  "numToStr/Comment.nvim",
		  event = { "BufReadPost", "BufNewFile" },
		  dependencies = {
			  {
				  "JoosepAlviste/nvim-ts-context-commentstring",
				  config = function() require('ts_context_commentstring').setup {} end
			  }
		  },
		  config = function()
			  require("Comment").setup({
				  pre_hook = require("ts_context_commentstring.integrations.comment_nvim").create_pre_hook(),
			})
		  end
	  },
    {
		  "folke/todo-comments.nvim",
		  event = "VeryLazy",
		  config = function() require("todo-comments").setup() end
	  },
    -- Colorizer
	{
		"NvChad/nvim-colorizer.lua",
		event = "BufRead",
		config = function() require("plugins.config.colorizer") end
	},
    -- Illuminate
	{
		"RRethy/vim-illuminate",
		event = { "BufReadPost", "BufNewFile" },
		config = function()
			require("illuminate").configure {
				filetypes_denylist = { "neo-tree", "Trouble", "DressingSelect", "TelescopePrompt" }
			}
		end
	},
    -- Treesitter
    {
        "nvim-treesitter/nvim-treesitter",
        event = "BufRead",
        build = function() require('nvim-treesitter.install').update({ with_sync = true }) end,
        config = function()
            require("plugins.config.treesitter")
        end
    },
    -- LuaSnip
    {
        "L3MON4D3/LuaSnip",
        -- follow latest release.
        version = "v2.*", -- Replace <CurrentMajor> by the latest released major (first number of latest release)
        -- install jsregexp (optional!).
        build = "make install_jsregexp",
    },
    -- Nvim Telescope
    {
        "nvim-telescope/telescope.nvim",
        cmd = "Telescope",
        lazy = true,
        tag = '0.1.3',
        config = function()
            require("plugins.config.telescope")
        end
    },
    -- Gitsigns
    {
        "lewis6991/gitsigns.nvim",
        lazy = true,
        event = { "BufRead" },
        config = function()
            require("plugins.config.gitsigns")
        end
    },
    -- nvim-cmp
    {
        "hrsh7th/nvim-cmp",
        event = { "InsertEnter", "CmdlineEnter" },
        dependencies = {
            "hrsh7th/cmp-nvim-lsp",
            "saadparwaiz1/cmp_luasnip",
            {
                "L3MON4D3/LuaSnip",
                dependencies = "rafamadriz/friendly-snippets",
                version = "2.*",
                build = "make install_jsregexp"
            },
            {
                "onsails/lspkind.nvim",
                event = "InsertEnter",
                lazy = true,
            },
        },
        config = function()
            require("plugins.cmp.cmp")
        end
    },
    -- LSP Config
    {
        "neovim/nvim-lspconfig",
        event = { "BufReadPost", "BufNewFile" },
        lazy = true,
        cmd = { "LspInfo", "LspInstall", "LspUninstall", "LspStart" },
        dependencies = {
			{
				"nvimdev/lspsaga.nvim",
				event = "LspAttach",
				config = function() require("plugins.lsp.lspsaga") end
			},
            {
                "jose-elias-alvarez/null-ls.nvim",
                config = function()
                    require("plugins.lsp.null-ls")
                end
            },
            {
                "williamboman/mason.nvim",
                cmd = { "Mason", "MasonInstall", "MasonInstallAll", "MasonUpdate" },
                config = function()
                    require("plugins.lsp.mason")
                end
            }
        },
        config = function()
            require("plugins.lsp.lspconfig")
        end
    },
    {
        "folke/trouble.nvim",
        cmd = { "TroubleToggle", "Trouble" },
        opts = {
            icons = false,
            fold_open = "v",      -- icon used for open folds
            fold_closed = ">",    -- icon used for closed folds
            indent_lines = false, -- add an indent guide below the fold icons
            signs = {
                -- icons / text used for a diagnostic
                error = "x",
                warning = "!",
                hint = "?",
                information = "i"
            },
            use_diagnostic_signs = false -- enabling this will use the signs defined in your lsp client
        }
    },
}
local config = {
    ui = {
        icons = {
            ft = "",
            lazy = "",
            loaded = "✓",
            not_loaded = "x",
        },
    },
    performance = {
        rtp = {
            disabled_plugins = {
                "2html_plugin",
                "tohtml",
                "getscript",
                "getscriptPlugin",
                "gzip",
                "logipat",
                "netrw",
                "netrwPlugin",
                "netrwSettings",
                "netrwFileHandlers",
                "matchit",
                "tar",
                "tarPlugin",
                "rrhelper",
                "spellfile_plugin",
                "vimball",
                "vimballPlugin",
                "zip",
                "zipPlugin",
                "tutor",
                "rplugin",
                "syntax",
                "synmenu",
                "optwin",
                "compiler",
                "bugreport",
                "ftplugin",
            },
        },
    },
}

require("lazy").setup(plugins, config)
