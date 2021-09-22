import { ChangeDetectionStrategy, Component, ContentChildren, EventEmitter, HostBinding, Inject, Input, Output, PLATFORM_ID, ViewChild, ViewEncapsulation, } from '@angular/core';
// @ts-ignore
import Swiper from 'swiper';
import { of, Subject } from 'rxjs';
import { getParams } from './utils/get-params';
import { SwiperSlideDirective } from './swiper-slide.directive';
import { extend, isObject, setProperty, ignoreNgOnChanges, coerceBooleanProperty, isShowEl, } from './utils/utils';
import { isPlatformBrowser } from '@angular/common';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class SwiperComponent {
    constructor(_ngZone, elementRef, _changeDetectorRef, _platformId) {
        this._ngZone = _ngZone;
        this.elementRef = elementRef;
        this._changeDetectorRef = _changeDetectorRef;
        this._platformId = _platformId;
        this.slideClass = 'swiper-slide';
        this.wrapperClass = 'swiper-wrapper';
        this.showNavigation = true;
        this.showPagination = true;
        this.showScrollbar = true;
        // prettier-ignore
        this.s__beforeBreakpoint = new EventEmitter();
        // prettier-ignore
        this.s__containerClasses = new EventEmitter();
        // prettier-ignore
        this.s__slideClass = new EventEmitter();
        // prettier-ignore
        this.s__swiper = new EventEmitter();
        // prettier-ignore
        this.s_activeIndexChange = new EventEmitter();
        // prettier-ignore
        this.s_afterInit = new EventEmitter();
        // prettier-ignore
        this.s_autoplay = new EventEmitter();
        // prettier-ignore
        this.s_autoplayStart = new EventEmitter();
        // prettier-ignore
        this.s_autoplayStop = new EventEmitter();
        // prettier-ignore
        this.s_beforeDestroy = new EventEmitter();
        // prettier-ignore
        this.s_beforeInit = new EventEmitter();
        // prettier-ignore
        this.s_beforeLoopFix = new EventEmitter();
        // prettier-ignore
        this.s_beforeResize = new EventEmitter();
        // prettier-ignore
        this.s_beforeSlideChangeStart = new EventEmitter();
        // prettier-ignore
        this.s_beforeTransitionStart = new EventEmitter();
        // prettier-ignore
        this.s_breakpoint = new EventEmitter();
        // prettier-ignore
        this.s_changeDirection = new EventEmitter();
        // prettier-ignore
        this.s_click = new EventEmitter();
        // prettier-ignore
        this.s_doubleTap = new EventEmitter();
        // prettier-ignore
        this.s_doubleClick = new EventEmitter();
        // prettier-ignore
        this.s_destroy = new EventEmitter();
        // prettier-ignore
        this.s_fromEdge = new EventEmitter();
        // prettier-ignore
        this.s_hashChange = new EventEmitter();
        // prettier-ignore
        this.s_hashSet = new EventEmitter();
        // prettier-ignore
        this.s_imagesReady = new EventEmitter();
        // prettier-ignore
        this.s_init = new EventEmitter();
        // prettier-ignore
        this.s_keyPress = new EventEmitter();
        // prettier-ignore
        this.s_lazyImageLoad = new EventEmitter();
        // prettier-ignore
        this.s_lazyImageReady = new EventEmitter();
        // prettier-ignore
        this.s_loopFix = new EventEmitter();
        // prettier-ignore
        this.s_momentumBounce = new EventEmitter();
        // prettier-ignore
        this.s_navigationHide = new EventEmitter();
        // prettier-ignore
        this.s_navigationShow = new EventEmitter();
        // prettier-ignore
        this.s_observerUpdate = new EventEmitter();
        // prettier-ignore
        this.s_orientationchange = new EventEmitter();
        // prettier-ignore
        this.s_paginationHide = new EventEmitter();
        // prettier-ignore
        this.s_paginationRender = new EventEmitter();
        // prettier-ignore
        this.s_paginationShow = new EventEmitter();
        // prettier-ignore
        this.s_paginationUpdate = new EventEmitter();
        // prettier-ignore
        this.s_progress = new EventEmitter();
        // prettier-ignore
        this.s_reachBeginning = new EventEmitter();
        // prettier-ignore
        this.s_reachEnd = new EventEmitter();
        // prettier-ignore
        this.s_realIndexChange = new EventEmitter();
        // prettier-ignore
        this.s_resize = new EventEmitter();
        // prettier-ignore
        this.s_scroll = new EventEmitter();
        // prettier-ignore
        this.s_scrollbarDragEnd = new EventEmitter();
        // prettier-ignore
        this.s_scrollbarDragMove = new EventEmitter();
        // prettier-ignore
        this.s_scrollbarDragStart = new EventEmitter();
        // prettier-ignore
        this.s_setTransition = new EventEmitter();
        // prettier-ignore
        this.s_setTranslate = new EventEmitter();
        // prettier-ignore
        this.s_slideChange = new EventEmitter();
        // prettier-ignore
        this.s_slideChangeTransitionEnd = new EventEmitter();
        // prettier-ignore
        this.s_slideChangeTransitionStart = new EventEmitter();
        // prettier-ignore
        this.s_slideNextTransitionEnd = new EventEmitter();
        // prettier-ignore
        this.s_slideNextTransitionStart = new EventEmitter();
        // prettier-ignore
        this.s_slidePrevTransitionEnd = new EventEmitter();
        // prettier-ignore
        this.s_slidePrevTransitionStart = new EventEmitter();
        // prettier-ignore
        this.s_slideResetTransitionStart = new EventEmitter();
        // prettier-ignore
        this.s_slideResetTransitionEnd = new EventEmitter();
        // prettier-ignore
        this.s_sliderMove = new EventEmitter();
        // prettier-ignore
        this.s_sliderFirstMove = new EventEmitter();
        // prettier-ignore
        this.s_slidesLengthChange = new EventEmitter();
        // prettier-ignore
        this.s_slidesGridLengthChange = new EventEmitter();
        // prettier-ignore
        this.s_snapGridLengthChange = new EventEmitter();
        // prettier-ignore
        this.s_snapIndexChange = new EventEmitter();
        // prettier-ignore
        this.s_tap = new EventEmitter();
        // prettier-ignore
        this.s_toEdge = new EventEmitter();
        // prettier-ignore
        this.s_touchEnd = new EventEmitter();
        // prettier-ignore
        this.s_touchMove = new EventEmitter();
        // prettier-ignore
        this.s_touchMoveOpposite = new EventEmitter();
        // prettier-ignore
        this.s_touchStart = new EventEmitter();
        // prettier-ignore
        this.s_transitionEnd = new EventEmitter();
        // prettier-ignore
        this.s_transitionStart = new EventEmitter();
        // prettier-ignore
        this.s_update = new EventEmitter();
        // prettier-ignore
        this.s_zoomChange = new EventEmitter();
        // prettier-ignore
        this.s_swiper = new EventEmitter();
        this.indexChange = new EventEmitter();
        this._activeSlides = new Subject();
        this.containerClasses = 'swiper';
        this.slidesChanges = (val) => {
            this.slides = val.map((slide, index) => {
                slide.slideIndex = index;
                slide.classNames = this.slideClass || '';
                return slide;
            });
            if (this.loop && !this.loopedSlides) {
                this.calcLoopedSlides();
            }
            if (!this.virtual) {
                if (this.loopedSlides) {
                    this.prependSlides = of(this.slides.slice(this.slides.length - this.loopedSlides));
                    this.appendSlides = of(this.slides.slice(0, this.loopedSlides));
                }
            }
            else if (this.swiperRef && this.swiperRef.virtual) {
                this._ngZone.runOutsideAngular(() => {
                    this.swiperRef.virtual.slides = this.slides;
                    this.swiperRef.virtual.update(true);
                });
            }
            this._changeDetectorRef.detectChanges();
        };
        this.style = null;
        this.updateVirtualSlides = (virtualData) => {
            // TODO: type virtualData
            if (!this.swiperRef ||
                (this.currentVirtualData &&
                    this.currentVirtualData.from === virtualData.from &&
                    this.currentVirtualData.to === virtualData.to &&
                    this.currentVirtualData.offset === virtualData.offset)) {
                return;
            }
            this.style = this.swiperRef.isHorizontal()
                ? {
                    [this.swiperRef.rtlTranslate ? 'right' : 'left']: `${virtualData.offset}px`,
                }
                : {
                    top: `${virtualData.offset}px`,
                };
            this.currentVirtualData = virtualData;
            this._activeSlides.next(virtualData.slides);
            this._ngZone.run(() => {
                this._changeDetectorRef.detectChanges();
            });
            this._ngZone.runOutsideAngular(() => {
                this.swiperRef.updateSlides();
                this.swiperRef.updateProgress();
                this.swiperRef.updateSlidesClasses();
                if (this.swiperRef.lazy && this.swiperRef.params.lazy['enabled']) {
                    this.swiperRef.lazy.load();
                }
                this.swiperRef.virtual.update(true);
            });
            return;
        };
    }
    set navigation(val) {
        var _a, _b, _c;
        const currentNext = typeof this._navigation !== 'boolean' && this._navigation !== ''
            ? (_a = this._navigation) === null || _a === void 0 ? void 0 : _a.nextEl
            : null;
        const currentPrev = typeof this._navigation !== 'boolean' && this._navigation !== ''
            ? (_b = this._navigation) === null || _b === void 0 ? void 0 : _b.prevEl
            : null;
        this._navigation = setProperty(val, {
            nextEl: currentNext || null,
            prevEl: currentPrev || null,
        });
        this.showNavigation = !(coerceBooleanProperty(val) !== true ||
            (this._navigation &&
                typeof this._navigation !== 'boolean' &&
                this._navigation.prevEl !== ((_c = this._prevElRef) === null || _c === void 0 ? void 0 : _c.nativeElement) &&
                (this._navigation.prevEl !== null || this._navigation.nextEl !== null) &&
                (typeof this._navigation.nextEl === 'string' ||
                    typeof this._navigation.prevEl === 'string' ||
                    typeof this._navigation.nextEl === 'object' ||
                    typeof this._navigation.prevEl === 'object')));
    }
    get navigation() {
        return this._navigation;
    }
    set pagination(val) {
        var _a;
        const current = typeof this._pagination !== 'boolean' && this._pagination !== ''
            ? (_a = this._pagination) === null || _a === void 0 ? void 0 : _a.el
            : null;
        this._pagination = setProperty(val, {
            el: current || null,
        });
        this.showPagination = isShowEl(val, this._pagination, this._paginationElRef);
    }
    get pagination() {
        return this._pagination;
    }
    set scrollbar(val) {
        var _a;
        const current = typeof this._scrollbar !== 'boolean' && this._scrollbar !== '' ? (_a = this._scrollbar) === null || _a === void 0 ? void 0 : _a.el : null;
        this._scrollbar = setProperty(val, {
            el: current || null,
        });
        this.showScrollbar = isShowEl(val, this._scrollbar, this._scrollbarElRef);
    }
    get scrollbar() {
        return this._scrollbar;
    }
    set virtual(val) {
        this._virtual = setProperty(val);
    }
    get virtual() {
        return this._virtual;
    }
    set index(index) {
        console.warn('`[(index)]` prop is deprecated and will be removed in upcoming versions');
        this.setIndex(index);
    }
    set config(val) {
        this.updateSwiper(val);
        const { params } = getParams(val);
        Object.assign(this, params);
    }
    set prevElRef(el) {
        this._prevElRef = el;
        this._setElement(el, this.navigation, 'navigation', 'prevEl');
    }
    set nextElRef(el) {
        this._nextElRef = el;
        this._setElement(el, this.navigation, 'navigation', 'nextEl');
    }
    set scrollbarElRef(el) {
        this._scrollbarElRef = el;
        this._setElement(el, this.scrollbar, 'scrollbar');
    }
    set paginationElRef(el) {
        this._paginationElRef = el;
        this._setElement(el, this.pagination, 'pagination');
    }
    get activeSlides() {
        if (this.virtual) {
            return this._activeSlides;
        }
        return of(this.slides);
    }
    get zoomContainerClass() {
        return this.zoom && typeof this.zoom !== 'boolean'
            ? this.zoom.containerClass
            : 'swiper-zoom-container';
    }
    _setElement(el, ref, update, key = 'el') {
        if (!el || !ref) {
            return;
        }
        if (ref && el.nativeElement) {
            if (ref[key] === el.nativeElement) {
                return;
            }
            ref[key] = el.nativeElement;
        }
        const updateObj = {};
        updateObj[update] = true;
        this.updateInitSwiper(updateObj);
    }
    ngOnInit() {
        const { params } = getParams(this);
        Object.assign(this, params);
    }
    ngAfterViewInit() {
        this.childrenSlidesInit();
        this.initSwiper();
        this._changeDetectorRef.detectChanges();
        setTimeout(() => {
            this.s_swiper.emit(this.swiperRef);
        });
    }
    childrenSlidesInit() {
        this.slidesChanges(this.slidesEl);
        this.slidesEl.changes.subscribe(this.slidesChanges);
    }
    get isSwiperActive() {
        return this.swiperRef && !this.swiperRef.destroyed;
    }
    initSwiper() {
        const { params: swiperParams, passedParams } = getParams(this);
        Object.assign(this, swiperParams);
        this._ngZone.runOutsideAngular(() => {
            swiperParams.init = false;
            if (!swiperParams.virtual) {
                swiperParams.observer = true;
            }
            swiperParams.onAny = (eventName, ...args) => {
                const emitter = this[('s_' + eventName)];
                if (emitter) {
                    emitter.emit(...args);
                }
            };
            const _slideClasses = (_, updated) => {
                updated.forEach(({ slideEl, classNames }, index) => {
                    const dataIndex = slideEl.getAttribute('data-swiper-slide-index');
                    const slideIndex = dataIndex ? parseInt(dataIndex) : index;
                    if (this.virtual) {
                        const virtualSlide = this.slides.find((item) => {
                            return item.virtualIndex && item.virtualIndex === slideIndex;
                        });
                        if (virtualSlide) {
                            virtualSlide.classNames = classNames;
                            return;
                        }
                    }
                    if (this.slides[slideIndex]) {
                        this.slides[slideIndex].classNames = classNames;
                    }
                });
                this._changeDetectorRef.detectChanges();
            };
            const _containerClasses = (_, classes) => {
                setTimeout(() => {
                    this.containerClasses = classes;
                });
            };
            Object.assign(swiperParams.on, {
                _containerClasses,
                _slideClasses,
            });
            const swiperRef = new Swiper(swiperParams);
            swiperRef.loopCreate = () => { };
            swiperRef.loopDestroy = () => { };
            if (swiperParams.loop) {
                swiperRef.loopedSlides = this.loopedSlides;
            }
            const isVirtualEnabled = typeof swiperRef.params.virtual !== 'undefined' &&
                typeof swiperRef.params.virtual !== 'boolean' &&
                swiperRef.params.virtual.enabled;
            if (swiperRef.virtual && isVirtualEnabled) {
                swiperRef.virtual.slides = this.slides;
                const extendWith = {
                    cache: false,
                    slides: this.slides,
                    renderExternal: this.updateVirtualSlides,
                    renderExternalUpdate: false,
                };
                extend(swiperRef.params.virtual, extendWith);
                extend(swiperRef.originalParams.virtual, extendWith);
            }
            if (isPlatformBrowser(this._platformId)) {
                this.swiperRef = swiperRef.init(this.elementRef.nativeElement);
                const isEnabled = typeof this.swiperRef.params.virtual !== 'undefined' &&
                    typeof this.swiperRef.params.virtual !== 'boolean' &&
                    this.swiperRef.params.virtual.enabled;
                if (this.swiperRef.virtual && isEnabled) {
                    this.swiperRef.virtual.update(true);
                }
                this._changeDetectorRef.detectChanges();
                swiperRef.on('slideChange', () => {
                    this.indexChange.emit(this.swiperRef.realIndex);
                });
            }
        });
    }
    ngOnChanges(changedParams) {
        this.updateSwiper(changedParams);
        this._changeDetectorRef.detectChanges();
    }
    updateInitSwiper(changedParams) {
        if (!(changedParams && this.swiperRef && !this.swiperRef.destroyed)) {
            return;
        }
        this._ngZone.runOutsideAngular(() => {
            const { params: currentParams, pagination, navigation, scrollbar, virtual, thumbs, } = this.swiperRef;
            if (changedParams.pagination) {
                if (this.pagination &&
                    typeof this.pagination !== 'boolean' &&
                    this.pagination.el &&
                    pagination &&
                    !pagination.el) {
                    this.updateParameter('pagination', this.pagination);
                    pagination.init();
                    pagination.render();
                    pagination.update();
                }
                else {
                    pagination.destroy();
                    pagination.el = null;
                }
            }
            if (changedParams.scrollbar) {
                if (this.scrollbar &&
                    typeof this.scrollbar !== 'boolean' &&
                    this.scrollbar.el &&
                    scrollbar &&
                    !scrollbar.el) {
                    this.updateParameter('scrollbar', this.scrollbar);
                    scrollbar.init();
                    scrollbar.updateSize();
                    scrollbar.setTranslate();
                }
                else {
                    scrollbar.destroy();
                    scrollbar.el = null;
                }
            }
            if (changedParams.navigation) {
                if (this.navigation &&
                    typeof this.navigation !== 'boolean' &&
                    this.navigation.prevEl &&
                    this.navigation.nextEl &&
                    navigation &&
                    !navigation.prevEl &&
                    !navigation.nextEl) {
                    this.updateParameter('navigation', this.navigation);
                    navigation.init();
                    navigation.update();
                }
                else if (navigation.prevEl && navigation.nextEl) {
                    navigation.destroy();
                    navigation.nextEl = null;
                    navigation.prevEl = null;
                }
            }
            if (changedParams.thumbs && this.thumbs && this.thumbs.swiper) {
                this.updateParameter('thumbs', this.thumbs);
                const initialized = thumbs.init();
                if (initialized)
                    thumbs.update(true);
            }
            if (changedParams.controller && this.controller && this.controller.control) {
                this.swiperRef.controller.control = this.controller.control;
            }
            this.swiperRef.update();
        });
    }
    updateSwiper(changedParams) {
        this._ngZone.runOutsideAngular(() => {
            var _a, _b;
            if (changedParams.config) {
                return;
            }
            if (!(changedParams && this.swiperRef && !this.swiperRef.destroyed)) {
                return;
            }
            for (const key in changedParams) {
                if (ignoreNgOnChanges.indexOf(key) >= 0) {
                    continue;
                }
                const newValue = (_b = (_a = changedParams[key]) === null || _a === void 0 ? void 0 : _a.currentValue) !== null && _b !== void 0 ? _b : changedParams[key];
                this.updateParameter(key, newValue);
            }
            if (changedParams.allowSlideNext) {
                this.swiperRef.allowSlideNext = this.allowSlideNext;
            }
            if (changedParams.allowSlidePrev) {
                this.swiperRef.allowSlidePrev = this.allowSlidePrev;
            }
            if (changedParams.direction) {
                this.swiperRef.changeDirection(this.direction, false);
            }
            if (changedParams.breakpoints) {
                if (this.loop && !this.loopedSlides) {
                    this.calcLoopedSlides();
                }
                this.swiperRef.currentBreakpoint = null;
                this.swiperRef.setBreakpoint();
            }
            if (changedParams.thumbs || changedParams.controller) {
                this.updateInitSwiper(changedParams);
            }
            this.swiperRef.update();
        });
    }
    calcLoopedSlides() {
        if (!this.loop) {
            return;
        }
        let slidesPerViewParams = this.slidesPerView;
        if (this.breakpoints) {
            const breakpoint = Swiper.prototype.getBreakpoint(this.breakpoints);
            const breakpointOnlyParams = breakpoint in this.breakpoints ? this.breakpoints[breakpoint] : undefined;
            if (breakpointOnlyParams && breakpointOnlyParams.slidesPerView) {
                slidesPerViewParams = breakpointOnlyParams.slidesPerView;
            }
        }
        if (slidesPerViewParams === 'auto') {
            this.loopedSlides = this.slides.length;
            return this.slides.length;
        }
        let loopedSlides = this.loopedSlides || slidesPerViewParams;
        if (!loopedSlides) {
            // ?
            return;
        }
        if (this.loopAdditionalSlides) {
            loopedSlides += this.loopAdditionalSlides;
        }
        if (loopedSlides > this.slides.length) {
            loopedSlides = this.slides.length;
        }
        this.loopedSlides = loopedSlides;
        return loopedSlides;
    }
    updateParameter(key, value) {
        if (!(this.swiperRef && !this.swiperRef.destroyed)) {
            return;
        }
        const _key = key.replace(/^_/, '');
        const isCurrentParamObj = isObject(this.swiperRef.params[_key]);
        if (Object.keys(this.swiperRef.modules).indexOf(_key) >= 0) {
            const defaultParams = this.swiperRef.modules[_key].params[_key];
            if (isCurrentParamObj) {
                extend(this.swiperRef.params[_key], defaultParams);
            }
            else {
                this.swiperRef.params[_key] = defaultParams;
            }
        }
        if (_key === 'enabled') {
            if (value === true) {
                this.swiperRef.enable();
            }
            else if (value === false) {
                this.swiperRef.disable();
            }
            return;
        }
        if (isCurrentParamObj && isObject(value)) {
            extend(this.swiperRef.params[_key], value);
        }
        else {
            this.swiperRef.params[_key] = value;
        }
        this.setIndex(2);
    }
    /**
     * @deprecated will be removed in upcoming versions
     */
    setIndex(index, speed, silent) {
        if (!this.isSwiperActive) {
            this.initialSlide = index;
            return;
        }
        if (index === this.swiperRef.activeIndex) {
            return;
        }
        this._ngZone.runOutsideAngular(() => {
            if (this.loop) {
                this.swiperRef.slideToLoop(index, speed, !silent);
            }
            else {
                this.swiperRef.slideTo(index, speed, !silent);
            }
        });
    }
    ngOnDestroy() {
        this._ngZone.runOutsideAngular(() => {
            var _a;
            (_a = this.swiperRef) === null || _a === void 0 ? void 0 : _a.destroy(true, false);
        });
    }
}
SwiperComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.2", ngImport: i0, type: SwiperComponent, deps: [{ token: i0.NgZone }, { token: i0.ElementRef }, { token: i0.ChangeDetectorRef }, { token: PLATFORM_ID }], target: i0.ɵɵFactoryTarget.Component });
SwiperComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.2", type: SwiperComponent, selector: "swiper, [swiper]", inputs: { enabled: "enabled", direction: "direction", touchEventsTarget: "touchEventsTarget", initialSlide: "initialSlide", speed: "speed", cssMode: "cssMode", updateOnWindowResize: "updateOnWindowResize", resizeObserver: "resizeObserver", nested: "nested", focusableElements: "focusableElements", width: "width", height: "height", preventInteractionOnTransition: "preventInteractionOnTransition", userAgent: "userAgent", url: "url", edgeSwipeDetection: "edgeSwipeDetection", edgeSwipeThreshold: "edgeSwipeThreshold", freeMode: "freeMode", autoHeight: "autoHeight", setWrapperSize: "setWrapperSize", virtualTranslate: "virtualTranslate", effect: "effect", breakpoints: "breakpoints", spaceBetween: "spaceBetween", slidesPerView: "slidesPerView", grid: "grid", slidesPerGroup: "slidesPerGroup", slidesPerGroupSkip: "slidesPerGroupSkip", centeredSlides: "centeredSlides", centeredSlidesBounds: "centeredSlidesBounds", slidesOffsetBefore: "slidesOffsetBefore", slidesOffsetAfter: "slidesOffsetAfter", normalizeSlideIndex: "normalizeSlideIndex", centerInsufficientSlides: "centerInsufficientSlides", watchOverflow: "watchOverflow", roundLengths: "roundLengths", touchRatio: "touchRatio", touchAngle: "touchAngle", simulateTouch: "simulateTouch", shortSwipes: "shortSwipes", longSwipes: "longSwipes", longSwipesRatio: "longSwipesRatio", longSwipesMs: "longSwipesMs", followFinger: "followFinger", allowTouchMove: "allowTouchMove", threshold: "threshold", touchMoveStopPropagation: "touchMoveStopPropagation", touchStartPreventDefault: "touchStartPreventDefault", touchStartForcePreventDefault: "touchStartForcePreventDefault", touchReleaseOnEdges: "touchReleaseOnEdges", uniqueNavElements: "uniqueNavElements", resistance: "resistance", resistanceRatio: "resistanceRatio", watchSlidesProgress: "watchSlidesProgress", grabCursor: "grabCursor", preventClicks: "preventClicks", preventClicksPropagation: "preventClicksPropagation", slideToClickedSlide: "slideToClickedSlide", preloadImages: "preloadImages", updateOnImagesReady: "updateOnImagesReady", loop: "loop", loopAdditionalSlides: "loopAdditionalSlides", loopedSlides: "loopedSlides", loopFillGroupWithBlank: "loopFillGroupWithBlank", loopPreventsSlide: "loopPreventsSlide", allowSlidePrev: "allowSlidePrev", allowSlideNext: "allowSlideNext", swipeHandler: "swipeHandler", noSwiping: "noSwiping", noSwipingClass: "noSwipingClass", noSwipingSelector: "noSwipingSelector", passiveListeners: "passiveListeners", containerModifierClass: "containerModifierClass", slideClass: "slideClass", slideBlankClass: "slideBlankClass", slideActiveClass: "slideActiveClass", slideDuplicateActiveClass: "slideDuplicateActiveClass", slideVisibleClass: "slideVisibleClass", slideDuplicateClass: "slideDuplicateClass", slideNextClass: "slideNextClass", slideDuplicateNextClass: "slideDuplicateNextClass", slidePrevClass: "slidePrevClass", slideDuplicatePrevClass: "slideDuplicatePrevClass", wrapperClass: "wrapperClass", runCallbacksOnInit: "runCallbacksOnInit", observeParents: "observeParents", observeSlideChildren: "observeSlideChildren", a11y: "a11y", autoplay: "autoplay", controller: "controller", coverflowEffect: "coverflowEffect", cubeEffect: "cubeEffect", fadeEffect: "fadeEffect", flipEffect: "flipEffect", creativeEffect: "creativeEffect", cardsEffect: "cardsEffect", hashNavigation: "hashNavigation", history: "history", keyboard: "keyboard", lazy: "lazy", mousewheel: "mousewheel", parallax: "parallax", thumbs: "thumbs", zoom: "zoom", class: "class", id: "id", navigation: "navigation", pagination: "pagination", scrollbar: "scrollbar", virtual: "virtual", index: "index", config: "config" }, outputs: { s__beforeBreakpoint: "_beforeBreakpoint", s__containerClasses: "_containerClasses", s__slideClass: "_slideClass", s__swiper: "_swiper", s_activeIndexChange: "activeIndexChange", s_afterInit: "afterInit", s_autoplay: "autoplay", s_autoplayStart: "autoplayStart", s_autoplayStop: "autoplayStop", s_beforeDestroy: "beforeDestroy", s_beforeInit: "beforeInit", s_beforeLoopFix: "beforeLoopFix", s_beforeResize: "beforeResize", s_beforeSlideChangeStart: "beforeSlideChangeStart", s_beforeTransitionStart: "beforeTransitionStart", s_breakpoint: "breakpoint", s_changeDirection: "changeDirection", s_click: "click", s_doubleTap: "doubleTap", s_doubleClick: "doubleClick", s_destroy: "destroy", s_fromEdge: "fromEdge", s_hashChange: "hashChange", s_hashSet: "hashSet", s_imagesReady: "imagesReady", s_init: "init", s_keyPress: "keyPress", s_lazyImageLoad: "lazyImageLoad", s_lazyImageReady: "lazyImageReady", s_loopFix: "loopFix", s_momentumBounce: "momentumBounce", s_navigationHide: "navigationHide", s_navigationShow: "navigationShow", s_observerUpdate: "observerUpdate", s_orientationchange: "orientationchange", s_paginationHide: "paginationHide", s_paginationRender: "paginationRender", s_paginationShow: "paginationShow", s_paginationUpdate: "paginationUpdate", s_progress: "progress", s_reachBeginning: "reachBeginning", s_reachEnd: "reachEnd", s_realIndexChange: "realIndexChange", s_resize: "resize", s_scroll: "scroll", s_scrollbarDragEnd: "scrollbarDragEnd", s_scrollbarDragMove: "scrollbarDragMove", s_scrollbarDragStart: "scrollbarDragStart", s_setTransition: "setTransition", s_setTranslate: "setTranslate", s_slideChange: "slideChange", s_slideChangeTransitionEnd: "slideChangeTransitionEnd", s_slideChangeTransitionStart: "slideChangeTransitionStart", s_slideNextTransitionEnd: "slideNextTransitionEnd", s_slideNextTransitionStart: "slideNextTransitionStart", s_slidePrevTransitionEnd: "slidePrevTransitionEnd", s_slidePrevTransitionStart: "slidePrevTransitionStart", s_slideResetTransitionStart: "slideResetTransitionStart", s_slideResetTransitionEnd: "slideResetTransitionEnd", s_sliderMove: "sliderMove", s_sliderFirstMove: "sliderFirstMove", s_slidesLengthChange: "slidesLengthChange", s_slidesGridLengthChange: "slidesGridLengthChange", s_snapGridLengthChange: "snapGridLengthChange", s_snapIndexChange: "snapIndexChange", s_tap: "tap", s_toEdge: "toEdge", s_touchEnd: "touchEnd", s_touchMove: "touchMove", s_touchMoveOpposite: "touchMoveOpposite", s_touchStart: "touchStart", s_transitionEnd: "transitionEnd", s_transitionStart: "transitionStart", s_update: "update", s_zoomChange: "zoomChange", s_swiper: "swiper", indexChange: "indexChange" }, host: { properties: { "class": "this.containerClasses" } }, queries: [{ propertyName: "slidesEl", predicate: SwiperSlideDirective }], viewQueries: [{ propertyName: "prevElRef", first: true, predicate: ["prevElRef"], descendants: true }, { propertyName: "nextElRef", first: true, predicate: ["nextElRef"], descendants: true }, { propertyName: "scrollbarElRef", first: true, predicate: ["scrollbarElRef"], descendants: true }, { propertyName: "paginationElRef", first: true, predicate: ["paginationElRef"], descendants: true }], usesOnChanges: true, ngImport: i0, template: "<ng-content select=\"[slot=container-start]\"></ng-content>\n<ng-container *ngIf=\"navigation && showNavigation\">\n  <div class=\"swiper-button-prev\" #prevElRef></div>\n  <div class=\"swiper-button-next\" #nextElRef></div>\n</ng-container>\n<div *ngIf=\"scrollbar && showScrollbar\" class=\"swiper-scrollbar\" #scrollbarElRef></div>\n<div *ngIf=\"pagination && showPagination\" class=\"swiper-pagination\" #paginationElRef></div>\n<div [ngClass]=\"wrapperClass\" [attr.id]=\"id\">\n  <ng-content select=\"[slot=wrapper-start]\"></ng-content>\n  <ng-template\n    *ngTemplateOutlet=\"\n      slidesTemplate;\n      context: {\n        loopSlides: prependSlides,\n        key: 'prepend'\n      }\n    \"\n  ></ng-template>\n  <ng-template\n    *ngTemplateOutlet=\"\n      slidesTemplate;\n      context: {\n        loopSlides: activeSlides,\n        key: ''\n      }\n    \"\n  ></ng-template>\n  <ng-template\n    *ngTemplateOutlet=\"\n      slidesTemplate;\n      context: {\n        loopSlides: appendSlides,\n        key: 'append'\n      }\n    \"\n  ></ng-template>\n  <ng-content select=\"[slot=wrapper-end]\"></ng-content>\n</div>\n<ng-content select=\"[slot=container-end]\"></ng-content>\n\n<ng-template #slidesTemplate let-loopSlides=\"loopSlides\" let-slideKey=\"key\">\n  <div\n    *ngFor=\"let slide of loopSlides | async\"\n    [ngClass]=\"\n      (slide.class ? slide.class + ' ' : '') +\n      slideClass +\n      (slideKey !== '' ? ' ' + slideDuplicateClass : '')\n    \"\n    [attr.data-swiper-slide-index]=\"slide.virtualIndex ? slide.virtualIndex : slide.slideIndex\"\n    [attr.data-swiper-autoplay]=\"slide.autoplayDelay\"\n    [style]=\"style\"\n    [ngSwitch]=\"slide.zoom\"\n  >\n    <div *ngSwitchCase=\"true\" [ngClass]=\"zoomContainerClass\">\n      <ng-template\n        [ngTemplateOutlet]=\"slide.template\"\n        [ngTemplateOutletContext]=\"{\n          $implicit: slide.slideData\n        }\"\n      ></ng-template>\n    </div>\n    <ng-container *ngSwitchDefault>\n      <ng-template\n        [ngTemplateOutlet]=\"slide.template\"\n        [ngTemplateOutletContext]=\"{\n          $implicit: slide.slideData\n        }\"\n      ></ng-template>\n    </ng-container>\n  </div>\n</ng-template>\n", styles: ["\n      swiper {\n        display: block;\n      }\n    "], directives: [{ type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet"] }, { type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i1.NgSwitch, selector: "[ngSwitch]", inputs: ["ngSwitch"] }, { type: i1.NgSwitchCase, selector: "[ngSwitchCase]", inputs: ["ngSwitchCase"] }, { type: i1.NgSwitchDefault, selector: "[ngSwitchDefault]" }], pipes: { "async": i1.AsyncPipe }, changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.2", ngImport: i0, type: SwiperComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'swiper, [swiper]',
                    templateUrl: './swiper.component.html',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    styles: [
                        `
      swiper {
        display: block;
      }
    `,
                    ],
                }]
        }], ctorParameters: function () { return [{ type: i0.NgZone }, { type: i0.ElementRef }, { type: i0.ChangeDetectorRef }, { type: Object, decorators: [{
                    type: Inject,
                    args: [PLATFORM_ID]
                }] }]; }, propDecorators: { enabled: [{
                type: Input
            }], direction: [{
                type: Input
            }], touchEventsTarget: [{
                type: Input
            }], initialSlide: [{
                type: Input
            }], speed: [{
                type: Input
            }], cssMode: [{
                type: Input
            }], updateOnWindowResize: [{
                type: Input
            }], resizeObserver: [{
                type: Input
            }], nested: [{
                type: Input
            }], focusableElements: [{
                type: Input
            }], width: [{
                type: Input
            }], height: [{
                type: Input
            }], preventInteractionOnTransition: [{
                type: Input
            }], userAgent: [{
                type: Input
            }], url: [{
                type: Input
            }], edgeSwipeDetection: [{
                type: Input
            }], edgeSwipeThreshold: [{
                type: Input
            }], freeMode: [{
                type: Input
            }], autoHeight: [{
                type: Input
            }], setWrapperSize: [{
                type: Input
            }], virtualTranslate: [{
                type: Input
            }], effect: [{
                type: Input
            }], breakpoints: [{
                type: Input
            }], spaceBetween: [{
                type: Input
            }], slidesPerView: [{
                type: Input
            }], grid: [{
                type: Input
            }], slidesPerGroup: [{
                type: Input
            }], slidesPerGroupSkip: [{
                type: Input
            }], centeredSlides: [{
                type: Input
            }], centeredSlidesBounds: [{
                type: Input
            }], slidesOffsetBefore: [{
                type: Input
            }], slidesOffsetAfter: [{
                type: Input
            }], normalizeSlideIndex: [{
                type: Input
            }], centerInsufficientSlides: [{
                type: Input
            }], watchOverflow: [{
                type: Input
            }], roundLengths: [{
                type: Input
            }], touchRatio: [{
                type: Input
            }], touchAngle: [{
                type: Input
            }], simulateTouch: [{
                type: Input
            }], shortSwipes: [{
                type: Input
            }], longSwipes: [{
                type: Input
            }], longSwipesRatio: [{
                type: Input
            }], longSwipesMs: [{
                type: Input
            }], followFinger: [{
                type: Input
            }], allowTouchMove: [{
                type: Input
            }], threshold: [{
                type: Input
            }], touchMoveStopPropagation: [{
                type: Input
            }], touchStartPreventDefault: [{
                type: Input
            }], touchStartForcePreventDefault: [{
                type: Input
            }], touchReleaseOnEdges: [{
                type: Input
            }], uniqueNavElements: [{
                type: Input
            }], resistance: [{
                type: Input
            }], resistanceRatio: [{
                type: Input
            }], watchSlidesProgress: [{
                type: Input
            }], grabCursor: [{
                type: Input
            }], preventClicks: [{
                type: Input
            }], preventClicksPropagation: [{
                type: Input
            }], slideToClickedSlide: [{
                type: Input
            }], preloadImages: [{
                type: Input
            }], updateOnImagesReady: [{
                type: Input
            }], loop: [{
                type: Input
            }], loopAdditionalSlides: [{
                type: Input
            }], loopedSlides: [{
                type: Input
            }], loopFillGroupWithBlank: [{
                type: Input
            }], loopPreventsSlide: [{
                type: Input
            }], allowSlidePrev: [{
                type: Input
            }], allowSlideNext: [{
                type: Input
            }], swipeHandler: [{
                type: Input
            }], noSwiping: [{
                type: Input
            }], noSwipingClass: [{
                type: Input
            }], noSwipingSelector: [{
                type: Input
            }], passiveListeners: [{
                type: Input
            }], containerModifierClass: [{
                type: Input
            }], slideClass: [{
                type: Input
            }], slideBlankClass: [{
                type: Input
            }], slideActiveClass: [{
                type: Input
            }], slideDuplicateActiveClass: [{
                type: Input
            }], slideVisibleClass: [{
                type: Input
            }], slideDuplicateClass: [{
                type: Input
            }], slideNextClass: [{
                type: Input
            }], slideDuplicateNextClass: [{
                type: Input
            }], slidePrevClass: [{
                type: Input
            }], slideDuplicatePrevClass: [{
                type: Input
            }], wrapperClass: [{
                type: Input
            }], runCallbacksOnInit: [{
                type: Input
            }], observeParents: [{
                type: Input
            }], observeSlideChildren: [{
                type: Input
            }], a11y: [{
                type: Input
            }], autoplay: [{
                type: Input
            }], controller: [{
                type: Input
            }], coverflowEffect: [{
                type: Input
            }], cubeEffect: [{
                type: Input
            }], fadeEffect: [{
                type: Input
            }], flipEffect: [{
                type: Input
            }], creativeEffect: [{
                type: Input
            }], cardsEffect: [{
                type: Input
            }], hashNavigation: [{
                type: Input
            }], history: [{
                type: Input
            }], keyboard: [{
                type: Input
            }], lazy: [{
                type: Input
            }], mousewheel: [{
                type: Input
            }], parallax: [{
                type: Input
            }], thumbs: [{
                type: Input
            }], zoom: [{
                type: Input
            }], class: [{
                type: Input
            }], id: [{
                type: Input
            }], navigation: [{
                type: Input
            }], pagination: [{
                type: Input
            }], scrollbar: [{
                type: Input
            }], virtual: [{
                type: Input
            }], index: [{
                type: Input
            }], config: [{
                type: Input
            }], s__beforeBreakpoint: [{
                type: Output,
                args: ['_beforeBreakpoint']
            }], s__containerClasses: [{
                type: Output,
                args: ['_containerClasses']
            }], s__slideClass: [{
                type: Output,
                args: ['_slideClass']
            }], s__swiper: [{
                type: Output,
                args: ['_swiper']
            }], s_activeIndexChange: [{
                type: Output,
                args: ['activeIndexChange']
            }], s_afterInit: [{
                type: Output,
                args: ['afterInit']
            }], s_autoplay: [{
                type: Output,
                args: ['autoplay']
            }], s_autoplayStart: [{
                type: Output,
                args: ['autoplayStart']
            }], s_autoplayStop: [{
                type: Output,
                args: ['autoplayStop']
            }], s_beforeDestroy: [{
                type: Output,
                args: ['beforeDestroy']
            }], s_beforeInit: [{
                type: Output,
                args: ['beforeInit']
            }], s_beforeLoopFix: [{
                type: Output,
                args: ['beforeLoopFix']
            }], s_beforeResize: [{
                type: Output,
                args: ['beforeResize']
            }], s_beforeSlideChangeStart: [{
                type: Output,
                args: ['beforeSlideChangeStart']
            }], s_beforeTransitionStart: [{
                type: Output,
                args: ['beforeTransitionStart']
            }], s_breakpoint: [{
                type: Output,
                args: ['breakpoint']
            }], s_changeDirection: [{
                type: Output,
                args: ['changeDirection']
            }], s_click: [{
                type: Output,
                args: ['click']
            }], s_doubleTap: [{
                type: Output,
                args: ['doubleTap']
            }], s_doubleClick: [{
                type: Output,
                args: ['doubleClick']
            }], s_destroy: [{
                type: Output,
                args: ['destroy']
            }], s_fromEdge: [{
                type: Output,
                args: ['fromEdge']
            }], s_hashChange: [{
                type: Output,
                args: ['hashChange']
            }], s_hashSet: [{
                type: Output,
                args: ['hashSet']
            }], s_imagesReady: [{
                type: Output,
                args: ['imagesReady']
            }], s_init: [{
                type: Output,
                args: ['init']
            }], s_keyPress: [{
                type: Output,
                args: ['keyPress']
            }], s_lazyImageLoad: [{
                type: Output,
                args: ['lazyImageLoad']
            }], s_lazyImageReady: [{
                type: Output,
                args: ['lazyImageReady']
            }], s_loopFix: [{
                type: Output,
                args: ['loopFix']
            }], s_momentumBounce: [{
                type: Output,
                args: ['momentumBounce']
            }], s_navigationHide: [{
                type: Output,
                args: ['navigationHide']
            }], s_navigationShow: [{
                type: Output,
                args: ['navigationShow']
            }], s_observerUpdate: [{
                type: Output,
                args: ['observerUpdate']
            }], s_orientationchange: [{
                type: Output,
                args: ['orientationchange']
            }], s_paginationHide: [{
                type: Output,
                args: ['paginationHide']
            }], s_paginationRender: [{
                type: Output,
                args: ['paginationRender']
            }], s_paginationShow: [{
                type: Output,
                args: ['paginationShow']
            }], s_paginationUpdate: [{
                type: Output,
                args: ['paginationUpdate']
            }], s_progress: [{
                type: Output,
                args: ['progress']
            }], s_reachBeginning: [{
                type: Output,
                args: ['reachBeginning']
            }], s_reachEnd: [{
                type: Output,
                args: ['reachEnd']
            }], s_realIndexChange: [{
                type: Output,
                args: ['realIndexChange']
            }], s_resize: [{
                type: Output,
                args: ['resize']
            }], s_scroll: [{
                type: Output,
                args: ['scroll']
            }], s_scrollbarDragEnd: [{
                type: Output,
                args: ['scrollbarDragEnd']
            }], s_scrollbarDragMove: [{
                type: Output,
                args: ['scrollbarDragMove']
            }], s_scrollbarDragStart: [{
                type: Output,
                args: ['scrollbarDragStart']
            }], s_setTransition: [{
                type: Output,
                args: ['setTransition']
            }], s_setTranslate: [{
                type: Output,
                args: ['setTranslate']
            }], s_slideChange: [{
                type: Output,
                args: ['slideChange']
            }], s_slideChangeTransitionEnd: [{
                type: Output,
                args: ['slideChangeTransitionEnd']
            }], s_slideChangeTransitionStart: [{
                type: Output,
                args: ['slideChangeTransitionStart']
            }], s_slideNextTransitionEnd: [{
                type: Output,
                args: ['slideNextTransitionEnd']
            }], s_slideNextTransitionStart: [{
                type: Output,
                args: ['slideNextTransitionStart']
            }], s_slidePrevTransitionEnd: [{
                type: Output,
                args: ['slidePrevTransitionEnd']
            }], s_slidePrevTransitionStart: [{
                type: Output,
                args: ['slidePrevTransitionStart']
            }], s_slideResetTransitionStart: [{
                type: Output,
                args: ['slideResetTransitionStart']
            }], s_slideResetTransitionEnd: [{
                type: Output,
                args: ['slideResetTransitionEnd']
            }], s_sliderMove: [{
                type: Output,
                args: ['sliderMove']
            }], s_sliderFirstMove: [{
                type: Output,
                args: ['sliderFirstMove']
            }], s_slidesLengthChange: [{
                type: Output,
                args: ['slidesLengthChange']
            }], s_slidesGridLengthChange: [{
                type: Output,
                args: ['slidesGridLengthChange']
            }], s_snapGridLengthChange: [{
                type: Output,
                args: ['snapGridLengthChange']
            }], s_snapIndexChange: [{
                type: Output,
                args: ['snapIndexChange']
            }], s_tap: [{
                type: Output,
                args: ['tap']
            }], s_toEdge: [{
                type: Output,
                args: ['toEdge']
            }], s_touchEnd: [{
                type: Output,
                args: ['touchEnd']
            }], s_touchMove: [{
                type: Output,
                args: ['touchMove']
            }], s_touchMoveOpposite: [{
                type: Output,
                args: ['touchMoveOpposite']
            }], s_touchStart: [{
                type: Output,
                args: ['touchStart']
            }], s_transitionEnd: [{
                type: Output,
                args: ['transitionEnd']
            }], s_transitionStart: [{
                type: Output,
                args: ['transitionStart']
            }], s_update: [{
                type: Output,
                args: ['update']
            }], s_zoomChange: [{
                type: Output,
                args: ['zoomChange']
            }], s_swiper: [{
                type: Output,
                args: ['swiper']
            }], indexChange: [{
                type: Output
            }], prevElRef: [{
                type: ViewChild,
                args: ['prevElRef', { static: false }]
            }], nextElRef: [{
                type: ViewChild,
                args: ['nextElRef', { static: false }]
            }], scrollbarElRef: [{
                type: ViewChild,
                args: ['scrollbarElRef', { static: false }]
            }], paginationElRef: [{
                type: ViewChild,
                args: ['paginationElRef', { static: false }]
            }], slidesEl: [{
                type: ContentChildren,
                args: [SwiperSlideDirective, { descendants: false, emitDistinctChangesOnly: true }]
            }], containerClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3dpcGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hbmd1bGFyL3NyYy9zd2lwZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vc3JjL2FuZ3VsYXIvc3JjL3N3aXBlci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBRXZCLFNBQVMsRUFDVCxlQUFlLEVBRWYsWUFBWSxFQUNaLFdBQVcsRUFDWCxNQUFNLEVBQ04sS0FBSyxFQUdMLE1BQU0sRUFDTixXQUFXLEVBR1gsU0FBUyxFQUNULGlCQUFpQixHQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixhQUFhO0FBQ2IsT0FBTyxNQUFNLE1BQU0sUUFBUSxDQUFDO0FBQzVCLE9BQU8sRUFBYyxFQUFFLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9DLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUMvQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNoRSxPQUFPLEVBQ0wsTUFBTSxFQUNOLFFBQVEsRUFDUixXQUFXLEVBQ1gsaUJBQWlCLEVBQ2pCLHFCQUFxQixFQUNyQixRQUFRLEdBQ1QsTUFBTSxlQUFlLENBQUM7QUFTdkIsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7OztBQWNwRCxNQUFNLE9BQU8sZUFBZTtJQTBZMUIsWUFDVSxPQUFlLEVBQ2YsVUFBc0IsRUFDdEIsa0JBQXFDLEVBQ2hCLFdBQW1CO1FBSHhDLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFDZixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBbUI7UUFDaEIsZ0JBQVcsR0FBWCxXQUFXLENBQVE7UUFwVXpDLGVBQVUsR0FBZ0MsY0FBYyxDQUFDO1FBVXpELGlCQUFZLEdBQWtD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Uzt1QkFBQyxXQUFXLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO2dCQU9yQyxTQUFTO3NCQURaLFNBQVM7dUJBQUMsV0FBVyxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTtnQkFPckMsY0FBYztzQkFEakIsU0FBUzt1QkFBQyxnQkFBZ0IsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7Z0JBTzFDLGVBQWU7c0JBRGxCLFNBQVM7dUJBQUMsaUJBQWlCLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO2dCQU8vQyxRQUFRO3NCQURQLGVBQWU7dUJBQUMsb0JBQW9CLEVBQUUsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLHVCQUF1QixFQUFFLElBQUksRUFBRTtnQkF1QnRFLGdCQUFnQjtzQkFBckMsV0FBVzt1QkFBQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0QmluZGluZyxcbiAgSW5qZWN0LFxuICBJbnB1dCxcbiAgTmdab25lLFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgUExBVEZPUk1fSUQsXG4gIFF1ZXJ5TGlzdCxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVmlld0NoaWxkLFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vLyBAdHMtaWdub3JlXG5pbXBvcnQgU3dpcGVyIGZyb20gJ3N3aXBlcic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZ2V0UGFyYW1zIH0gZnJvbSAnLi91dGlscy9nZXQtcGFyYW1zJztcbmltcG9ydCB7IFN3aXBlclNsaWRlRGlyZWN0aXZlIH0gZnJvbSAnLi9zd2lwZXItc2xpZGUuZGlyZWN0aXZlJztcbmltcG9ydCB7XG4gIGV4dGVuZCxcbiAgaXNPYmplY3QsXG4gIHNldFByb3BlcnR5LFxuICBpZ25vcmVOZ09uQ2hhbmdlcyxcbiAgY29lcmNlQm9vbGVhblByb3BlcnR5LFxuICBpc1Nob3dFbCxcbn0gZnJvbSAnLi91dGlscy91dGlscyc7XG5pbXBvcnQge1xuICBTd2lwZXJPcHRpb25zLFxuICBTd2lwZXJFdmVudHMsXG4gIE5hdmlnYXRpb25PcHRpb25zLFxuICBQYWdpbmF0aW9uT3B0aW9ucyxcbiAgU2Nyb2xsYmFyT3B0aW9ucyxcbiAgVmlydHVhbE9wdGlvbnMsXG59IGZyb20gJ3N3aXBlci90eXBlcyc7XG5pbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzd2lwZXIsIFtzd2lwZXJdJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N3aXBlci5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBzdHlsZXM6IFtcbiAgICBgXG4gICAgICBzd2lwZXIge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIH1cbiAgICBgLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBTd2lwZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBlbmFibGVkOiBTd2lwZXJPcHRpb25zWydlbmFibGVkJ107XG4gIEBJbnB1dCgpIGRpcmVjdGlvbjogU3dpcGVyT3B0aW9uc1snZGlyZWN0aW9uJ107XG4gIEBJbnB1dCgpIHRvdWNoRXZlbnRzVGFyZ2V0OiBTd2lwZXJPcHRpb25zWyd0b3VjaEV2ZW50c1RhcmdldCddO1xuICBASW5wdXQoKSBpbml0aWFsU2xpZGU6IFN3aXBlck9wdGlvbnNbJ2luaXRpYWxTbGlkZSddO1xuICBASW5wdXQoKSBzcGVlZDogU3dpcGVyT3B0aW9uc1snc3BlZWQnXTtcbiAgQElucHV0KCkgY3NzTW9kZTogU3dpcGVyT3B0aW9uc1snY3NzTW9kZSddO1xuICBASW5wdXQoKSB1cGRhdGVPbldpbmRvd1Jlc2l6ZTogU3dpcGVyT3B0aW9uc1sndXBkYXRlT25XaW5kb3dSZXNpemUnXTtcbiAgQElucHV0KCkgcmVzaXplT2JzZXJ2ZXI6IFN3aXBlck9wdGlvbnNbJ3Jlc2l6ZU9ic2VydmVyJ107XG4gIEBJbnB1dCgpIG5lc3RlZDogU3dpcGVyT3B0aW9uc1snbmVzdGVkJ107XG4gIEBJbnB1dCgpIGZvY3VzYWJsZUVsZW1lbnRzOiBTd2lwZXJPcHRpb25zWydmb2N1c2FibGVFbGVtZW50cyddO1xuICBASW5wdXQoKSB3aWR0aDogU3dpcGVyT3B0aW9uc1snd2lkdGgnXTtcbiAgQElucHV0KCkgaGVpZ2h0OiBTd2lwZXJPcHRpb25zWydoZWlnaHQnXTtcbiAgQElucHV0KCkgcHJldmVudEludGVyYWN0aW9uT25UcmFuc2l0aW9uOiBTd2lwZXJPcHRpb25zWydwcmV2ZW50SW50ZXJhY3Rpb25PblRyYW5zaXRpb24nXTtcbiAgQElucHV0KCkgdXNlckFnZW50OiBTd2lwZXJPcHRpb25zWyd1c2VyQWdlbnQnXTtcbiAgQElucHV0KCkgdXJsOiBTd2lwZXJPcHRpb25zWyd1cmwnXTtcbiAgQElucHV0KCkgZWRnZVN3aXBlRGV0ZWN0aW9uOiBib29sZWFuIHwgc3RyaW5nO1xuICBASW5wdXQoKSBlZGdlU3dpcGVUaHJlc2hvbGQ6IG51bWJlcjtcbiAgQElucHV0KCkgZnJlZU1vZGU6IFN3aXBlck9wdGlvbnNbJ2ZyZWVNb2RlJ107XG4gIEBJbnB1dCgpIGF1dG9IZWlnaHQ6IFN3aXBlck9wdGlvbnNbJ2F1dG9IZWlnaHQnXTtcbiAgQElucHV0KCkgc2V0V3JhcHBlclNpemU6IFN3aXBlck9wdGlvbnNbJ3NldFdyYXBwZXJTaXplJ107XG4gIEBJbnB1dCgpIHZpcnR1YWxUcmFuc2xhdGU6IFN3aXBlck9wdGlvbnNbJ3ZpcnR1YWxUcmFuc2xhdGUnXTtcbiAgQElucHV0KCkgZWZmZWN0OiBTd2lwZXJPcHRpb25zWydlZmZlY3QnXTtcbiAgQElucHV0KCkgYnJlYWtwb2ludHM6IFN3aXBlck9wdGlvbnNbJ2JyZWFrcG9pbnRzJ107XG4gIEBJbnB1dCgpIHNwYWNlQmV0d2VlbjogU3dpcGVyT3B0aW9uc1snc3BhY2VCZXR3ZWVuJ107XG4gIEBJbnB1dCgpIHNsaWRlc1BlclZpZXc6IFN3aXBlck9wdGlvbnNbJ3NsaWRlc1BlclZpZXcnXTtcbiAgQElucHV0KCkgZ3JpZDogU3dpcGVyT3B0aW9uc1snZ3JpZCddO1xuICBASW5wdXQoKSBzbGlkZXNQZXJHcm91cDogU3dpcGVyT3B0aW9uc1snc2xpZGVzUGVyR3JvdXAnXTtcbiAgQElucHV0KCkgc2xpZGVzUGVyR3JvdXBTa2lwOiBTd2lwZXJPcHRpb25zWydzbGlkZXNQZXJHcm91cFNraXAnXTtcbiAgQElucHV0KCkgY2VudGVyZWRTbGlkZXM6IFN3aXBlck9wdGlvbnNbJ2NlbnRlcmVkU2xpZGVzJ107XG4gIEBJbnB1dCgpIGNlbnRlcmVkU2xpZGVzQm91bmRzOiBTd2lwZXJPcHRpb25zWydjZW50ZXJlZFNsaWRlc0JvdW5kcyddO1xuICBASW5wdXQoKSBzbGlkZXNPZmZzZXRCZWZvcmU6IFN3aXBlck9wdGlvbnNbJ3NsaWRlc09mZnNldEJlZm9yZSddO1xuICBASW5wdXQoKSBzbGlkZXNPZmZzZXRBZnRlcjogU3dpcGVyT3B0aW9uc1snc2xpZGVzT2Zmc2V0QWZ0ZXInXTtcbiAgQElucHV0KCkgbm9ybWFsaXplU2xpZGVJbmRleDogU3dpcGVyT3B0aW9uc1snbm9ybWFsaXplU2xpZGVJbmRleCddO1xuICBASW5wdXQoKSBjZW50ZXJJbnN1ZmZpY2llbnRTbGlkZXM6IFN3aXBlck9wdGlvbnNbJ2NlbnRlckluc3VmZmljaWVudFNsaWRlcyddO1xuICBASW5wdXQoKSB3YXRjaE92ZXJmbG93OiBTd2lwZXJPcHRpb25zWyd3YXRjaE92ZXJmbG93J107XG4gIEBJbnB1dCgpIHJvdW5kTGVuZ3RoczogU3dpcGVyT3B0aW9uc1sncm91bmRMZW5ndGhzJ107XG4gIEBJbnB1dCgpIHRvdWNoUmF0aW86IFN3aXBlck9wdGlvbnNbJ3RvdWNoUmF0aW8nXTtcbiAgQElucHV0KCkgdG91Y2hBbmdsZTogU3dpcGVyT3B0aW9uc1sndG91Y2hBbmdsZSddO1xuICBASW5wdXQoKSBzaW11bGF0ZVRvdWNoOiBTd2lwZXJPcHRpb25zWydzaW11bGF0ZVRvdWNoJ107XG4gIEBJbnB1dCgpIHNob3J0U3dpcGVzOiBTd2lwZXJPcHRpb25zWydzaG9ydFN3aXBlcyddO1xuICBASW5wdXQoKSBsb25nU3dpcGVzOiBTd2lwZXJPcHRpb25zWydsb25nU3dpcGVzJ107XG4gIEBJbnB1dCgpIGxvbmdTd2lwZXNSYXRpbzogU3dpcGVyT3B0aW9uc1snbG9uZ1N3aXBlc1JhdGlvJ107XG4gIEBJbnB1dCgpIGxvbmdTd2lwZXNNczogU3dpcGVyT3B0aW9uc1snbG9uZ1N3aXBlc01zJ107XG4gIEBJbnB1dCgpIGZvbGxvd0ZpbmdlcjogU3dpcGVyT3B0aW9uc1snZm9sbG93RmluZ2VyJ107XG4gIEBJbnB1dCgpIGFsbG93VG91Y2hNb3ZlOiBTd2lwZXJPcHRpb25zWydhbGxvd1RvdWNoTW92ZSddO1xuICBASW5wdXQoKSB0aHJlc2hvbGQ6IFN3aXBlck9wdGlvbnNbJ3RocmVzaG9sZCddO1xuICBASW5wdXQoKSB0b3VjaE1vdmVTdG9wUHJvcGFnYXRpb246IFN3aXBlck9wdGlvbnNbJ3RvdWNoTW92ZVN0b3BQcm9wYWdhdGlvbiddO1xuICBASW5wdXQoKSB0b3VjaFN0YXJ0UHJldmVudERlZmF1bHQ6IFN3aXBlck9wdGlvbnNbJ3RvdWNoU3RhcnRQcmV2ZW50RGVmYXVsdCddO1xuICBASW5wdXQoKSB0b3VjaFN0YXJ0Rm9yY2VQcmV2ZW50RGVmYXVsdDogU3dpcGVyT3B0aW9uc1sndG91Y2hTdGFydEZvcmNlUHJldmVudERlZmF1bHQnXTtcbiAgQElucHV0KCkgdG91Y2hSZWxlYXNlT25FZGdlczogU3dpcGVyT3B0aW9uc1sndG91Y2hSZWxlYXNlT25FZGdlcyddO1xuICBASW5wdXQoKSB1bmlxdWVOYXZFbGVtZW50czogU3dpcGVyT3B0aW9uc1sndW5pcXVlTmF2RWxlbWVudHMnXTtcbiAgQElucHV0KCkgcmVzaXN0YW5jZTogU3dpcGVyT3B0aW9uc1sncmVzaXN0YW5jZSddO1xuICBASW5wdXQoKSByZXNpc3RhbmNlUmF0aW86IFN3aXBlck9wdGlvbnNbJ3Jlc2lzdGFuY2VSYXRpbyddO1xuICBASW5wdXQoKSB3YXRjaFNsaWRlc1Byb2dyZXNzOiBTd2lwZXJPcHRpb25zWyd3YXRjaFNsaWRlc1Byb2dyZXNzJ107XG4gIEBJbnB1dCgpIGdyYWJDdXJzb3I6IFN3aXBlck9wdGlvbnNbJ2dyYWJDdXJzb3InXTtcbiAgQElucHV0KCkgcHJldmVudENsaWNrczogU3dpcGVyT3B0aW9uc1sncHJldmVudENsaWNrcyddO1xuICBASW5wdXQoKSBwcmV2ZW50Q2xpY2tzUHJvcGFnYXRpb246IFN3aXBlck9wdGlvbnNbJ3ByZXZlbnRDbGlja3NQcm9wYWdhdGlvbiddO1xuICBASW5wdXQoKSBzbGlkZVRvQ2xpY2tlZFNsaWRlOiBTd2lwZXJPcHRpb25zWydzbGlkZVRvQ2xpY2tlZFNsaWRlJ107XG4gIEBJbnB1dCgpIHByZWxvYWRJbWFnZXM6IFN3aXBlck9wdGlvbnNbJ3ByZWxvYWRJbWFnZXMnXTtcbiAgQElucHV0KCkgdXBkYXRlT25JbWFnZXNSZWFkeTogU3dpcGVyT3B0aW9uc1sndXBkYXRlT25JbWFnZXNSZWFkeSddO1xuICBASW5wdXQoKSBsb29wOiBTd2lwZXJPcHRpb25zWydsb29wJ107XG4gIEBJbnB1dCgpIGxvb3BBZGRpdGlvbmFsU2xpZGVzOiBTd2lwZXJPcHRpb25zWydsb29wQWRkaXRpb25hbFNsaWRlcyddO1xuICBASW5wdXQoKSBsb29wZWRTbGlkZXM6IFN3aXBlck9wdGlvbnNbJ2xvb3BlZFNsaWRlcyddO1xuICBASW5wdXQoKSBsb29wRmlsbEdyb3VwV2l0aEJsYW5rOiBTd2lwZXJPcHRpb25zWydsb29wRmlsbEdyb3VwV2l0aEJsYW5rJ107XG4gIEBJbnB1dCgpIGxvb3BQcmV2ZW50c1NsaWRlOiBTd2lwZXJPcHRpb25zWydsb29wUHJldmVudHNTbGlkZSddO1xuICBASW5wdXQoKSBhbGxvd1NsaWRlUHJldjogU3dpcGVyT3B0aW9uc1snYWxsb3dTbGlkZVByZXYnXTtcbiAgQElucHV0KCkgYWxsb3dTbGlkZU5leHQ6IFN3aXBlck9wdGlvbnNbJ2FsbG93U2xpZGVOZXh0J107XG4gIEBJbnB1dCgpIHN3aXBlSGFuZGxlcjogU3dpcGVyT3B0aW9uc1snc3dpcGVIYW5kbGVyJ107XG4gIEBJbnB1dCgpIG5vU3dpcGluZzogU3dpcGVyT3B0aW9uc1snbm9Td2lwaW5nJ107XG4gIEBJbnB1dCgpIG5vU3dpcGluZ0NsYXNzOiBTd2lwZXJPcHRpb25zWydub1N3aXBpbmdDbGFzcyddO1xuICBASW5wdXQoKSBub1N3aXBpbmdTZWxlY3RvcjogU3dpcGVyT3B0aW9uc1snbm9Td2lwaW5nU2VsZWN0b3InXTtcbiAgQElucHV0KCkgcGFzc2l2ZUxpc3RlbmVyczogU3dpcGVyT3B0aW9uc1sncGFzc2l2ZUxpc3RlbmVycyddO1xuICBASW5wdXQoKSBjb250YWluZXJNb2RpZmllckNsYXNzOiBTd2lwZXJPcHRpb25zWydjb250YWluZXJNb2RpZmllckNsYXNzJ107XG4gIEBJbnB1dCgpIHNsaWRlQ2xhc3M6IFN3aXBlck9wdGlvbnNbJ3NsaWRlQ2xhc3MnXSA9ICdzd2lwZXItc2xpZGUnO1xuICBASW5wdXQoKSBzbGlkZUJsYW5rQ2xhc3M6IFN3aXBlck9wdGlvbnNbJ3NsaWRlQmxhbmtDbGFzcyddO1xuICBASW5wdXQoKSBzbGlkZUFjdGl2ZUNsYXNzOiBTd2lwZXJPcHRpb25zWydzbGlkZUFjdGl2ZUNsYXNzJ107XG4gIEBJbnB1dCgpIHNsaWRlRHVwbGljYXRlQWN0aXZlQ2xhc3M6IFN3aXBlck9wdGlvbnNbJ3NsaWRlRHVwbGljYXRlQWN0aXZlQ2xhc3MnXTtcbiAgQElucHV0KCkgc2xpZGVWaXNpYmxlQ2xhc3M6IFN3aXBlck9wdGlvbnNbJ3NsaWRlVmlzaWJsZUNsYXNzJ107XG4gIEBJbnB1dCgpIHNsaWRlRHVwbGljYXRlQ2xhc3M6IFN3aXBlck9wdGlvbnNbJ3NsaWRlRHVwbGljYXRlQ2xhc3MnXTtcbiAgQElucHV0KCkgc2xpZGVOZXh0Q2xhc3M6IFN3aXBlck9wdGlvbnNbJ3NsaWRlTmV4dENsYXNzJ107XG4gIEBJbnB1dCgpIHNsaWRlRHVwbGljYXRlTmV4dENsYXNzOiBTd2lwZXJPcHRpb25zWydzbGlkZUR1cGxpY2F0ZU5leHRDbGFzcyddO1xuICBASW5wdXQoKSBzbGlkZVByZXZDbGFzczogU3dpcGVyT3B0aW9uc1snc2xpZGVQcmV2Q2xhc3MnXTtcbiAgQElucHV0KCkgc2xpZGVEdXBsaWNhdGVQcmV2Q2xhc3M6IFN3aXBlck9wdGlvbnNbJ3NsaWRlRHVwbGljYXRlUHJldkNsYXNzJ107XG4gIEBJbnB1dCgpIHdyYXBwZXJDbGFzczogU3dpcGVyT3B0aW9uc1snd3JhcHBlckNsYXNzJ10gPSAnc3dpcGVyLXdyYXBwZXInO1xuICBASW5wdXQoKSBydW5DYWxsYmFja3NPbkluaXQ6IFN3aXBlck9wdGlvbnNbJ3J1bkNhbGxiYWNrc09uSW5pdCddO1xuICBASW5wdXQoKSBvYnNlcnZlUGFyZW50czogU3dpcGVyT3B0aW9uc1snb2JzZXJ2ZVBhcmVudHMnXTtcbiAgQElucHV0KCkgb2JzZXJ2ZVNsaWRlQ2hpbGRyZW46IFN3aXBlck9wdGlvbnNbJ29ic2VydmVTbGlkZUNoaWxkcmVuJ107XG4gIEBJbnB1dCgpIGExMXk6IFN3aXBlck9wdGlvbnNbJ2ExMXknXTtcbiAgQElucHV0KCkgYXV0b3BsYXk6IFN3aXBlck9wdGlvbnNbJ2F1dG9wbGF5J107XG4gIEBJbnB1dCgpIGNvbnRyb2xsZXI6IFN3aXBlck9wdGlvbnNbJ2NvbnRyb2xsZXInXTtcbiAgQElucHV0KCkgY292ZXJmbG93RWZmZWN0OiBTd2lwZXJPcHRpb25zWydjb3ZlcmZsb3dFZmZlY3QnXTtcbiAgQElucHV0KCkgY3ViZUVmZmVjdDogU3dpcGVyT3B0aW9uc1snY3ViZUVmZmVjdCddO1xuICBASW5wdXQoKSBmYWRlRWZmZWN0OiBTd2lwZXJPcHRpb25zWydmYWRlRWZmZWN0J107XG4gIEBJbnB1dCgpIGZsaXBFZmZlY3Q6IFN3aXBlck9wdGlvbnNbJ2ZsaXBFZmZlY3QnXTtcbiAgQElucHV0KCkgY3JlYXRpdmVFZmZlY3Q6IFN3aXBlck9wdGlvbnNbJ2NyZWF0aXZlRWZmZWN0J107XG4gIEBJbnB1dCgpIGNhcmRzRWZmZWN0OiBTd2lwZXJPcHRpb25zWydjYXJkc0VmZmVjdCddO1xuICBASW5wdXQoKSBoYXNoTmF2aWdhdGlvbjogU3dpcGVyT3B0aW9uc1snaGFzaE5hdmlnYXRpb24nXTtcbiAgQElucHV0KCkgaGlzdG9yeTogU3dpcGVyT3B0aW9uc1snaGlzdG9yeSddO1xuICBASW5wdXQoKSBrZXlib2FyZDogU3dpcGVyT3B0aW9uc1sna2V5Ym9hcmQnXTtcbiAgQElucHV0KCkgbGF6eTogU3dpcGVyT3B0aW9uc1snbGF6eSddO1xuICBASW5wdXQoKSBtb3VzZXdoZWVsOiBTd2lwZXJPcHRpb25zWydtb3VzZXdoZWVsJ107XG4gIEBJbnB1dCgpIHBhcmFsbGF4OiBTd2lwZXJPcHRpb25zWydwYXJhbGxheCddO1xuICBASW5wdXQoKSB0aHVtYnM6IFN3aXBlck9wdGlvbnNbJ3RodW1icyddO1xuICBASW5wdXQoKSB6b29tOiBTd2lwZXJPcHRpb25zWyd6b29tJ107XG4gIEBJbnB1dCgpIGNsYXNzOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGlkOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIHNldCBuYXZpZ2F0aW9uKHZhbCkge1xuICAgIGNvbnN0IGN1cnJlbnROZXh0ID1cbiAgICAgIHR5cGVvZiB0aGlzLl9uYXZpZ2F0aW9uICE9PSAnYm9vbGVhbicgJiYgdGhpcy5fbmF2aWdhdGlvbiAhPT0gJydcbiAgICAgICAgPyB0aGlzLl9uYXZpZ2F0aW9uPy5uZXh0RWxcbiAgICAgICAgOiBudWxsO1xuICAgIGNvbnN0IGN1cnJlbnRQcmV2ID1cbiAgICAgIHR5cGVvZiB0aGlzLl9uYXZpZ2F0aW9uICE9PSAnYm9vbGVhbicgJiYgdGhpcy5fbmF2aWdhdGlvbiAhPT0gJydcbiAgICAgICAgPyB0aGlzLl9uYXZpZ2F0aW9uPy5wcmV2RWxcbiAgICAgICAgOiBudWxsO1xuICAgIHRoaXMuX25hdmlnYXRpb24gPSBzZXRQcm9wZXJ0eSh2YWwsIHtcbiAgICAgIG5leHRFbDogY3VycmVudE5leHQgfHwgbnVsbCxcbiAgICAgIHByZXZFbDogY3VycmVudFByZXYgfHwgbnVsbCxcbiAgICB9KTtcbiAgICB0aGlzLnNob3dOYXZpZ2F0aW9uID0gIShcbiAgICAgIGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2YWwpICE9PSB0cnVlIHx8XG4gICAgICAodGhpcy5fbmF2aWdhdGlvbiAmJlxuICAgICAgICB0eXBlb2YgdGhpcy5fbmF2aWdhdGlvbiAhPT0gJ2Jvb2xlYW4nICYmXG4gICAgICAgIHRoaXMuX25hdmlnYXRpb24ucHJldkVsICE9PSB0aGlzLl9wcmV2RWxSZWY/Lm5hdGl2ZUVsZW1lbnQgJiZcbiAgICAgICAgKHRoaXMuX25hdmlnYXRpb24ucHJldkVsICE9PSBudWxsIHx8IHRoaXMuX25hdmlnYXRpb24ubmV4dEVsICE9PSBudWxsKSAmJlxuICAgICAgICAodHlwZW9mIHRoaXMuX25hdmlnYXRpb24ubmV4dEVsID09PSAnc3RyaW5nJyB8fFxuICAgICAgICAgIHR5cGVvZiB0aGlzLl9uYXZpZ2F0aW9uLnByZXZFbCA9PT0gJ3N0cmluZycgfHxcbiAgICAgICAgICB0eXBlb2YgdGhpcy5fbmF2aWdhdGlvbi5uZXh0RWwgPT09ICdvYmplY3QnIHx8XG4gICAgICAgICAgdHlwZW9mIHRoaXMuX25hdmlnYXRpb24ucHJldkVsID09PSAnb2JqZWN0JykpXG4gICAgKTtcbiAgfVxuICBnZXQgbmF2aWdhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fbmF2aWdhdGlvbjtcbiAgfVxuICBwcml2YXRlIF9uYXZpZ2F0aW9uOiBOYXZpZ2F0aW9uT3B0aW9ucyB8IGJvb2xlYW4gfCAnJztcbiAgc2hvd05hdmlnYXRpb246IGJvb2xlYW4gPSB0cnVlO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBwYWdpbmF0aW9uKHZhbCkge1xuICAgIGNvbnN0IGN1cnJlbnQgPVxuICAgICAgdHlwZW9mIHRoaXMuX3BhZ2luYXRpb24gIT09ICdib29sZWFuJyAmJiB0aGlzLl9wYWdpbmF0aW9uICE9PSAnJ1xuICAgICAgICA/IHRoaXMuX3BhZ2luYXRpb24/LmVsXG4gICAgICAgIDogbnVsbDtcbiAgICB0aGlzLl9wYWdpbmF0aW9uID0gc2V0UHJvcGVydHkodmFsLCB7XG4gICAgICBlbDogY3VycmVudCB8fCBudWxsLFxuICAgIH0pO1xuICAgIHRoaXMuc2hvd1BhZ2luYXRpb24gPSBpc1Nob3dFbCh2YWwsIHRoaXMuX3BhZ2luYXRpb24sIHRoaXMuX3BhZ2luYXRpb25FbFJlZik7XG4gIH1cbiAgZ2V0IHBhZ2luYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX3BhZ2luYXRpb247XG4gIH1cbiAgcHJpdmF0ZSBfcGFnaW5hdGlvbjogUGFnaW5hdGlvbk9wdGlvbnMgfCBib29sZWFuIHwgJyc7XG4gIHNob3dQYWdpbmF0aW9uOiBib29sZWFuID0gdHJ1ZTtcblxuICBASW5wdXQoKVxuICBzZXQgc2Nyb2xsYmFyKHZhbCkge1xuICAgIGNvbnN0IGN1cnJlbnQgPVxuICAgICAgdHlwZW9mIHRoaXMuX3Njcm9sbGJhciAhPT0gJ2Jvb2xlYW4nICYmIHRoaXMuX3Njcm9sbGJhciAhPT0gJycgPyB0aGlzLl9zY3JvbGxiYXI/LmVsIDogbnVsbDtcbiAgICB0aGlzLl9zY3JvbGxiYXIgPSBzZXRQcm9wZXJ0eSh2YWwsIHtcbiAgICAgIGVsOiBjdXJyZW50IHx8IG51bGwsXG4gICAgfSk7XG4gICAgdGhpcy5zaG93U2Nyb2xsYmFyID0gaXNTaG93RWwodmFsLCB0aGlzLl9zY3JvbGxiYXIsIHRoaXMuX3Njcm9sbGJhckVsUmVmKTtcbiAgfVxuICBnZXQgc2Nyb2xsYmFyKCkge1xuICAgIHJldHVybiB0aGlzLl9zY3JvbGxiYXI7XG4gIH1cbiAgcHJpdmF0ZSBfc2Nyb2xsYmFyOiBTY3JvbGxiYXJPcHRpb25zIHwgYm9vbGVhbiB8ICcnO1xuICBzaG93U2Nyb2xsYmFyOiBib29sZWFuID0gdHJ1ZTtcblxuICBASW5wdXQoKVxuICBzZXQgdmlydHVhbCh2YWwpIHtcbiAgICB0aGlzLl92aXJ0dWFsID0gc2V0UHJvcGVydHkodmFsKTtcbiAgfVxuICBnZXQgdmlydHVhbCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdmlydHVhbDtcbiAgfVxuICBwcml2YXRlIF92aXJ0dWFsOiBWaXJ0dWFsT3B0aW9ucyB8IGJvb2xlYW4gfCAnJztcblxuICBASW5wdXQoKVxuICBzZXQgaW5kZXgoaW5kZXg6IG51bWJlcikge1xuICAgIGNvbnNvbGUud2FybignYFsoaW5kZXgpXWAgcHJvcCBpcyBkZXByZWNhdGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gdXBjb21pbmcgdmVyc2lvbnMnKTtcbiAgICB0aGlzLnNldEluZGV4KGluZGV4KTtcbiAgfVxuICBASW5wdXQoKVxuICBzZXQgY29uZmlnKHZhbDogU3dpcGVyT3B0aW9ucykge1xuICAgIHRoaXMudXBkYXRlU3dpcGVyKHZhbCk7XG4gICAgY29uc3QgeyBwYXJhbXMgfSA9IGdldFBhcmFtcyh2YWwpO1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgcGFyYW1zKTtcbiAgfVxuICAvLyBwcmV0dGllci1pZ25vcmVcbiAgQE91dHB1dCgnX2JlZm9yZUJyZWFrcG9pbnQnKSBzX19iZWZvcmVCcmVha3BvaW50OiBFdmVudEVtaXR0ZXI8U3dpcGVyRXZlbnRzWydfYmVmb3JlQnJlYWtwb2ludCddPiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICAvLyBwcmV0dGllci1pZ25vcmVcbiAgQE91dHB1dCgnX2NvbnRhaW5lckNsYXNzZXMnKSBzX19jb250YWluZXJDbGFzc2VzOiBFdmVudEVtaXR0ZXI8U3dpcGVyRXZlbnRzWydfY29udGFpbmVyQ2xhc3NlcyddPiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICAvLyBwcmV0dGllci1pZ25vcmVcbiAgQE91dHB1dCgnX3NsaWRlQ2xhc3MnKSBzX19zbGlkZUNsYXNzOiBFdmVudEVtaXR0ZXI8U3dpcGVyRXZlbnRzWydfc2xpZGVDbGFzcyddPiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICAvLyBwcmV0dGllci1pZ25vcmVcbiAgQE91dHB1dCgnX3N3aXBlcicpIHNfX3N3aXBlcjogRXZlbnRFbWl0dGVyPFN3aXBlckV2ZW50c1snX3N3aXBlciddPiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICAvLyBwcmV0dGllci1pZ25vcmVcbiAgQE91dHB1dCgnYWN0aXZlSW5kZXhDaGFuZ2UnKSBzX2FjdGl2ZUluZGV4Q2hhbmdlOiBFdmVudEVtaXR0ZXI8U3dpcGVyRXZlbnRzWydhY3RpdmVJbmRleENoYW5nZSddPiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICAvLyBwcmV0dGllci1pZ25vcmVcbiAgQE91dHB1dCgnYWZ0ZXJJbml0Jykgc19hZnRlckluaXQ6IEV2ZW50RW1pdHRlcjxTd2lwZXJFdmVudHNbJ2FmdGVySW5pdCddPiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICAvLyBwcmV0dGllci1pZ25vcmVcbiAgQE91dHB1dCgnYXV0b3BsYXknKSBzX2F1dG9wbGF5OiBFdmVudEVtaXR0ZXI8U3dpcGVyRXZlbnRzWydhdXRvcGxheSddPiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICAvLyBwcmV0dGllci1pZ25vcmVcbiAgQE91dHB1dCgnYXV0b3BsYXlTdGFydCcpIHNfYXV0b3BsYXlTdGFydDogRXZlbnRFbWl0dGVyPFN3aXBlckV2ZW50c1snYXV0b3BsYXlTdGFydCddPiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICAvLyBwcmV0dGllci1pZ25vcmVcbiAgQE91dHB1dCgnYXV0b3BsYXlTdG9wJykgc19hdXRvcGxheVN0b3A6IEV2ZW50RW1pdHRlcjxTd2lwZXJFdmVudHNbJ2F1dG9wbGF5U3RvcCddPiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICAvLyBwcmV0dGllci1pZ25vcmVcbiAgQE91dHB1dCgnYmVmb3JlRGVzdHJveScpIHNfYmVmb3JlRGVzdHJveTogRXZlbnRFbWl0dGVyPFN3aXBlckV2ZW50c1snYmVmb3JlRGVzdHJveSddPiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICAvLyBwcmV0dGllci1pZ25vcmVcbiAgQE91dHB1dCgnYmVmb3JlSW5pdCcpIHNfYmVmb3JlSW5pdDogRXZlbnRFbWl0dGVyPFN3aXBlckV2ZW50c1snYmVmb3JlSW5pdCddPiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICAvLyBwcmV0dGllci1pZ25vcmVcbiAgQE91dHB1dCgnYmVmb3JlTG9vcEZpeCcpIHNfYmVmb3JlTG9vcEZpeDogRXZlbnRFbWl0dGVyPFN3aXBlckV2ZW50c1snYmVmb3JlTG9vcEZpeCddPiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICAvLyBwcmV0dGllci1pZ25vcmVcbiAgQE91dHB1dCgnYmVmb3JlUmVzaXplJykgc19iZWZvcmVSZXNpemU6IEV2ZW50RW1pdHRlcjxTd2lwZXJFdmVudHNbJ2JlZm9yZVJlc2l6ZSddPiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICAvLyBwcmV0dGllci1pZ25vcmVcbiAgQE91dHB1dCgnYmVmb3JlU2xpZGVDaGFuZ2VTdGFydCcpIHNfYmVmb3JlU2xpZGVDaGFuZ2VTdGFydDogRXZlbnRFbWl0dGVyPFN3aXBlckV2ZW50c1snYmVmb3JlU2xpZGVDaGFuZ2VTdGFydCddPiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICAvLyBwcmV0dGllci1pZ25vcmVcbiAgQE91dHB1dCgnYmVmb3JlVHJhbnNpdGlvblN0YXJ0Jykgc19iZWZvcmVUcmFuc2l0aW9uU3RhcnQ6IEV2ZW50RW1pdHRlcjxTd2lwZXJFdmVudHNbJ2JlZm9yZVRyYW5zaXRpb25TdGFydCddPiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICAvLyBwcmV0dGllci1pZ25vcmVcbiAgQE91dHB1dCgnYnJlYWtwb2ludCcpIHNfYnJlYWtwb2ludDogRXZlbnRFbWl0dGVyPFN3aXBlckV2ZW50c1snYnJlYWtwb2ludCddPiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICAvLyBwcmV0dGllci1pZ25vcmVcbiAgQE91dHB1dCgnY2hhbmdlRGlyZWN0aW9uJykgc19jaGFuZ2VEaXJlY3Rpb246IEV2ZW50RW1pdHRlcjxTd2lwZXJFdmVudHNbJ2NoYW5nZURpcmVjdGlvbiddPiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICAvLyBwcmV0dGllci1pZ25vcmVcbiAgQE91dHB1dCgnY2xpY2snKSBzX2NsaWNrOiBFdmVudEVtaXR0ZXI8U3dpcGVyRXZlbnRzWydjbGljayddPiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICAvLyBwcmV0dGllci1pZ25vcmVcbiAgQE91dHB1dCgnZG91YmxlVGFwJykgc19kb3VibGVUYXA6IEV2ZW50RW1pdHRlcjxTd2lwZXJFdmVudHNbJ2RvdWJsZVRhcCddPiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICAvLyBwcmV0dGllci1pZ25vcmVcbiAgQE91dHB1dCgnZG91YmxlQ2xpY2snKSBzX2RvdWJsZUNsaWNrOiBFdmVudEVtaXR0ZXI8U3dpcGVyRXZlbnRzWydkb3VibGVDbGljayddPiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICAvLyBwcmV0dGllci1pZ25vcmVcbiAgQE91dHB1dCgnZGVzdHJveScpIHNfZGVzdHJveTogRXZlbnRFbWl0dGVyPFN3aXBlckV2ZW50c1snZGVzdHJveSddPiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICAvLyBwcmV0dGllci1pZ25vcmVcbiAgQE91dHB1dCgnZnJvbUVkZ2UnKSBzX2Zyb21FZGdlOiBFdmVudEVtaXR0ZXI8U3dpcGVyRXZlbnRzWydmcm9tRWRnZSddPiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICAvLyBwcmV0dGllci1pZ25vcmVcbiAgQE91dHB1dCgnaGFzaENoYW5nZScpIHNfaGFzaENoYW5nZTogRXZlbnRFbWl0dGVyPFN3aXBlckV2ZW50c1snaGFzaENoYW5nZSddPiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICAvLyBwcmV0dGllci1pZ25vcmVcbiAgQE91dHB1dCgnaGFzaFNldCcpIHNfaGFzaFNldDogRXZlbnRFbWl0dGVyPFN3aXBlckV2ZW50c1snaGFzaFNldCddPiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICAvLyBwcmV0dGllci1pZ25vcmVcbiAgQE91dHB1dCgnaW1hZ2VzUmVhZHknKSBzX2ltYWdlc1JlYWR5OiBFdmVudEVtaXR0ZXI8U3dpcGVyRXZlbnRzWydpbWFnZXNSZWFkeSddPiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICAvLyBwcmV0dGllci1pZ25vcmVcbiAgQE91dHB1dCgnaW5pdCcpIHNfaW5pdDogRXZlbnRFbWl0dGVyPFN3aXBlckV2ZW50c1snaW5pdCddPiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICAvLyBwcmV0dGllci1pZ25vcmVcbiAgQE91dHB1dCgna2V5UHJlc3MnKSBzX2tleVByZXNzOiBFdmVudEVtaXR0ZXI8U3dpcGVyRXZlbnRzWydrZXlQcmVzcyddPiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICAvLyBwcmV0dGllci1pZ25vcmVcbiAgQE91dHB1dCgnbGF6eUltYWdlTG9hZCcpIHNfbGF6eUltYWdlTG9hZDogRXZlbnRFbWl0dGVyPFN3aXBlckV2ZW50c1snbGF6eUltYWdlTG9hZCddPiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICAvLyBwcmV0dGllci1pZ25vcmVcbiAgQE91dHB1dCgnbGF6eUltYWdlUmVhZHknKSBzX2xhenlJbWFnZVJlYWR5OiBFdmVudEVtaXR0ZXI8U3dpcGVyRXZlbnRzWydsYXp5SW1hZ2VSZWFkeSddPiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICAvLyBwcmV0dGllci1pZ25vcmVcbiAgQE91dHB1dCgnbG9vcEZpeCcpIHNfbG9vcEZpeDogRXZlbnRFbWl0dGVyPFN3aXBlckV2ZW50c1snbG9vcEZpeCddPiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICAvLyBwcmV0dGllci1pZ25vcmVcbiAgQE91dHB1dCgnbW9tZW50dW1Cb3VuY2UnKSBzX21vbWVudHVtQm91bmNlOiBFdmVudEVtaXR0ZXI8U3dpcGVyRXZlbnRzWydtb21lbnR1bUJvdW5jZSddPiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICAvLyBwcmV0dGllci1pZ25vcmVcbiAgQE91dHB1dCgnbmF2aWdhdGlvbkhpZGUnKSBzX25hdmlnYXRpb25IaWRlOiBFdmVudEVtaXR0ZXI8U3dpcGVyRXZlbnRzWyduYXZpZ2F0aW9uSGlkZSddPiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICAvLyBwcmV0dGllci1pZ25vcmVcbiAgQE91dHB1dCgnbmF2aWdhdGlvblNob3cnKSBzX25hdmlnYXRpb25TaG93OiBFdmVudEVtaXR0ZXI8U3dpcGVyRXZlbnRzWyduYXZpZ2F0aW9uU2hvdyddPiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICAvLyBwcmV0dGllci1pZ25vcmVcbiAgQE91dHB1dCgnb2JzZXJ2ZXJVcGRhdGUnKSBzX29ic2VydmVyVXBkYXRlOiBFdmVudEVtaXR0ZXI8U3dpcGVyRXZlbnRzWydvYnNlcnZlclVwZGF0ZSddPiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICAvLyBwcmV0dGllci1pZ25vcmVcbiAgQE91dHB1dCgnb3JpZW50YXRpb25jaGFuZ2UnKSBzX29yaWVudGF0aW9uY2hhbmdlOiBFdmVudEVtaXR0ZXI8U3dpcGVyRXZlbnRzWydvcmllbnRhdGlvbmNoYW5nZSddPiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICAvLyBwcmV0dGllci1pZ25vcmVcbiAgQE91dHB1dCgncGFnaW5hdGlvbkhpZGUnKSBzX3BhZ2luYXRpb25IaWRlOiBFdmVudEVtaXR0ZXI8U3dpcGVyRXZlbnRzWydwYWdpbmF0aW9uSGlkZSddPiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICAvLyBwcmV0dGllci1pZ25vcmVcbiAgQE91dHB1dCgncGFnaW5hdGlvblJlbmRlcicpIHNfcGFnaW5hdGlvblJlbmRlcjogRXZlbnRFbWl0dGVyPFN3aXBlckV2ZW50c1sncGFnaW5hdGlvblJlbmRlciddPiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICAvLyBwcmV0dGllci1pZ25vcmVcbiAgQE91dHB1dCgncGFnaW5hdGlvblNob3cnKSBzX3BhZ2luYXRpb25TaG93OiBFdmVudEVtaXR0ZXI8U3dpcGVyRXZlbnRzWydwYWdpbmF0aW9uU2hvdyddPiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICAvLyBwcmV0dGllci1pZ25vcmVcbiAgQE91dHB1dCgncGFnaW5hdGlvblVwZGF0ZScpIHNfcGFnaW5hdGlvblVwZGF0ZTogRXZlbnRFbWl0dGVyPFN3aXBlckV2ZW50c1sncGFnaW5hdGlvblVwZGF0ZSddPiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICAvLyBwcmV0dGllci1pZ25vcmVcbiAgQE91dHB1dCgncHJvZ3Jlc3MnKSBzX3Byb2dyZXNzOiBFdmVudEVtaXR0ZXI8U3dpcGVyRXZlbnRzWydwcm9ncmVzcyddPiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICAvLyBwcmV0dGllci1pZ25vcmVcbiAgQE91dHB1dCgncmVhY2hCZWdpbm5pbmcnKSBzX3JlYWNoQmVnaW5uaW5nOiBFdmVudEVtaXR0ZXI8U3dpcGVyRXZlbnRzWydyZWFjaEJlZ2lubmluZyddPiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICAvLyBwcmV0dGllci1pZ25vcmVcbiAgQE91dHB1dCgncmVhY2hFbmQnKSBzX3JlYWNoRW5kOiBFdmVudEVtaXR0ZXI8U3dpcGVyRXZlbnRzWydyZWFjaEVuZCddPiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICAvLyBwcmV0dGllci1pZ25vcmVcbiAgQE91dHB1dCgncmVhbEluZGV4Q2hhbmdlJykgc19yZWFsSW5kZXhDaGFuZ2U6IEV2ZW50RW1pdHRlcjxTd2lwZXJFdmVudHNbJ3JlYWxJbmRleENoYW5nZSddPiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICAvLyBwcmV0dGllci1pZ25vcmVcbiAgQE91dHB1dCgncmVzaXplJykgc19yZXNpemU6IEV2ZW50RW1pdHRlcjxTd2lwZXJFdmVudHNbJ3Jlc2l6ZSddPiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICAvLyBwcmV0dGllci1pZ25vcmVcbiAgQE91dHB1dCgnc2Nyb2xsJykgc19zY3JvbGw6IEV2ZW50RW1pdHRlcjxTd2lwZXJFdmVudHNbJ3Njcm9sbCddPiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICAvLyBwcmV0dGllci1pZ25vcmVcbiAgQE91dHB1dCgnc2Nyb2xsYmFyRHJhZ0VuZCcpIHNfc2Nyb2xsYmFyRHJhZ0VuZDogRXZlbnRFbWl0dGVyPFN3aXBlckV2ZW50c1snc2Nyb2xsYmFyRHJhZ0VuZCddPiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICAvLyBwcmV0dGllci1pZ25vcmVcbiAgQE91dHB1dCgnc2Nyb2xsYmFyRHJhZ01vdmUnKSBzX3Njcm9sbGJhckRyYWdNb3ZlOiBFdmVudEVtaXR0ZXI8U3dpcGVyRXZlbnRzWydzY3JvbGxiYXJEcmFnTW92ZSddPiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICAvLyBwcmV0dGllci1pZ25vcmVcbiAgQE91dHB1dCgnc2Nyb2xsYmFyRHJhZ1N0YXJ0Jykgc19zY3JvbGxiYXJEcmFnU3RhcnQ6IEV2ZW50RW1pdHRlcjxTd2lwZXJFdmVudHNbJ3Njcm9sbGJhckRyYWdTdGFydCddPiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICAvLyBwcmV0dGllci1pZ25vcmVcbiAgQE91dHB1dCgnc2V0VHJhbnNpdGlvbicpIHNfc2V0VHJhbnNpdGlvbjogRXZlbnRFbWl0dGVyPFN3aXBlckV2ZW50c1snc2V0VHJhbnNpdGlvbiddPiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICAvLyBwcmV0dGllci1pZ25vcmVcbiAgQE91dHB1dCgnc2V0VHJhbnNsYXRlJykgc19zZXRUcmFuc2xhdGU6IEV2ZW50RW1pdHRlcjxTd2lwZXJFdmVudHNbJ3NldFRyYW5zbGF0ZSddPiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICAvLyBwcmV0dGllci1pZ25vcmVcbiAgQE91dHB1dCgnc2xpZGVDaGFuZ2UnKSBzX3NsaWRlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8U3dpcGVyRXZlbnRzWydzbGlkZUNoYW5nZSddPiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICAvLyBwcmV0dGllci1pZ25vcmVcbiAgQE91dHB1dCgnc2xpZGVDaGFuZ2VUcmFuc2l0aW9uRW5kJykgc19zbGlkZUNoYW5nZVRyYW5zaXRpb25FbmQ6IEV2ZW50RW1pdHRlcjxTd2lwZXJFdmVudHNbJ3NsaWRlQ2hhbmdlVHJhbnNpdGlvbkVuZCddPiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICAvLyBwcmV0dGllci1pZ25vcmVcbiAgQE91dHB1dCgnc2xpZGVDaGFuZ2VUcmFuc2l0aW9uU3RhcnQnKSBzX3NsaWRlQ2hhbmdlVHJhbnNpdGlvblN0YXJ0OiBFdmVudEVtaXR0ZXI8U3dpcGVyRXZlbnRzWydzbGlkZUNoYW5nZVRyYW5zaXRpb25TdGFydCddPiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICAvLyBwcmV0dGllci1pZ25vcmVcbiAgQE91dHB1dCgnc2xpZGVOZXh0VHJhbnNpdGlvbkVuZCcpIHNfc2xpZGVOZXh0VHJhbnNpdGlvbkVuZDogRXZlbnRFbWl0dGVyPFN3aXBlckV2ZW50c1snc2xpZGVOZXh0VHJhbnNpdGlvbkVuZCddPiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICAvLyBwcmV0dGllci1pZ25vcmVcbiAgQE91dHB1dCgnc2xpZGVOZXh0VHJhbnNpdGlvblN0YXJ0Jykgc19zbGlkZU5leHRUcmFuc2l0aW9uU3RhcnQ6IEV2ZW50RW1pdHRlcjxTd2lwZXJFdmVudHNbJ3NsaWRlTmV4dFRyYW5zaXRpb25TdGFydCddPiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICAvLyBwcmV0dGllci1pZ25vcmVcbiAgQE91dHB1dCgnc2xpZGVQcmV2VHJhbnNpdGlvbkVuZCcpIHNfc2xpZGVQcmV2VHJhbnNpdGlvbkVuZDogRXZlbnRFbWl0dGVyPFN3aXBlckV2ZW50c1snc2xpZGVQcmV2VHJhbnNpdGlvbkVuZCddPiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICAvLyBwcmV0dGllci1pZ25vcmVcbiAgQE91dHB1dCgnc2xpZGVQcmV2VHJhbnNpdGlvblN0YXJ0Jykgc19zbGlkZVByZXZUcmFuc2l0aW9uU3RhcnQ6IEV2ZW50RW1pdHRlcjxTd2lwZXJFdmVudHNbJ3NsaWRlUHJldlRyYW5zaXRpb25TdGFydCddPiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICAvLyBwcmV0dGllci1pZ25vcmVcbiAgQE91dHB1dCgnc2xpZGVSZXNldFRyYW5zaXRpb25TdGFydCcpIHNfc2xpZGVSZXNldFRyYW5zaXRpb25TdGFydDogRXZlbnRFbWl0dGVyPFN3aXBlckV2ZW50c1snc2xpZGVSZXNldFRyYW5zaXRpb25TdGFydCddPiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICAvLyBwcmV0dGllci1pZ25vcmVcbiAgQE91dHB1dCgnc2xpZGVSZXNldFRyYW5zaXRpb25FbmQnKSBzX3NsaWRlUmVzZXRUcmFuc2l0aW9uRW5kOiBFdmVudEVtaXR0ZXI8U3dpcGVyRXZlbnRzWydzbGlkZVJlc2V0VHJhbnNpdGlvbkVuZCddPiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICAvLyBwcmV0dGllci1pZ25vcmVcbiAgQE91dHB1dCgnc2xpZGVyTW92ZScpIHNfc2xpZGVyTW92ZTogRXZlbnRFbWl0dGVyPFN3aXBlckV2ZW50c1snc2xpZGVyTW92ZSddPiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICAvLyBwcmV0dGllci1pZ25vcmVcbiAgQE91dHB1dCgnc2xpZGVyRmlyc3RNb3ZlJykgc19zbGlkZXJGaXJzdE1vdmU6IEV2ZW50RW1pdHRlcjxTd2lwZXJFdmVudHNbJ3NsaWRlckZpcnN0TW92ZSddPiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICAvLyBwcmV0dGllci1pZ25vcmVcbiAgQE91dHB1dCgnc2xpZGVzTGVuZ3RoQ2hhbmdlJykgc19zbGlkZXNMZW5ndGhDaGFuZ2U6IEV2ZW50RW1pdHRlcjxTd2lwZXJFdmVudHNbJ3NsaWRlc0xlbmd0aENoYW5nZSddPiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICAvLyBwcmV0dGllci1pZ25vcmVcbiAgQE91dHB1dCgnc2xpZGVzR3JpZExlbmd0aENoYW5nZScpIHNfc2xpZGVzR3JpZExlbmd0aENoYW5nZTogRXZlbnRFbWl0dGVyPFN3aXBlckV2ZW50c1snc2xpZGVzR3JpZExlbmd0aENoYW5nZSddPiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICAvLyBwcmV0dGllci1pZ25vcmVcbiAgQE91dHB1dCgnc25hcEdyaWRMZW5ndGhDaGFuZ2UnKSBzX3NuYXBHcmlkTGVuZ3RoQ2hhbmdlOiBFdmVudEVtaXR0ZXI8U3dpcGVyRXZlbnRzWydzbmFwR3JpZExlbmd0aENoYW5nZSddPiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICAvLyBwcmV0dGllci1pZ25vcmVcbiAgQE91dHB1dCgnc25hcEluZGV4Q2hhbmdlJykgc19zbmFwSW5kZXhDaGFuZ2U6IEV2ZW50RW1pdHRlcjxTd2lwZXJFdmVudHNbJ3NuYXBJbmRleENoYW5nZSddPiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICAvLyBwcmV0dGllci1pZ25vcmVcbiAgQE91dHB1dCgndGFwJykgc190YXA6IEV2ZW50RW1pdHRlcjxTd2lwZXJFdmVudHNbJ3RhcCddPiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICAvLyBwcmV0dGllci1pZ25vcmVcbiAgQE91dHB1dCgndG9FZGdlJykgc190b0VkZ2U6IEV2ZW50RW1pdHRlcjxTd2lwZXJFdmVudHNbJ3RvRWRnZSddPiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICAvLyBwcmV0dGllci1pZ25vcmVcbiAgQE91dHB1dCgndG91Y2hFbmQnKSBzX3RvdWNoRW5kOiBFdmVudEVtaXR0ZXI8U3dpcGVyRXZlbnRzWyd0b3VjaEVuZCddPiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICAvLyBwcmV0dGllci1pZ25vcmVcbiAgQE91dHB1dCgndG91Y2hNb3ZlJykgc190b3VjaE1vdmU6IEV2ZW50RW1pdHRlcjxTd2lwZXJFdmVudHNbJ3RvdWNoTW92ZSddPiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICAvLyBwcmV0dGllci1pZ25vcmVcbiAgQE91dHB1dCgndG91Y2hNb3ZlT3Bwb3NpdGUnKSBzX3RvdWNoTW92ZU9wcG9zaXRlOiBFdmVudEVtaXR0ZXI8U3dpcGVyRXZlbnRzWyd0b3VjaE1vdmVPcHBvc2l0ZSddPiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICAvLyBwcmV0dGllci1pZ25vcmVcbiAgQE91dHB1dCgndG91Y2hTdGFydCcpIHNfdG91Y2hTdGFydDogRXZlbnRFbWl0dGVyPFN3aXBlckV2ZW50c1sndG91Y2hTdGFydCddPiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICAvLyBwcmV0dGllci1pZ25vcmVcbiAgQE91dHB1dCgndHJhbnNpdGlvbkVuZCcpIHNfdHJhbnNpdGlvbkVuZDogRXZlbnRFbWl0dGVyPFN3aXBlckV2ZW50c1sndHJhbnNpdGlvbkVuZCddPiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICAvLyBwcmV0dGllci1pZ25vcmVcbiAgQE91dHB1dCgndHJhbnNpdGlvblN0YXJ0Jykgc190cmFuc2l0aW9uU3RhcnQ6IEV2ZW50RW1pdHRlcjxTd2lwZXJFdmVudHNbJ3RyYW5zaXRpb25TdGFydCddPiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICAvLyBwcmV0dGllci1pZ25vcmVcbiAgQE91dHB1dCgndXBkYXRlJykgc191cGRhdGU6IEV2ZW50RW1pdHRlcjxTd2lwZXJFdmVudHNbJ3VwZGF0ZSddPiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICAvLyBwcmV0dGllci1pZ25vcmVcbiAgQE91dHB1dCgnem9vbUNoYW5nZScpIHNfem9vbUNoYW5nZTogRXZlbnRFbWl0dGVyPFN3aXBlckV2ZW50c1snem9vbUNoYW5nZSddPiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICAvLyBwcmV0dGllci1pZ25vcmVcbiAgQE91dHB1dCgnc3dpcGVyJykgc19zd2lwZXI6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgQE91dHB1dCgpIGluZGV4Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG5cbiAgQFZpZXdDaGlsZCgncHJldkVsUmVmJywgeyBzdGF0aWM6IGZhbHNlIH0pXG4gIHNldCBwcmV2RWxSZWYoZWw6IEVsZW1lbnRSZWYpIHtcbiAgICB0aGlzLl9wcmV2RWxSZWYgPSBlbDtcbiAgICB0aGlzLl9zZXRFbGVtZW50KGVsLCB0aGlzLm5hdmlnYXRpb24sICduYXZpZ2F0aW9uJywgJ3ByZXZFbCcpO1xuICB9XG4gIF9wcmV2RWxSZWY6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ25leHRFbFJlZicsIHsgc3RhdGljOiBmYWxzZSB9KVxuICBzZXQgbmV4dEVsUmVmKGVsOiBFbGVtZW50UmVmKSB7XG4gICAgdGhpcy5fbmV4dEVsUmVmID0gZWw7XG4gICAgdGhpcy5fc2V0RWxlbWVudChlbCwgdGhpcy5uYXZpZ2F0aW9uLCAnbmF2aWdhdGlvbicsICduZXh0RWwnKTtcbiAgfVxuICBfbmV4dEVsUmVmOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdzY3JvbGxiYXJFbFJlZicsIHsgc3RhdGljOiBmYWxzZSB9KVxuICBzZXQgc2Nyb2xsYmFyRWxSZWYoZWw6IEVsZW1lbnRSZWYpIHtcbiAgICB0aGlzLl9zY3JvbGxiYXJFbFJlZiA9IGVsO1xuICAgIHRoaXMuX3NldEVsZW1lbnQoZWwsIHRoaXMuc2Nyb2xsYmFyLCAnc2Nyb2xsYmFyJyk7XG4gIH1cbiAgX3Njcm9sbGJhckVsUmVmOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdwYWdpbmF0aW9uRWxSZWYnLCB7IHN0YXRpYzogZmFsc2UgfSlcbiAgc2V0IHBhZ2luYXRpb25FbFJlZihlbDogRWxlbWVudFJlZikge1xuICAgIHRoaXMuX3BhZ2luYXRpb25FbFJlZiA9IGVsO1xuICAgIHRoaXMuX3NldEVsZW1lbnQoZWwsIHRoaXMucGFnaW5hdGlvbiwgJ3BhZ2luYXRpb24nKTtcbiAgfVxuICBfcGFnaW5hdGlvbkVsUmVmOiBFbGVtZW50UmVmO1xuICBAQ29udGVudENoaWxkcmVuKFN3aXBlclNsaWRlRGlyZWN0aXZlLCB7IGRlc2NlbmRhbnRzOiBmYWxzZSwgZW1pdERpc3RpbmN0Q2hhbmdlc09ubHk6IHRydWUgfSlcbiAgc2xpZGVzRWw6IFF1ZXJ5TGlzdDxTd2lwZXJTbGlkZURpcmVjdGl2ZT47XG4gIHByaXZhdGUgc2xpZGVzOiBTd2lwZXJTbGlkZURpcmVjdGl2ZVtdO1xuXG4gIHByZXBlbmRTbGlkZXM6IE9ic2VydmFibGU8U3dpcGVyU2xpZGVEaXJlY3RpdmVbXT47XG4gIGFwcGVuZFNsaWRlczogT2JzZXJ2YWJsZTxTd2lwZXJTbGlkZURpcmVjdGl2ZVtdPjtcblxuICBzd2lwZXJSZWY6IFN3aXBlcjtcbiAgcmVhZG9ubHkgX2FjdGl2ZVNsaWRlcyA9IG5ldyBTdWJqZWN0PFN3aXBlclNsaWRlRGlyZWN0aXZlW10+KCk7XG5cbiAgZ2V0IGFjdGl2ZVNsaWRlcygpIHtcbiAgICBpZiAodGhpcy52aXJ0dWFsKSB7XG4gICAgICByZXR1cm4gdGhpcy5fYWN0aXZlU2xpZGVzO1xuICAgIH1cbiAgICByZXR1cm4gb2YodGhpcy5zbGlkZXMpO1xuICB9XG5cbiAgZ2V0IHpvb21Db250YWluZXJDbGFzcygpIHtcbiAgICByZXR1cm4gdGhpcy56b29tICYmIHR5cGVvZiB0aGlzLnpvb20gIT09ICdib29sZWFuJ1xuICAgICAgPyB0aGlzLnpvb20uY29udGFpbmVyQ2xhc3NcbiAgICAgIDogJ3N3aXBlci16b29tLWNvbnRhaW5lcic7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzJykgY29udGFpbmVyQ2xhc3Nlczogc3RyaW5nID0gJ3N3aXBlcic7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX25nWm9uZTogTmdab25lLFxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIF9jaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgQEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBfcGxhdGZvcm1JZDogT2JqZWN0LFxuICApIHt9XG5cbiAgcHJpdmF0ZSBfc2V0RWxlbWVudChlbDogRWxlbWVudFJlZiwgcmVmOiBhbnksIHVwZGF0ZTogc3RyaW5nLCBrZXkgPSAnZWwnKSB7XG4gICAgaWYgKCFlbCB8fCAhcmVmKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChyZWYgJiYgZWwubmF0aXZlRWxlbWVudCkge1xuICAgICAgaWYgKHJlZltrZXldID09PSBlbC5uYXRpdmVFbGVtZW50KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHJlZltrZXldID0gZWwubmF0aXZlRWxlbWVudDtcbiAgICB9XG4gICAgY29uc3QgdXBkYXRlT2JqOiB7IFtrZXk6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9O1xuICAgIHVwZGF0ZU9ialt1cGRhdGVdID0gdHJ1ZTtcbiAgICB0aGlzLnVwZGF0ZUluaXRTd2lwZXIodXBkYXRlT2JqKTtcbiAgfVxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBjb25zdCB7IHBhcmFtcyB9ID0gZ2V0UGFyYW1zKHRoaXMpO1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgcGFyYW1zKTtcbiAgfVxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5jaGlsZHJlblNsaWRlc0luaXQoKTtcbiAgICB0aGlzLmluaXRTd2lwZXIoKTtcbiAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnNfc3dpcGVyLmVtaXQodGhpcy5zd2lwZXJSZWYpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBjaGlsZHJlblNsaWRlc0luaXQoKSB7XG4gICAgdGhpcy5zbGlkZXNDaGFuZ2VzKHRoaXMuc2xpZGVzRWwpO1xuICAgIHRoaXMuc2xpZGVzRWwuY2hhbmdlcy5zdWJzY3JpYmUodGhpcy5zbGlkZXNDaGFuZ2VzKTtcbiAgfVxuXG4gIHByaXZhdGUgc2xpZGVzQ2hhbmdlcyA9ICh2YWw6IFF1ZXJ5TGlzdDxTd2lwZXJTbGlkZURpcmVjdGl2ZT4pID0+IHtcbiAgICB0aGlzLnNsaWRlcyA9IHZhbC5tYXAoKHNsaWRlOiBTd2lwZXJTbGlkZURpcmVjdGl2ZSwgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgc2xpZGUuc2xpZGVJbmRleCA9IGluZGV4O1xuICAgICAgc2xpZGUuY2xhc3NOYW1lcyA9IHRoaXMuc2xpZGVDbGFzcyB8fCAnJztcbiAgICAgIHJldHVybiBzbGlkZTtcbiAgICB9KTtcbiAgICBpZiAodGhpcy5sb29wICYmICF0aGlzLmxvb3BlZFNsaWRlcykge1xuICAgICAgdGhpcy5jYWxjTG9vcGVkU2xpZGVzKCk7XG4gICAgfVxuICAgIGlmICghdGhpcy52aXJ0dWFsKSB7XG4gICAgICBpZiAodGhpcy5sb29wZWRTbGlkZXMpIHtcbiAgICAgICAgdGhpcy5wcmVwZW5kU2xpZGVzID0gb2YodGhpcy5zbGlkZXMuc2xpY2UodGhpcy5zbGlkZXMubGVuZ3RoIC0gdGhpcy5sb29wZWRTbGlkZXMpKTtcbiAgICAgICAgdGhpcy5hcHBlbmRTbGlkZXMgPSBvZih0aGlzLnNsaWRlcy5zbGljZSgwLCB0aGlzLmxvb3BlZFNsaWRlcykpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy5zd2lwZXJSZWYgJiYgdGhpcy5zd2lwZXJSZWYudmlydHVhbCkge1xuICAgICAgdGhpcy5fbmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgICAgdGhpcy5zd2lwZXJSZWYudmlydHVhbC5zbGlkZXMgPSB0aGlzLnNsaWRlcztcbiAgICAgICAgdGhpcy5zd2lwZXJSZWYudmlydHVhbC51cGRhdGUodHJ1ZSk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICB9O1xuXG4gIGdldCBpc1N3aXBlckFjdGl2ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zd2lwZXJSZWYgJiYgIXRoaXMuc3dpcGVyUmVmLmRlc3Ryb3llZDtcbiAgfVxuXG4gIGluaXRTd2lwZXIoKSB7XG4gICAgY29uc3QgeyBwYXJhbXM6IHN3aXBlclBhcmFtcywgcGFzc2VkUGFyYW1zIH0gPSBnZXRQYXJhbXModGhpcyk7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBzd2lwZXJQYXJhbXMpO1xuICAgIHRoaXMuX25nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICBzd2lwZXJQYXJhbXMuaW5pdCA9IGZhbHNlO1xuICAgICAgaWYgKCFzd2lwZXJQYXJhbXMudmlydHVhbCkge1xuICAgICAgICBzd2lwZXJQYXJhbXMub2JzZXJ2ZXIgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBzd2lwZXJQYXJhbXMub25BbnkgPSAoZXZlbnROYW1lOiBrZXlvZiBTd2lwZXJDb21wb25lbnQsIC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgICAgIGNvbnN0IGVtaXR0ZXIgPSB0aGlzWygnc18nICsgZXZlbnROYW1lKSBhcyBrZXlvZiBTd2lwZXJDb21wb25lbnRdIGFzIEV2ZW50RW1pdHRlcjxhbnk+O1xuICAgICAgICBpZiAoZW1pdHRlcikge1xuICAgICAgICAgIGVtaXR0ZXIuZW1pdCguLi5hcmdzKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIGNvbnN0IF9zbGlkZUNsYXNzZXM6IFN3aXBlckV2ZW50c1snX3NsaWRlQ2xhc3NlcyddID0gKF8sIHVwZGF0ZWQpID0+IHtcbiAgICAgICAgdXBkYXRlZC5mb3JFYWNoKCh7IHNsaWRlRWwsIGNsYXNzTmFtZXMgfSwgaW5kZXgpID0+IHtcbiAgICAgICAgICBjb25zdCBkYXRhSW5kZXggPSBzbGlkZUVsLmdldEF0dHJpYnV0ZSgnZGF0YS1zd2lwZXItc2xpZGUtaW5kZXgnKTtcbiAgICAgICAgICBjb25zdCBzbGlkZUluZGV4ID0gZGF0YUluZGV4ID8gcGFyc2VJbnQoZGF0YUluZGV4KSA6IGluZGV4O1xuICAgICAgICAgIGlmICh0aGlzLnZpcnR1YWwpIHtcbiAgICAgICAgICAgIGNvbnN0IHZpcnR1YWxTbGlkZSA9IHRoaXMuc2xpZGVzLmZpbmQoKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0udmlydHVhbEluZGV4ICYmIGl0ZW0udmlydHVhbEluZGV4ID09PSBzbGlkZUluZGV4O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAodmlydHVhbFNsaWRlKSB7XG4gICAgICAgICAgICAgIHZpcnR1YWxTbGlkZS5jbGFzc05hbWVzID0gY2xhc3NOYW1lcztcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh0aGlzLnNsaWRlc1tzbGlkZUluZGV4XSkge1xuICAgICAgICAgICAgdGhpcy5zbGlkZXNbc2xpZGVJbmRleF0uY2xhc3NOYW1lcyA9IGNsYXNzTmFtZXM7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgfTtcbiAgICAgIGNvbnN0IF9jb250YWluZXJDbGFzc2VzOiBTd2lwZXJFdmVudHNbJ19jb250YWluZXJDbGFzc2VzJ10gPSAoXywgY2xhc3NlcykgPT4ge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLmNvbnRhaW5lckNsYXNzZXMgPSBjbGFzc2VzO1xuICAgICAgICB9KTtcbiAgICAgIH07XG4gICAgICBPYmplY3QuYXNzaWduKHN3aXBlclBhcmFtcy5vbiwge1xuICAgICAgICBfY29udGFpbmVyQ2xhc3NlcyxcbiAgICAgICAgX3NsaWRlQ2xhc3NlcyxcbiAgICAgIH0pO1xuICAgICAgY29uc3Qgc3dpcGVyUmVmID0gbmV3IFN3aXBlcihzd2lwZXJQYXJhbXMpO1xuICAgICAgc3dpcGVyUmVmLmxvb3BDcmVhdGUgPSAoKSA9PiB7fTtcbiAgICAgIHN3aXBlclJlZi5sb29wRGVzdHJveSA9ICgpID0+IHt9O1xuICAgICAgaWYgKHN3aXBlclBhcmFtcy5sb29wKSB7XG4gICAgICAgIHN3aXBlclJlZi5sb29wZWRTbGlkZXMgPSB0aGlzLmxvb3BlZFNsaWRlcztcbiAgICAgIH1cbiAgICAgIGNvbnN0IGlzVmlydHVhbEVuYWJsZWQgPVxuICAgICAgICB0eXBlb2Ygc3dpcGVyUmVmLnBhcmFtcy52aXJ0dWFsICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgICB0eXBlb2Ygc3dpcGVyUmVmLnBhcmFtcy52aXJ0dWFsICE9PSAnYm9vbGVhbicgJiZcbiAgICAgICAgc3dpcGVyUmVmLnBhcmFtcy52aXJ0dWFsLmVuYWJsZWQ7XG4gICAgICBpZiAoc3dpcGVyUmVmLnZpcnR1YWwgJiYgaXNWaXJ0dWFsRW5hYmxlZCkge1xuICAgICAgICBzd2lwZXJSZWYudmlydHVhbC5zbGlkZXMgPSB0aGlzLnNsaWRlcztcbiAgICAgICAgY29uc3QgZXh0ZW5kV2l0aCA9IHtcbiAgICAgICAgICBjYWNoZTogZmFsc2UsXG4gICAgICAgICAgc2xpZGVzOiB0aGlzLnNsaWRlcyxcbiAgICAgICAgICByZW5kZXJFeHRlcm5hbDogdGhpcy51cGRhdGVWaXJ0dWFsU2xpZGVzLFxuICAgICAgICAgIHJlbmRlckV4dGVybmFsVXBkYXRlOiBmYWxzZSxcbiAgICAgICAgfTtcbiAgICAgICAgZXh0ZW5kKHN3aXBlclJlZi5wYXJhbXMudmlydHVhbCwgZXh0ZW5kV2l0aCk7XG4gICAgICAgIGV4dGVuZChzd2lwZXJSZWYub3JpZ2luYWxQYXJhbXMudmlydHVhbCwgZXh0ZW5kV2l0aCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLl9wbGF0Zm9ybUlkKSkge1xuICAgICAgICB0aGlzLnN3aXBlclJlZiA9IHN3aXBlclJlZi5pbml0KHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KTtcbiAgICAgICAgY29uc3QgaXNFbmFibGVkID1cbiAgICAgICAgICB0eXBlb2YgdGhpcy5zd2lwZXJSZWYucGFyYW1zLnZpcnR1YWwgIT09ICd1bmRlZmluZWQnICYmXG4gICAgICAgICAgdHlwZW9mIHRoaXMuc3dpcGVyUmVmLnBhcmFtcy52aXJ0dWFsICE9PSAnYm9vbGVhbicgJiZcbiAgICAgICAgICB0aGlzLnN3aXBlclJlZi5wYXJhbXMudmlydHVhbC5lbmFibGVkO1xuICAgICAgICBpZiAodGhpcy5zd2lwZXJSZWYudmlydHVhbCAmJiBpc0VuYWJsZWQpIHtcbiAgICAgICAgICB0aGlzLnN3aXBlclJlZi52aXJ0dWFsLnVwZGF0ZSh0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICAgIHN3aXBlclJlZi5vbignc2xpZGVDaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5pbmRleENoYW5nZS5lbWl0KHRoaXMuc3dpcGVyUmVmLnJlYWxJbmRleCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc3R5bGU6IGFueSA9IG51bGw7XG4gIGN1cnJlbnRWaXJ0dWFsRGF0YTogYW55OyAvLyBUT0RPOiB0eXBlIHZpcnR1YWxEYXRhO1xuICBwcml2YXRlIHVwZGF0ZVZpcnR1YWxTbGlkZXMgPSAodmlydHVhbERhdGE6IGFueSkgPT4ge1xuICAgIC8vIFRPRE86IHR5cGUgdmlydHVhbERhdGFcbiAgICBpZiAoXG4gICAgICAhdGhpcy5zd2lwZXJSZWYgfHxcbiAgICAgICh0aGlzLmN1cnJlbnRWaXJ0dWFsRGF0YSAmJlxuICAgICAgICB0aGlzLmN1cnJlbnRWaXJ0dWFsRGF0YS5mcm9tID09PSB2aXJ0dWFsRGF0YS5mcm9tICYmXG4gICAgICAgIHRoaXMuY3VycmVudFZpcnR1YWxEYXRhLnRvID09PSB2aXJ0dWFsRGF0YS50byAmJlxuICAgICAgICB0aGlzLmN1cnJlbnRWaXJ0dWFsRGF0YS5vZmZzZXQgPT09IHZpcnR1YWxEYXRhLm9mZnNldClcbiAgICApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5zdHlsZSA9IHRoaXMuc3dpcGVyUmVmLmlzSG9yaXpvbnRhbCgpXG4gICAgICA/IHtcbiAgICAgICAgICBbdGhpcy5zd2lwZXJSZWYucnRsVHJhbnNsYXRlID8gJ3JpZ2h0JyA6ICdsZWZ0J106IGAke3ZpcnR1YWxEYXRhLm9mZnNldH1weGAsXG4gICAgICAgIH1cbiAgICAgIDoge1xuICAgICAgICAgIHRvcDogYCR7dmlydHVhbERhdGEub2Zmc2V0fXB4YCxcbiAgICAgICAgfTtcbiAgICB0aGlzLmN1cnJlbnRWaXJ0dWFsRGF0YSA9IHZpcnR1YWxEYXRhO1xuICAgIHRoaXMuX2FjdGl2ZVNsaWRlcy5uZXh0KHZpcnR1YWxEYXRhLnNsaWRlcyk7XG4gICAgdGhpcy5fbmdab25lLnJ1bigoKSA9PiB7XG4gICAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfSk7XG4gICAgdGhpcy5fbmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgIHRoaXMuc3dpcGVyUmVmLnVwZGF0ZVNsaWRlcygpO1xuICAgICAgdGhpcy5zd2lwZXJSZWYudXBkYXRlUHJvZ3Jlc3MoKTtcbiAgICAgIHRoaXMuc3dpcGVyUmVmLnVwZGF0ZVNsaWRlc0NsYXNzZXMoKTtcbiAgICAgIGlmICh0aGlzLnN3aXBlclJlZi5sYXp5ICYmIHRoaXMuc3dpcGVyUmVmLnBhcmFtcy5sYXp5WydlbmFibGVkJ10pIHtcbiAgICAgICAgdGhpcy5zd2lwZXJSZWYubGF6eS5sb2FkKCk7XG4gICAgICB9XG4gICAgICB0aGlzLnN3aXBlclJlZi52aXJ0dWFsLnVwZGF0ZSh0cnVlKTtcbiAgICB9KTtcbiAgICByZXR1cm47XG4gIH07XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlZFBhcmFtczogU2ltcGxlQ2hhbmdlcykge1xuICAgIHRoaXMudXBkYXRlU3dpcGVyKGNoYW5nZWRQYXJhbXMpO1xuICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIHVwZGF0ZUluaXRTd2lwZXIoY2hhbmdlZFBhcmFtczogYW55KSB7XG4gICAgaWYgKCEoY2hhbmdlZFBhcmFtcyAmJiB0aGlzLnN3aXBlclJlZiAmJiAhdGhpcy5zd2lwZXJSZWYuZGVzdHJveWVkKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX25nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIHBhcmFtczogY3VycmVudFBhcmFtcyxcbiAgICAgICAgcGFnaW5hdGlvbixcbiAgICAgICAgbmF2aWdhdGlvbixcbiAgICAgICAgc2Nyb2xsYmFyLFxuICAgICAgICB2aXJ0dWFsLFxuICAgICAgICB0aHVtYnMsXG4gICAgICB9ID0gdGhpcy5zd2lwZXJSZWY7XG5cbiAgICAgIGlmIChjaGFuZ2VkUGFyYW1zLnBhZ2luYXRpb24pIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHRoaXMucGFnaW5hdGlvbiAmJlxuICAgICAgICAgIHR5cGVvZiB0aGlzLnBhZ2luYXRpb24gIT09ICdib29sZWFuJyAmJlxuICAgICAgICAgIHRoaXMucGFnaW5hdGlvbi5lbCAmJlxuICAgICAgICAgIHBhZ2luYXRpb24gJiZcbiAgICAgICAgICAhcGFnaW5hdGlvbi5lbFxuICAgICAgICApIHtcbiAgICAgICAgICB0aGlzLnVwZGF0ZVBhcmFtZXRlcigncGFnaW5hdGlvbicsIHRoaXMucGFnaW5hdGlvbik7XG4gICAgICAgICAgcGFnaW5hdGlvbi5pbml0KCk7XG4gICAgICAgICAgcGFnaW5hdGlvbi5yZW5kZXIoKTtcbiAgICAgICAgICBwYWdpbmF0aW9uLnVwZGF0ZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHBhZ2luYXRpb24uZGVzdHJveSgpO1xuICAgICAgICAgIHBhZ2luYXRpb24uZWwgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChjaGFuZ2VkUGFyYW1zLnNjcm9sbGJhcikge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgdGhpcy5zY3JvbGxiYXIgJiZcbiAgICAgICAgICB0eXBlb2YgdGhpcy5zY3JvbGxiYXIgIT09ICdib29sZWFuJyAmJlxuICAgICAgICAgIHRoaXMuc2Nyb2xsYmFyLmVsICYmXG4gICAgICAgICAgc2Nyb2xsYmFyICYmXG4gICAgICAgICAgIXNjcm9sbGJhci5lbFxuICAgICAgICApIHtcbiAgICAgICAgICB0aGlzLnVwZGF0ZVBhcmFtZXRlcignc2Nyb2xsYmFyJywgdGhpcy5zY3JvbGxiYXIpO1xuICAgICAgICAgIHNjcm9sbGJhci5pbml0KCk7XG4gICAgICAgICAgc2Nyb2xsYmFyLnVwZGF0ZVNpemUoKTtcbiAgICAgICAgICBzY3JvbGxiYXIuc2V0VHJhbnNsYXRlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2Nyb2xsYmFyLmRlc3Ryb3koKTtcbiAgICAgICAgICBzY3JvbGxiYXIuZWwgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChjaGFuZ2VkUGFyYW1zLm5hdmlnYXRpb24pIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHRoaXMubmF2aWdhdGlvbiAmJlxuICAgICAgICAgIHR5cGVvZiB0aGlzLm5hdmlnYXRpb24gIT09ICdib29sZWFuJyAmJlxuICAgICAgICAgIHRoaXMubmF2aWdhdGlvbi5wcmV2RWwgJiZcbiAgICAgICAgICB0aGlzLm5hdmlnYXRpb24ubmV4dEVsICYmXG4gICAgICAgICAgbmF2aWdhdGlvbiAmJlxuICAgICAgICAgICFuYXZpZ2F0aW9uLnByZXZFbCAmJlxuICAgICAgICAgICFuYXZpZ2F0aW9uLm5leHRFbFxuICAgICAgICApIHtcbiAgICAgICAgICB0aGlzLnVwZGF0ZVBhcmFtZXRlcignbmF2aWdhdGlvbicsIHRoaXMubmF2aWdhdGlvbik7XG4gICAgICAgICAgbmF2aWdhdGlvbi5pbml0KCk7XG4gICAgICAgICAgbmF2aWdhdGlvbi51cGRhdGUoKTtcbiAgICAgICAgfSBlbHNlIGlmIChuYXZpZ2F0aW9uLnByZXZFbCAmJiBuYXZpZ2F0aW9uLm5leHRFbCkge1xuICAgICAgICAgIG5hdmlnYXRpb24uZGVzdHJveSgpO1xuICAgICAgICAgIG5hdmlnYXRpb24ubmV4dEVsID0gbnVsbDtcbiAgICAgICAgICBuYXZpZ2F0aW9uLnByZXZFbCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChjaGFuZ2VkUGFyYW1zLnRodW1icyAmJiB0aGlzLnRodW1icyAmJiB0aGlzLnRodW1icy5zd2lwZXIpIHtcbiAgICAgICAgdGhpcy51cGRhdGVQYXJhbWV0ZXIoJ3RodW1icycsIHRoaXMudGh1bWJzKTtcbiAgICAgICAgY29uc3QgaW5pdGlhbGl6ZWQgPSB0aHVtYnMuaW5pdCgpO1xuICAgICAgICBpZiAoaW5pdGlhbGl6ZWQpIHRodW1icy51cGRhdGUodHJ1ZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChjaGFuZ2VkUGFyYW1zLmNvbnRyb2xsZXIgJiYgdGhpcy5jb250cm9sbGVyICYmIHRoaXMuY29udHJvbGxlci5jb250cm9sKSB7XG4gICAgICAgIHRoaXMuc3dpcGVyUmVmLmNvbnRyb2xsZXIuY29udHJvbCA9IHRoaXMuY29udHJvbGxlci5jb250cm9sO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnN3aXBlclJlZi51cGRhdGUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHVwZGF0ZVN3aXBlcihjaGFuZ2VkUGFyYW1zOiBTaW1wbGVDaGFuZ2VzIHwgYW55KSB7XG4gICAgdGhpcy5fbmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgIGlmIChjaGFuZ2VkUGFyYW1zLmNvbmZpZykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoIShjaGFuZ2VkUGFyYW1zICYmIHRoaXMuc3dpcGVyUmVmICYmICF0aGlzLnN3aXBlclJlZi5kZXN0cm95ZWQpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGZvciAoY29uc3Qga2V5IGluIGNoYW5nZWRQYXJhbXMpIHtcbiAgICAgICAgaWYgKGlnbm9yZU5nT25DaGFuZ2VzLmluZGV4T2Yoa2V5KSA+PSAwKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbmV3VmFsdWUgPSBjaGFuZ2VkUGFyYW1zW2tleV0/LmN1cnJlbnRWYWx1ZSA/PyBjaGFuZ2VkUGFyYW1zW2tleV07XG4gICAgICAgIHRoaXMudXBkYXRlUGFyYW1ldGVyKGtleSwgbmV3VmFsdWUpO1xuICAgICAgfVxuXG4gICAgICBpZiAoY2hhbmdlZFBhcmFtcy5hbGxvd1NsaWRlTmV4dCkge1xuICAgICAgICB0aGlzLnN3aXBlclJlZi5hbGxvd1NsaWRlTmV4dCA9IHRoaXMuYWxsb3dTbGlkZU5leHQ7XG4gICAgICB9XG4gICAgICBpZiAoY2hhbmdlZFBhcmFtcy5hbGxvd1NsaWRlUHJldikge1xuICAgICAgICB0aGlzLnN3aXBlclJlZi5hbGxvd1NsaWRlUHJldiA9IHRoaXMuYWxsb3dTbGlkZVByZXY7XG4gICAgICB9XG4gICAgICBpZiAoY2hhbmdlZFBhcmFtcy5kaXJlY3Rpb24pIHtcbiAgICAgICAgdGhpcy5zd2lwZXJSZWYuY2hhbmdlRGlyZWN0aW9uKHRoaXMuZGlyZWN0aW9uLCBmYWxzZSk7XG4gICAgICB9XG4gICAgICBpZiAoY2hhbmdlZFBhcmFtcy5icmVha3BvaW50cykge1xuICAgICAgICBpZiAodGhpcy5sb29wICYmICF0aGlzLmxvb3BlZFNsaWRlcykge1xuICAgICAgICAgIHRoaXMuY2FsY0xvb3BlZFNsaWRlcygpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc3dpcGVyUmVmLmN1cnJlbnRCcmVha3BvaW50ID0gbnVsbDtcbiAgICAgICAgdGhpcy5zd2lwZXJSZWYuc2V0QnJlYWtwb2ludCgpO1xuICAgICAgfVxuXG4gICAgICBpZiAoY2hhbmdlZFBhcmFtcy50aHVtYnMgfHwgY2hhbmdlZFBhcmFtcy5jb250cm9sbGVyKSB7XG4gICAgICAgIHRoaXMudXBkYXRlSW5pdFN3aXBlcihjaGFuZ2VkUGFyYW1zKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuc3dpcGVyUmVmLnVwZGF0ZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgY2FsY0xvb3BlZFNsaWRlcygpIHtcbiAgICBpZiAoIXRoaXMubG9vcCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgc2xpZGVzUGVyVmlld1BhcmFtcyA9IHRoaXMuc2xpZGVzUGVyVmlldztcbiAgICBpZiAodGhpcy5icmVha3BvaW50cykge1xuICAgICAgY29uc3QgYnJlYWtwb2ludCA9IFN3aXBlci5wcm90b3R5cGUuZ2V0QnJlYWtwb2ludCh0aGlzLmJyZWFrcG9pbnRzKTtcbiAgICAgIGNvbnN0IGJyZWFrcG9pbnRPbmx5UGFyYW1zID1cbiAgICAgICAgYnJlYWtwb2ludCBpbiB0aGlzLmJyZWFrcG9pbnRzID8gdGhpcy5icmVha3BvaW50c1ticmVha3BvaW50XSA6IHVuZGVmaW5lZDtcbiAgICAgIGlmIChicmVha3BvaW50T25seVBhcmFtcyAmJiBicmVha3BvaW50T25seVBhcmFtcy5zbGlkZXNQZXJWaWV3KSB7XG4gICAgICAgIHNsaWRlc1BlclZpZXdQYXJhbXMgPSBicmVha3BvaW50T25seVBhcmFtcy5zbGlkZXNQZXJWaWV3O1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoc2xpZGVzUGVyVmlld1BhcmFtcyA9PT0gJ2F1dG8nKSB7XG4gICAgICB0aGlzLmxvb3BlZFNsaWRlcyA9IHRoaXMuc2xpZGVzLmxlbmd0aDtcbiAgICAgIHJldHVybiB0aGlzLnNsaWRlcy5sZW5ndGg7XG4gICAgfVxuICAgIGxldCBsb29wZWRTbGlkZXMgPSB0aGlzLmxvb3BlZFNsaWRlcyB8fCBzbGlkZXNQZXJWaWV3UGFyYW1zO1xuICAgIGlmICghbG9vcGVkU2xpZGVzKSB7XG4gICAgICAvLyA/XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMubG9vcEFkZGl0aW9uYWxTbGlkZXMpIHtcbiAgICAgIGxvb3BlZFNsaWRlcyArPSB0aGlzLmxvb3BBZGRpdGlvbmFsU2xpZGVzO1xuICAgIH1cbiAgICBpZiAobG9vcGVkU2xpZGVzID4gdGhpcy5zbGlkZXMubGVuZ3RoKSB7XG4gICAgICBsb29wZWRTbGlkZXMgPSB0aGlzLnNsaWRlcy5sZW5ndGg7XG4gICAgfVxuICAgIHRoaXMubG9vcGVkU2xpZGVzID0gbG9vcGVkU2xpZGVzO1xuICAgIHJldHVybiBsb29wZWRTbGlkZXM7XG4gIH1cblxuICB1cGRhdGVQYXJhbWV0ZXIoa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpIHtcbiAgICBpZiAoISh0aGlzLnN3aXBlclJlZiAmJiAhdGhpcy5zd2lwZXJSZWYuZGVzdHJveWVkKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBfa2V5ID0ga2V5LnJlcGxhY2UoL15fLywgJycpO1xuICAgIGNvbnN0IGlzQ3VycmVudFBhcmFtT2JqID0gaXNPYmplY3QodGhpcy5zd2lwZXJSZWYucGFyYW1zW19rZXldKTtcblxuICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLnN3aXBlclJlZi5tb2R1bGVzKS5pbmRleE9mKF9rZXkpID49IDApIHtcbiAgICAgIGNvbnN0IGRlZmF1bHRQYXJhbXMgPSB0aGlzLnN3aXBlclJlZi5tb2R1bGVzW19rZXldLnBhcmFtc1tfa2V5XTtcbiAgICAgIGlmIChpc0N1cnJlbnRQYXJhbU9iaikge1xuICAgICAgICBleHRlbmQodGhpcy5zd2lwZXJSZWYucGFyYW1zW19rZXldLCBkZWZhdWx0UGFyYW1zKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc3dpcGVyUmVmLnBhcmFtc1tfa2V5XSA9IGRlZmF1bHRQYXJhbXM7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChfa2V5ID09PSAnZW5hYmxlZCcpIHtcbiAgICAgIGlmICh2YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICB0aGlzLnN3aXBlclJlZi5lbmFibGUoKTtcbiAgICAgIH0gZWxzZSBpZiAodmFsdWUgPT09IGZhbHNlKSB7XG4gICAgICAgIHRoaXMuc3dpcGVyUmVmLmRpc2FibGUoKTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGlzQ3VycmVudFBhcmFtT2JqICYmIGlzT2JqZWN0KHZhbHVlKSkge1xuICAgICAgZXh0ZW5kKHRoaXMuc3dpcGVyUmVmLnBhcmFtc1tfa2V5XSwgdmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN3aXBlclJlZi5wYXJhbXNbX2tleV0gPSB2YWx1ZTtcbiAgICB9XG4gICAgdGhpcy5zZXRJbmRleCgyKTtcbiAgfVxuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgd2lsbCBiZSByZW1vdmVkIGluIHVwY29taW5nIHZlcnNpb25zXG4gICAqL1xuICBzZXRJbmRleChpbmRleDogbnVtYmVyLCBzcGVlZD86IG51bWJlciwgc2lsZW50PzogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmICghdGhpcy5pc1N3aXBlckFjdGl2ZSkge1xuICAgICAgdGhpcy5pbml0aWFsU2xpZGUgPSBpbmRleDtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGluZGV4ID09PSB0aGlzLnN3aXBlclJlZi5hY3RpdmVJbmRleCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMubG9vcCkge1xuICAgICAgICB0aGlzLnN3aXBlclJlZi5zbGlkZVRvTG9vcChpbmRleCwgc3BlZWQsICFzaWxlbnQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zd2lwZXJSZWYuc2xpZGVUbyhpbmRleCwgc3BlZWQsICFzaWxlbnQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5fbmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgIHRoaXMuc3dpcGVyUmVmPy5kZXN0cm95KHRydWUsIGZhbHNlKTtcbiAgICB9KTtcbiAgfVxufVxuIiwiPG5nLWNvbnRlbnQgc2VsZWN0PVwiW3Nsb3Q9Y29udGFpbmVyLXN0YXJ0XVwiPjwvbmctY29udGVudD5cbjxuZy1jb250YWluZXIgKm5nSWY9XCJuYXZpZ2F0aW9uICYmIHNob3dOYXZpZ2F0aW9uXCI+XG4gIDxkaXYgY2xhc3M9XCJzd2lwZXItYnV0dG9uLXByZXZcIiAjcHJldkVsUmVmPjwvZGl2PlxuICA8ZGl2IGNsYXNzPVwic3dpcGVyLWJ1dHRvbi1uZXh0XCIgI25leHRFbFJlZj48L2Rpdj5cbjwvbmctY29udGFpbmVyPlxuPGRpdiAqbmdJZj1cInNjcm9sbGJhciAmJiBzaG93U2Nyb2xsYmFyXCIgY2xhc3M9XCJzd2lwZXItc2Nyb2xsYmFyXCIgI3Njcm9sbGJhckVsUmVmPjwvZGl2PlxuPGRpdiAqbmdJZj1cInBhZ2luYXRpb24gJiYgc2hvd1BhZ2luYXRpb25cIiBjbGFzcz1cInN3aXBlci1wYWdpbmF0aW9uXCIgI3BhZ2luYXRpb25FbFJlZj48L2Rpdj5cbjxkaXYgW25nQ2xhc3NdPVwid3JhcHBlckNsYXNzXCIgW2F0dHIuaWRdPVwiaWRcIj5cbiAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW3Nsb3Q9d3JhcHBlci1zdGFydF1cIj48L25nLWNvbnRlbnQ+XG4gIDxuZy10ZW1wbGF0ZVxuICAgICpuZ1RlbXBsYXRlT3V0bGV0PVwiXG4gICAgICBzbGlkZXNUZW1wbGF0ZTtcbiAgICAgIGNvbnRleHQ6IHtcbiAgICAgICAgbG9vcFNsaWRlczogcHJlcGVuZFNsaWRlcyxcbiAgICAgICAga2V5OiAncHJlcGVuZCdcbiAgICAgIH1cbiAgICBcIlxuICA+PC9uZy10ZW1wbGF0ZT5cbiAgPG5nLXRlbXBsYXRlXG4gICAgKm5nVGVtcGxhdGVPdXRsZXQ9XCJcbiAgICAgIHNsaWRlc1RlbXBsYXRlO1xuICAgICAgY29udGV4dDoge1xuICAgICAgICBsb29wU2xpZGVzOiBhY3RpdmVTbGlkZXMsXG4gICAgICAgIGtleTogJydcbiAgICAgIH1cbiAgICBcIlxuICA+PC9uZy10ZW1wbGF0ZT5cbiAgPG5nLXRlbXBsYXRlXG4gICAgKm5nVGVtcGxhdGVPdXRsZXQ9XCJcbiAgICAgIHNsaWRlc1RlbXBsYXRlO1xuICAgICAgY29udGV4dDoge1xuICAgICAgICBsb29wU2xpZGVzOiBhcHBlbmRTbGlkZXMsXG4gICAgICAgIGtleTogJ2FwcGVuZCdcbiAgICAgIH1cbiAgICBcIlxuICA+PC9uZy10ZW1wbGF0ZT5cbiAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW3Nsb3Q9d3JhcHBlci1lbmRdXCI+PC9uZy1jb250ZW50PlxuPC9kaXY+XG48bmctY29udGVudCBzZWxlY3Q9XCJbc2xvdD1jb250YWluZXItZW5kXVwiPjwvbmctY29udGVudD5cblxuPG5nLXRlbXBsYXRlICNzbGlkZXNUZW1wbGF0ZSBsZXQtbG9vcFNsaWRlcz1cImxvb3BTbGlkZXNcIiBsZXQtc2xpZGVLZXk9XCJrZXlcIj5cbiAgPGRpdlxuICAgICpuZ0Zvcj1cImxldCBzbGlkZSBvZiBsb29wU2xpZGVzIHwgYXN5bmNcIlxuICAgIFtuZ0NsYXNzXT1cIlxuICAgICAgKHNsaWRlLmNsYXNzID8gc2xpZGUuY2xhc3MgKyAnICcgOiAnJykgK1xuICAgICAgc2xpZGVDbGFzcyArXG4gICAgICAoc2xpZGVLZXkgIT09ICcnID8gJyAnICsgc2xpZGVEdXBsaWNhdGVDbGFzcyA6ICcnKVxuICAgIFwiXG4gICAgW2F0dHIuZGF0YS1zd2lwZXItc2xpZGUtaW5kZXhdPVwic2xpZGUudmlydHVhbEluZGV4ID8gc2xpZGUudmlydHVhbEluZGV4IDogc2xpZGUuc2xpZGVJbmRleFwiXG4gICAgW2F0dHIuZGF0YS1zd2lwZXItYXV0b3BsYXldPVwic2xpZGUuYXV0b3BsYXlEZWxheVwiXG4gICAgW3N0eWxlXT1cInN0eWxlXCJcbiAgICBbbmdTd2l0Y2hdPVwic2xpZGUuem9vbVwiXG4gID5cbiAgICA8ZGl2ICpuZ1N3aXRjaENhc2U9XCJ0cnVlXCIgW25nQ2xhc3NdPVwiem9vbUNvbnRhaW5lckNsYXNzXCI+XG4gICAgICA8bmctdGVtcGxhdGVcbiAgICAgICAgW25nVGVtcGxhdGVPdXRsZXRdPVwic2xpZGUudGVtcGxhdGVcIlxuICAgICAgICBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwie1xuICAgICAgICAgICRpbXBsaWNpdDogc2xpZGUuc2xpZGVEYXRhXG4gICAgICAgIH1cIlxuICAgICAgPjwvbmctdGVtcGxhdGU+XG4gICAgPC9kaXY+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hEZWZhdWx0PlxuICAgICAgPG5nLXRlbXBsYXRlXG4gICAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0XT1cInNsaWRlLnRlbXBsYXRlXCJcbiAgICAgICAgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cIntcbiAgICAgICAgICAkaW1wbGljaXQ6IHNsaWRlLnNsaWRlRGF0YVxuICAgICAgICB9XCJcbiAgICAgID48L25nLXRlbXBsYXRlPlxuICAgIDwvbmctY29udGFpbmVyPlxuICA8L2Rpdj5cbjwvbmctdGVtcGxhdGU+XG4iXX0=