import { __VLS_internalComponent, __VLS_componentsOption, __VLS_name, appStore, navItems, scroll } from "./AppBar.vue";

function __VLS_template() {
let __VLS_ctx!: InstanceType<__VLS_PickNotAny<typeof __VLS_internalComponent, new () => {}>> & {};
/* Components */
let __VLS_otherComponents!: NonNullable<typeof __VLS_internalComponent extends { components: infer C; } ? C : {}> & typeof __VLS_componentsOption;
let __VLS_own!: __VLS_SelfComponent<typeof __VLS_name, typeof __VLS_internalComponent & (new () => { $slots: typeof __VLS_slots; })>;
let __VLS_localComponents!: typeof __VLS_otherComponents & Omit<typeof __VLS_own, keyof typeof __VLS_otherComponents>;
let __VLS_components!: typeof __VLS_localComponents & __VLS_GlobalComponents & typeof __VLS_ctx;
/* Style Scoped */
type __VLS_StyleScopedClasses = {};
let __VLS_styleScopedClasses!: __VLS_StyleScopedClasses | keyof __VLS_StyleScopedClasses | (keyof __VLS_StyleScopedClasses)[];
/* CSS variable injection */
/* CSS variable injection end */
let __VLS_resolvedLocalAndGlobalComponents!: {} &
__VLS_WithComponent<'VAppBar', typeof __VLS_localComponents, "VAppBar", "vAppBar", "v-app-bar"> &
__VLS_WithComponent<'VBtn', typeof __VLS_localComponents, "VBtn", "vBtn", "v-btn"> &
__VLS_WithComponent<'VIcon', typeof __VLS_localComponents, "VIcon", "vIcon", "v-icon"> &
__VLS_WithComponent<'VAppBarTitle', typeof __VLS_localComponents, "VAppBarTitle", "vAppBarTitle", "v-app-bar-title"> &
__VLS_WithComponent<'VSpacer', typeof __VLS_localComponents, "VSpacer", "vSpacer", "v-spacer">;
__VLS_components.VAppBar; __VLS_components.VAppBar; __VLS_components.vAppBar; __VLS_components.vAppBar; __VLS_components["v-app-bar"]; __VLS_components["v-app-bar"];
// @ts-ignore
[VAppBar, VAppBar,];
__VLS_components.VBtn; __VLS_components.VBtn; __VLS_components.VBtn; __VLS_components.VBtn; __VLS_components.vBtn; __VLS_components.vBtn; __VLS_components.vBtn; __VLS_components.vBtn; __VLS_components["v-btn"]; __VLS_components["v-btn"]; __VLS_components["v-btn"]; __VLS_components["v-btn"];
// @ts-ignore
[VBtn, VBtn, VBtn, VBtn,];
__VLS_components.VIcon; __VLS_components.VIcon; __VLS_components.vIcon; __VLS_components.vIcon; __VLS_components["v-icon"]; __VLS_components["v-icon"];
// @ts-ignore
[VIcon, VIcon,];
__VLS_components.VAppBarTitle; __VLS_components.VAppBarTitle; __VLS_components.vAppBarTitle; __VLS_components.vAppBarTitle; __VLS_components["v-app-bar-title"]; __VLS_components["v-app-bar-title"];
// @ts-ignore
[VAppBarTitle, VAppBarTitle,];
__VLS_components.VSpacer; __VLS_components.VSpacer; __VLS_components.vSpacer; __VLS_components.vSpacer; __VLS_components["v-spacer"]; __VLS_components["v-spacer"];
// @ts-ignore
[VSpacer, VSpacer,];
__VLS_intrinsicElements.div; __VLS_intrinsicElements.div;
{
const __VLS_0 = ({} as 'VAppBar' extends keyof typeof __VLS_ctx ? { 'VAppBar': typeof __VLS_ctx.VAppBar; } : 'vAppBar' extends keyof typeof __VLS_ctx ? { 'VAppBar': typeof __VLS_ctx.vAppBar; } : 'v-app-bar' extends keyof typeof __VLS_ctx ? { 'VAppBar': (typeof __VLS_ctx)["v-app-bar"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).VAppBar;
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{}, flat: (true), color: ("background"), class: ("px-12"), }));
({} as { VAppBar: typeof __VLS_0; }).VAppBar;
({} as { VAppBar: typeof __VLS_0; }).VAppBar;
const __VLS_2 = __VLS_1({ ...{}, flat: (true), color: ("background"), class: ("px-12"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_0, typeof __VLS_2> & Record<string, unknown>) => void)({ ...{}, flat: (true), color: ("background"), class: ("px-12"), });
const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2)!;
let __VLS_4!: __VLS_NormalizeEmits<typeof __VLS_3.emit>;
{
const __VLS_5 = ({} as 'VBtn' extends keyof typeof __VLS_ctx ? { 'VBtn': typeof __VLS_ctx.VBtn; } : 'vBtn' extends keyof typeof __VLS_ctx ? { 'VBtn': typeof __VLS_ctx.vBtn; } : 'v-btn' extends keyof typeof __VLS_ctx ? { 'VBtn': (typeof __VLS_ctx)["v-btn"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).VBtn;
const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({ ...{}, }));
({} as { VBtn: typeof __VLS_5; }).VBtn;
({} as { VBtn: typeof __VLS_5; }).VBtn;
const __VLS_7 = __VLS_6({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_6));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_5, typeof __VLS_7> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7)!;
let __VLS_9!: __VLS_NormalizeEmits<typeof __VLS_8.emit>;
{
const __VLS_10 = ({} as 'VIcon' extends keyof typeof __VLS_ctx ? { 'VIcon': typeof __VLS_ctx.VIcon; } : 'vIcon' extends keyof typeof __VLS_ctx ? { 'VIcon': typeof __VLS_ctx.vIcon; } : 'v-icon' extends keyof typeof __VLS_ctx ? { 'VIcon': (typeof __VLS_ctx)["v-icon"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).VIcon;
const __VLS_11 = __VLS_asFunctionalComponent(__VLS_10, new __VLS_10({ ...{}, color: ("primary"), left: (true), class: ("mr-2"), icon: ("fas fa-signature"), }));
({} as { VIcon: typeof __VLS_10; }).VIcon;
({} as { VIcon: typeof __VLS_10; }).VIcon;
const __VLS_12 = __VLS_11({ ...{}, color: ("primary"), left: (true), class: ("mr-2"), icon: ("fas fa-signature"), }, ...__VLS_functionalComponentArgsRest(__VLS_11));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_10, typeof __VLS_12> & Record<string, unknown>) => void)({ ...{}, color: ("primary"), left: (true), class: ("mr-2"), icon: ("fas fa-signature"), });
const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12)!;
let __VLS_14!: __VLS_NormalizeEmits<typeof __VLS_13.emit>;
}
(__VLS_8.slots!).default;
}
{
const __VLS_15 = ({} as 'VAppBarTitle' extends keyof typeof __VLS_ctx ? { 'VAppBarTitle': typeof __VLS_ctx.VAppBarTitle; } : 'vAppBarTitle' extends keyof typeof __VLS_ctx ? { 'VAppBarTitle': typeof __VLS_ctx.vAppBarTitle; } : 'v-app-bar-title' extends keyof typeof __VLS_ctx ? { 'VAppBarTitle': (typeof __VLS_ctx)["v-app-bar-title"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).VAppBarTitle;
const __VLS_16 = __VLS_asFunctionalComponent(__VLS_15, new __VLS_15({ ...{}, }));
({} as { VAppBarTitle: typeof __VLS_15; }).VAppBarTitle;
({} as { VAppBarTitle: typeof __VLS_15; }).VAppBarTitle;
const __VLS_17 = __VLS_16({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_16));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_15, typeof __VLS_17> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_18 = __VLS_pickFunctionalComponentCtx(__VLS_15, __VLS_17)!;
let __VLS_19!: __VLS_NormalizeEmits<typeof __VLS_18.emit>;
(__VLS_ctx.appStore.appName);
(__VLS_18.slots!).default;
}
{
const __VLS_20 = ({} as 'VSpacer' extends keyof typeof __VLS_ctx ? { 'VSpacer': typeof __VLS_ctx.VSpacer; } : 'vSpacer' extends keyof typeof __VLS_ctx ? { 'VSpacer': typeof __VLS_ctx.vSpacer; } : 'v-spacer' extends keyof typeof __VLS_ctx ? { 'VSpacer': (typeof __VLS_ctx)["v-spacer"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).VSpacer;
const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({ ...{}, }));
({} as { VSpacer: typeof __VLS_20; }).VSpacer;
({} as { VSpacer: typeof __VLS_20; }).VSpacer;
const __VLS_22 = __VLS_21({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_21));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_20, typeof __VLS_22> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22)!;
let __VLS_24!: __VLS_NormalizeEmits<typeof __VLS_23.emit>;
}
{
const __VLS_25 = __VLS_intrinsicElements["div"];
const __VLS_26 = __VLS_elementAsFunctionalComponent(__VLS_25);
const __VLS_27 = __VLS_26({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_26));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_25, typeof __VLS_27> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_28 = __VLS_pickFunctionalComponentCtx(__VLS_25, __VLS_27)!;
let __VLS_29!: __VLS_NormalizeEmits<typeof __VLS_28.emit>;
for (const [navItem] of __VLS_getVForSourceType((__VLS_ctx.navItems)!)) {
{
const __VLS_30 = ({} as 'VBtn' extends keyof typeof __VLS_ctx ? { 'VBtn': typeof __VLS_ctx.VBtn; } : 'vBtn' extends keyof typeof __VLS_ctx ? { 'VBtn': typeof __VLS_ctx.vBtn; } : 'v-btn' extends keyof typeof __VLS_ctx ? { 'VBtn': (typeof __VLS_ctx)["v-btn"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).VBtn;
const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({ ...{ onClick: {} as any, }, class: (({ 'text-primary': navItem === 'home' })), variant: ("text"), }));
({} as { VBtn: typeof __VLS_30; }).VBtn;
({} as { VBtn: typeof __VLS_30; }).VBtn;
const __VLS_32 = __VLS_31({ ...{ onClick: {} as any, }, class: (({ 'text-primary': navItem === 'home' })), variant: ("text"), }, ...__VLS_functionalComponentArgsRest(__VLS_31));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_30, typeof __VLS_32> & Record<string, unknown>) => void)({ ...{ onClick: {} as any, }, class: (({ 'text-primary': navItem === 'home' })), variant: ("text"), });
const __VLS_33 = __VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32)!;
let __VLS_34!: __VLS_NormalizeEmits<typeof __VLS_33.emit>;
let __VLS_35 = { 'click': __VLS_pickEvent(__VLS_34['click'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_31, typeof __VLS_32>).onClick) };
__VLS_35 = {
click: $event => {
__VLS_ctx.scroll(navItem);
// @ts-ignore
[appStore, navItems, scroll,];
}
};
(navItem.charAt(0).toUpperCase() + navItem.slice(1));
(__VLS_33.slots!).default;
}
}
(__VLS_28.slots!).default;
}
(__VLS_3.slots!).default;
}
if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
}
var __VLS_slots!: {};
return __VLS_slots;
}
