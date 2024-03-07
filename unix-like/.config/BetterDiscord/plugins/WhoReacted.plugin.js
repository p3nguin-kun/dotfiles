/**
 * @name WhoReacted
 * @author Marmota (Jaime Filho)
 * @authorLink https://github.com/jaimeadf
 * @description Shows the avatars of the users who reacted to a message.
 * @version 1.3.1
 * @source https://github.com/jaimeadf/BetterDiscordPlugins/tree/main/packages/WhoReacted
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ WhoReacted)
});

;// CONCATENATED MODULE: external ["BdApi","React"]
const external_BdApi_React_namespaceObject = global["BdApi"]["React"];
var external_BdApi_React_default = /*#__PURE__*/__webpack_require__.n(external_BdApi_React_namespaceObject);
;// CONCATENATED MODULE: ./src/environment.js
const BoundedBdApi = new BdApi('WhoReacted');

;// CONCATENATED MODULE: ./src/components/Reactor.jsx


function Reactor({ user, guildId, size }) {
    return (
        external_BdApi_React_default().createElement('img', {
            className: "bd-who-reacted__reactor-avatar",
            width: size,
            height: size,
            src: user.getAvatarURL(guildId, size),}
        )
    );
}

function MaskedReactor({ user, guildId, size, overlap, spacing }) {
    const proportionalInnerRadius = 1 / 2;
    const proportionalOuterRadius = proportionalInnerRadius + spacing;

    const absoluteOffset = (overlap - spacing) * size;

    return (
        external_BdApi_React_default().createElement('svg', { style: { marginRight: `${-absoluteOffset}px` }, width: size, height: size,}
            , external_BdApi_React_default().createElement('defs', null
                , external_BdApi_React_default().createElement('mask', { id: "bd-who-reacted-reactor-mask", maskContentUnits: "objectBoundingBox", viewBox: "0 0 1 1"   ,}
                    , external_BdApi_React_default().createElement('rect', { fill: "white", width: "1", height: "1",} )
                    , external_BdApi_React_default().createElement('circle', {
                        fill: "black",
                        cx: 2 * proportionalInnerRadius + proportionalOuterRadius - overlap,
                        cy: "0.5",
                        r: proportionalOuterRadius,}
                    )
                )
            )

            , external_BdApi_React_default().createElement('foreignObject', { width: "100%", height: "100%", mask: "url(#bd-who-reacted-reactor-mask)",}
                , external_BdApi_React_default().createElement(Reactor, { size: size, user: user, guildId: guildId,} )
            )
        )
    );
}

;// CONCATENATED MODULE: ./src/hooks/useStateFromStores.js


const { Webpack } = BoundedBdApi;
const { Filters } = Webpack;

const useStateFromStores = Webpack.getModule(
    Filters.byStrings('useStateFromStores'),
    { searchExports: true }
);

;// CONCATENATED MODULE: ./src/stores/SettingsStore.js



const { Webpack: SettingsStore_Webpack } = BoundedBdApi;
const { Filters: SettingsStore_Filters } = SettingsStore_Webpack;

const Flux = SettingsStore_Webpack.getModule(SettingsStore_Filters.byProps('Store', 'connectStores'));
const Dispatcher = SettingsStore_Webpack.getModule(SettingsStore_Filters.byPrototypeFields('dispatch'), { searchExports: true });

const ActionTypes = {
    SETTINGS_UPDATE: 'BD_WHO_REACTED_SETTINGS_UPDATE'
};

class DefaultSettingsStore extends Flux.Store {
    constructor(defaults) {
        super(new Dispatcher(), {
            [ActionTypes.SETTINGS_UPDATE]: () => this.save()
        });

        this.defaults = defaults;
        this.settings = {};
    }

    update(name, value) {
        this.settings[name] = value;
        this._dispatchUpdate();
    }

    getSettings() {
        return this.settings;
    }

    getDefaultSettings() {
        return this.defaults;
    }

    load() {
        this.settings = { ...this.defaults, ...BoundedBdApi.Data.load('settings') };
        this._dispatchUpdate();
    }

    save() {
        BoundedBdApi.Data.save('settings', this.settings);
    }

    _dispatchUpdate() {
        this._dispatcher.dispatch({
            type: ActionTypes.SETTINGS_UPDATE
        });
    }
}

const SettingsStore = new DefaultSettingsStore({
    max: 6,
    avatarSize: 24,
    avatarOverlap: 100 / 3,
    avatarSpacing: 100 / 12,
    emojiThreshold: 10,
    reactionsTotalThreshold: 500,
    reactionsPerEmojiThreshold: 100,
    hideSelf: false,
    hideBots: false,
    hideBlocked: false
});

function useSettings() {
    return useStateFromStores([SettingsStore], () => [
        SettingsStore.getSettings(),
        SettingsStore.getDefaultSettings(),
        (name, value) => SettingsStore.update(name, value)
    ]);
}

;// CONCATENATED MODULE: ./src/components/Reactors.jsx









const { Webpack: Reactors_Webpack } = BoundedBdApi;
const { Filters: Reactors_Filters } = Reactors_Webpack;

const ReactionStore = Reactors_Webpack.getModule(Reactors_Filters.byProps('getReactions'));
const ChannelStore = Reactors_Webpack.getModule(Reactors_Filters.byProps('getChannel', 'hasChannel'));
const UserStore = Reactors_Webpack.getModule(Reactors_Filters.byProps('getUser', 'getCurrentUser'));
const RelationshipStore = Reactors_Webpack.getModule(Reactors_Filters.byProps('isBlocked'));

function Reactors({ count, channel, users, max, size, overlap, spacing }) {
    const usersShown = Math.min(max, users.length);

    const hasMoreUsers = count > usersShown;
    const userSummary = users.slice(0, usersShown);

    if (userSummary.length == 0) {
        return null;
    }

    return (
        external_BdApi_React_default().createElement('div', { className: "bd-who-reacted__reactors",}
            , userSummary.map((user, index) => index == count - 1
                ? (
                    external_BdApi_React_default().createElement(Reactor, {
                        size: size,
                        user: user,
                        guildId: channel.guild_id,}
                    )
                )
                : (
                    external_BdApi_React_default().createElement(MaskedReactor, {
                        size: size,
                        user: user,
                        guildId: channel.guild_id,
                        overlap: overlap,
                        spacing: spacing,}
                    )
                )
            )

            , hasMoreUsers && (
                external_BdApi_React_default().createElement('div', {
                    className: "bd-who-reacted__more-reactors",
                    style: {
                        height: `${size}px`,
                        minWidth: `${size}px`,
                        padding: `0 ${size / 3}px`,
                        borderRadius: `${size / 2}px`,
                        fontSize: `${size / 2}px`
                    },}
, "+"
                    , count - usersShown
                )
            )
        )
    );
}

function SmartReactors({ message, emoji, count, type }) {
    const [settings] = useSettings();
    const ReactorsComponent = (0,external_BdApi_React_namespaceObject.useMemo)(() => {
        let component = Reactors;

        if (settings.hideSelf) {
            component = withSelfHidden(component);
        }

        if (settings.hideBots) {
            component = withBotsHidden(component);
        }

        if (settings.hideBlocked) {
            component = withBlockedHidden(component);
        }

        return withStoresConnected(component);
    }, [settings.hideSelf, settings.hideBots, settings.hideBlocked]);

    function shouldHide() {
        return isEmojiAboveThreshold() &&
            isTotalReactionsAboveThreshold() &&
            isReactionsPerEmojiAboveThreshold();
    }

    function isEmojiAboveThreshold() {
        if (isThresholdDisabled(settings.emojiThreshold)) {
            return false;
        }

        return message.reactions.length > settings.emojiThreshold;
    }

    function isTotalReactionsAboveThreshold() {
        if (isThresholdDisabled(settings.reactionsTotalThreshold)) {
            return false;
        }

        return message.reactions.reduce((sum, reaction) => sum + reaction.count, 0) > settings.reactionsTotalThreshold;
    }

    function isReactionsPerEmojiAboveThreshold() {
        if (!isThresholdDisabled(settings.reactionsPerEmojiThreshold)) {
            for (const reaction of message.reactions) {
                if (reaction.count > settings.reactionsPerEmojiThreshold) {
                    return true;
                }
            }
        }

        return false;
    }

    function isThresholdDisabled(threshold) {
        return threshold == 0;
    }

    if (shouldHide()) {
        return null;
    }

    return (
        external_BdApi_React_default().createElement(ReactorsComponent, {
            message: message,
            emoji: emoji,
            count: count,
            type: type,
            max: settings.max,
            size: settings.avatarSize,
            overlap: settings.avatarOverlap / 100,
            spacing: settings.avatarSpacing / 100,}
        )
    );
}

function withStoresConnected(ReactorsComponent) {
    return props => {
        const channel = useStateFromStores([ChannelStore], () => ChannelStore.getChannel(props.message.getChannelId()));
        const users = useStateFromStores(
            [ReactionStore],
            () => Object.values(ReactionStore.getReactions(
                props.message.getChannelId(),
                props.message.id,
                props.emoji,
                100,
                props.type
            ))
        );

        return (
            external_BdApi_React_default().createElement(ReactorsComponent, { ...props, channel: channel, users: users,} )
        );
    };
}

function withSelfHidden(ReactorsComponent) {
    return props => {
        const currentUser = useStateFromStores([UserStore], () => UserStore.getCurrentUser());
        const filteredUsers = props.users.filter(user => user.id != currentUser.id)

        return (
            external_BdApi_React_default().createElement(ReactorsComponent, {
                ...props,
                users: filteredUsers,}
            )
        );
    };
}

function withBotsHidden(ReactorsComponent) {
    return props => {
        const filteredUsers = props.users.filter(user => !user.bot);

        return (
            external_BdApi_React_default().createElement(ReactorsComponent, {
                ...props,
                users: filteredUsers,}
            )
        );
    };
}

function withBlockedHidden(ReactorsComponent) {
    return props => {
        const filteredUsers = useStateFromStores(
            [RelationshipStore],
            () => props.users.filter(user => !RelationshipStore.isBlocked(user.id))
        );

        return (
            external_BdApi_React_default().createElement(ReactorsComponent, {
                ...props,
                users: filteredUsers,}
            )
        );
    };
}

;// CONCATENATED MODULE: ./src/components/SettingsPanel.jsx





const { Webpack: SettingsPanel_Webpack } = BdApi;
const { Filters: SettingsPanel_Filters } = SettingsPanel_Webpack;

const margins = BdApi.findModuleByProps('marginLarge');

const FormSection = SettingsPanel_Webpack.getModule(SettingsPanel_Filters.byStrings('.titleClassName', '.sectionTitle'), { searchExports: true });
const FormItem = SettingsPanel_Webpack.getModule(m => SettingsPanel_Filters.byStrings('.titleClassName', '.required')(m?.render), { searchExports: true });
const FormTitle = SettingsPanel_Webpack.getModule(SettingsPanel_Filters.byStrings('.faded', '.required'), { searchExports: true });
const FormText = SettingsPanel_Webpack.getModule(m => m?.Types?.INPUT_PLACEHOLDER, { searchExports: true });
const TextInput = SettingsPanel_Webpack.getModule(m => m?.defaultProps?.type === 'text', { searchExports: true });
const Slider = SettingsPanel_Webpack.getModule(SettingsPanel_Filters.byStrings('.asValueChanges'), { searchExports: true });
const SwitchItem = SettingsPanel_Webpack.getModule(SettingsPanel_Filters.byStrings('.tooltipNote'), { searchExports: true });

function SettingsPanel() {
    const [
        settings,
        defaults,
        update
    ] = useSettings();

    function handlePixelMarkerRender(value) {
        return `${value}px`;
    }

    function handlePercentageMarkerRender(value) {
        return `${value.toFixed(2)}%`;
    }

    function handleThresholdMarkerRender(value) {
        if (value == 0) {
            return 'Off';
        }

        if (value >= 1000) {
            return `${value / 1000}k`;
        }

        return value;
    }

    return external_BdApi_React_default().createElement((external_BdApi_React_default()).Fragment, null
        , external_BdApi_React_default().createElement(FormSection, null
            , external_BdApi_React_default().createElement(FormTitle, { tag: "h2",}, "Appearance")

            , external_BdApi_React_default().createElement(FormItem, { className: margins.marginBottom40,}
                , external_BdApi_React_default().createElement(FormTitle, null, "Maximum Avatars" )
                , external_BdApi_React_default().createElement(TextInput, {
                    type: "number",
                    placeholder: defaults.max,
                    defaultValue: settings.max,
                    onChange: value => {
                        const number = parseInt(value);

                        if (number >= 1 && number <= 100) {
                            update('max', number);
                        } else {
                            BoundedBdApi.showToast('The value must be a number from 1 to 100.', 'danger');
                        }
                    },}
                )
                , external_BdApi_React_default().createElement(FormText, { type: FormText.Types.DESCRIPTION,}, "Sets the maximum number of avatars shown per emoji from 1 to 100."


                )
            )

            , external_BdApi_React_default().createElement(FormItem, { className: margins.marginBottom40,}
                , external_BdApi_React_default().createElement(FormTitle, { className: margins.marginBottom20,}, "Avatar Size" )
                , external_BdApi_React_default().createElement(Slider, {
                    markers: [
                        8,
                        12,
                        16,
                        20,
                        24,
                        32
                    ],
                    equidistant: true,
                    stickToMarkers: true,
                    defaultValue: defaults.avatarSize,
                    initialValue: settings.avatarSize,
                    onMarkerRender: handlePixelMarkerRender,
                    onValueChange: value => update('avatarSize', value),}
                )
                , external_BdApi_React_default().createElement(FormText, { type: FormText.Types.DESCRIPTION,}, "Sets the size of the avatars."

                )
            )

            , external_BdApi_React_default().createElement(FormItem, { className: margins.marginBottom40,}
                , external_BdApi_React_default().createElement(FormTitle, { className: margins.marginBottom20,}, "Avatar Overlap" )
                , external_BdApi_React_default().createElement(Slider, {
                    markers: [
                        0,
                        100 / 8,
                        100 / 4,
                        100 / 3,
                        100 / 2
                    ],
                    stickToMarkers: true,
                    defaultValue: defaults.avatarOverlap,
                    initialValue: settings.avatarOverlap,
                    onMarkerRender: handlePercentageMarkerRender,
                    onValueChange: value => update('avatarOverlap', value),}
                )
                , external_BdApi_React_default().createElement(FormText, { type: FormText.Types.DESCRIPTION,}, "Sets how much an avatar covers the previous one."

                )
            )

            , external_BdApi_React_default().createElement(FormItem, { className: margins.marginBottom40,}
                , external_BdApi_React_default().createElement(FormTitle, { className: margins.marginBottom20,}, "Avatar Spacing" )
                , external_BdApi_React_default().createElement(Slider, {
                    markers: [
                        0,
                        100 / 48,
                        100 / 24,
                        100 / 16,
                        100 / 12,
                        100 / 8,
                        100 / 6,
                        100 / 4
                    ],
                    stickToMarkers: true,
                    defaultValue: defaults.avatarSpacing,
                    initialValue: settings.avatarSpacing,
                    onMarkerRender: handlePercentageMarkerRender,
                    onValueChange: value => update('avatarSpacing', value),}
                )
                , external_BdApi_React_default().createElement(FormText, { type: FormText.Types.DESCRIPTION,}, "Sets the gap between two avatars."

                )
            )
        )

        , external_BdApi_React_default().createElement(FormSection, null
            , external_BdApi_React_default().createElement(FormTitle, { tag: "h2",}, "Thresholds")

            , external_BdApi_React_default().createElement(FormItem, { className: margins.marginBottom40,}
                , external_BdApi_React_default().createElement(FormTitle, { className: margins.marginBottom20,}, "Emoji Threshold" )
                , external_BdApi_React_default().createElement(Slider, {
                    markers: [
                        0,
                        1,
                        2,
                        3,
                        4,
                        5,
                        6,
                        7,
                        8,
                        9,
                        10,
                        11,
                        12,
                        13,
                        14,
                        15,
                        16,
                        17,
                        18,
                        19,
                        20
                    ],
                    stickToMarkers: true,
                    defaultValue: defaults.emojiThreshold,
                    initialValue: settings.emojiThreshold,
                    onMarkerRender: handleThresholdMarkerRender,
                    onValueChange: value => update('emojiThreshold', value),}
                )
                , external_BdApi_React_default().createElement(FormText, { type: FormText.Types.DESCRIPTION,}, "Hides the reactors when the number of emojis exceeds the threshold."


                )
            )

            , external_BdApi_React_default().createElement(FormItem, { className: margins.marginBottom40,}
                , external_BdApi_React_default().createElement(FormTitle, { className: margins.marginBottom20,}, "Reactions Total Threshold"  )
                , external_BdApi_React_default().createElement(Slider, {
                    markers: [
                        0,
                        10,
                        20,
                        50,
                        100,
                        500,
                        1000,
                        2000,
                        3000,
                        4000,
                        5000,
                        10000
                    ],
                    equidistant: true,
                    stickToMarkers: true,
                    defaultValue: defaults.reactionsTotalThreshold,
                    initialValue: settings.reactionsTotalThreshold,
                    onMarkerRender: handleThresholdMarkerRender,
                    onValueChange: value => update('reactionsTotalThreshold', value),}
                )
                , external_BdApi_React_default().createElement(FormText, { type: FormText.Types.DESCRIPTION,}, "Hides the reactors when the sum of the number of reactions in all emojis exceeds the threshold."


                )
            )

            , external_BdApi_React_default().createElement(FormItem, { className: margins.marginBottom40,}
                , external_BdApi_React_default().createElement(FormTitle, { className: margins.marginBottom20,}, "Reactions per Emoji Threshold"   )
                , external_BdApi_React_default().createElement(Slider, {
                    markers: [
                        0,
                        5,
                        10,
                        20,
                        50,
                        100,
                        200,
                        500
                    ],
                    equidistant: true,
                    stickToMarkers: true,
                    defaultValue: defaults.reactionsPerEmojiThreshold,
                    initialValue: settings.reactionsPerEmojiThreshold,
                    onMarkerRender: handleThresholdMarkerRender,
                    onValueChange: value => update('reactionsPerEmojiThreshold', value),}
                )
                , external_BdApi_React_default().createElement(FormText, { type: FormText.Types.DESCRIPTION,}, "Hides the reactors when the number of reactions on a single emoji exceeds the threshold."


                )
            )
        )

        , external_BdApi_React_default().createElement(FormSection, null
            , external_BdApi_React_default().createElement(FormTitle, { tag: "h2",}, "Filters")

            , external_BdApi_React_default().createElement(SwitchItem, {
                value: settings.hideSelf,
                onChange: checked => update('hideSelf', checked),}
, "Hide Self"

            )

            , external_BdApi_React_default().createElement(SwitchItem, {
                value: settings.hideBots,
                onChange: checked => update('hideBots', checked),}
, "Hide Bots"

            )

            , external_BdApi_React_default().createElement(SwitchItem, {
                value: settings.hideBlocked,
                onChange: checked => update('hideBlocked', checked),}
, "Hide Blocked Users"

            )
        )
    );
}

;// CONCATENATED MODULE: ./src/styles.scss
/* harmony default export */ const styles = (".bd-who-reacted__reactors{display:flex;align-items:center}.bd-who-reacted__reactors:not(:empty){margin-left:8px}.bd-who-reacted__reactor-avatar{border-radius:50%}.bd-who-reacted__more-reactors{box-sizing:border-box;display:flex;justify-content:center;align-items:center;color:var(--text-normal);font-weight:500;background-color:var(--background-tertiary)}");
;// CONCATENATED MODULE: ./src/index.jsx










const { Webpack: src_Webpack, Patcher } = BoundedBdApi;

const ConnectedReaction = src_Webpack.getModule(m => m?.type?.toString()?.includes('burstReactionsEnabled'), { searchExports: true });

class WhoReacted {
    constructor() {
        SettingsStore.initializeIfNeeded();
        SettingsStore.load();
    }

    start() {
        BoundedBdApi.DOM.addStyle(styles);
        this.patchReaction();
    }

    stop() {
        BoundedBdApi.DOM.removeStyle();
        Patcher.unpatchAll();
    }

    getSettingsPanel() {
        return external_BdApi_React_default().createElement(SettingsPanel, null );
    }

    patchReaction() {
        const unpatchConnectedReaction = Patcher.after(ConnectedReaction, 'type', (_, __, reaction) => {
            unpatchConnectedReaction();

            Patcher.after(reaction.type.prototype, 'render', (thisObject, _, result) => {
                const { message, emoji, count, type } = thisObject.props;
                const renderTooltip = result.props.children[0].props.children;

                result.props.children[0].props.children = tooltipProps => {
                    const tooltipChildren = renderTooltip(tooltipProps);
                    const renderPopout = tooltipChildren.props.children.props.children.props.children;

                    tooltipChildren.props.children.props.children.props.children = popoutProps => {
                        const popoutChildren = renderPopout(popoutProps);

                        popoutChildren.props.children.push(
                            external_BdApi_React_default().createElement(SmartReactors, {
                                message: message,
                                emoji: emoji,
                                count: count,
                                type: type,}
                            )
                        );

                        return popoutChildren;
                    };
                    
                    return tooltipChildren;
                };
            });
        });
    }
}

module.exports = __webpack_exports__["default"];
/******/ })()
;