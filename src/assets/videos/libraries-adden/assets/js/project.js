if (!window.cp) window.cp = function(str) {
    return document.getElementById(str)
};
cp.CPProjInit = function() {
    if (cp && cp.model && cp.model.data) return;
    cp.model = {};
    cp.poolResources = {};
    cp.D = cp.model.data = {
        pref: {
            acc: 1,
            rkt: 1,
            hsr: 0,
            atp: false
        },
        si486: {
            name: 'Simulation_1',
            type: 1268,
            from: 1,
            to: 90,
            rp: 0,
            rpa: 0,
            mdi: 'si486c',
            tag: 'container-simulation-widget',
            v: 0,
            enabled: true,
            defEn: true,
            vu: [],
            siaf: 0,
            sid: 3,
            slideItemThemeCounter: 0,
            presetData: [{
                presetId: '',
                presetType: 14,
                isOverridden: false
            }, {
                presetId: '',
                presetType: 2,
                isOverridden: false
            }],
            widgetProps: '{"autoFit":true}',
            retainState: false,
            immo: false,
            apsn: 'Slide460',
            efph: {},
            eflh: [],
            iflbx: false,
            ipflbx: true,
            si: [{
                n: 'si478',
                t: 1268
            }],
            containerType: 'simulation-widget',
            widgetProps: '{"autoFit":true}',
            option: '',
            padding: {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            },
            parent: '',
            selectable: false,
            trin: 0,
            trout: 0,
            isDD: false
        },
        si486c: {
            b: [0, 0, 0, 0],
            fh: false,
            fw: false,
            uid: 486,
            iso: false,
            css: {
                360: {
                    l: '0px',
                    t: '0px',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0px',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0px',
                    lvID: -1,
                    w: '0px',
                    h: '0px',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                },
                600: {
                    l: '0px',
                    t: '0px',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0px',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0px',
                    lvID: -1,
                    w: '0px',
                    h: '0px',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                },
                972: {
                    l: '0px',
                    t: '0px',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0px',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0px',
                    lvID: -1,
                    w: '0px',
                    h: '0px',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                }

            },
            sr: cp.fd,
            dn: 'si486',
            visible: 1,
            effectiveVi: 1,
            JSONEffectData: false,
            bc: '#ffffff',
            fe: true,
            fca: 1,
            fa: 100,
            sde: false,
            scp: 0,
            sc: '#0080ff',
            sw: 1,
            ss: 0,
            sa: 1,
            se: false,
            vbwr: [-1, -1, 1, 1],
            vb: [-1, -1, 1, 1]
        },
        si478: {
            name: 'Simulation_non_responsive_1',
            type: 1268,
            from: 1,
            to: 90,
            rp: 0,
            rpa: 0,
            mdi: 'si478c',
            tag: 'container-simulation-non-responsive',
            v: 0,
            enabled: true,
            defEn: true,
            vu: [],
            siaf: 0,
            sid: 3,
            slideItemThemeCounter: 0,
            presetData: [{
                presetId: '',
                presetType: 14,
                isOverridden: true
            }, {
                presetId: '',
                presetType: 2,
                isOverridden: true
            }],
            widgetProps: '{"visibilityInfo":{"slide-item-clickbox":false,"slide-item-highlight-box":false,"slide-item-comment-box":false,"slide-item-inputfield":false,"slide-item-mouse-pointer":false,"slide-item-highlight-box":true,"slide-item-comment-box":true,"slide-item-mouse-pointer":true},"sizeNPos":{"width":1728,"height":1080},"groupedItemsVisibility":{"slide-item-clickbox":0,"slide-item-highlight-box":0,"slide-item-comment-box":0,"slide-item-inputfield":0,"slide-item-mouse-pointer":0,"slide-item-highlight-box":1,"slide-item-comment-box":1,"slide-item-mouse-pointer":1},"canBeCard":false}',
            parentGroup: 'si486',
            retainState: false,
            immo: false,
            apsn: 'Slide460',
            efph: {},
            eflh: [],
            iflbx: false,
            ipflbx: true,
            si: [{
                n: 'si497',
                t: 1269
            }, {
                n: 'si517',
                t: 612
            }, {
                n: 'si577',
                t: 612
            }, {
                n: 'si588',
                t: 12
            }],
            containerType: 'simulation-non-responsive',
            widgetProps: '{"visibilityInfo":{"slide-item-clickbox":false,"slide-item-highlight-box":false,"slide-item-comment-box":false,"slide-item-inputfield":false,"slide-item-mouse-pointer":false,"slide-item-highlight-box":true,"slide-item-comment-box":true,"slide-item-mouse-pointer":true},"sizeNPos":{"width":1728,"height":1080},"groupedItemsVisibility":{"slide-item-clickbox":0,"slide-item-highlight-box":0,"slide-item-comment-box":0,"slide-item-inputfield":0,"slide-item-mouse-pointer":0,"slide-item-highlight-box":1,"slide-item-comment-box":1,"slide-item-mouse-pointer":1},"canBeCard":false}',
            option: '',
            padding: {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            },
            parent: 'si486',
            selectable: false,
            trin: 0,
            trout: 0,
            isDD: false
        },
        si478c: {
            b: [0, 0, 0, 0],
            fh: false,
            fw: false,
            uid: 478,
            iso: true,
            css: {
                360: {
                    l: '0px',
                    t: '0px',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0px',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0px',
                    lvID: -1,
                    w: '0px',
                    h: '0px',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                },
                600: {
                    l: '0px',
                    t: '0px',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0px',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0px',
                    lvID: -1,
                    w: '0px',
                    h: '0px',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                },
                972: {
                    l: '0px',
                    t: '0px',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0px',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0px',
                    lvID: -1,
                    w: '0px',
                    h: '0px',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                }

            },
            sr: cp.fd,
            dn: 'si478',
            visible: 1,
            effectiveVi: 1,
            JSONEffectData: false,
            imgf: {
                b: 0,
                c: 0,
                br: 0,
                o: 100,
                ifbm: 'normal',
                ift: 'Normal',
                ifi: 0,
                iff: {
                    bc: '#ffe2c8'
                },
                tiletype: 0,
                extraImageProps: '',
                tiletype: 0,
                imageFocus: 0,
                w: 3456,
                h: 2160,
                id: 494,
                tsp: 50,
                ip: 'dr/0494.png'
            },
            fe: true,
            fca: 1,
            fa: 100,
            iso: true,
            sde: false,
            scp: 0,
            sc: '#0080ff',
            sw: 1,
            ss: 0,
            sa: 1,
            se: false,
            vbwr: [-1, -1, 1, 1],
            vb: [-1, -1, 1, 1]
        },
        si497: {
            name: 'Highlight_box_1',
            type: 1269,
            from: 1,
            to: 90,
            rp: 0,
            rpa: 0,
            mdi: 'si497c',
            tag: 'slide-item-highlight-box',
            v: 0,
            enabled: true,
            defEn: true,
            vu: [],
            siaf: 0,
            sid: 3,
            slideItemThemeCounter: 0,
            presetData: [{
                presetId: '',
                presetType: 13,
                isOverridden: false
            }],
            widgetProps: '{"isHighlightBox":true,"currentState":"normal","normal":{"opacity":"20","shapePresetData":{"presetId":"cp_clickbox_shape_solid_style","fillEnable":true,"fillType":1,"strokeEnable":true,"shadowEnable":false},"appearenceProperties":{"fill":{"color":"#ad00ffFF"},"shadow":{},"stroke":{"enabled":false}},"overriddenProperties":["strokeEnable","fillColor","opacity"]},"shapeData":{"type":"rect","attributes":{"rx":"0"}},"sizeNPos":{"top":133.17578125,"left":227.75,"width":29.486328125,"height":27.71875}}',
            parentGroup: 'si478',
            retainState: false,
            immo: false,
            apsn: 'Slide460',
            efph: {},
            eflh: [],
            iflbx: false,
            ipflbx: true,
            ihb: true,
            si: [{
                n: 'si507',
                t: 612
            }],
            te: false,
            ie: false,
            trin: 0,
            trout: 0,
            stl: [{
                stn: 'Normal',
                stt: 0,
                stsi: [497]
            }],
            stis: 0,
            bstiid: -1,
            sipst: 0,
            sicbs: false,
            sihhs: false,
            sihds: false,
            siq: false,
            isDD: false
        },
        si497c: {
            b: [235, 136, 269, 156],
            fh: false,
            fw: false,
            uid: 497,
            iso: false,
            css: {
                360: {
                    l: '24.177%',
                    t: '22.368%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '24.177%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '22.368%',
                    lvID: -1,
                    w: '3.498%',
                    h: '3.289%',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                },
                600: {
                    l: '24.177%',
                    t: '22.368%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '24.177%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '22.368%',
                    lvID: -1,
                    w: '3.498%',
                    h: '3.289%',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                },
                972: {
                    l: '24.177%',
                    t: '22.368%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '24.177%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '22.368%',
                    lvID: -1,
                    w: '3.498%',
                    h: '3.289%',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                }

            },
            sr: cp.fd,
            dn: 'si497',
            visible: 1,
            effectiveVi: 1,
            JSONEffectData: false,
            fa: 100,
            vbwr: [235, 136, 269, 156],
            vb: [235, 136, 269, 156]
        },
        si507: {
            name: 'Form_1',
            type: 612,
            from: 1,
            to: 90,
            rp: 0,
            rpa: 0,
            mdi: 'si507c',
            tag: '',
            v: 0,
            enabled: true,
            defEn: true,
            vu: [],
            siaf: 0,
            sid: 3,
            slideItemThemeCounter: 0,
            presetData: [{
                presetId: '',
                presetType: 0,
                isOverridden: false
            }, {
                presetId: '',
                presetType: 4,
                isOverridden: false
            }, {
                presetId: '',
                presetType: 2,
                isOverridden: false
            }],
            widgetProps: '',
            retainState: false,
            immo: false,
            apsn: 'Slide460',
            efph: {},
            eflh: [],
            iflbx: false,
            ipflbx: true,
            vt: '',
            rplm: {
                360: 0,
                600: 0,
                972: 0
            },
            rprm: {
                360: 0,
                600: 0,
                972: 0
            },
            rptm: {
                360: 0,
                600: 0,
                972: 0
            },
            rpbm: {
                360: 0,
                600: 0,
                972: 0
            },
            rpta: {
                360: 2,
                600: 2,
                972: 2
            },
            rptl: {
                360: 1,
                600: 1,
                972: 1
            },
            rpvt: {
                360: {
                    vt: '',
                    text: ''
                },
                600: {
                    vt: '',
                    text: ''
                },
                972: {
                    vt: '',
                    text: ''
                }

            },
            subType: '',
            text: '{"blocks":[{"key":"4k0dr","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{"listDepth":"0","listType":"S_Bullets08","listIndent":"100 % ","listSize":"100 % ","overridden":"false"}}],"entityMap":{}}',
            trin: 0,
            trout: 0,
            stl: [{
                stn: 'Normal',
                stt: 0,
                stsi: [507]
            }],
            stis: 0,
            bstiid: 497,
            sipst: -1,
            sicbs: false,
            sihhs: false,
            sihds: false,
            parent: 'si497',
            baseItemIdForPropertyFlow: -1,
            isDD: false
        },
        si507c: {
            b: [0, 0, 34, 20],
            fh: false,
            fw: false,
            uid: 507,
            iso: false,
            css: {
                360: {
                    l: '0.000%',
                    t: '0.000%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0.000%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0.000%',
                    lvID: -1,
                    w: '3.498%',
                    h: '3.289%',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                },
                600: {
                    l: '0.000%',
                    t: '0.000%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0.000%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0.000%',
                    lvID: -1,
                    w: '3.498%',
                    h: '3.289%',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                },
                972: {
                    l: '0.000%',
                    t: '0.000%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0.000%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0.000%',
                    lvID: -1,
                    w: '3.498%',
                    h: '3.289%',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                }

            },
            dn: 'si507',
            visible: 1,
            effectiveVi: 1,
            JSONEffectData: false,
            hms: false,
            hme: false,
            subt: 1,
            bc: '#ffffff',
            fe: true,
            fca: 1,
            fa: 100,
            path: '',
            svg: false,
            sde: false,
            scp: 0,
            sc: '#0080ff',
            sw: 1,
            ss: 0,
            sa: 1,
            se: false,
            vbwr: [-2, -2, 36, 22],
            vb: [-2, -2, 36, 22]
        },
        si517: {
            name: 'Rectangle_1',
            type: 612,
            from: 1,
            to: 90,
            rp: 0,
            rpa: 0,
            mdi: 'si517c',
            tag: '',
            v: 0,
            enabled: true,
            defEn: true,
            vu: [],
            siaf: 0,
            sid: 3,
            slideItemThemeCounter: 0,
            presetData: [{
                presetId: 'cp_default_caption_shape_solid_style',
                presetType: 0,
                isOverridden: false
            }, {
                presetId: 'cp_default_quiz_caption_textinshape_style',
                presetType: 4,
                isOverridden: false
            }, {
                presetId: '',
                presetType: 2,
                isOverridden: false
            }],
            widgetProps: '{"sizeNPos":{"top":196,"left":250,"width":300,"height":"auto"}}',
            parentGroup: 'si478',
            retainState: false,
            immo: false,
            apsn: 'Slide460',
            efph: {},
            eflh: [],
            iflbx: false,
            ipflbx: true,
            vt: '',
            rplm: {
                360: 0,
                600: 0,
                972: 0
            },
            rprm: {
                360: 0,
                600: 0,
                972: 0
            },
            rptm: {
                360: 0,
                600: 0,
                972: 0
            },
            rpbm: {
                360: 0,
                600: 0,
                972: 0
            },
            rpta: {
                360: 2,
                600: 2,
                972: 2
            },
            rptl: {
                360: 1,
                600: 1,
                972: 1
            },
            rpvt: {
                360: {
                    vt: '',
                    text: ''
                },
                600: {
                    vt: '',
                    text: ''
                },
                972: {
                    vt: '',
                    text: ''
                }

            },
            subType: '',
            text: '{"blocks":[{"key":"b8kef","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{"listDepth":"0","listType":"S_Bullets08","listIndent":"100%","listSize":"100%","overridden":"false","presetId":"cp_default_quiz_caption_textinshape_style"}}],"entityMap":{}}',
            isc: 1,
            trin: 0,
            trout: 0,
            stl: [{
                stn: 528,
                stt: 0,
                dsr: 'Standardstatus',
                stsi: [517]
            }],
            stis: 0,
            bstiid: -1,
            sipst: 0,
            sicbs: false,
            sihhs: false,
            sihds: false,
            stc: ['si517', 'si530', 'si541', 'si552'],
            isDD: false
        },
        si517c: {
            b: [0, 0, 972, 48],
            fh: false,
            fw: false,
            uid: 517,
            iso: false,
            css: {
                360: {
                    l: '0.000%',
                    t: '0.000%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0.000%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0.000%',
                    lvID: -1,
                    w: '100.000%',
                    h: '7.895%',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                },
                600: {
                    l: '0.000%',
                    t: '0.000%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0.000%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0.000%',
                    lvID: -1,
                    w: '100.000%',
                    h: '7.895%',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                },
                972: {
                    l: '0.000%',
                    t: '0.000%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0.000%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0.000%',
                    lvID: -1,
                    w: '100.000%',
                    h: '7.895%',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                }

            },
            dn: 'si517',
            visible: 1,
            effectiveVi: 1,
            JSONEffectData: false,
            hms: false,
            hme: false,
            subt: 1,
            bc: '#c8e2ff',
            fe: true,
            fca: 1,
            fa: 0,
            path: 'M 0.000000 0.000000 L 972.000000 0.000000 L 972.000000 48.000000 L 0.000000 48.000000 Z ',
            svg: false,
            sde: false,
            scp: 0,
            sc: '#0080ff',
            sw: 1,
            ss: 0,
            sa: 1,
            se: false,
            vbwr: [-2, -2, 974, 50],
            vb: [-2, -2, 974, 50]
        },
        si530: {
            name: '',
            type: 612,
            from: 1,
            to: 90,
            rp: 0,
            rpa: 0,
            mdi: 'si530c',
            tag: '',
            v: 0,
            enabled: true,
            defEn: true,
            vu: [],
            siaf: 0,
            sid: 3,
            slideItemThemeCounter: 0,
            presetData: [{
                presetId: '',
                presetType: 0,
                isOverridden: false
            }, {
                presetId: '',
                presetType: 4,
                isOverridden: false
            }, {
                presetId: '',
                presetType: 2,
                isOverridden: false
            }],
            widgetProps: '{"sizeNPos":{"top":196,"left":250,"width":300,"height":"auto"}}',
            parentGroup: 'si478',
            retainState: false,
            immo: false,
            apsn: 'Slide460',
            efph: {},
            eflh: [],
            iflbx: false,
            ipflbx: true,
            vt: '',
            rplm: {
                360: 0,
                600: 0,
                972: 0
            },
            rprm: {
                360: 0,
                600: 0,
                972: 0
            },
            rptm: {
                360: 0,
                600: 0,
                972: 0
            },
            rpbm: {
                360: 0,
                600: 0,
                972: 0
            },
            rpta: {
                360: 2,
                600: 2,
                972: 2
            },
            rptl: {
                360: 1,
                600: 1,
                972: 1
            },
            rpvt: {
                360: {
                    vt: '',
                    text: ''
                },
                600: {
                    vt: '',
                    text: ''
                },
                972: {
                    vt: '',
                    text: ''
                }

            },
            subType: '',
            text: '{"blocks":[{"key":"e7msa","text":"Erfolgstext eingeben","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":55,"style":"overridden:false"},{"offset":0,"length":55,"style":"opacity:1"},{"offset":0,"length":55,"style":"backgroundColor:unset"},{"offset":0,"length":55,"style":"defaultBackgroundColor:#5EFF67"},{"offset":0,"length":55,"style":"textHighlightEnable:false"},{"offset":0,"length":55,"style":"textOutlineEnable:false"},{"offset":0,"length":55,"style":"textShadowEnable:false"}],"entityRanges":[],"data":{"presetId":"text-caption_correct","listDepth":"0","listType":"S_Bullets08","listIndent":"100%","listSize":"100%","listColor":"#666666","overridden":"false"}}],"entityMap":{}}',
            isc: 1,
            trin: 0,
            trout: 0,
            bstin: 'si517',
            stl: [{
                stn: 'Normal',
                stt: 0,
                stsi: [530]
            }],
            stis: 0,
            bstiid: 517,
            sipst: 101,
            sicbs: true,
            sihhs: false,
            sihds: false,
            baseItemIdForPropertyFlow: 517,
            isDD: false
        },
        si530c: {
            b: [0, 0, 972, 48],
            fh: false,
            fw: false,
            uid: 530,
            iso: false,
            css: {
                360: {
                    l: '0.000%',
                    t: '0.000%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0.000%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0.000%',
                    lvID: -1,
                    w: '100.000%',
                    h: '7.895%',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                },
                600: {
                    l: '0.000%',
                    t: '0.000%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0.000%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0.000%',
                    lvID: -1,
                    w: '100.000%',
                    h: '7.895%',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                },
                972: {
                    l: '0.000%',
                    t: '0.000%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0.000%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0.000%',
                    lvID: -1,
                    w: '100.000%',
                    h: '7.895%',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                }

            },
            dn: 'si530',
            visible: 0,
            effectiveVi: 1,
            JSONEffectData: false,
            hms: false,
            hme: false,
            subt: 1,
            bc: '#c8e2ff',
            fe: true,
            fca: 1,
            fa: 100,
            path: 'M 0.000000 0.000000 L 972.000000 0.000000 L 972.000000 48.000000 L 0.000000 48.000000 Z ',
            svg: false,
            sde: false,
            scp: 0,
            sc: '#0080ff',
            sw: 1,
            ss: 0,
            sa: 1,
            se: false,
            vbwr: [-2, -2, 974, 50],
            vb: [-2, -2, 974, 50]
        },
        si541: {
            name: '',
            type: 612,
            from: 1,
            to: 90,
            rp: 0,
            rpa: 0,
            mdi: 'si541c',
            tag: '',
            v: 0,
            enabled: true,
            defEn: true,
            vu: [],
            siaf: 0,
            sid: 3,
            slideItemThemeCounter: 0,
            presetData: [{
                presetId: '',
                presetType: 0,
                isOverridden: false
            }, {
                presetId: '',
                presetType: 4,
                isOverridden: false
            }, {
                presetId: '',
                presetType: 2,
                isOverridden: false
            }],
            widgetProps: '{"sizeNPos":{"top":196,"left":250,"width":300,"height":"auto"}}',
            parentGroup: 'si478',
            retainState: false,
            immo: false,
            apsn: 'Slide460',
            efph: {},
            eflh: [],
            iflbx: false,
            ipflbx: true,
            vt: '',
            rplm: {
                360: 0,
                600: 0,
                972: 0
            },
            rprm: {
                360: 0,
                600: 0,
                972: 0
            },
            rptm: {
                360: 0,
                600: 0,
                972: 0
            },
            rpbm: {
                360: 0,
                600: 0,
                972: 0
            },
            rpta: {
                360: 2,
                600: 2,
                972: 2
            },
            rptl: {
                360: 1,
                600: 1,
                972: 1
            },
            rpvt: {
                360: {
                    vt: '',
                    text: ''
                },
                600: {
                    vt: '',
                    text: ''
                },
                972: {
                    vt: '',
                    text: ''
                }

            },
            subType: '',
            text: '{"blocks":[{"key":"ah2dc","text":"Misserfolgstext eingeben","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":57,"style":"overridden:false"},{"offset":0,"length":57,"style":"opacity:1"},{"offset":0,"length":57,"style":"backgroundColor:unset"},{"offset":0,"length":57,"style":"defaultBackgroundColor:#5EFF67"},{"offset":0,"length":57,"style":"textHighlightEnable:false"},{"offset":0,"length":57,"style":"textOutlineEnable:false"},{"offset":0,"length":57,"style":"textShadowEnable:false"}],"entityRanges":[],"data":{"presetId":"text-caption_incorrect","listDepth":"0","listType":"S_Bullets08","listIndent":"100%","listSize":"100%","listColor":"#666666","overridden":"false"}}],"entityMap":{}}',
            isc: 1,
            trin: 0,
            trout: 0,
            bstin: 'si517',
            stl: [{
                stn: 'Normal',
                stt: 0,
                stsi: [541]
            }],
            stis: 0,
            bstiid: 517,
            sipst: 102,
            sicbs: true,
            sihhs: false,
            sihds: false,
            baseItemIdForPropertyFlow: 517,
            isDD: false
        },
        si541c: {
            b: [0, 0, 972, 48],
            fh: false,
            fw: false,
            uid: 541,
            iso: false,
            css: {
                360: {
                    l: '0.000%',
                    t: '0.000%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0.000%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0.000%',
                    lvID: -1,
                    w: '100.000%',
                    h: '7.895%',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                },
                600: {
                    l: '0.000%',
                    t: '0.000%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0.000%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0.000%',
                    lvID: -1,
                    w: '100.000%',
                    h: '7.895%',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                },
                972: {
                    l: '0.000%',
                    t: '0.000%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0.000%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0.000%',
                    lvID: -1,
                    w: '100.000%',
                    h: '7.895%',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                }

            },
            dn: 'si541',
            visible: 0,
            effectiveVi: 1,
            JSONEffectData: false,
            hms: false,
            hme: false,
            subt: 1,
            bc: '#c8e2ff',
            fe: true,
            fca: 1,
            fa: 100,
            path: 'M 0.000000 0.000000 L 972.000000 0.000000 L 972.000000 48.000000 L 0.000000 48.000000 Z ',
            svg: false,
            sde: false,
            scp: 0,
            sc: '#0080ff',
            sw: 1,
            ss: 0,
            sa: 1,
            se: false,
            vbwr: [-2, -2, 974, 50],
            vb: [-2, -2, 974, 50]
        },
        si552: {
            name: '',
            type: 612,
            from: 1,
            to: 90,
            rp: 0,
            rpa: 0,
            mdi: 'si552c',
            tag: '',
            v: 0,
            enabled: true,
            defEn: true,
            vu: [],
            siaf: 0,
            sid: 3,
            slideItemThemeCounter: 0,
            presetData: [{
                presetId: '',
                presetType: 0,
                isOverridden: false
            }, {
                presetId: '',
                presetType: 4,
                isOverridden: false
            }, {
                presetId: '',
                presetType: 2,
                isOverridden: false
            }],
            widgetProps: '{"sizeNPos":{"top":196,"left":250,"width":300,"height":"auto"}}',
            parentGroup: 'si478',
            retainState: false,
            immo: false,
            apsn: 'Slide460',
            efph: {},
            eflh: [],
            iflbx: false,
            ipflbx: true,
            vt: '',
            rplm: {
                360: 0,
                600: 0,
                972: 0
            },
            rprm: {
                360: 0,
                600: 0,
                972: 0
            },
            rptm: {
                360: 0,
                600: 0,
                972: 0
            },
            rpbm: {
                360: 0,
                600: 0,
                972: 0
            },
            rpta: {
                360: 2,
                600: 2,
                972: 2
            },
            rptl: {
                360: 1,
                600: 1,
                972: 1
            },
            rpvt: {
                360: {
                    vt: '',
                    text: ''
                },
                600: {
                    vt: '',
                    text: ''
                },
                972: {
                    vt: '',
                    text: ''
                }

            },
            subType: '',
            text: '{"blocks":[{"key":"ah2dc","text":"Hinweistext eingeben","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":57,"style":"overridden:false"},{"offset":0,"length":57,"style":"opacity:1"},{"offset":0,"length":57,"style":"backgroundColor:unset"},{"offset":0,"length":57,"style":"defaultBackgroundColor:#5EFF67"},{"offset":0,"length":57,"style":"textHighlightEnable:false"},{"offset":0,"length":57,"style":"textOutlineEnable:false"},{"offset":0,"length":57,"style":"textShadowEnable:false"}],"entityRanges":[],"data":{"presetId":"text-caption_incorrect","listDepth":"0","listType":"S_Bullets08","listIndent":"100%","listSize":"100%","listColor":"#666666","overridden":"false"}}],"entityMap":{}}',
            isc: 1,
            trin: 0,
            trout: 0,
            bstin: 'si517',
            stl: [{
                stn: 'Normal',
                stt: 0,
                stsi: [552]
            }],
            stis: 0,
            bstiid: 517,
            sipst: 103,
            sicbs: true,
            sihhs: false,
            sihds: false,
            baseItemIdForPropertyFlow: 517,
            isDD: false
        },
        si552c: {
            b: [0, 0, 972, 48],
            fh: false,
            fw: false,
            uid: 552,
            iso: false,
            css: {
                360: {
                    l: '0.000%',
                    t: '0.000%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0.000%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0.000%',
                    lvID: -1,
                    w: '100.000%',
                    h: '7.895%',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                },
                600: {
                    l: '0.000%',
                    t: '0.000%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0.000%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0.000%',
                    lvID: -1,
                    w: '100.000%',
                    h: '7.895%',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                },
                972: {
                    l: '0.000%',
                    t: '0.000%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0.000%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0.000%',
                    lvID: -1,
                    w: '100.000%',
                    h: '7.895%',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                }

            },
            dn: 'si552',
            visible: 0,
            effectiveVi: 1,
            JSONEffectData: false,
            hms: false,
            hme: false,
            subt: 1,
            bc: '#c8e2ff',
            fe: true,
            fca: 1,
            fa: 100,
            path: 'M 0.000000 0.000000 L 972.000000 0.000000 L 972.000000 48.000000 L 0.000000 48.000000 Z ',
            svg: false,
            sde: false,
            scp: 0,
            sc: '#0080ff',
            sw: 1,
            ss: 0,
            sa: 1,
            se: false,
            vbwr: [-2, -2, 974, 50],
            vb: [-2, -2, 974, 50]
        },
        si577: {
            name: 'Anweisungen_1',
            type: 612,
            from: 1,
            to: 90,
            rp: 0,
            rpa: 0,
            mdi: 'si577c',
            tag: 'slide-item-comment-box',
            v: 0,
            enabled: true,
            defEn: true,
            vu: [],
            siaf: 0,
            sid: 3,
            slideItemThemeCounter: 0,
            presetData: [{
                presetId: '',
                presetType: 0,
                isOverridden: false
            }, {
                presetId: '',
                presetType: 4,
                isOverridden: false
            }, {
                presetId: '',
                presetType: 2,
                isOverridden: false
            }],
            widgetProps: '{"currentState":"normal","normal":{"opacity":100,"padding":10,"editorState":{"blocks":[{"key":"4k0dr","text":"Auf Buch-Button klicken.","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":24,"style":"desktop-fontSize:20"},{"offset":0,"length":24,"style":"borderBottomStyle:none"},{"offset":0,"length":24,"style":"fontWeight:normal"},{"offset":0,"length":24,"style":"mobile-fontSize:20"},{"offset":0,"length":24,"style":"fontStyle:normal"},{"offset":0,"length":24,"style":"overridden:true"},{"offset":0,"length":24,"style":"tablet-fontSize:20"},{"offset":0,"length":24,"style":"fontStretch:normal"},{"offset":0,"length":24,"style":"fontType:regular"},{"offset":0,"length":24,"style":"fontFamily:SBB"},{"offset":0,"length":24,"style":"color:#FFFFFF"},{"offset":0,"length":24,"style":"lineHeight:135%"},{"offset":0,"length":24,"style":"letterSpacing:0%"},{"offset":0,"length":24,"style":"textTransform:none"},{"offset":0,"length":24,"style":"textDecoration:none"}],"entityRanges":[],"data":{"presetId":"text-comment-box","listDepth":"0","listType":"S_Bullets08","listIndent":"100 % ","listSize":"100 % ","overridden":"true","textAlign":"center"}}],"entityMap":{}},"shapePresetData":{"presetId":"cp_comment_box_shape_1_solid_style","fillEnable":true,"strokeEnable":false,"shadowEnable":false,"fillType":1},"overriddenProperties":[60005,"fillColor",60008,60004],"appearenceProperties":{"fill":{"color":"#ad00ffFF"},"shadow":{},"stroke":{}}},"shapeData":{"type":"rect","attributes":{"rx":"0"}},"sizeNPos":{"top":124.609375,"left":265.375,"width":245.45703125}}',
            parentGroup: 'si478',
            retainState: false,
            immo: false,
            apsn: 'Slide460',
            efph: {},
            eflh: [],
            iflbx: false,
            ipflbx: true,
            vt: '',
            rplm: {
                360: 0,
                600: 0,
                972: 0
            },
            rprm: {
                360: 0,
                600: 0,
                972: 0
            },
            rptm: {
                360: 0,
                600: 0,
                972: 0
            },
            rpbm: {
                360: 0,
                600: 0,
                972: 0
            },
            rpta: {
                360: 2,
                600: 2,
                972: 2
            },
            rptl: {
                360: 1,
                600: 1,
                972: 1
            },
            rpvt: {
                360: {
                    vt: '',
                    text: ''
                },
                600: {
                    vt: '',
                    text: ''
                },
                972: {
                    vt: '',
                    text: ''
                }

            },
            subType: '',
            text: '{"blocks":[{"key":"4k0dr","text":"Auf den Bildlaufbereich „“ klicken","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{"presetId":"text-comment-box","listDepth":"0","listType":"S_Bullets08","listIndent":"100 % ","listSize":"100 % ","overridden":"false"}}],"entityMap":{}}',
            adj: [3085.71, -6171.43, 3600],
            isco: 1,
            trin: 0,
            trout: 0,
            stl: [{
                stn: 'Normal',
                stt: 0,
                stsi: [577]
            }],
            stis: 0,
            bstiid: -1,
            sipst: 0,
            sicbs: false,
            sihhs: false,
            sihds: false,
            isDD: false
        },
        si577c: {
            b: [242, 166, 562, 266],
            fh: false,
            fw: false,
            uid: 577,
            iso: false,
            css: {
                360: {
                    l: '24.897%',
                    t: '27.303%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '24.897%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '27.303%',
                    lvID: -1,
                    w: '32.922%',
                    h: '16.447%',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                },
                600: {
                    l: '24.897%',
                    t: '27.303%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '24.897%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '27.303%',
                    lvID: -1,
                    w: '32.922%',
                    h: '16.447%',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                },
                972: {
                    l: '24.897%',
                    t: '27.303%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '24.897%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '27.303%',
                    lvID: -1,
                    w: '32.922%',
                    h: '16.447%',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                }

            },
            dn: 'si577',
            visible: 1,
            effectiveVi: 1,
            JSONEffectData: false,
            hms: false,
            hme: false,
            subt: 57,
            bc: '#ffffff',
            fe: true,
            fca: 1,
            fa: 100,
            path: '',
            svg: false,
            sde: false,
            scp: 0,
            sc: '#0080ff',
            sw: 1,
            ss: 0,
            sa: 1,
            se: false,
            vbwr: [-2, -2, 564, 268],
            vb: [-2, -2, 564, 268]
        },
        si588: {
            name: 'Maus_1',
            type: 12,
            from: 43,
            to: 90,
            rp: 0,
            rpa: 0,
            mdi: 'si588c',
            tag: 'slide-item-mouse-pointer',
            v: 0,
            enabled: true,
            defEn: true,
            vu: [],
            siaf: 1.4,
            sid: 1.6,
            slideItemThemeCounter: 0,
            presetData: [{
                presetId: '',
                presetType: -1,
                isOverridden: false
            }],
            widgetProps: '{"mouseMovementPathType":1,"mouseMovementSpeed":1,"mouseStraightPath":false,"scaleValue":"medium","mouseClickData":{"color":"#ad00ffFF","showMouseClick":true,"scaleValue":"medium"},"svgData":{"mousePointerType":0},"mousePathPoints":{"mouseStartPointX":0,"mouseStartPointY":0,"mouseEndPointX":241.84528459821425,"mouseEndPointY":145.9800502232143}}',
            parentGroup: 'si478',
            retainState: false,
            immo: false,
            apsn: 'Slide460',
            efph: {},
            eflh: [],
            iflbx: false,
            ipflbx: true,
            msa: '',
            trin: 0,
            trout: 0,
            isDD: false
        },
        si588c: {
            b: [248, 142, 265, 165],
            fh: false,
            fw: false,
            uid: 588,
            iso: false,
            css: {
                360: {
                    l: '25.514%',
                    t: '23.355%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '25.514%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '23.355%',
                    lvID: -1,
                    w: '17px',
                    h: '23px',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                },
                600: {
                    l: '25.514%',
                    t: '23.355%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '25.514%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '23.355%',
                    lvID: -1,
                    w: '17px',
                    h: '23px',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                },
                972: {
                    l: '25.514%',
                    t: '23.355%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '25.514%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '23.355%',
                    lvID: -1,
                    w: '17px',
                    h: '23px',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                }

            },
            sr: cp.fd,
            dn: 'si588',
            visible: 1,
            effectiveVi: 1,
            JSONEffectData: false,
            t: 1,
            sz: 0,
            mpt: 0,
            data: {
                c: '#0000ff',
                fca: 1,
                r: 12
            },
            sde: false,
            se: false,
            vbwr: [0, 0, 265, 165],
            vb: [0, 0, 265, 165]
        },
        Slide460: {
            lb: 'Start',
            id: 460,
            from: 1,
            to: 90,
            iols: 0,
            i360qs: false,
            sdu: 3,
            presetData: [{
                presetId: '',
                presetType: 3,
                isOverridden: false
            }],
            propTxtScaling: false,
            minFontSizeScaling: 14,
            useng: true,
            transition: {
                type: 0
            },
            mmot: false,
            mdi: 'Slide460c',
            st: 'Normal Slide',
            sk: 'Simulation',
            slideTag: '',
            type: 30,
            slideThemeCounter: 0,
            accProps: {},
            si: [{
                n: 'si486',
                t: 1268
            }],
            iph: [],
            v: false,
            canvasData: {
                bc: '#ffffff',
                fa: 1,
                fe: true,
                iso: false,
                se: false
            },
            bookmarks: [],
            qs: ''
        },
        Slide460c: {
            b: [0, 0, 0, 0],
            css: {},
            sr: cp.fd,
            uid: 460,
            dn: 'Slide460',
            visible: '1'
        },
        sf_646: {
            from: 1,
            to: 90,
            siaf: 0.03,
            sid: 2.97,
            mdi: 'sf_646c',
            apsn: 'Slide604',
            type: 64
        },
        sf_646Ad: {
            src: 'ar/KeyClick.mp3',
            from: 1,
            to: 90,
            du: 2
        },
        sf_646c: {
            id: 'sf_646c',
            b: [0, 0, 1, 14],
            l: 685,
            t: 164,
            dn: 'sf_646',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg',
            pkt: 1
        },
        sf_652: {
            from: 4,
            to: 90,
            siaf: 0.13,
            sid: 2.87,
            mdi: 'sf_652c',
            apsn: 'Slide604',
            type: 64
        },
        sf_652c: {
            id: 'sf_652c',
            b: [1, 0, 19, 14],
            l: 685,
            t: 164,
            dn: 'sf_652',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_656: {
            from: 4,
            to: 90,
            siaf: 0.13,
            sid: 2.87,
            mdi: 'sf_656c',
            apsn: 'Slide604',
            type: 64
        },
        sf_656c: {
            id: 'sf_656c',
            b: [20, 0, 16, 10],
            l: 705,
            t: 166,
            dn: 'sf_656',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_660: {
            from: 4,
            to: 90,
            siaf: 0.13,
            sid: 2.87,
            mdi: 'sf_660c',
            apsn: 'Slide604',
            type: 64
        },
        sf_660c: {
            id: 'sf_660c',
            b: [36, 0, 12, 12],
            l: 1072,
            t: 165,
            dn: 'sf_660',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_664: {
            from: 4,
            to: 90,
            siaf: 0.13,
            sid: 2.87,
            mdi: 'sf_664c',
            apsn: 'Slide604',
            type: 64
        },
        sf_664c: {
            id: 'sf_664c',
            b: [48, 0, 6, 1],
            l: 634,
            t: 236,
            dn: 'sf_664',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_668: {
            from: 4,
            to: 90,
            siaf: 0.13,
            sid: 2.87,
            mdi: 'sf_668c',
            apsn: 'Slide604',
            type: 64
        },
        sf_668c: {
            id: 'sf_668c',
            b: [54, 0, 128, 44],
            l: 640,
            t: 212,
            dn: 'sf_668',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_672: {
            from: 4,
            to: 90,
            siaf: 0.13,
            sid: 2.87,
            mdi: 'sf_672c',
            apsn: 'Slide604',
            type: 64
        },
        sf_672c: {
            id: 'sf_672c',
            b: [182, 0, 192, 25],
            l: 768,
            t: 212,
            dn: 'sf_672',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_676: {
            from: 4,
            to: 90,
            siaf: 0.13,
            sid: 2.87,
            mdi: 'sf_676c',
            apsn: 'Slide604',
            type: 64
        },
        sf_676c: {
            id: 'sf_676c',
            b: [374, 0, 134, 1],
            l: 960,
            t: 236,
            dn: 'sf_676',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_680: {
            from: 4,
            to: 90,
            siaf: 0.13,
            sid: 2.87,
            mdi: 'sf_680c',
            apsn: 'Slide604',
            type: 64
        },
        sf_680c: {
            id: 'sf_680c',
            b: [508, 0, 118, 64],
            l: 650,
            t: 256,
            dn: 'sf_680',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_684: {
            from: 4,
            to: 90,
            siaf: 0.13,
            sid: 2.87,
            mdi: 'sf_684c',
            apsn: 'Slide604',
            type: 64
        },
        sf_684c: {
            id: 'sf_684c',
            b: [626, 0, 64, 49],
            l: 768,
            t: 265,
            dn: 'sf_684',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_688: {
            from: 4,
            to: 90,
            siaf: 0.13,
            sid: 2.87,
            mdi: 'sf_688c',
            apsn: 'Slide604',
            type: 64
        },
        sf_688c: {
            id: 'sf_688c',
            b: [690, 0, 64, 48],
            l: 832,
            t: 266,
            dn: 'sf_688',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_692: {
            from: 4,
            to: 90,
            siaf: 0.13,
            sid: 2.87,
            mdi: 'sf_692c',
            apsn: 'Slide604',
            type: 64
        },
        sf_692c: {
            id: 'sf_692c',
            b: [754, 0, 64, 26],
            l: 896,
            t: 286,
            dn: 'sf_692',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_696: {
            from: 4,
            to: 90,
            siaf: 0.13,
            sid: 2.87,
            mdi: 'sf_696c',
            apsn: 'Slide604',
            type: 64
        },
        sf_696c: {
            id: 'sf_696c',
            b: [818, 0, 117, 48],
            l: 960,
            t: 263,
            dn: 'sf_696',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_700: {
            from: 4,
            to: 90,
            siaf: 0.13,
            sid: 2.87,
            mdi: 'sf_700c',
            apsn: 'Slide604',
            type: 64
        },
        sf_700c: {
            id: 'sf_700c',
            b: [935, 0, 101, 64],
            l: 650,
            t: 320,
            dn: 'sf_700',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_704: {
            from: 4,
            to: 90,
            siaf: 0.13,
            sid: 2.87,
            mdi: 'sf_704c',
            apsn: 'Slide604',
            type: 64
        },
        sf_704c: {
            id: 'sf_704c',
            b: [1036, 0, 117, 51],
            l: 651,
            t: 384,
            dn: 'sf_704',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_708: {
            from: 4,
            to: 90,
            siaf: 0.13,
            sid: 2.87,
            mdi: 'sf_708c',
            apsn: 'Slide604',
            type: 64
        },
        sf_708c: {
            id: 'sf_708c',
            b: [1153, 0, 64, 34],
            l: 768,
            t: 390,
            dn: 'sf_708',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_712: {
            from: 4,
            to: 90,
            siaf: 0.13,
            sid: 2.87,
            mdi: 'sf_712c',
            apsn: 'Slide604',
            type: 64
        },
        sf_712c: {
            id: 'sf_712c',
            b: [1217, 0, 64, 31],
            l: 832,
            t: 391,
            dn: 'sf_712',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_716: {
            from: 4,
            to: 90,
            siaf: 0.13,
            sid: 2.87,
            mdi: 'sf_716c',
            apsn: 'Slide604',
            type: 64
        },
        sf_716c: {
            id: 'sf_716c',
            b: [1281, 0, 18, 11],
            l: 896,
            t: 392,
            dn: 'sf_716',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_720: {
            from: 4,
            to: 90,
            siaf: 0.13,
            sid: 2.87,
            mdi: 'sf_720c',
            apsn: 'Slide604',
            type: 64
        },
        sf_720c: {
            id: 'sf_720c',
            b: [1299, 0, 80, 32],
            l: 997,
            t: 389,
            dn: 'sf_720',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_724: {
            from: 4,
            to: 90,
            siaf: 0.13,
            sid: 2.87,
            mdi: 'sf_724c',
            apsn: 'Slide604',
            type: 64
        },
        sf_724c: {
            id: 'sf_724c',
            b: [0, 64, 460, 1],
            l: 634,
            t: 496,
            dn: 'sf_724',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_728: {
            from: 4,
            to: 90,
            siaf: 0.13,
            sid: 2.87,
            mdi: 'sf_728c',
            apsn: 'Slide604',
            type: 64
        },
        sf_728c: {
            id: 'sf_728c',
            b: [460, 64, 53, 60],
            l: 651,
            t: 516,
            dn: 'sf_728',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_732: {
            from: 4,
            to: 90,
            siaf: 0.13,
            sid: 2.87,
            mdi: 'sf_732c',
            apsn: 'Slide604',
            type: 64
        },
        sf_732c: {
            id: 'sf_732c',
            b: [513, 64, 64, 26],
            l: 704,
            t: 550,
            dn: 'sf_732',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_736: {
            from: 4,
            to: 90,
            siaf: 0.13,
            sid: 2.87,
            mdi: 'sf_736c',
            apsn: 'Slide604',
            type: 64
        },
        sf_736c: {
            id: 'sf_736c',
            b: [577, 64, 62, 10],
            l: 768,
            t: 566,
            dn: 'sf_736',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_740: {
            from: 4,
            to: 90,
            siaf: 0.13,
            sid: 2.87,
            mdi: 'sf_740c',
            apsn: 'Slide604',
            type: 64
        },
        sf_740c: {
            id: 'sf_740c',
            b: [639, 64, 63, 10],
            l: 833,
            t: 566,
            dn: 'sf_740',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_744: {
            from: 4,
            to: 90,
            siaf: 0.13,
            sid: 2.87,
            mdi: 'sf_744c',
            apsn: 'Slide604',
            type: 64
        },
        sf_744c: {
            id: 'sf_744c',
            b: [702, 64, 64, 11],
            l: 896,
            t: 565,
            dn: 'sf_744',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_748: {
            from: 4,
            to: 90,
            siaf: 0.13,
            sid: 2.87,
            mdi: 'sf_748c',
            apsn: 'Slide604',
            type: 64
        },
        sf_748c: {
            id: 'sf_748c',
            b: [766, 64, 117, 12],
            l: 960,
            t: 564,
            dn: 'sf_748',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_752: {
            from: 4,
            to: 90,
            siaf: 0.13,
            sid: 2.87,
            mdi: 'sf_752c',
            apsn: 'Slide604',
            type: 64
        },
        sf_752c: {
            id: 'sf_752c',
            b: [883, 64, 117, 34],
            l: 651,
            t: 576,
            dn: 'sf_752',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_756: {
            from: 4,
            to: 90,
            siaf: 0.13,
            sid: 2.87,
            mdi: 'sf_756c',
            apsn: 'Slide604',
            type: 64
        },
        sf_756c: {
            id: 'sf_756c',
            b: [1000, 64, 64, 23],
            l: 768,
            t: 576,
            dn: 'sf_756',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_760: {
            from: 4,
            to: 90,
            siaf: 0.13,
            sid: 2.87,
            mdi: 'sf_760c',
            apsn: 'Slide604',
            type: 64
        },
        sf_760c: {
            id: 'sf_760c',
            b: [1064, 64, 64, 22],
            l: 832,
            t: 576,
            dn: 'sf_760',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_764: {
            from: 4,
            to: 90,
            siaf: 0.13,
            sid: 2.87,
            mdi: 'sf_764c',
            apsn: 'Slide604',
            type: 64
        },
        sf_764c: {
            id: 'sf_764c',
            b: [1128, 64, 64, 21],
            l: 896,
            t: 576,
            dn: 'sf_764',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_768: {
            from: 4,
            to: 90,
            siaf: 0.13,
            sid: 2.87,
            mdi: 'sf_768c',
            apsn: 'Slide604',
            type: 64
        },
        sf_768c: {
            id: 'sf_768c',
            b: [1192, 64, 117, 20],
            l: 960,
            t: 576,
            dn: 'sf_768',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_772: {
            from: 4,
            to: 90,
            siaf: 0.13,
            sid: 2.87,
            mdi: 'sf_772c',
            apsn: 'Slide604',
            type: 64
        },
        sf_772c: {
            id: 'sf_772c',
            b: [1309, 64, 100, 28],
            l: 651,
            t: 676,
            dn: 'sf_772',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_776: {
            from: 4,
            to: 90,
            siaf: 0.13,
            sid: 2.87,
            mdi: 'sf_776c',
            apsn: 'Slide604',
            type: 64
        },
        sf_776c: {
            id: 'sf_776c',
            b: [1409, 64, 61, 12],
            l: 768,
            t: 692,
            dn: 'sf_776',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_780: {
            from: 4,
            to: 90,
            siaf: 0.13,
            sid: 2.87,
            mdi: 'sf_780c',
            apsn: 'Slide604',
            type: 64
        },
        sf_780c: {
            id: 'sf_780c',
            b: [1470, 64, 127, 12],
            l: 833,
            t: 692,
            dn: 'sf_780',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_784: {
            from: 4,
            to: 90,
            siaf: 0.13,
            sid: 2.87,
            mdi: 'sf_784c',
            apsn: 'Slide604',
            type: 64
        },
        sf_784c: {
            id: 'sf_784c',
            b: [1597, 64, 117, 14],
            l: 960,
            t: 690,
            dn: 'sf_784',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_788: {
            from: 4,
            to: 90,
            siaf: 0.13,
            sid: 2.87,
            mdi: 'sf_788c',
            apsn: 'Slide604',
            type: 64
        },
        sf_788c: {
            id: 'sf_788c',
            b: [0, 124, 117, 17],
            l: 651,
            t: 704,
            dn: 'sf_788',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_792: {
            from: 4,
            to: 90,
            siaf: 0.13,
            sid: 2.87,
            mdi: 'sf_792c',
            apsn: 'Slide604',
            type: 64
        },
        sf_792c: {
            id: 'sf_792c',
            b: [117, 124, 120, 8],
            l: 768,
            t: 713,
            dn: 'sf_792',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_796: {
            from: 4,
            to: 90,
            siaf: 0.13,
            sid: 2.87,
            mdi: 'sf_796c',
            apsn: 'Slide604',
            type: 64
        },
        sf_796c: {
            id: 'sf_796c',
            b: [237, 124, 4, 2],
            l: 954,
            t: 704,
            dn: 'sf_796',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_800: {
            from: 4,
            to: 90,
            siaf: 0.13,
            sid: 2.87,
            mdi: 'sf_800c',
            apsn: 'Slide604',
            type: 64
        },
        sf_800c: {
            id: 'sf_800c',
            b: [241, 124, 27, 17],
            l: 997,
            t: 704,
            dn: 'sf_800',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_804: {
            from: 4,
            to: 90,
            siaf: 0.13,
            sid: 2.87,
            mdi: 'sf_804c',
            apsn: 'Slide604',
            type: 64
        },
        sf_804c: {
            id: 'sf_804c',
            b: [268, 124, 52, 17],
            l: 1025,
            t: 704,
            dn: 'sf_804',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_810: {
            from: 6,
            to: 90,
            siaf: 0.2,
            sid: 2.8,
            mdi: 'sf_810c',
            apsn: 'Slide604',
            type: 64
        },
        sf_810Ad: {
            src: 'ar/KeyClick.mp3',
            from: 6,
            to: 90,
            du: 2
        },
        sf_810c: {
            id: 'sf_810c',
            b: [320, 124, 344, 50],
            l: 651,
            t: 334,
            dn: 'sf_810',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg',
            pkt: 1
        },
        sf_814: {
            from: 6,
            to: 90,
            siaf: 0.2,
            sid: 2.8,
            mdi: 'sf_814c',
            apsn: 'Slide604',
            type: 64
        },
        sf_814c: {
            id: 'sf_814c',
            b: [664, 124, 245, 64],
            l: 651,
            t: 384,
            dn: 'sf_814',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_818: {
            from: 6,
            to: 90,
            siaf: 0.2,
            sid: 2.8,
            mdi: 'sf_818c',
            apsn: 'Slide604',
            type: 64
        },
        sf_818c: {
            id: 'sf_818c',
            b: [909, 124, 64, 19],
            l: 896,
            t: 384,
            dn: 'sf_818',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_822: {
            from: 6,
            to: 90,
            siaf: 0.2,
            sid: 2.8,
            mdi: 'sf_822c',
            apsn: 'Slide604',
            type: 64
        },
        sf_822c: {
            id: 'sf_822c',
            b: [973, 124, 64, 64],
            l: 960,
            t: 384,
            dn: 'sf_822',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_826: {
            from: 6,
            to: 90,
            siaf: 0.2,
            sid: 2.8,
            mdi: 'sf_826c',
            apsn: 'Slide604',
            type: 64
        },
        sf_826c: {
            id: 'sf_826c',
            b: [1037, 124, 53, 59],
            l: 1024,
            t: 389,
            dn: 'sf_826',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_830: {
            from: 6,
            to: 90,
            siaf: 0.2,
            sid: 2.8,
            mdi: 'sf_830c',
            apsn: 'Slide604',
            type: 64
        },
        sf_830c: {
            id: 'sf_830c',
            b: [1090, 124, 6, 1],
            l: 634,
            t: 496,
            dn: 'sf_830',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_834: {
            from: 6,
            to: 90,
            siaf: 0.2,
            sid: 2.8,
            mdi: 'sf_834c',
            apsn: 'Slide604',
            type: 64
        },
        sf_834c: {
            id: 'sf_834c',
            b: [1096, 124, 448, 49],
            l: 640,
            t: 448,
            dn: 'sf_834',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_838: {
            from: 6,
            to: 90,
            siaf: 0.2,
            sid: 2.8,
            mdi: 'sf_838c',
            apsn: 'Slide604',
            type: 64
        },
        sf_838c: {
            id: 'sf_838c',
            b: [1544, 124, 6, 1],
            l: 1088,
            t: 496,
            dn: 'sf_838',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_842: {
            from: 6,
            to: 90,
            siaf: 0.2,
            sid: 2.8,
            mdi: 'sf_842c',
            apsn: 'Slide604',
            type: 64
        },
        sf_842c: {
            id: 'sf_842c',
            b: [0, 188, 426, 60],
            l: 651,
            t: 516,
            dn: 'sf_842',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_846: {
            from: 6,
            to: 90,
            siaf: 0.2,
            sid: 2.8,
            mdi: 'sf_846c',
            apsn: 'Slide604',
            type: 64
        },
        sf_846c: {
            id: 'sf_846c',
            b: [426, 188, 181, 64],
            l: 651,
            t: 576,
            dn: 'sf_846',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_850: {
            from: 6,
            to: 90,
            siaf: 0.2,
            sid: 2.8,
            mdi: 'sf_850c',
            apsn: 'Slide604',
            type: 64
        },
        sf_850c: {
            id: 'sf_850c',
            b: [607, 188, 64, 22],
            l: 832,
            t: 576,
            dn: 'sf_850',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_854: {
            from: 6,
            to: 90,
            siaf: 0.2,
            sid: 2.8,
            mdi: 'sf_854c',
            apsn: 'Slide604',
            type: 64
        },
        sf_854c: {
            id: 'sf_854c',
            b: [671, 188, 64, 21],
            l: 896,
            t: 576,
            dn: 'sf_854',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_858: {
            from: 6,
            to: 90,
            siaf: 0.2,
            sid: 2.8,
            mdi: 'sf_858c',
            apsn: 'Slide604',
            type: 64
        },
        sf_858c: {
            id: 'sf_858c',
            b: [735, 188, 117, 20],
            l: 960,
            t: 576,
            dn: 'sf_858',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_862: {
            from: 6,
            to: 90,
            siaf: 0.2,
            sid: 2.8,
            mdi: 'sf_862c',
            apsn: 'Slide604',
            type: 64
        },
        sf_862c: {
            id: 'sf_862c',
            b: [852, 188, 6, 1],
            l: 634,
            t: 680,
            dn: 'sf_862',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_866: {
            from: 6,
            to: 90,
            siaf: 0.2,
            sid: 2.8,
            mdi: 'sf_866c',
            apsn: 'Slide604',
            type: 64
        },
        sf_866c: {
            id: 'sf_866c',
            b: [858, 188, 192, 64],
            l: 640,
            t: 640,
            dn: 'sf_866',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_870: {
            from: 6,
            to: 90,
            siaf: 0.2,
            sid: 2.8,
            mdi: 'sf_870c',
            apsn: 'Slide604',
            type: 64
        },
        sf_870c: {
            id: 'sf_870c',
            b: [1050, 188, 256, 24],
            l: 832,
            t: 680,
            dn: 'sf_870',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_874: {
            from: 6,
            to: 90,
            siaf: 0.2,
            sid: 2.8,
            mdi: 'sf_874c',
            apsn: 'Slide604',
            type: 64
        },
        sf_874c: {
            id: 'sf_874c',
            b: [1306, 188, 6, 1],
            l: 1088,
            t: 680,
            dn: 'sf_874',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_878: {
            from: 6,
            to: 90,
            siaf: 0.2,
            sid: 2.8,
            mdi: 'sf_878c',
            apsn: 'Slide604',
            type: 64
        },
        sf_878c: {
            id: 'sf_878c',
            b: [1312, 188, 117, 17],
            l: 651,
            t: 704,
            dn: 'sf_878',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_882: {
            from: 6,
            to: 90,
            siaf: 0.2,
            sid: 2.8,
            mdi: 'sf_882c',
            apsn: 'Slide604',
            type: 64
        },
        sf_882c: {
            id: 'sf_882c',
            b: [1429, 188, 120, 8],
            l: 768,
            t: 713,
            dn: 'sf_882',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_886: {
            from: 6,
            to: 90,
            siaf: 0.2,
            sid: 2.8,
            mdi: 'sf_886c',
            apsn: 'Slide604',
            type: 64
        },
        sf_886c: {
            id: 'sf_886c',
            b: [1549, 188, 4, 2],
            l: 954,
            t: 704,
            dn: 'sf_886',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_890: {
            from: 6,
            to: 90,
            siaf: 0.2,
            sid: 2.8,
            mdi: 'sf_890c',
            apsn: 'Slide604',
            type: 64
        },
        sf_890c: {
            id: 'sf_890c',
            b: [1553, 188, 27, 17],
            l: 997,
            t: 704,
            dn: 'sf_890',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_894: {
            from: 6,
            to: 90,
            siaf: 0.2,
            sid: 2.8,
            mdi: 'sf_894c',
            apsn: 'Slide604',
            type: 64
        },
        sf_894c: {
            id: 'sf_894c',
            b: [1580, 188, 52, 17],
            l: 1025,
            t: 704,
            dn: 'sf_894',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_902: {
            from: 10,
            to: 90,
            siaf: 0.33,
            sid: 2.67,
            mdi: 'sf_902c',
            apsn: 'Slide604',
            type: 64
        },
        sf_902Ad: {
            src: 'ar/KeyClick.mp3',
            from: 10,
            to: 90,
            du: 2
        },
        sf_902c: {
            id: 'sf_902c',
            b: [1632, 188, 9, 14],
            l: 691,
            t: 164,
            dn: 'sf_902',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg',
            pkt: 1
        },
        sf_906: {
            from: 10,
            to: 90,
            siaf: 0.33,
            sid: 2.67,
            mdi: 'sf_906c',
            apsn: 'Slide604',
            type: 64
        },
        sf_906c: {
            id: 'sf_906c',
            b: [1641, 188, 42, 44],
            l: 658,
            t: 522,
            dn: 'sf_906',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_910: {
            from: 10,
            to: 90,
            siaf: 0.33,
            sid: 2.67,
            mdi: 'sf_910c',
            apsn: 'Slide604',
            type: 64
        },
        sf_910c: {
            id: 'sf_910c',
            b: [0, 252, 103, 40],
            l: 729,
            t: 524,
            dn: 'sf_910',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_914: {
            from: 10,
            to: 90,
            siaf: 0.33,
            sid: 2.67,
            mdi: 'sf_914c',
            apsn: 'Slide604',
            type: 64
        },
        sf_914c: {
            id: 'sf_914c',
            b: [103, 252, 7, 32],
            l: 832,
            t: 528,
            dn: 'sf_914',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_918: {
            from: 10,
            to: 90,
            siaf: 0.33,
            sid: 2.67,
            mdi: 'sf_918c',
            apsn: 'Slide604',
            type: 64
        },
        sf_918c: {
            id: 'sf_918c',
            b: [110, 252, 44, 4],
            l: 1017,
            t: 541,
            dn: 'sf_918',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_924: {
            from: 13,
            to: 90,
            siaf: 0.43,
            sid: 2.57,
            mdi: 'sf_924c',
            apsn: 'Slide604',
            type: 64
        },
        sf_924c: {
            id: 'sf_924c',
            b: [154, 252, 6, 14],
            l: 698,
            t: 164,
            dn: 'sf_924',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_928: {
            from: 13,
            to: 90,
            siaf: 0.43,
            sid: 2.57,
            mdi: 'sf_928c',
            apsn: 'Slide604',
            type: 64
        },
        sf_928c: {
            id: 'sf_928c',
            b: [160, 252, 2, 8],
            l: 704,
            t: 167,
            dn: 'sf_928',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_932: {
            from: 13,
            to: 90,
            siaf: 0.43,
            sid: 2.57,
            mdi: 'sf_932c',
            apsn: 'Slide604',
            type: 64
        },
        sf_932c: {
            id: 'sf_932c',
            b: [162, 252, 48, 41],
            l: 651,
            t: 215,
            dn: 'sf_932',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_936: {
            from: 13,
            to: 90,
            siaf: 0.43,
            sid: 2.57,
            mdi: 'sf_936c',
            apsn: 'Slide604',
            type: 64
        },
        sf_936c: {
            id: 'sf_936c',
            b: [210, 252, 10, 7],
            l: 741,
            t: 249,
            dn: 'sf_936',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_940: {
            from: 13,
            to: 90,
            siaf: 0.43,
            sid: 2.57,
            mdi: 'sf_940c',
            apsn: 'Slide604',
            type: 64
        },
        sf_940c: {
            id: 'sf_940c',
            b: [220, 252, 117, 53],
            l: 651,
            t: 256,
            dn: 'sf_940',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_944: {
            from: 13,
            to: 90,
            siaf: 0.43,
            sid: 2.57,
            mdi: 'sf_944c',
            apsn: 'Slide604',
            type: 64
        },
        sf_944c: {
            id: 'sf_944c',
            b: [337, 252, 128, 33],
            l: 768,
            t: 265,
            dn: 'sf_944',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_948: {
            from: 13,
            to: 90,
            siaf: 0.43,
            sid: 2.57,
            mdi: 'sf_948c',
            apsn: 'Slide604',
            type: 64
        },
        sf_948c: {
            id: 'sf_948c',
            b: [465, 252, 64, 31],
            l: 896,
            t: 265,
            dn: 'sf_948',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_952: {
            from: 13,
            to: 90,
            siaf: 0.43,
            sid: 2.57,
            mdi: 'sf_952c',
            apsn: 'Slide604',
            type: 64
        },
        sf_952c: {
            id: 'sf_952c',
            b: [529, 252, 19, 10],
            l: 960,
            t: 286,
            dn: 'sf_952',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_956: {
            from: 13,
            to: 90,
            siaf: 0.43,
            sid: 2.57,
            mdi: 'sf_956c',
            apsn: 'Slide604',
            type: 64
        },
        sf_956c: {
            id: 'sf_956c',
            b: [548, 252, 56, 50],
            l: 1011,
            t: 334,
            dn: 'sf_956',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_960: {
            from: 13,
            to: 90,
            siaf: 0.43,
            sid: 2.57,
            mdi: 'sf_960c',
            apsn: 'Slide604',
            type: 64
        },
        sf_960c: {
            id: 'sf_960c',
            b: [604, 252, 173, 42],
            l: 651,
            t: 406,
            dn: 'sf_960',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_964: {
            from: 13,
            to: 90,
            siaf: 0.43,
            sid: 2.57,
            mdi: 'sf_964c',
            apsn: 'Slide604',
            type: 64
        },
        sf_964c: {
            id: 'sf_964c',
            b: [777, 252, 5, 1],
            l: 833,
            t: 447,
            dn: 'sf_964',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_968: {
            from: 13,
            to: 90,
            siaf: 0.43,
            sid: 2.57,
            mdi: 'sf_968c',
            apsn: 'Slide604',
            type: 64
        },
        sf_968c: {
            id: 'sf_968c',
            b: [782, 252, 80, 64],
            l: 997,
            t: 384,
            dn: 'sf_968',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_972: {
            from: 13,
            to: 90,
            siaf: 0.43,
            sid: 2.57,
            mdi: 'sf_972c',
            apsn: 'Slide604',
            type: 64
        },
        sf_972c: {
            id: 'sf_972c',
            b: [862, 252, 6, 1],
            l: 634,
            t: 498,
            dn: 'sf_972',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_976: {
            from: 13,
            to: 90,
            siaf: 0.43,
            sid: 2.57,
            mdi: 'sf_976c',
            apsn: 'Slide604',
            type: 64
        },
        sf_976c: {
            id: 'sf_976c',
            b: [868, 252, 448, 51],
            l: 640,
            t: 448,
            dn: 'sf_976',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_980: {
            from: 13,
            to: 90,
            siaf: 0.43,
            sid: 2.57,
            mdi: 'sf_980c',
            apsn: 'Slide604',
            type: 64
        },
        sf_980c: {
            id: 'sf_980c',
            b: [1316, 252, 6, 1],
            l: 1088,
            t: 498,
            dn: 'sf_980',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_984: {
            from: 13,
            to: 90,
            siaf: 0.43,
            sid: 2.57,
            mdi: 'sf_984c',
            apsn: 'Slide604',
            type: 64
        },
        sf_984c: {
            id: 'sf_984c',
            b: [0, 316, 426, 60],
            l: 651,
            t: 516,
            dn: 'sf_984',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_988: {
            from: 13,
            to: 90,
            siaf: 0.43,
            sid: 2.57,
            mdi: 'sf_988c',
            apsn: 'Slide604',
            type: 64
        },
        sf_988c: {
            id: 'sf_988c',
            b: [426, 316, 180, 64],
            l: 651,
            t: 576,
            dn: 'sf_988',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_992: {
            from: 13,
            to: 90,
            siaf: 0.43,
            sid: 2.57,
            mdi: 'sf_992c',
            apsn: 'Slide604',
            type: 64
        },
        sf_992c: {
            id: 'sf_992c',
            b: [606, 316, 63, 6],
            l: 833,
            t: 576,
            dn: 'sf_992',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_996: {
            from: 13,
            to: 90,
            siaf: 0.43,
            sid: 2.57,
            mdi: 'sf_996c',
            apsn: 'Slide604',
            type: 64
        },
        sf_996c: {
            id: 'sf_996c',
            b: [669, 316, 40, 4],
            l: 896,
            t: 576,
            dn: 'sf_996',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_1000: {
            from: 13,
            to: 90,
            siaf: 0.43,
            sid: 2.57,
            mdi: 'sf_1000c',
            apsn: 'Slide604',
            type: 64
        },
        sf_1000c: {
            id: 'sf_1000c',
            b: [709, 316, 80, 22],
            l: 997,
            t: 576,
            dn: 'sf_1000',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_1004: {
            from: 13,
            to: 90,
            siaf: 0.43,
            sid: 2.57,
            mdi: 'sf_1004c',
            apsn: 'Slide604',
            type: 64
        },
        sf_1004c: {
            id: 'sf_1004c',
            b: [789, 316, 6, 40],
            l: 634,
            t: 641,
            dn: 'sf_1004',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_1008: {
            from: 13,
            to: 90,
            siaf: 0.43,
            sid: 2.57,
            mdi: 'sf_1008c',
            apsn: 'Slide604',
            type: 64
        },
        sf_1008c: {
            id: 'sf_1008c',
            b: [795, 316, 128, 64],
            l: 640,
            t: 640,
            dn: 'sf_1008',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_1012: {
            from: 13,
            to: 90,
            siaf: 0.43,
            sid: 2.57,
            mdi: 'sf_1012c',
            apsn: 'Slide604',
            type: 64
        },
        sf_1012c: {
            id: 'sf_1012c',
            b: [923, 316, 64, 41],
            l: 768,
            t: 640,
            dn: 'sf_1012',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_1016: {
            from: 13,
            to: 90,
            siaf: 0.43,
            sid: 2.57,
            mdi: 'sf_1016c',
            apsn: 'Slide604',
            type: 64
        },
        sf_1016c: {
            id: 'sf_1016c',
            b: [987, 316, 262, 40],
            l: 832,
            t: 641,
            dn: 'sf_1016',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_1020: {
            from: 13,
            to: 90,
            siaf: 0.43,
            sid: 2.57,
            mdi: 'sf_1020c',
            apsn: 'Slide604',
            type: 64
        },
        sf_1020c: {
            id: 'sf_1020c',
            b: [1249, 316, 50, 17],
            l: 651,
            t: 704,
            dn: 'sf_1020',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_1024: {
            from: 13,
            to: 90,
            siaf: 0.43,
            sid: 2.57,
            mdi: 'sf_1024c',
            apsn: 'Slide604',
            type: 64
        },
        sf_1024c: {
            id: 'sf_1024c',
            b: [1299, 316, 34, 17],
            l: 734,
            t: 704,
            dn: 'sf_1024',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_1028: {
            from: 13,
            to: 90,
            siaf: 0.43,
            sid: 2.57,
            mdi: 'sf_1028c',
            apsn: 'Slide604',
            type: 64
        },
        sf_1028c: {
            id: 'sf_1028c',
            b: [1333, 316, 187, 10],
            l: 768,
            t: 711,
            dn: 'sf_1028',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_1032: {
            from: 13,
            to: 90,
            siaf: 0.43,
            sid: 2.57,
            mdi: 'sf_1032c',
            apsn: 'Slide604',
            type: 64
        },
        sf_1032c: {
            id: 'sf_1032c',
            b: [1520, 316, 80, 12],
            l: 997,
            t: 709,
            dn: 'sf_1032',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_1038: {
            from: 15,
            to: 90,
            siaf: 0.5,
            sid: 2.5,
            mdi: 'sf_1038c',
            apsn: 'Slide604',
            type: 64
        },
        sf_1038Ad: {
            src: 'ar/KeyClick.mp3',
            from: 15,
            to: 90,
            du: 2
        },
        sf_1038c: {
            id: 'sf_1038c',
            b: [1600, 316, 1, 14],
            l: 709,
            t: 164,
            dn: 'sf_1038',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg',
            pkt: 1
        },
        sf_1044: {
            from: 17,
            to: 90,
            siaf: 0.57,
            sid: 2.43,
            mdi: 'sf_1044c',
            apsn: 'Slide604',
            type: 64
        },
        sf_1044c: {
            id: 'sf_1044c',
            b: [1601, 316, 16, 16],
            l: 1031,
            t: 354,
            dn: 'sf_1044',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_1050: {
            from: 19,
            to: 90,
            siaf: 0.63,
            sid: 2.37,
            mdi: 'sf_1050c',
            apsn: 'Slide604',
            type: 64
        },
        sf_1050Ad: {
            src: 'ar/KeyClick.mp3',
            from: 19,
            to: 90,
            du: 2
        },
        sf_1050c: {
            id: 'sf_1050c',
            b: [1617, 316, 9, 14],
            l: 709,
            t: 164,
            dn: 'sf_1050',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg',
            pkt: 1
        },
        sf_1054: {
            from: 19,
            to: 90,
            siaf: 0.63,
            sid: 2.37,
            mdi: 'sf_1054c',
            apsn: 'Slide604',
            type: 64
        },
        sf_1054c: {
            id: 'sf_1054c',
            b: [1626, 316, 44, 42],
            l: 657,
            t: 341,
            dn: 'sf_1054',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_1058: {
            from: 19,
            to: 90,
            siaf: 0.63,
            sid: 2.37,
            mdi: 'sf_1058c',
            apsn: 'Slide604',
            type: 64
        },
        sf_1058c: {
            id: 'sf_1058c',
            b: [1670, 316, 44, 14],
            l: 729,
            t: 355,
            dn: 'sf_1058',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_1062: {
            from: 19,
            to: 90,
            siaf: 0.63,
            sid: 2.37,
            mdi: 'sf_1062c',
            apsn: 'Slide604',
            type: 64
        },
        sf_1062c: {
            id: 'sf_1062c',
            b: [1714, 316, 20, 26],
            l: 876,
            t: 348,
            dn: 'sf_1062',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_1066: {
            from: 19,
            to: 90,
            siaf: 0.63,
            sid: 2.37,
            mdi: 'sf_1066c',
            apsn: 'Slide604',
            type: 64
        },
        sf_1066c: {
            id: 'sf_1066c',
            b: [0, 380, 64, 23],
            l: 896,
            t: 348,
            dn: 'sf_1066',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_1070: {
            from: 19,
            to: 90,
            siaf: 0.63,
            sid: 2.37,
            mdi: 'sf_1070c',
            apsn: 'Slide604',
            type: 64
        },
        sf_1070c: {
            id: 'sf_1070c',
            b: [64, 380, 64, 18],
            l: 960,
            t: 353,
            dn: 'sf_1070',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_1074: {
            from: 19,
            to: 90,
            siaf: 0.63,
            sid: 2.37,
            mdi: 'sf_1074c',
            apsn: 'Slide604',
            type: 64
        },
        sf_1074c: {
            id: 'sf_1074c',
            b: [128, 380, 37, 16],
            l: 1024,
            t: 354,
            dn: 'sf_1074',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_1078: {
            from: 19,
            to: 90,
            siaf: 0.63,
            sid: 2.37,
            mdi: 'sf_1078c',
            apsn: 'Slide604',
            type: 64
        },
        sf_1078c: {
            id: 'sf_1078c',
            b: [165, 380, 44, 26],
            l: 657,
            t: 421,
            dn: 'sf_1078',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_1082: {
            from: 19,
            to: 90,
            siaf: 0.63,
            sid: 2.37,
            mdi: 'sf_1082c',
            apsn: 'Slide604',
            type: 64
        },
        sf_1082c: {
            id: 'sf_1082c',
            b: [209, 380, 23, 10],
            l: 729,
            t: 428,
            dn: 'sf_1082',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_1086: {
            from: 19,
            to: 90,
            siaf: 0.63,
            sid: 2.37,
            mdi: 'sf_1086c',
            apsn: 'Slide604',
            type: 64
        },
        sf_1086c: {
            id: 'sf_1086c',
            b: [232, 380, 3, 2],
            l: 768,
            t: 433,
            dn: 'sf_1086',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_1092: {
            from: 22,
            to: 90,
            siaf: 0.73,
            sid: 2.27,
            mdi: 'sf_1092c',
            apsn: 'Slide604',
            type: 64
        },
        sf_1092c: {
            id: 'sf_1092c',
            b: [235, 380, 44, 42],
            l: 657,
            t: 341,
            dn: 'sf_1092',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_1096: {
            from: 22,
            to: 90,
            siaf: 0.73,
            sid: 2.27,
            mdi: 'sf_1096c',
            apsn: 'Slide604',
            type: 64
        },
        sf_1096c: {
            id: 'sf_1096c',
            b: [279, 380, 103, 44],
            l: 729,
            t: 340,
            dn: 'sf_1096',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_1100: {
            from: 22,
            to: 90,
            siaf: 0.73,
            sid: 2.27,
            mdi: 'sf_1100c',
            apsn: 'Slide604',
            type: 64
        },
        sf_1100c: {
            id: 'sf_1100c',
            b: [382, 380, 64, 27],
            l: 832,
            t: 348,
            dn: 'sf_1100',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_1104: {
            from: 22,
            to: 90,
            siaf: 0.73,
            sid: 2.27,
            mdi: 'sf_1104c',
            apsn: 'Slide604',
            type: 64
        },
        sf_1104c: {
            id: 'sf_1104c',
            b: [446, 380, 64, 23],
            l: 896,
            t: 348,
            dn: 'sf_1104',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_1108: {
            from: 22,
            to: 90,
            siaf: 0.73,
            sid: 2.27,
            mdi: 'sf_1108c',
            apsn: 'Slide604',
            type: 64
        },
        sf_1108c: {
            id: 'sf_1108c',
            b: [510, 380, 64, 18],
            l: 960,
            t: 353,
            dn: 'sf_1108',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_1112: {
            from: 22,
            to: 90,
            siaf: 0.73,
            sid: 2.27,
            mdi: 'sf_1112c',
            apsn: 'Slide604',
            type: 64
        },
        sf_1112c: {
            id: 'sf_1112c',
            b: [574, 380, 37, 16],
            l: 1024,
            t: 354,
            dn: 'sf_1112',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_1116: {
            from: 22,
            to: 90,
            siaf: 0.73,
            sid: 2.27,
            mdi: 'sf_1116c',
            apsn: 'Slide604',
            type: 64
        },
        sf_1116c: {
            id: 'sf_1116c',
            b: [611, 380, 44, 26],
            l: 657,
            t: 421,
            dn: 'sf_1116',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_1120: {
            from: 22,
            to: 90,
            siaf: 0.73,
            sid: 2.27,
            mdi: 'sf_1120c',
            apsn: 'Slide604',
            type: 64
        },
        sf_1120c: {
            id: 'sf_1120c',
            b: [655, 380, 39, 26],
            l: 729,
            t: 420,
            dn: 'sf_1120',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_1124: {
            from: 22,
            to: 90,
            siaf: 0.73,
            sid: 2.27,
            mdi: 'sf_1124c',
            apsn: 'Slide604',
            type: 64
        },
        sf_1124c: {
            id: 'sf_1124c',
            b: [694, 380, 5, 23],
            l: 768,
            t: 420,
            dn: 'sf_1124',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_1128: {
            from: 22,
            to: 90,
            siaf: 0.73,
            sid: 2.27,
            mdi: 'sf_1128c',
            apsn: 'Slide604',
            type: 64
        },
        sf_1128c: {
            id: 'sf_1128c',
            b: [699, 380, 6, 1],
            l: 634,
            t: 498,
            dn: 'sf_1128',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_1132: {
            from: 22,
            to: 90,
            siaf: 0.73,
            sid: 2.27,
            mdi: 'sf_1132c',
            apsn: 'Slide604',
            type: 64
        },
        sf_1132c: {
            id: 'sf_1132c',
            b: [705, 380, 128, 14],
            l: 640,
            t: 498,
            dn: 'sf_1132',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_1136: {
            from: 22,
            to: 90,
            siaf: 0.73,
            sid: 2.27,
            mdi: 'sf_1136c',
            apsn: 'Slide604',
            type: 64
        },
        sf_1136c: {
            id: 'sf_1136c',
            b: [833, 380, 326, 1],
            l: 768,
            t: 498,
            dn: 'sf_1136',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_1140: {
            from: 22,
            to: 90,
            siaf: 0.73,
            sid: 2.27,
            mdi: 'sf_1140c',
            apsn: 'Slide604',
            type: 64
        },
        sf_1140c: {
            id: 'sf_1140c',
            b: [1159, 380, 117, 64],
            l: 651,
            t: 512,
            dn: 'sf_1140',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_1144: {
            from: 22,
            to: 90,
            siaf: 0.73,
            sid: 2.27,
            mdi: 'sf_1144c',
            apsn: 'Slide604',
            type: 64
        },
        sf_1144c: {
            id: 'sf_1144c',
            b: [1276, 380, 128, 57],
            l: 768,
            t: 519,
            dn: 'sf_1144',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_1148: {
            from: 22,
            to: 90,
            siaf: 0.73,
            sid: 2.27,
            mdi: 'sf_1148c',
            apsn: 'Slide604',
            type: 64
        },
        sf_1148c: {
            id: 'sf_1148c',
            b: [1404, 380, 39, 54],
            l: 896,
            t: 522,
            dn: 'sf_1148',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_1152: {
            from: 22,
            to: 90,
            siaf: 0.73,
            sid: 2.27,
            mdi: 'sf_1152c',
            apsn: 'Slide604',
            type: 64
        },
        sf_1152c: {
            id: 'sf_1152c',
            b: [1443, 380, 80, 59],
            l: 997,
            t: 517,
            dn: 'sf_1152',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_1156: {
            from: 22,
            to: 90,
            siaf: 0.73,
            sid: 2.27,
            mdi: 'sf_1156c',
            apsn: 'Slide604',
            type: 64
        },
        sf_1156c: {
            id: 'sf_1156c',
            b: [0, 444, 426, 64],
            l: 651,
            t: 576,
            dn: 'sf_1156',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_1160: {
            from: 22,
            to: 90,
            siaf: 0.73,
            sid: 2.27,
            mdi: 'sf_1160c',
            apsn: 'Slide604',
            type: 64
        },
        sf_1160c: {
            id: 'sf_1160c',
            b: [426, 444, 6, 1],
            l: 634,
            t: 641,
            dn: 'sf_1160',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_1164: {
            from: 22,
            to: 90,
            siaf: 0.73,
            sid: 2.27,
            mdi: 'sf_1164c',
            apsn: 'Slide604',
            type: 64
        },
        sf_1164c: {
            id: 'sf_1164c',
            b: [432, 444, 192, 64],
            l: 640,
            t: 640,
            dn: 'sf_1164',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_1168: {
            from: 22,
            to: 90,
            siaf: 0.73,
            sid: 2.27,
            mdi: 'sf_1168c',
            apsn: 'Slide604',
            type: 64
        },
        sf_1168c: {
            id: 'sf_1168c',
            b: [624, 444, 256, 4],
            l: 832,
            t: 640,
            dn: 'sf_1168',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_1172: {
            from: 22,
            to: 90,
            siaf: 0.73,
            sid: 2.27,
            mdi: 'sf_1172c',
            apsn: 'Slide604',
            type: 64
        },
        sf_1172c: {
            id: 'sf_1172c',
            b: [880, 444, 6, 1],
            l: 1088,
            t: 641,
            dn: 'sf_1172',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_1176: {
            from: 22,
            to: 90,
            siaf: 0.73,
            sid: 2.27,
            mdi: 'sf_1176c',
            apsn: 'Slide604',
            type: 64
        },
        sf_1176c: {
            id: 'sf_1176c',
            b: [886, 444, 181, 17],
            l: 651,
            t: 704,
            dn: 'sf_1176',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_1180: {
            from: 22,
            to: 90,
            siaf: 0.73,
            sid: 2.27,
            mdi: 'sf_1180c',
            apsn: 'Slide604',
            type: 64
        },
        sf_1180c: {
            id: 'sf_1180c',
            b: [1067, 444, 123, 10],
            l: 832,
            t: 711,
            dn: 'sf_1180',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_1184: {
            from: 22,
            to: 90,
            siaf: 0.73,
            sid: 2.27,
            mdi: 'sf_1184c',
            apsn: 'Slide604',
            type: 64
        },
        sf_1184c: {
            id: 'sf_1184c',
            b: [1190, 444, 80, 12],
            l: 997,
            t: 709,
            dn: 'sf_1184',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_1190: {
            from: 24,
            to: 90,
            siaf: 0.8,
            sid: 2.2,
            mdi: 'sf_1190c',
            apsn: 'Slide604',
            type: 64
        },
        sf_1190Ad: {
            src: 'ar/KeyClick.mp3',
            from: 24,
            to: 90,
            du: 2
        },
        sf_1190c: {
            id: 'sf_1190c',
            b: [1270, 444, 8, 14],
            l: 717,
            t: 164,
            dn: 'sf_1190',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg',
            pkt: 1
        },
        sf_1196: {
            from: 26,
            to: 90,
            siaf: 0.87,
            sid: 2.13,
            mdi: 'sf_1196c',
            apsn: 'Slide604',
            type: 64
        },
        sf_1196c: {
            id: 'sf_1196c',
            b: [1278, 444, 43, 41],
            l: 661,
            t: 215,
            dn: 'sf_1196',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_1200: {
            from: 26,
            to: 90,
            siaf: 0.87,
            sid: 2.13,
            mdi: 'sf_1200c',
            apsn: 'Slide604',
            type: 64
        },
        sf_1200c: {
            id: 'sf_1200c',
            b: [1321, 444, 37, 7],
            l: 704,
            t: 249,
            dn: 'sf_1200',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_1204: {
            from: 26,
            to: 90,
            siaf: 0.87,
            sid: 2.13,
            mdi: 'sf_1204c',
            apsn: 'Slide604',
            type: 64
        },
        sf_1204c: {
            id: 'sf_1204c',
            b: [1358, 444, 107, 53],
            l: 661,
            t: 256,
            dn: 'sf_1204',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_1208: {
            from: 26,
            to: 90,
            siaf: 0.87,
            sid: 2.13,
            mdi: 'sf_1208c',
            apsn: 'Slide604',
            type: 64
        },
        sf_1208c: {
            id: 'sf_1208c',
            b: [1465, 444, 64, 33],
            l: 768,
            t: 265,
            dn: 'sf_1208',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_1212: {
            from: 26,
            to: 90,
            siaf: 0.87,
            sid: 2.13,
            mdi: 'sf_1212c',
            apsn: 'Slide604',
            type: 64
        },
        sf_1212c: {
            id: 'sf_1212c',
            b: [1529, 444, 64, 31],
            l: 832,
            t: 265,
            dn: 'sf_1212',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_1216: {
            from: 26,
            to: 90,
            siaf: 0.87,
            sid: 2.13,
            mdi: 'sf_1216c',
            apsn: 'Slide604',
            type: 64
        },
        sf_1216c: {
            id: 'sf_1216c',
            b: [1593, 444, 59, 15],
            l: 896,
            t: 265,
            dn: 'sf_1216',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_1220: {
            from: 26,
            to: 90,
            siaf: 0.87,
            sid: 2.13,
            mdi: 'sf_1220c',
            apsn: 'Slide604',
            type: 64
        },
        sf_1220c: {
            id: 'sf_1220c',
            b: [0, 508, 416, 50],
            l: 651,
            t: 334,
            dn: 'sf_1220',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_1224: {
            from: 26,
            to: 90,
            siaf: 0.87,
            sid: 2.13,
            mdi: 'sf_1224c',
            apsn: 'Slide604',
            type: 64
        },
        sf_1224c: {
            id: 'sf_1224c',
            b: [416, 508, 6, 1],
            l: 634,
            t: 426,
            dn: 'sf_1224',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_1228: {
            from: 26,
            to: 90,
            siaf: 0.87,
            sid: 2.13,
            mdi: 'sf_1228c',
            apsn: 'Slide604',
            type: 64
        },
        sf_1228c: {
            id: 'sf_1228c',
            b: [422, 508, 192, 64],
            l: 640,
            t: 384,
            dn: 'sf_1228',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_1232: {
            from: 26,
            to: 90,
            siaf: 0.87,
            sid: 2.13,
            mdi: 'sf_1232c',
            apsn: 'Slide604',
            type: 64
        },
        sf_1232c: {
            id: 'sf_1232c',
            b: [614, 508, 256, 43],
            l: 832,
            t: 384,
            dn: 'sf_1232',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_1236: {
            from: 26,
            to: 90,
            siaf: 0.87,
            sid: 2.13,
            mdi: 'sf_1236c',
            apsn: 'Slide604',
            type: 64
        },
        sf_1236c: {
            id: 'sf_1236c',
            b: [870, 508, 6, 1],
            l: 1088,
            t: 426,
            dn: 'sf_1236',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_1240: {
            from: 26,
            to: 90,
            siaf: 0.87,
            sid: 2.13,
            mdi: 'sf_1240c',
            apsn: 'Slide604',
            type: 64
        },
        sf_1240c: {
            id: 'sf_1240c',
            b: [876, 508, 117, 64],
            l: 651,
            t: 448,
            dn: 'sf_1240',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_1244: {
            from: 26,
            to: 90,
            siaf: 0.87,
            sid: 2.13,
            mdi: 'sf_1244c',
            apsn: 'Slide604',
            type: 64
        },
        sf_1244c: {
            id: 'sf_1244c',
            b: [993, 508, 64, 60],
            l: 768,
            t: 448,
            dn: 'sf_1244',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_1248: {
            from: 26,
            to: 90,
            siaf: 0.87,
            sid: 2.13,
            mdi: 'sf_1248c',
            apsn: 'Slide604',
            type: 64
        },
        sf_1248c: {
            id: 'sf_1248c',
            b: [1057, 508, 64, 15],
            l: 832,
            t: 496,
            dn: 'sf_1248',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_1252: {
            from: 26,
            to: 90,
            siaf: 0.87,
            sid: 2.13,
            mdi: 'sf_1252c',
            apsn: 'Slide604',
            type: 64
        },
        sf_1252c: {
            id: 'sf_1252c',
            b: [1121, 508, 13, 9],
            l: 896,
            t: 499,
            dn: 'sf_1252',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_1256: {
            from: 26,
            to: 90,
            siaf: 0.87,
            sid: 2.13,
            mdi: 'sf_1256c',
            apsn: 'Slide604',
            type: 64
        },
        sf_1256c: {
            id: 'sf_1256c',
            b: [1134, 508, 80, 18],
            l: 997,
            t: 494,
            dn: 'sf_1256',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_1260: {
            from: 26,
            to: 90,
            siaf: 0.87,
            sid: 2.13,
            mdi: 'sf_1260c',
            apsn: 'Slide604',
            type: 64
        },
        sf_1260c: {
            id: 'sf_1260c',
            b: [1214, 508, 6, 1],
            l: 634,
            t: 569,
            dn: 'sf_1260',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_1264: {
            from: 26,
            to: 90,
            siaf: 0.87,
            sid: 2.13,
            mdi: 'sf_1264c',
            apsn: 'Slide604',
            type: 64
        },
        sf_1264c: {
            id: 'sf_1264c',
            b: [1220, 508, 128, 58],
            l: 640,
            t: 512,
            dn: 'sf_1264',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_1268: {
            from: 26,
            to: 90,
            siaf: 0.87,
            sid: 2.13,
            mdi: 'sf_1268c',
            apsn: 'Slide604',
            type: 64
        },
        sf_1268c: {
            id: 'sf_1268c',
            b: [1348, 508, 64, 53],
            l: 768,
            t: 517,
            dn: 'sf_1268',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_1272: {
            from: 26,
            to: 90,
            siaf: 0.87,
            sid: 2.13,
            mdi: 'sf_1272c',
            apsn: 'Slide604',
            type: 64
        },
        sf_1272c: {
            id: 'sf_1272c',
            b: [1412, 508, 64, 51],
            l: 832,
            t: 519,
            dn: 'sf_1272',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_1276: {
            from: 26,
            to: 90,
            siaf: 0.87,
            sid: 2.13,
            mdi: 'sf_1276c',
            apsn: 'Slide604',
            type: 64
        },
        sf_1276c: {
            id: 'sf_1276c',
            b: [1476, 508, 64, 48],
            l: 896,
            t: 522,
            dn: 'sf_1276',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_1280: {
            from: 26,
            to: 90,
            siaf: 0.87,
            sid: 2.13,
            mdi: 'sf_1280c',
            apsn: 'Slide604',
            type: 64
        },
        sf_1280c: {
            id: 'sf_1280c',
            b: [1540, 508, 128, 58],
            l: 960,
            t: 512,
            dn: 'sf_1280',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_1284: {
            from: 26,
            to: 90,
            siaf: 0.87,
            sid: 2.13,
            mdi: 'sf_1284c',
            apsn: 'Slide604',
            type: 64
        },
        sf_1284c: {
            id: 'sf_1284c',
            b: [1668, 508, 6, 1],
            l: 1088,
            t: 569,
            dn: 'sf_1284',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_1288: {
            from: 26,
            to: 90,
            siaf: 0.87,
            sid: 2.13,
            mdi: 'sf_1288c',
            apsn: 'Slide604',
            type: 64
        },
        sf_1288c: {
            id: 'sf_1288c',
            b: [1674, 508, 53, 52],
            l: 651,
            t: 588,
            dn: 'sf_1288',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_1292: {
            from: 26,
            to: 90,
            siaf: 0.87,
            sid: 2.13,
            mdi: 'sf_1292c',
            apsn: 'Slide604',
            type: 64
        },
        sf_1292c: {
            id: 'sf_1292c',
            b: [0, 572, 128, 53],
            l: 704,
            t: 587,
            dn: 'sf_1292',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_1296: {
            from: 26,
            to: 90,
            siaf: 0.87,
            sid: 2.13,
            mdi: 'sf_1296c',
            apsn: 'Slide604',
            type: 64
        },
        sf_1296c: {
            id: 'sf_1296c',
            b: [128, 572, 128, 52],
            l: 832,
            t: 588,
            dn: 'sf_1296',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_1300: {
            from: 26,
            to: 90,
            siaf: 0.87,
            sid: 2.13,
            mdi: 'sf_1300c',
            apsn: 'Slide604',
            type: 64
        },
        sf_1300c: {
            id: 'sf_1300c',
            b: [256, 572, 117, 53],
            l: 960,
            t: 587,
            dn: 'sf_1300',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_1304: {
            from: 26,
            to: 90,
            siaf: 0.87,
            sid: 2.13,
            mdi: 'sf_1304c',
            apsn: 'Slide604',
            type: 64
        },
        sf_1304c: {
            id: 'sf_1304c',
            b: [373, 572, 181, 64],
            l: 651,
            t: 640,
            dn: 'sf_1304',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_1308: {
            from: 26,
            to: 90,
            siaf: 0.87,
            sid: 2.13,
            mdi: 'sf_1308c',
            apsn: 'Slide604',
            type: 64
        },
        sf_1308c: {
            id: 'sf_1308c',
            b: [554, 572, 64, 13],
            l: 832,
            t: 640,
            dn: 'sf_1308',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_1312: {
            from: 26,
            to: 90,
            siaf: 0.87,
            sid: 2.13,
            mdi: 'sf_1312c',
            apsn: 'Slide604',
            type: 64
        },
        sf_1312c: {
            id: 'sf_1312c',
            b: [618, 572, 64, 11],
            l: 896,
            t: 640,
            dn: 'sf_1312',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_1316: {
            from: 26,
            to: 90,
            siaf: 0.87,
            sid: 2.13,
            mdi: 'sf_1316c',
            apsn: 'Slide604',
            type: 64
        },
        sf_1316c: {
            id: 'sf_1316c',
            b: [682, 572, 117, 29],
            l: 960,
            t: 640,
            dn: 'sf_1316',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_1320: {
            from: 26,
            to: 90,
            siaf: 0.87,
            sid: 2.13,
            mdi: 'sf_1320c',
            apsn: 'Slide604',
            type: 64
        },
        sf_1320c: {
            id: 'sf_1320c',
            b: [799, 572, 117, 17],
            l: 651,
            t: 704,
            dn: 'sf_1320',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_1324: {
            from: 26,
            to: 90,
            siaf: 0.87,
            sid: 2.13,
            mdi: 'sf_1324c',
            apsn: 'Slide604',
            type: 64
        },
        sf_1324c: {
            id: 'sf_1324c',
            b: [916, 572, 11, 12],
            l: 768,
            t: 704,
            dn: 'sf_1324',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_1330: {
            from: 28,
            to: 90,
            siaf: 0.93,
            sid: 2.07,
            mdi: 'sf_1330c',
            apsn: 'Slide604',
            type: 64
        },
        sf_1330Ad: {
            src: 'ar/KeyClick.mp3',
            from: 28,
            to: 90,
            du: 2
        },
        sf_1330c: {
            id: 'sf_1330c',
            b: [927, 572, 4, 14],
            l: 723,
            t: 164,
            dn: 'sf_1330',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg',
            pkt: 1
        },
        sf_1336: {
            from: 31,
            to: 90,
            siaf: 1.03,
            sid: 1.97,
            mdi: 'sf_1336c',
            apsn: 'Slide604',
            type: 64
        },
        sf_1336c: {
            id: 'sf_1336c',
            b: [931, 572, 100, 41],
            l: 651,
            t: 215,
            dn: 'sf_1336',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_1340: {
            from: 31,
            to: 90,
            siaf: 1.03,
            sid: 1.97,
            mdi: 'sf_1340c',
            apsn: 'Slide604',
            type: 64
        },
        sf_1340c: {
            id: 'sf_1340c',
            b: [1031, 572, 117, 53],
            l: 651,
            t: 256,
            dn: 'sf_1340',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_1344: {
            from: 31,
            to: 90,
            siaf: 1.03,
            sid: 1.97,
            mdi: 'sf_1344c',
            apsn: 'Slide604',
            type: 64
        },
        sf_1344c: {
            id: 'sf_1344c',
            b: [1148, 572, 64, 33],
            l: 768,
            t: 265,
            dn: 'sf_1344',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_1348: {
            from: 31,
            to: 90,
            siaf: 1.03,
            sid: 1.97,
            mdi: 'sf_1348c',
            apsn: 'Slide604',
            type: 64
        },
        sf_1348c: {
            id: 'sf_1348c',
            b: [1212, 572, 64, 31],
            l: 832,
            t: 265,
            dn: 'sf_1348',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_1352: {
            from: 31,
            to: 90,
            siaf: 1.03,
            sid: 1.97,
            mdi: 'sf_1352c',
            apsn: 'Slide604',
            type: 64
        },
        sf_1352c: {
            id: 'sf_1352c',
            b: [1276, 572, 59, 14],
            l: 896,
            t: 265,
            dn: 'sf_1352',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_1356: {
            from: 31,
            to: 90,
            siaf: 1.03,
            sid: 1.97,
            mdi: 'sf_1356c',
            apsn: 'Slide604',
            type: 64
        },
        sf_1356c: {
            id: 'sf_1356c',
            b: [1335, 572, 6, 1],
            l: 634,
            t: 338,
            dn: 'sf_1356',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_1360: {
            from: 31,
            to: 90,
            siaf: 1.03,
            sid: 1.97,
            mdi: 'sf_1360c',
            apsn: 'Slide604',
            type: 64
        },
        sf_1360c: {
            id: 'sf_1360c',
            b: [1341, 572, 128, 50],
            l: 640,
            t: 334,
            dn: 'sf_1360',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_1364: {
            from: 31,
            to: 90,
            siaf: 1.03,
            sid: 1.97,
            mdi: 'sf_1364c',
            apsn: 'Slide604',
            type: 64
        },
        sf_1364c: {
            id: 'sf_1364c',
            b: [0, 636, 326, 1],
            l: 768,
            t: 338,
            dn: 'sf_1364',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_1368: {
            from: 31,
            to: 90,
            siaf: 1.03,
            sid: 1.97,
            mdi: 'sf_1368c',
            apsn: 'Slide604',
            type: 64
        },
        sf_1368c: {
            id: 'sf_1368c',
            b: [326, 636, 6, 1],
            l: 634,
            t: 426,
            dn: 'sf_1368',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_1372: {
            from: 31,
            to: 90,
            siaf: 1.03,
            sid: 1.97,
            mdi: 'sf_1372c',
            apsn: 'Slide604',
            type: 64
        },
        sf_1372c: {
            id: 'sf_1372c',
            b: [332, 636, 128, 64],
            l: 640,
            t: 384,
            dn: 'sf_1372',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_1376: {
            from: 31,
            to: 90,
            siaf: 1.03,
            sid: 1.97,
            mdi: 'sf_1376c',
            apsn: 'Slide604',
            type: 64
        },
        sf_1376c: {
            id: 'sf_1376c',
            b: [460, 636, 64, 33],
            l: 768,
            t: 408,
            dn: 'sf_1376',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_1380: {
            from: 31,
            to: 90,
            siaf: 1.03,
            sid: 1.97,
            mdi: 'sf_1380c',
            apsn: 'Slide604',
            type: 64
        },
        sf_1380c: {
            id: 'sf_1380c',
            b: [524, 636, 128, 19],
            l: 832,
            t: 408,
            dn: 'sf_1380',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_1384: {
            from: 31,
            to: 90,
            siaf: 1.03,
            sid: 1.97,
            mdi: 'sf_1384c',
            apsn: 'Slide604',
            type: 64
        },
        sf_1384c: {
            id: 'sf_1384c',
            b: [652, 636, 128, 32],
            l: 960,
            t: 406,
            dn: 'sf_1384',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_1388: {
            from: 31,
            to: 90,
            siaf: 1.03,
            sid: 1.97,
            mdi: 'sf_1388c',
            apsn: 'Slide604',
            type: 64
        },
        sf_1388c: {
            id: 'sf_1388c',
            b: [780, 636, 6, 1],
            l: 1088,
            t: 426,
            dn: 'sf_1388',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_1392: {
            from: 31,
            to: 90,
            siaf: 1.03,
            sid: 1.97,
            mdi: 'sf_1392c',
            apsn: 'Slide604',
            type: 64
        },
        sf_1392c: {
            id: 'sf_1392c',
            b: [786, 636, 117, 64],
            l: 651,
            t: 448,
            dn: 'sf_1392',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_1396: {
            from: 31,
            to: 90,
            siaf: 1.03,
            sid: 1.97,
            mdi: 'sf_1396c',
            apsn: 'Slide604',
            type: 64
        },
        sf_1396c: {
            id: 'sf_1396c',
            b: [903, 636, 128, 16],
            l: 768,
            t: 496,
            dn: 'sf_1396',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_1400: {
            from: 31,
            to: 90,
            siaf: 1.03,
            sid: 1.97,
            mdi: 'sf_1400c',
            apsn: 'Slide604',
            type: 64
        },
        sf_1400c: {
            id: 'sf_1400c',
            b: [1031, 636, 13, 9],
            l: 896,
            t: 499,
            dn: 'sf_1400',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_1404: {
            from: 31,
            to: 90,
            siaf: 1.03,
            sid: 1.97,
            mdi: 'sf_1404c',
            apsn: 'Slide604',
            type: 64
        },
        sf_1404c: {
            id: 'sf_1404c',
            b: [1044, 636, 80, 18],
            l: 997,
            t: 494,
            dn: 'sf_1404',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_1408: {
            from: 31,
            to: 90,
            siaf: 1.03,
            sid: 1.97,
            mdi: 'sf_1408c',
            apsn: 'Slide604',
            type: 64
        },
        sf_1408c: {
            id: 'sf_1408c',
            b: [1124, 636, 6, 1],
            l: 634,
            t: 569,
            dn: 'sf_1408',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_1412: {
            from: 31,
            to: 90,
            siaf: 1.03,
            sid: 1.97,
            mdi: 'sf_1412c',
            apsn: 'Slide604',
            type: 64
        },
        sf_1412c: {
            id: 'sf_1412c',
            b: [1130, 636, 256, 58],
            l: 640,
            t: 512,
            dn: 'sf_1412',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_1416: {
            from: 31,
            to: 90,
            siaf: 1.03,
            sid: 1.97,
            mdi: 'sf_1416c',
            apsn: 'Slide604',
            type: 64
        },
        sf_1416c: {
            id: 'sf_1416c',
            b: [1386, 636, 64, 1],
            l: 896,
            t: 569,
            dn: 'sf_1416',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_1420: {
            from: 31,
            to: 90,
            siaf: 1.03,
            sid: 1.97,
            mdi: 'sf_1420c',
            apsn: 'Slide604',
            type: 64
        },
        sf_1420c: {
            id: 'sf_1420c',
            b: [1450, 636, 128, 58],
            l: 960,
            t: 512,
            dn: 'sf_1420',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_1424: {
            from: 31,
            to: 90,
            siaf: 1.03,
            sid: 1.97,
            mdi: 'sf_1424c',
            apsn: 'Slide604',
            type: 64
        },
        sf_1424c: {
            id: 'sf_1424c',
            b: [1578, 636, 6, 1],
            l: 1088,
            t: 569,
            dn: 'sf_1424',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_1428: {
            from: 31,
            to: 90,
            siaf: 1.03,
            sid: 1.97,
            mdi: 'sf_1428c',
            apsn: 'Slide604',
            type: 64
        },
        sf_1428c: {
            id: 'sf_1428c',
            b: [1584, 636, 117, 60],
            l: 651,
            t: 580,
            dn: 'sf_1428',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_1432: {
            from: 31,
            to: 90,
            siaf: 1.03,
            sid: 1.97,
            mdi: 'sf_1432c',
            apsn: 'Slide604',
            type: 64
        },
        sf_1432c: {
            id: 'sf_1432c',
            b: [0, 700, 62, 44],
            l: 768,
            t: 596,
            dn: 'sf_1432',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_1436: {
            from: 31,
            to: 90,
            siaf: 1.03,
            sid: 1.97,
            mdi: 'sf_1436c',
            apsn: 'Slide604',
            type: 64
        },
        sf_1436c: {
            id: 'sf_1436c',
            b: [62, 700, 6, 1],
            l: 848,
            t: 639,
            dn: 'sf_1436',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_1440: {
            from: 31,
            to: 90,
            siaf: 1.03,
            sid: 1.97,
            mdi: 'sf_1440c',
            apsn: 'Slide604',
            type: 64
        },
        sf_1440c: {
            id: 'sf_1440c',
            b: [68, 700, 2, 1],
            l: 922,
            t: 639,
            dn: 'sf_1440',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_1444: {
            from: 31,
            to: 90,
            siaf: 1.03,
            sid: 1.97,
            mdi: 'sf_1444c',
            apsn: 'Slide604',
            type: 64
        },
        sf_1444c: {
            id: 'sf_1444c',
            b: [70, 700, 80, 46],
            l: 997,
            t: 594,
            dn: 'sf_1444',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_1448: {
            from: 31,
            to: 90,
            siaf: 1.03,
            sid: 1.97,
            mdi: 'sf_1448c',
            apsn: 'Slide604',
            type: 64
        },
        sf_1448c: {
            id: 'sf_1448c',
            b: [150, 700, 245, 64],
            l: 651,
            t: 640,
            dn: 'sf_1448',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_1452: {
            from: 31,
            to: 90,
            siaf: 1.03,
            sid: 1.97,
            mdi: 'sf_1452c',
            apsn: 'Slide604',
            type: 64
        },
        sf_1452c: {
            id: 'sf_1452c',
            b: [395, 700, 28, 61],
            l: 896,
            t: 640,
            dn: 'sf_1452',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_1456: {
            from: 31,
            to: 90,
            siaf: 1.03,
            sid: 1.97,
            mdi: 'sf_1456c',
            apsn: 'Slide604',
            type: 64
        },
        sf_1456c: {
            id: 'sf_1456c',
            b: [423, 700, 80, 64],
            l: 997,
            t: 640,
            dn: 'sf_1456',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_1460: {
            from: 31,
            to: 90,
            siaf: 1.03,
            sid: 1.97,
            mdi: 'sf_1460c',
            apsn: 'Slide604',
            type: 64
        },
        sf_1460c: {
            id: 'sf_1460c',
            b: [503, 700, 117, 17],
            l: 651,
            t: 704,
            dn: 'sf_1460',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_1464: {
            from: 31,
            to: 90,
            siaf: 1.03,
            sid: 1.97,
            mdi: 'sf_1464c',
            apsn: 'Slide604',
            type: 64
        },
        sf_1464c: {
            id: 'sf_1464c',
            b: [620, 700, 55, 10],
            l: 768,
            t: 711,
            dn: 'sf_1464',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_1468: {
            from: 31,
            to: 90,
            siaf: 1.03,
            sid: 1.97,
            mdi: 'sf_1468c',
            apsn: 'Slide604',
            type: 64
        },
        sf_1468c: {
            id: 'sf_1468c',
            b: [675, 700, 2, 1],
            l: 834,
            t: 704,
            dn: 'sf_1468',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_1472: {
            from: 31,
            to: 90,
            siaf: 1.03,
            sid: 1.97,
            mdi: 'sf_1472c',
            apsn: 'Slide604',
            type: 64
        },
        sf_1472c: {
            id: 'sf_1472c',
            b: [677, 700, 80, 16],
            l: 997,
            t: 704,
            dn: 'sf_1472',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_1478: {
            from: 33,
            to: 90,
            siaf: 1.1,
            sid: 1.9,
            mdi: 'sf_1478c',
            apsn: 'Slide604',
            type: 64
        },
        sf_1478Ad: {
            src: 'ar/KeyClick.mp3',
            from: 33,
            to: 90,
            du: 1
        },
        sf_1478c: {
            id: 'sf_1478c',
            b: [757, 700, 8, 14],
            l: 726,
            t: 164,
            dn: 'sf_1478',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg',
            pkt: 1
        },
        sf_1486: {
            from: 37,
            to: 90,
            siaf: 1.23,
            sid: 1.77,
            mdi: 'sf_1486c',
            apsn: 'Slide604',
            type: 64
        },
        sf_1486Ad: {
            src: 'ar/KeyClick.mp3',
            from: 37,
            to: 90,
            du: 1
        },
        sf_1486c: {
            id: 'sf_1486c',
            b: [765, 700, 6, 14],
            l: 732,
            t: 164,
            dn: 'sf_1486',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg',
            pkt: 1
        },
        sf_1490: {
            from: 37,
            to: 90,
            siaf: 1.23,
            sid: 1.77,
            mdi: 'sf_1490c',
            apsn: 'Slide604',
            type: 64
        },
        sf_1490c: {
            id: 'sf_1490c',
            b: [771, 700, 100, 30],
            l: 651,
            t: 674,
            dn: 'sf_1490',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_1494: {
            from: 37,
            to: 90,
            siaf: 1.23,
            sid: 1.77,
            mdi: 'sf_1494c',
            apsn: 'Slide604',
            type: 64
        },
        sf_1494c: {
            id: 'sf_1494c',
            b: [871, 700, 128, 14],
            l: 768,
            t: 690,
            dn: 'sf_1494',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_1498: {
            from: 37,
            to: 90,
            siaf: 1.23,
            sid: 1.77,
            mdi: 'sf_1498c',
            apsn: 'Slide604',
            type: 64
        },
        sf_1498c: {
            id: 'sf_1498c',
            b: [999, 700, 2, 8],
            l: 896,
            t: 693,
            dn: 'sf_1498',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_1502: {
            from: 37,
            to: 90,
            siaf: 1.23,
            sid: 1.77,
            mdi: 'sf_1502c',
            apsn: 'Slide604',
            type: 64
        },
        sf_1502c: {
            id: 'sf_1502c',
            b: [1001, 700, 80, 16],
            l: 997,
            t: 688,
            dn: 'sf_1502',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_1506: {
            from: 37,
            to: 90,
            siaf: 1.23,
            sid: 1.77,
            mdi: 'sf_1506c',
            apsn: 'Slide604',
            type: 64
        },
        sf_1506c: {
            id: 'sf_1506c',
            b: [1081, 700, 117, 17],
            l: 651,
            t: 704,
            dn: 'sf_1506',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_1510: {
            from: 37,
            to: 90,
            siaf: 1.23,
            sid: 1.77,
            mdi: 'sf_1510c',
            apsn: 'Slide604',
            type: 64
        },
        sf_1510c: {
            id: 'sf_1510c',
            b: [1198, 700, 55, 10],
            l: 768,
            t: 711,
            dn: 'sf_1510',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_1514: {
            from: 37,
            to: 90,
            siaf: 1.23,
            sid: 1.77,
            mdi: 'sf_1514c',
            apsn: 'Slide604',
            type: 64
        },
        sf_1514c: {
            id: 'sf_1514c',
            b: [1253, 700, 2, 1],
            l: 834,
            t: 704,
            dn: 'sf_1514',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_1518: {
            from: 37,
            to: 90,
            siaf: 1.23,
            sid: 1.77,
            mdi: 'sf_1518c',
            apsn: 'Slide604',
            type: 64
        },
        sf_1518c: {
            id: 'sf_1518c',
            b: [1255, 700, 80, 16],
            l: 997,
            t: 704,
            dn: 'sf_1518',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_1526: {
            from: 42,
            to: 90,
            siaf: 1.4,
            sid: 1.6,
            mdi: 'sf_1526c',
            apsn: 'Slide604',
            type: 64
        },
        sf_1526Ad: {
            src: 'ar/KeyClick.mp3',
            from: 42,
            to: 90,
            du: 1
        },
        sf_1526c: {
            id: 'sf_1526c',
            b: [1335, 700, 7, 14],
            l: 737,
            t: 164,
            dn: 'sf_1526',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg',
            pkt: 1
        },
        sf_1530: {
            from: 42,
            to: 90,
            siaf: 1.4,
            sid: 1.6,
            mdi: 'sf_1530c',
            apsn: 'Slide604',
            type: 64
        },
        sf_1530c: {
            id: 'sf_1530c',
            b: [1342, 700, 100, 41],
            l: 651,
            t: 215,
            dn: 'sf_1530',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_1534: {
            from: 42,
            to: 90,
            siaf: 1.4,
            sid: 1.6,
            mdi: 'sf_1534c',
            apsn: 'Slide604',
            type: 64
        },
        sf_1534c: {
            id: 'sf_1534c',
            b: [1442, 700, 117, 53],
            l: 651,
            t: 256,
            dn: 'sf_1534',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_1538: {
            from: 42,
            to: 90,
            siaf: 1.4,
            sid: 1.6,
            mdi: 'sf_1538c',
            apsn: 'Slide604',
            type: 64
        },
        sf_1538c: {
            id: 'sf_1538c',
            b: [1559, 700, 64, 33],
            l: 768,
            t: 265,
            dn: 'sf_1538',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_1542: {
            from: 42,
            to: 90,
            siaf: 1.4,
            sid: 1.6,
            mdi: 'sf_1542c',
            apsn: 'Slide604',
            type: 64
        },
        sf_1542c: {
            id: 'sf_1542c',
            b: [1623, 700, 64, 31],
            l: 832,
            t: 265,
            dn: 'sf_1542',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_1546: {
            from: 42,
            to: 90,
            siaf: 1.4,
            sid: 1.6,
            mdi: 'sf_1546c',
            apsn: 'Slide604',
            type: 64
        },
        sf_1546c: {
            id: 'sf_1546c',
            b: [1687, 700, 13, 9],
            l: 896,
            t: 268,
            dn: 'sf_1546',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_1550: {
            from: 42,
            to: 90,
            siaf: 1.4,
            sid: 1.6,
            mdi: 'sf_1550c',
            apsn: 'Slide604',
            type: 64
        },
        sf_1550c: {
            id: 'sf_1550c',
            b: [1700, 700, 6, 1],
            l: 634,
            t: 338,
            dn: 'sf_1550',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_1554: {
            from: 42,
            to: 90,
            siaf: 1.4,
            sid: 1.6,
            mdi: 'sf_1554c',
            apsn: 'Slide604',
            type: 64
        },
        sf_1554c: {
            id: 'sf_1554c',
            b: [0, 764, 128, 50],
            l: 640,
            t: 334,
            dn: 'sf_1554',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_1558: {
            from: 42,
            to: 90,
            siaf: 1.4,
            sid: 1.6,
            mdi: 'sf_1558c',
            apsn: 'Slide604',
            type: 64
        },
        sf_1558c: {
            id: 'sf_1558c',
            b: [128, 764, 326, 1],
            l: 768,
            t: 338,
            dn: 'sf_1558',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_1562: {
            from: 42,
            to: 90,
            siaf: 1.4,
            sid: 1.6,
            mdi: 'sf_1562c',
            apsn: 'Slide604',
            type: 64
        },
        sf_1562c: {
            id: 'sf_1562c',
            b: [454, 764, 6, 1],
            l: 634,
            t: 426,
            dn: 'sf_1562',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_1566: {
            from: 42,
            to: 90,
            siaf: 1.4,
            sid: 1.6,
            mdi: 'sf_1566c',
            apsn: 'Slide604',
            type: 64
        },
        sf_1566c: {
            id: 'sf_1566c',
            b: [460, 764, 128, 64],
            l: 640,
            t: 384,
            dn: 'sf_1566',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_1570: {
            from: 42,
            to: 90,
            siaf: 1.4,
            sid: 1.6,
            mdi: 'sf_1570c',
            apsn: 'Slide604',
            type: 64
        },
        sf_1570c: {
            id: 'sf_1570c',
            b: [588, 764, 64, 33],
            l: 768,
            t: 408,
            dn: 'sf_1570',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_1574: {
            from: 42,
            to: 90,
            siaf: 1.4,
            sid: 1.6,
            mdi: 'sf_1574c',
            apsn: 'Slide604',
            type: 64
        },
        sf_1574c: {
            id: 'sf_1574c',
            b: [652, 764, 128, 19],
            l: 832,
            t: 408,
            dn: 'sf_1574',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_1578: {
            from: 42,
            to: 90,
            siaf: 1.4,
            sid: 1.6,
            mdi: 'sf_1578c',
            apsn: 'Slide604',
            type: 64
        },
        sf_1578c: {
            id: 'sf_1578c',
            b: [780, 764, 128, 32],
            l: 960,
            t: 406,
            dn: 'sf_1578',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_1582: {
            from: 42,
            to: 90,
            siaf: 1.4,
            sid: 1.6,
            mdi: 'sf_1582c',
            apsn: 'Slide604',
            type: 64
        },
        sf_1582c: {
            id: 'sf_1582c',
            b: [908, 764, 6, 1],
            l: 1088,
            t: 426,
            dn: 'sf_1582',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_1586: {
            from: 42,
            to: 90,
            siaf: 1.4,
            sid: 1.6,
            mdi: 'sf_1586c',
            apsn: 'Slide604',
            type: 64
        },
        sf_1586c: {
            id: 'sf_1586c',
            b: [914, 764, 117, 64],
            l: 651,
            t: 448,
            dn: 'sf_1586',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_1590: {
            from: 42,
            to: 90,
            siaf: 1.4,
            sid: 1.6,
            mdi: 'sf_1590c',
            apsn: 'Slide604',
            type: 64
        },
        sf_1590c: {
            id: 'sf_1590c',
            b: [1031, 764, 64, 16],
            l: 768,
            t: 496,
            dn: 'sf_1590',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_1594: {
            from: 42,
            to: 90,
            siaf: 1.4,
            sid: 1.6,
            mdi: 'sf_1594c',
            apsn: 'Slide604',
            type: 64
        },
        sf_1594c: {
            id: 'sf_1594c',
            b: [1095, 764, 44, 15],
            l: 832,
            t: 497,
            dn: 'sf_1594',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_1598: {
            from: 42,
            to: 90,
            siaf: 1.4,
            sid: 1.6,
            mdi: 'sf_1598c',
            apsn: 'Slide604',
            type: 64
        },
        sf_1598c: {
            id: 'sf_1598c',
            b: [1139, 764, 80, 18],
            l: 997,
            t: 494,
            dn: 'sf_1598',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_1602: {
            from: 42,
            to: 90,
            siaf: 1.4,
            sid: 1.6,
            mdi: 'sf_1602c',
            apsn: 'Slide604',
            type: 64
        },
        sf_1602c: {
            id: 'sf_1602c',
            b: [1219, 764, 117, 64],
            l: 651,
            t: 512,
            dn: 'sf_1602',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_1606: {
            from: 42,
            to: 90,
            siaf: 1.4,
            sid: 1.6,
            mdi: 'sf_1606c',
            apsn: 'Slide604',
            type: 64
        },
        sf_1606c: {
            id: 'sf_1606c',
            b: [1336, 764, 64, 21],
            l: 768,
            t: 512,
            dn: 'sf_1606',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_1610: {
            from: 42,
            to: 90,
            siaf: 1.4,
            sid: 1.6,
            mdi: 'sf_1610c',
            apsn: 'Slide604',
            type: 64
        },
        sf_1610c: {
            id: 'sf_1610c',
            b: [1400, 764, 8, 15],
            l: 832,
            t: 512,
            dn: 'sf_1610',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_1614: {
            from: 42,
            to: 90,
            siaf: 1.4,
            sid: 1.6,
            mdi: 'sf_1614c',
            apsn: 'Slide604',
            type: 64
        },
        sf_1614c: {
            id: 'sf_1614c',
            b: [1408, 764, 80, 20],
            l: 997,
            t: 512,
            dn: 'sf_1614',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_1618: {
            from: 42,
            to: 90,
            siaf: 1.4,
            sid: 1.6,
            mdi: 'sf_1618c',
            apsn: 'Slide604',
            type: 64
        },
        sf_1618c: {
            id: 'sf_1618c',
            b: [1488, 764, 117, 64],
            l: 651,
            t: 576,
            dn: 'sf_1618',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_1622: {
            from: 42,
            to: 90,
            siaf: 1.4,
            sid: 1.6,
            mdi: 'sf_1622c',
            apsn: 'Slide604',
            type: 64
        },
        sf_1622c: {
            id: 'sf_1622c',
            b: [1605, 764, 62, 31],
            l: 768,
            t: 596,
            dn: 'sf_1622',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_1626: {
            from: 42,
            to: 90,
            siaf: 1.4,
            sid: 1.6,
            mdi: 'sf_1626c',
            apsn: 'Slide604',
            type: 64
        },
        sf_1626c: {
            id: 'sf_1626c',
            b: [0, 828, 80, 32],
            l: 997,
            t: 594,
            dn: 'sf_1626',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_1630: {
            from: 42,
            to: 90,
            siaf: 1.4,
            sid: 1.6,
            mdi: 'sf_1630c',
            apsn: 'Slide604',
            type: 64
        },
        sf_1630c: {
            id: 'sf_1630c',
            b: [80, 828, 6, 1],
            l: 634,
            t: 657,
            dn: 'sf_1630',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_1634: {
            from: 42,
            to: 90,
            siaf: 1.4,
            sid: 1.6,
            mdi: 'sf_1634c',
            apsn: 'Slide604',
            type: 64
        },
        sf_1634c: {
            id: 'sf_1634c',
            b: [86, 828, 64, 30],
            l: 640,
            t: 657,
            dn: 'sf_1634',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_1638: {
            from: 42,
            to: 90,
            siaf: 1.4,
            sid: 1.6,
            mdi: 'sf_1638c',
            apsn: 'Slide604',
            type: 64
        },
        sf_1638c: {
            id: 'sf_1638c',
            b: [150, 828, 64, 32],
            l: 704,
            t: 657,
            dn: 'sf_1638',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_1642: {
            from: 42,
            to: 90,
            siaf: 1.4,
            sid: 1.6,
            mdi: 'sf_1642c',
            apsn: 'Slide604',
            type: 64
        },
        sf_1642c: {
            id: 'sf_1642c',
            b: [214, 828, 326, 1],
            l: 768,
            t: 657,
            dn: 'sf_1642',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_1646: {
            from: 42,
            to: 90,
            siaf: 1.4,
            sid: 1.6,
            mdi: 'sf_1646c',
            apsn: 'Slide604',
            type: 64
        },
        sf_1646c: {
            id: 'sf_1646c',
            b: [540, 828, 100, 11],
            l: 651,
            t: 710,
            dn: 'sf_1646',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_1652: {
            from: 44,
            to: 90,
            siaf: 1.47,
            sid: 1.53,
            mdi: 'sf_1652c',
            apsn: 'Slide604',
            type: 64
        },
        sf_1652Ad: {
            src: 'ar/KeyClick.mp3',
            from: 44,
            to: 90,
            du: 1
        },
        sf_1652c: {
            id: 'sf_1652c',
            b: [640, 828, 2, 14],
            l: 742,
            t: 164,
            dn: 'sf_1652',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg',
            pkt: 1
        },
        sf_1656: {
            from: 44,
            to: 90,
            siaf: 1.47,
            sid: 1.53,
            mdi: 'sf_1656c',
            apsn: 'Slide604',
            type: 64
        },
        sf_1656c: {
            id: 'sf_1656c',
            b: [642, 828, 18, 18],
            l: 671,
            t: 352,
            dn: 'sf_1656',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_1660: {
            from: 44,
            to: 90,
            siaf: 1.47,
            sid: 1.53,
            mdi: 'sf_1660c',
            apsn: 'Slide604',
            type: 64
        },
        sf_1660c: {
            id: 'sf_1660c',
            b: [660, 828, 109, 12],
            l: 652,
            t: 677,
            dn: 'sf_1660',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        sf_1664: {
            from: 44,
            to: 90,
            siaf: 1.47,
            sid: 1.53,
            mdi: 'sf_1664c',
            apsn: 'Slide604',
            type: 64
        },
        sf_1664c: {
            id: 'sf_1664c',
            b: [769, 828, 100, 10],
            l: 651,
            t: 711,
            dn: 'sf_1664',
            visible: 1,
            effectiveVi: 1,
            ip: 'dr/sfs0.jpg'
        },
        si630: {
            name: 'Simulation_2',
            type: 1268,
            from: 91,
            to: 180,
            rp: 0,
            rpa: 0,
            mdi: 'si630c',
            tag: 'container-simulation-widget',
            v: 0,
            enabled: true,
            defEn: true,
            vu: [],
            siaf: 0,
            sid: 3,
            slideItemThemeCounter: 0,
            presetData: [{
                presetId: '',
                presetType: 14,
                isOverridden: false
            }, {
                presetId: '',
                presetType: 2,
                isOverridden: false
            }],
            widgetProps: '{"autoFit":true}',
            retainState: false,
            immo: false,
            apsn: 'Slide604',
            efph: {},
            eflh: [],
            iflbx: false,
            ipflbx: true,
            si: [{
                n: 'si622',
                t: 1268
            }],
            containerType: 'simulation-widget',
            widgetProps: '{"autoFit":true}',
            option: '',
            padding: {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            },
            parent: '',
            selectable: false,
            trin: 0,
            trout: 0,
            isDD: false
        },
        si630c: {
            b: [0, 0, 0, 0],
            fh: false,
            fw: false,
            uid: 630,
            iso: false,
            css: {
                360: {
                    l: '0px',
                    t: '0px',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0px',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0px',
                    lvID: -1,
                    w: '0px',
                    h: '0px',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                },
                600: {
                    l: '0px',
                    t: '0px',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0px',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0px',
                    lvID: -1,
                    w: '0px',
                    h: '0px',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                },
                972: {
                    l: '0px',
                    t: '0px',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0px',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0px',
                    lvID: -1,
                    w: '0px',
                    h: '0px',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                }

            },
            sr: cp.fd,
            dn: 'si630',
            visible: 1,
            effectiveVi: 1,
            JSONEffectData: false,
            bc: '#ffffff',
            fe: true,
            fca: 1,
            fa: 100,
            sde: false,
            scp: 0,
            sc: '#0080ff',
            sw: 1,
            ss: 0,
            sa: 1,
            se: false,
            vbwr: [-1, -1, 1, 1],
            vb: [-1, -1, 1, 1]
        },
        si622: {
            name: 'Simulation_non_responsive_2',
            type: 1268,
            from: 91,
            to: 180,
            rp: 0,
            rpa: 0,
            mdi: 'si622c',
            tag: 'container-simulation-non-responsive',
            v: 0,
            enabled: true,
            defEn: true,
            vu: [],
            siaf: 0,
            sid: 3,
            slideItemThemeCounter: 0,
            presetData: [{
                presetId: '',
                presetType: 14,
                isOverridden: true
            }, {
                presetId: '',
                presetType: 2,
                isOverridden: true
            }],
            widgetProps: '{"visibilityInfo":{"slide-item-clickbox":false,"slide-item-highlight-box":false,"slide-item-comment-box":false,"slide-item-inputfield":false,"slide-item-mouse-pointer":true,"object-typing-text":false},"sizeNPos":{"width":1728,"height":1080},"groupedItemsVisibility":{"slide-item-clickbox":0,"slide-item-highlight-box":1,"slide-item-comment-box":0,"slide-item-inputfield":0,"slide-item-mouse-pointer":1},"canBeCard":false}',
            parentGroup: 'si630',
            retainState: false,
            immo: false,
            apsn: 'Slide604',
            efph: {},
            eflh: [],
            iflbx: false,
            ipflbx: true,
            si: [{
                n: 'sf_646',
                t: 64
            }, {
                n: 'sf_652',
                t: 64
            }, {
                n: 'sf_656',
                t: 64
            }, {
                n: 'sf_660',
                t: 64
            }, {
                n: 'sf_664',
                t: 64
            }, {
                n: 'sf_668',
                t: 64
            }, {
                n: 'sf_672',
                t: 64
            }, {
                n: 'sf_676',
                t: 64
            }, {
                n: 'sf_680',
                t: 64
            }, {
                n: 'sf_684',
                t: 64
            }, {
                n: 'sf_688',
                t: 64
            }, {
                n: 'sf_692',
                t: 64
            }, {
                n: 'sf_696',
                t: 64
            }, {
                n: 'sf_700',
                t: 64
            }, {
                n: 'sf_704',
                t: 64
            }, {
                n: 'sf_708',
                t: 64
            }, {
                n: 'sf_712',
                t: 64
            }, {
                n: 'sf_716',
                t: 64
            }, {
                n: 'sf_720',
                t: 64
            }, {
                n: 'sf_724',
                t: 64
            }, {
                n: 'sf_728',
                t: 64
            }, {
                n: 'sf_732',
                t: 64
            }, {
                n: 'sf_736',
                t: 64
            }, {
                n: 'sf_740',
                t: 64
            }, {
                n: 'sf_744',
                t: 64
            }, {
                n: 'sf_748',
                t: 64
            }, {
                n: 'sf_752',
                t: 64
            }, {
                n: 'sf_756',
                t: 64
            }, {
                n: 'sf_760',
                t: 64
            }, {
                n: 'sf_764',
                t: 64
            }, {
                n: 'sf_768',
                t: 64
            }, {
                n: 'sf_772',
                t: 64
            }, {
                n: 'sf_776',
                t: 64
            }, {
                n: 'sf_780',
                t: 64
            }, {
                n: 'sf_784',
                t: 64
            }, {
                n: 'sf_788',
                t: 64
            }, {
                n: 'sf_792',
                t: 64
            }, {
                n: 'sf_796',
                t: 64
            }, {
                n: 'sf_800',
                t: 64
            }, {
                n: 'sf_804',
                t: 64
            }, {
                n: 'sf_810',
                t: 64
            }, {
                n: 'sf_814',
                t: 64
            }, {
                n: 'sf_818',
                t: 64
            }, {
                n: 'sf_822',
                t: 64
            }, {
                n: 'sf_826',
                t: 64
            }, {
                n: 'sf_830',
                t: 64
            }, {
                n: 'sf_834',
                t: 64
            }, {
                n: 'sf_838',
                t: 64
            }, {
                n: 'sf_842',
                t: 64
            }, {
                n: 'sf_846',
                t: 64
            }, {
                n: 'sf_850',
                t: 64
            }, {
                n: 'sf_854',
                t: 64
            }, {
                n: 'sf_858',
                t: 64
            }, {
                n: 'sf_862',
                t: 64
            }, {
                n: 'sf_866',
                t: 64
            }, {
                n: 'sf_870',
                t: 64
            }, {
                n: 'sf_874',
                t: 64
            }, {
                n: 'sf_878',
                t: 64
            }, {
                n: 'sf_882',
                t: 64
            }, {
                n: 'sf_886',
                t: 64
            }, {
                n: 'sf_890',
                t: 64
            }, {
                n: 'sf_894',
                t: 64
            }, {
                n: 'sf_902',
                t: 64
            }, {
                n: 'sf_906',
                t: 64
            }, {
                n: 'sf_910',
                t: 64
            }, {
                n: 'sf_914',
                t: 64
            }, {
                n: 'sf_918',
                t: 64
            }, {
                n: 'sf_924',
                t: 64
            }, {
                n: 'sf_928',
                t: 64
            }, {
                n: 'sf_932',
                t: 64
            }, {
                n: 'sf_936',
                t: 64
            }, {
                n: 'sf_940',
                t: 64
            }, {
                n: 'sf_944',
                t: 64
            }, {
                n: 'sf_948',
                t: 64
            }, {
                n: 'sf_952',
                t: 64
            }, {
                n: 'sf_956',
                t: 64
            }, {
                n: 'sf_960',
                t: 64
            }, {
                n: 'sf_964',
                t: 64
            }, {
                n: 'sf_968',
                t: 64
            }, {
                n: 'sf_972',
                t: 64
            }, {
                n: 'sf_976',
                t: 64
            }, {
                n: 'sf_980',
                t: 64
            }, {
                n: 'sf_984',
                t: 64
            }, {
                n: 'sf_988',
                t: 64
            }, {
                n: 'sf_992',
                t: 64
            }, {
                n: 'sf_996',
                t: 64
            }, {
                n: 'sf_1000',
                t: 64
            }, {
                n: 'sf_1004',
                t: 64
            }, {
                n: 'sf_1008',
                t: 64
            }, {
                n: 'sf_1012',
                t: 64
            }, {
                n: 'sf_1016',
                t: 64
            }, {
                n: 'sf_1020',
                t: 64
            }, {
                n: 'sf_1024',
                t: 64
            }, {
                n: 'sf_1028',
                t: 64
            }, {
                n: 'sf_1032',
                t: 64
            }, {
                n: 'sf_1038',
                t: 64
            }, {
                n: 'sf_1044',
                t: 64
            }, {
                n: 'sf_1050',
                t: 64
            }, {
                n: 'sf_1054',
                t: 64
            }, {
                n: 'sf_1058',
                t: 64
            }, {
                n: 'sf_1062',
                t: 64
            }, {
                n: 'sf_1066',
                t: 64
            }, {
                n: 'sf_1070',
                t: 64
            }, {
                n: 'sf_1074',
                t: 64
            }, {
                n: 'sf_1078',
                t: 64
            }, {
                n: 'sf_1082',
                t: 64
            }, {
                n: 'sf_1086',
                t: 64
            }, {
                n: 'sf_1092',
                t: 64
            }, {
                n: 'sf_1096',
                t: 64
            }, {
                n: 'sf_1100',
                t: 64
            }, {
                n: 'sf_1104',
                t: 64
            }, {
                n: 'sf_1108',
                t: 64
            }, {
                n: 'sf_1112',
                t: 64
            }, {
                n: 'sf_1116',
                t: 64
            }, {
                n: 'sf_1120',
                t: 64
            }, {
                n: 'sf_1124',
                t: 64
            }, {
                n: 'sf_1128',
                t: 64
            }, {
                n: 'sf_1132',
                t: 64
            }, {
                n: 'sf_1136',
                t: 64
            }, {
                n: 'sf_1140',
                t: 64
            }, {
                n: 'sf_1144',
                t: 64
            }, {
                n: 'sf_1148',
                t: 64
            }, {
                n: 'sf_1152',
                t: 64
            }, {
                n: 'sf_1156',
                t: 64
            }, {
                n: 'sf_1160',
                t: 64
            }, {
                n: 'sf_1164',
                t: 64
            }, {
                n: 'sf_1168',
                t: 64
            }, {
                n: 'sf_1172',
                t: 64
            }, {
                n: 'sf_1176',
                t: 64
            }, {
                n: 'sf_1180',
                t: 64
            }, {
                n: 'sf_1184',
                t: 64
            }, {
                n: 'sf_1190',
                t: 64
            }, {
                n: 'sf_1196',
                t: 64
            }, {
                n: 'sf_1200',
                t: 64
            }, {
                n: 'sf_1204',
                t: 64
            }, {
                n: 'sf_1208',
                t: 64
            }, {
                n: 'sf_1212',
                t: 64
            }, {
                n: 'sf_1216',
                t: 64
            }, {
                n: 'sf_1220',
                t: 64
            }, {
                n: 'sf_1224',
                t: 64
            }, {
                n: 'sf_1228',
                t: 64
            }, {
                n: 'sf_1232',
                t: 64
            }, {
                n: 'sf_1236',
                t: 64
            }, {
                n: 'sf_1240',
                t: 64
            }, {
                n: 'sf_1244',
                t: 64
            }, {
                n: 'sf_1248',
                t: 64
            }, {
                n: 'sf_1252',
                t: 64
            }, {
                n: 'sf_1256',
                t: 64
            }, {
                n: 'sf_1260',
                t: 64
            }, {
                n: 'sf_1264',
                t: 64
            }, {
                n: 'sf_1268',
                t: 64
            }, {
                n: 'sf_1272',
                t: 64
            }, {
                n: 'sf_1276',
                t: 64
            }, {
                n: 'sf_1280',
                t: 64
            }, {
                n: 'sf_1284',
                t: 64
            }, {
                n: 'sf_1288',
                t: 64
            }, {
                n: 'sf_1292',
                t: 64
            }, {
                n: 'sf_1296',
                t: 64
            }, {
                n: 'sf_1300',
                t: 64
            }, {
                n: 'sf_1304',
                t: 64
            }, {
                n: 'sf_1308',
                t: 64
            }, {
                n: 'sf_1312',
                t: 64
            }, {
                n: 'sf_1316',
                t: 64
            }, {
                n: 'sf_1320',
                t: 64
            }, {
                n: 'sf_1324',
                t: 64
            }, {
                n: 'sf_1330',
                t: 64
            }, {
                n: 'sf_1336',
                t: 64
            }, {
                n: 'sf_1340',
                t: 64
            }, {
                n: 'sf_1344',
                t: 64
            }, {
                n: 'sf_1348',
                t: 64
            }, {
                n: 'sf_1352',
                t: 64
            }, {
                n: 'sf_1356',
                t: 64
            }, {
                n: 'sf_1360',
                t: 64
            }, {
                n: 'sf_1364',
                t: 64
            }, {
                n: 'sf_1368',
                t: 64
            }, {
                n: 'sf_1372',
                t: 64
            }, {
                n: 'sf_1376',
                t: 64
            }, {
                n: 'sf_1380',
                t: 64
            }, {
                n: 'sf_1384',
                t: 64
            }, {
                n: 'sf_1388',
                t: 64
            }, {
                n: 'sf_1392',
                t: 64
            }, {
                n: 'sf_1396',
                t: 64
            }, {
                n: 'sf_1400',
                t: 64
            }, {
                n: 'sf_1404',
                t: 64
            }, {
                n: 'sf_1408',
                t: 64
            }, {
                n: 'sf_1412',
                t: 64
            }, {
                n: 'sf_1416',
                t: 64
            }, {
                n: 'sf_1420',
                t: 64
            }, {
                n: 'sf_1424',
                t: 64
            }, {
                n: 'sf_1428',
                t: 64
            }, {
                n: 'sf_1432',
                t: 64
            }, {
                n: 'sf_1436',
                t: 64
            }, {
                n: 'sf_1440',
                t: 64
            }, {
                n: 'sf_1444',
                t: 64
            }, {
                n: 'sf_1448',
                t: 64
            }, {
                n: 'sf_1452',
                t: 64
            }, {
                n: 'sf_1456',
                t: 64
            }, {
                n: 'sf_1460',
                t: 64
            }, {
                n: 'sf_1464',
                t: 64
            }, {
                n: 'sf_1468',
                t: 64
            }, {
                n: 'sf_1472',
                t: 64
            }, {
                n: 'sf_1478',
                t: 64
            }, {
                n: 'sf_1486',
                t: 64
            }, {
                n: 'sf_1490',
                t: 64
            }, {
                n: 'sf_1494',
                t: 64
            }, {
                n: 'sf_1498',
                t: 64
            }, {
                n: 'sf_1502',
                t: 64
            }, {
                n: 'sf_1506',
                t: 64
            }, {
                n: 'sf_1510',
                t: 64
            }, {
                n: 'sf_1514',
                t: 64
            }, {
                n: 'sf_1518',
                t: 64
            }, {
                n: 'sf_1526',
                t: 64
            }, {
                n: 'sf_1530',
                t: 64
            }, {
                n: 'sf_1534',
                t: 64
            }, {
                n: 'sf_1538',
                t: 64
            }, {
                n: 'sf_1542',
                t: 64
            }, {
                n: 'sf_1546',
                t: 64
            }, {
                n: 'sf_1550',
                t: 64
            }, {
                n: 'sf_1554',
                t: 64
            }, {
                n: 'sf_1558',
                t: 64
            }, {
                n: 'sf_1562',
                t: 64
            }, {
                n: 'sf_1566',
                t: 64
            }, {
                n: 'sf_1570',
                t: 64
            }, {
                n: 'sf_1574',
                t: 64
            }, {
                n: 'sf_1578',
                t: 64
            }, {
                n: 'sf_1582',
                t: 64
            }, {
                n: 'sf_1586',
                t: 64
            }, {
                n: 'sf_1590',
                t: 64
            }, {
                n: 'sf_1594',
                t: 64
            }, {
                n: 'sf_1598',
                t: 64
            }, {
                n: 'sf_1602',
                t: 64
            }, {
                n: 'sf_1606',
                t: 64
            }, {
                n: 'sf_1610',
                t: 64
            }, {
                n: 'sf_1614',
                t: 64
            }, {
                n: 'sf_1618',
                t: 64
            }, {
                n: 'sf_1622',
                t: 64
            }, {
                n: 'sf_1626',
                t: 64
            }, {
                n: 'sf_1630',
                t: 64
            }, {
                n: 'sf_1634',
                t: 64
            }, {
                n: 'sf_1638',
                t: 64
            }, {
                n: 'sf_1642',
                t: 64
            }, {
                n: 'sf_1646',
                t: 64
            }, {
                n: 'sf_1652',
                t: 64
            }, {
                n: 'sf_1656',
                t: 64
            }, {
                n: 'sf_1660',
                t: 64
            }, {
                n: 'sf_1664',
                t: 64
            }, {
                n: 'si1666',
                t: 12
            }, {
                n: 'si5116',
                t: 612
            }, {
                n: 'si5096',
                t: 1269
            }],
            containerType: 'simulation-non-responsive',
            widgetProps: '{"visibilityInfo":{"slide-item-clickbox":false,"slide-item-highlight-box":false,"slide-item-comment-box":false,"slide-item-inputfield":false,"slide-item-mouse-pointer":true,"object-typing-text":false},"sizeNPos":{"width":1728,"height":1080},"groupedItemsVisibility":{"slide-item-clickbox":0,"slide-item-highlight-box":1,"slide-item-comment-box":0,"slide-item-inputfield":0,"slide-item-mouse-pointer":1},"canBeCard":false}',
            option: '',
            padding: {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            },
            parent: 'si630',
            selectable: false,
            trin: 0,
            trout: 0,
            isDD: false
        },
        si622c: {
            b: [0, 0, 0, 0],
            fh: false,
            fw: false,
            uid: 622,
            iso: true,
            css: {
                360: {
                    l: '0px',
                    t: '0px',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0px',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0px',
                    lvID: -1,
                    w: '0px',
                    h: '0px',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                },
                600: {
                    l: '0px',
                    t: '0px',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0px',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0px',
                    lvID: -1,
                    w: '0px',
                    h: '0px',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                },
                972: {
                    l: '0px',
                    t: '0px',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0px',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0px',
                    lvID: -1,
                    w: '0px',
                    h: '0px',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                }

            },
            sr: cp.fd,
            dn: 'si622',
            visible: 1,
            effectiveVi: 1,
            JSONEffectData: false,
            imgf: {
                b: 0,
                c: 0,
                br: 0,
                o: 100,
                ifbm: 'normal',
                ift: 'Normal',
                ifi: 0,
                iff: {
                    bc: '#ffe2c8'
                },
                tiletype: 0,
                extraImageProps: '',
                tiletype: 0,
                imageFocus: 0,
                w: 3456,
                h: 2160,
                id: 638,
                tsp: 50,
                ip: 'dr/0638.png'
            },
            fe: true,
            fca: 1,
            fa: 100,
            iso: true,
            sde: false,
            scp: 0,
            sc: '#0080ff',
            sw: 1,
            ss: 0,
            sa: 1,
            se: false,
            vbwr: [-1, -1, 1, 1],
            vb: [-1, -1, 1, 1]
        },
        si1666: {
            name: 'Maus_2',
            type: 12,
            from: 106,
            to: 180,
            rp: 0,
            rpa: 0,
            mdi: 'si1666c',
            tag: 'slide-item-mouse-pointer',
            v: 0,
            enabled: true,
            defEn: true,
            vu: [],
            siaf: 0.5,
            sid: 2.5,
            slideItemThemeCounter: 0,
            presetData: [{
                presetId: '',
                presetType: -1,
                isOverridden: false
            }],
            widgetProps: '{"mouseMovementPathType":1,"mouseMovementSpeed":1,"mouseStraightPath":false,"scaleValue":"medium","mouseClickData":{"color":"#ad00ffFF","showMouseClick":true,"scaleValue":"medium"},"svgData":{"mousePointerType":0},"mousePathPoints":{"mouseStartPointX":241.84528459821425,"mouseStartPointY":145.9800502232143,"mouseEndPointX":756,"mouseEndPointY":171}}',
            parentGroup: 'si622',
            retainState: false,
            immo: false,
            apsn: 'Slide604',
            efph: {},
            eflh: [],
            iflbx: false,
            ipflbx: true,
            msa: '',
            trin: 0,
            trout: 0,
            isDD: false
        },
        si1666c: {
            b: [752, 162, 761, 180],
            fh: false,
            fw: false,
            uid: 1666,
            iso: false,
            css: {
                360: {
                    l: '77.366%',
                    t: '26.645%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '77.366%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '26.645%',
                    lvID: -1,
                    w: '9px',
                    h: '18px',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                },
                600: {
                    l: '77.366%',
                    t: '26.645%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '77.366%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '26.645%',
                    lvID: -1,
                    w: '9px',
                    h: '18px',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                },
                972: {
                    l: '77.366%',
                    t: '26.645%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '77.366%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '26.645%',
                    lvID: -1,
                    w: '9px',
                    h: '18px',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                }

            },
            sr: cp.fd,
            dn: 'si1666',
            visible: 1,
            effectiveVi: 1,
            JSONEffectData: false,
            t: 1,
            sz: 0,
            mpt: 0,
            data: {
                c: '#0000ff',
                fca: 1,
                r: 12
            },
            sde: false,
            se: false,
            vbwr: [260, 154, 761, 180],
            vb: [260, 154, 761, 180]
        },
        si5116: {
            name: 'Rectangle_11',
            type: 612,
            from: 91,
            to: 180,
            rp: 0,
            rpa: 0,
            mdi: 'si5116c',
            tag: '',
            v: 0,
            enabled: true,
            defEn: true,
            vu: [],
            siaf: 0,
            sid: 3,
            slideItemThemeCounter: 0,
            presetData: [{
                presetId: 'cp_default_caption_shape_solid_style',
                presetType: 0,
                isOverridden: false
            }, {
                presetId: 'cp_default_quiz_caption_textinshape_style',
                presetType: 4,
                isOverridden: false
            }, {
                presetId: '',
                presetType: 2,
                isOverridden: false
            }],
            widgetProps: '{"isHighlightBox":true,"currentState":"normal","normal":{"opacity":100,"shapePresetData":{"presetId":"cp_clickbox_shape_solid_style","fillEnable":true,"fillType":1,"strokeEnable":true,"shadowEnable":false}},"shapeData":{"type":"rect","attributes":{"rx":"0"}},"sizeNPos":{"top":59,"left":14,"width":300,"height":"auto"}}',
            parentGroup: 'si622',
            retainState: false,
            immo: false,
            apsn: 'Slide604',
            efph: {},
            eflh: [],
            iflbx: false,
            ipflbx: true,
            vt: '',
            rplm: {
                360: 0,
                600: 0,
                972: 0
            },
            rprm: {
                360: 0,
                600: 0,
                972: 0
            },
            rptm: {
                360: 0,
                600: 0,
                972: 0
            },
            rpbm: {
                360: 0,
                600: 0,
                972: 0
            },
            rpta: {
                360: 2,
                600: 2,
                972: 2
            },
            rptl: {
                360: 1,
                600: 1,
                972: 1
            },
            rpvt: {
                360: {
                    vt: '',
                    text: ''
                },
                600: {
                    vt: '',
                    text: ''
                },
                972: {
                    vt: '',
                    text: ''
                }

            },
            subType: '',
            text: '{"blocks":[{"key":"b8kef","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{"listDepth":"0","listType":"S_Bullets08","listIndent":"100%","listSize":"100%","overridden":"false","presetId":"cp_default_quiz_caption_textinshape_style"}}],"entityMap":{}}',
            isc: 1,
            trin: 0,
            trout: 0,
            stl: [{
                stn: 5127,
                stt: 0,
                dsr: 'Standardstatus',
                stsi: [5116]
            }, {
                stn: 5139,
                stt: 102,
                dsr: 'Fehler',
                stsi: [5140]
            }],
            stis: 0,
            bstiid: -1,
            sipst: 0,
            sicbs: false,
            sihhs: false,
            sihds: false,
            stc: ['si5116', 'si5129', 'si5140', 'si5151'],
            isDD: false
        },
        si5116c: {
            b: [0, 0, 972, 48],
            fh: false,
            fw: false,
            uid: 5116,
            iso: false,
            css: {
                360: {
                    l: '0.000%',
                    t: '0.000%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0.000%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0.000%',
                    lvID: -1,
                    w: '100.000%',
                    h: '7.895%',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                },
                600: {
                    l: '0.000%',
                    t: '0.000%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0.000%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0.000%',
                    lvID: -1,
                    w: '100.000%',
                    h: '7.895%',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                },
                972: {
                    l: '0.000%',
                    t: '0.000%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0.000%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0.000%',
                    lvID: -1,
                    w: '100.000%',
                    h: '7.895%',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                }

            },
            dn: 'si5116',
            visible: 1,
            effectiveVi: 1,
            JSONEffectData: false,
            hms: false,
            hme: false,
            subt: 1,
            bc: '#c8e2ff',
            fe: true,
            fca: 1,
            fa: 0,
            path: 'M 0.000000 0.000000 L 972.000000 0.000000 L 972.000000 48.000000 L 0.000000 48.000000 Z ',
            svg: false,
            sde: false,
            scp: 0,
            sc: '#0080ff',
            sw: 1,
            ss: 0,
            sa: 1,
            se: false,
            vbwr: [-2, -2, 974, 50],
            vb: [-2, -2, 974, 50]
        },
        si5129: {
            name: '',
            type: 612,
            from: 91,
            to: 180,
            rp: 0,
            rpa: 0,
            mdi: 'si5129c',
            tag: '',
            v: 0,
            enabled: true,
            defEn: true,
            vu: [],
            siaf: 0,
            sid: 3,
            slideItemThemeCounter: 0,
            presetData: [{
                presetId: '',
                presetType: 0,
                isOverridden: false
            }, {
                presetId: '',
                presetType: 4,
                isOverridden: false
            }, {
                presetId: '',
                presetType: 2,
                isOverridden: false
            }],
            widgetProps: '{"isHighlightBox":true,"currentState":"normal","normal":{"opacity":100,"shapePresetData":{"presetId":"cp_clickbox_shape_solid_style","fillEnable":true,"fillType":1,"strokeEnable":true,"shadowEnable":false}},"shapeData":{"type":"rect","attributes":{"rx":"0"}},"sizeNPos":{"top":59,"left":14,"width":300,"height":"auto"}}',
            parentGroup: 'si622',
            retainState: false,
            immo: false,
            apsn: 'Slide604',
            efph: {},
            eflh: [],
            iflbx: false,
            ipflbx: true,
            vt: '',
            rplm: {
                360: 0,
                600: 0,
                972: 0
            },
            rprm: {
                360: 0,
                600: 0,
                972: 0
            },
            rptm: {
                360: 0,
                600: 0,
                972: 0
            },
            rpbm: {
                360: 0,
                600: 0,
                972: 0
            },
            rpta: {
                360: 2,
                600: 2,
                972: 2
            },
            rptl: {
                360: 1,
                600: 1,
                972: 1
            },
            rpvt: {
                360: {
                    vt: '',
                    text: ''
                },
                600: {
                    vt: '',
                    text: ''
                },
                972: {
                    vt: '',
                    text: ''
                }

            },
            subType: '',
            text: '{"blocks":[{"key":"e7msa","text":"Erfolgstext eingeben","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":55,"style":"overridden:false"},{"offset":0,"length":55,"style":"opacity:1"},{"offset":0,"length":55,"style":"backgroundColor:unset"},{"offset":0,"length":55,"style":"defaultBackgroundColor:#5EFF67"},{"offset":0,"length":55,"style":"textHighlightEnable:false"},{"offset":0,"length":55,"style":"textOutlineEnable:false"},{"offset":0,"length":55,"style":"textShadowEnable:false"}],"entityRanges":[],"data":{"presetId":"text-caption_correct","listDepth":"0","listType":"S_Bullets08","listIndent":"100%","listSize":"100%","listColor":"#666666","overridden":"false"}}],"entityMap":{}}',
            isc: 1,
            trin: 0,
            trout: 0,
            bstin: 'si5116',
            stl: [{
                stn: 'Normal',
                stt: 0,
                stsi: [5129]
            }],
            stis: 0,
            bstiid: 5116,
            sipst: 101,
            sicbs: true,
            sihhs: false,
            sihds: false,
            baseItemIdForPropertyFlow: 5116,
            isDD: false
        },
        si5129c: {
            b: [0, 0, 972, 48],
            fh: false,
            fw: false,
            uid: 5129,
            iso: false,
            css: {
                360: {
                    l: '0.000%',
                    t: '0.000%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0.000%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0.000%',
                    lvID: -1,
                    w: '100.000%',
                    h: '7.895%',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                },
                600: {
                    l: '0.000%',
                    t: '0.000%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0.000%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0.000%',
                    lvID: -1,
                    w: '100.000%',
                    h: '7.895%',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                },
                972: {
                    l: '0.000%',
                    t: '0.000%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0.000%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0.000%',
                    lvID: -1,
                    w: '100.000%',
                    h: '7.895%',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                }

            },
            dn: 'si5129',
            visible: 0,
            effectiveVi: 1,
            JSONEffectData: false,
            hms: false,
            hme: false,
            subt: 1,
            bc: '#c8e2ff',
            fe: true,
            fca: 1,
            fa: 100,
            path: 'M 0.000000 0.000000 L 972.000000 0.000000 L 972.000000 48.000000 L 0.000000 48.000000 Z ',
            svg: false,
            sde: false,
            scp: 0,
            sc: '#0080ff',
            sw: 1,
            ss: 0,
            sa: 1,
            se: false,
            vbwr: [-2, -2, 974, 50],
            vb: [-2, -2, 974, 50]
        },
        si5140: {
            name: '',
            type: 612,
            from: 91,
            to: 180,
            rp: 0,
            rpa: 0,
            mdi: 'si5140c',
            tag: '',
            v: 0,
            enabled: true,
            defEn: true,
            vu: [],
            siaf: 0,
            sid: 3,
            slideItemThemeCounter: 0,
            presetData: [{
                presetId: '',
                presetType: 0,
                isOverridden: false
            }, {
                presetId: '',
                presetType: 4,
                isOverridden: false
            }, {
                presetId: '',
                presetType: 2,
                isOverridden: false
            }],
            widgetProps: '{"isHighlightBox":true,"currentState":"normal","normal":{"opacity":100,"shapePresetData":{"presetId":"cp_clickbox_shape_solid_style","fillEnable":true,"fillType":1,"strokeEnable":true,"shadowEnable":false}},"shapeData":{"type":"rect","attributes":{"rx":"0"}},"sizeNPos":{"top":59,"left":14,"width":300,"height":"auto"}}',
            parentGroup: 'si622',
            retainState: false,
            immo: false,
            apsn: 'Slide604',
            efph: {},
            eflh: [],
            iflbx: false,
            ipflbx: true,
            vt: '',
            rplm: {
                360: 0,
                600: 0,
                972: 0
            },
            rprm: {
                360: 0,
                600: 0,
                972: 0
            },
            rptm: {
                360: 0,
                600: 0,
                972: 0
            },
            rpbm: {
                360: 0,
                600: 0,
                972: 0
            },
            rpta: {
                360: 2,
                600: 2,
                972: 2
            },
            rptl: {
                360: 1,
                600: 1,
                972: 1
            },
            rpvt: {
                360: {
                    vt: '',
                    text: ''
                },
                600: {
                    vt: '',
                    text: ''
                },
                972: {
                    vt: '',
                    text: ''
                }

            },
            subType: '',
            text: '{"blocks":[{"key":"ah2dc","text":"Misserfolgstext eingeben","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":57,"style":"overridden:false"},{"offset":0,"length":57,"style":"opacity:1"},{"offset":0,"length":57,"style":"backgroundColor:unset"},{"offset":0,"length":57,"style":"defaultBackgroundColor:#5EFF67"},{"offset":0,"length":57,"style":"textHighlightEnable:false"},{"offset":0,"length":57,"style":"textOutlineEnable:false"},{"offset":0,"length":57,"style":"textShadowEnable:false"}],"entityRanges":[],"data":{"presetId":"text-caption_incorrect","listDepth":"0","listType":"S_Bullets08","listIndent":"100%","listSize":"100%","listColor":"#666666","overridden":"false"}}],"entityMap":{}}',
            isc: 1,
            trin: 0,
            trout: 0,
            bstin: 'si5116',
            stl: [{
                stn: 'Normal',
                stt: 0,
                stsi: [5140]
            }],
            stis: 0,
            bstiid: 5116,
            sipst: 102,
            sicbs: true,
            sihhs: false,
            sihds: false,
            baseItemIdForPropertyFlow: 5116,
            isDD: false
        },
        si5140c: {
            b: [0, 0, 972, 48],
            fh: false,
            fw: false,
            uid: 5140,
            iso: false,
            css: {
                360: {
                    l: '0.000%',
                    t: '0.000%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0.000%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0.000%',
                    lvID: -1,
                    w: '100.000%',
                    h: '7.895%',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                },
                600: {
                    l: '0.000%',
                    t: '0.000%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0.000%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0.000%',
                    lvID: -1,
                    w: '100.000%',
                    h: '7.895%',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                },
                972: {
                    l: '0.000%',
                    t: '0.000%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0.000%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0.000%',
                    lvID: -1,
                    w: '100.000%',
                    h: '7.895%',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                }

            },
            dn: 'si5140',
            visible: 0,
            effectiveVi: 1,
            JSONEffectData: false,
            hms: false,
            hme: false,
            subt: 1,
            bc: '#c8e2ff',
            fe: true,
            fca: 1,
            fa: 100,
            path: 'M 0.000000 0.000000 L 972.000000 0.000000 L 972.000000 48.000000 L 0.000000 48.000000 Z ',
            svg: false,
            sde: false,
            scp: 0,
            sc: '#0080ff',
            sw: 1,
            ss: 0,
            sa: 1,
            se: false,
            vbwr: [-2, -2, 974, 50],
            vb: [-2, -2, 974, 50]
        },
        si5151: {
            name: '',
            type: 612,
            from: 91,
            to: 180,
            rp: 0,
            rpa: 0,
            mdi: 'si5151c',
            tag: '',
            v: 0,
            enabled: true,
            defEn: true,
            vu: [],
            siaf: 0,
            sid: 3,
            slideItemThemeCounter: 0,
            presetData: [{
                presetId: '',
                presetType: 0,
                isOverridden: false
            }, {
                presetId: '',
                presetType: 4,
                isOverridden: false
            }, {
                presetId: '',
                presetType: 2,
                isOverridden: false
            }],
            widgetProps: '{"isHighlightBox":true,"currentState":"normal","normal":{"opacity":100,"shapePresetData":{"presetId":"cp_clickbox_shape_solid_style","fillEnable":true,"fillType":1,"strokeEnable":true,"shadowEnable":false}},"shapeData":{"type":"rect","attributes":{"rx":"0"}},"sizeNPos":{"top":59,"left":14,"width":300,"height":"auto"}}',
            parentGroup: 'si622',
            retainState: false,
            immo: false,
            apsn: 'Slide604',
            efph: {},
            eflh: [],
            iflbx: false,
            ipflbx: true,
            vt: '',
            rplm: {
                360: 0,
                600: 0,
                972: 0
            },
            rprm: {
                360: 0,
                600: 0,
                972: 0
            },
            rptm: {
                360: 0,
                600: 0,
                972: 0
            },
            rpbm: {
                360: 0,
                600: 0,
                972: 0
            },
            rpta: {
                360: 2,
                600: 2,
                972: 2
            },
            rptl: {
                360: 1,
                600: 1,
                972: 1
            },
            rpvt: {
                360: {
                    vt: '',
                    text: ''
                },
                600: {
                    vt: '',
                    text: ''
                },
                972: {
                    vt: '',
                    text: ''
                }

            },
            subType: '',
            text: '{"blocks":[{"key":"ah2dc","text":"Hinweistext eingeben","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":57,"style":"overridden:false"},{"offset":0,"length":57,"style":"opacity:1"},{"offset":0,"length":57,"style":"backgroundColor:unset"},{"offset":0,"length":57,"style":"defaultBackgroundColor:#5EFF67"},{"offset":0,"length":57,"style":"textHighlightEnable:false"},{"offset":0,"length":57,"style":"textOutlineEnable:false"},{"offset":0,"length":57,"style":"textShadowEnable:false"}],"entityRanges":[],"data":{"presetId":"text-caption_incorrect","listDepth":"0","listType":"S_Bullets08","listIndent":"100%","listSize":"100%","listColor":"#666666","overridden":"false"}}],"entityMap":{}}',
            isc: 1,
            trin: 0,
            trout: 0,
            bstin: 'si5116',
            stl: [{
                stn: 'Normal',
                stt: 0,
                stsi: [5151]
            }],
            stis: 0,
            bstiid: 5116,
            sipst: 103,
            sicbs: true,
            sihhs: false,
            sihds: false,
            baseItemIdForPropertyFlow: 5116,
            isDD: false
        },
        si5151c: {
            b: [0, 0, 972, 48],
            fh: false,
            fw: false,
            uid: 5151,
            iso: false,
            css: {
                360: {
                    l: '0.000%',
                    t: '0.000%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0.000%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0.000%',
                    lvID: -1,
                    w: '100.000%',
                    h: '7.895%',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                },
                600: {
                    l: '0.000%',
                    t: '0.000%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0.000%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0.000%',
                    lvID: -1,
                    w: '100.000%',
                    h: '7.895%',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                },
                972: {
                    l: '0.000%',
                    t: '0.000%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0.000%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0.000%',
                    lvID: -1,
                    w: '100.000%',
                    h: '7.895%',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                }

            },
            dn: 'si5151',
            visible: 0,
            effectiveVi: 1,
            JSONEffectData: false,
            hms: false,
            hme: false,
            subt: 1,
            bc: '#c8e2ff',
            fe: true,
            fca: 1,
            fa: 100,
            path: 'M 0.000000 0.000000 L 972.000000 0.000000 L 972.000000 48.000000 L 0.000000 48.000000 Z ',
            svg: false,
            sde: false,
            scp: 0,
            sc: '#0080ff',
            sw: 1,
            ss: 0,
            sa: 1,
            se: false,
            vbwr: [-2, -2, 974, 50],
            vb: [-2, -2, 974, 50]
        },
        si5096: {
            name: 'Highlight_box_11',
            type: 1269,
            from: 91,
            to: 180,
            rp: 0,
            rpa: 0,
            mdi: 'si5096c',
            tag: 'slide-item-highlight-box',
            v: 0,
            enabled: true,
            defEn: true,
            vu: [],
            siaf: 0,
            sid: 3,
            slideItemThemeCounter: 0,
            presetData: [{
                presetId: '',
                presetType: 13,
                isOverridden: false
            }],
            widgetProps: '{"isHighlightBox":true,"currentState":"normal","normal":{"opacity":100,"shapePresetData":{"presetId":"cp_clickbox_shape_solid_style","fillEnable":true,"fillType":1,"strokeEnable":true,"shadowEnable":false}},"shapeData":{"type":"rect","attributes":{"rx":"0"}},"sizeNPos":{"left":1420,"top":24,"width":128,"height":32},"shouldRender":true}',
            parentGroup: 'si622',
            retainState: false,
            immo: false,
            apsn: 'Slide604',
            efph: {},
            eflh: [],
            iflbx: false,
            ipflbx: true,
            ihb: true,
            si: [{
                n: 'si5106',
                t: 612
            }],
            te: false,
            ie: false,
            trin: 0,
            trout: 0,
            stl: [{
                stn: 'Normal',
                stt: 0,
                stsi: [5096]
            }],
            stis: 0,
            bstiid: -1,
            sipst: 0,
            sicbs: false,
            sihhs: false,
            sihds: false,
            siq: false,
            isDD: false
        },
        si5096c: {
            b: [1420, 24, 1548, 56],
            fh: false,
            fw: false,
            uid: 5096,
            iso: false,
            css: {
                360: {
                    l: '146.091%',
                    t: '3.947%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '146.091%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '3.947%',
                    lvID: -1,
                    w: '13.169%',
                    h: '5.263%',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                },
                600: {
                    l: '146.091%',
                    t: '3.947%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '146.091%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '3.947%',
                    lvID: -1,
                    w: '13.169%',
                    h: '5.263%',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                },
                972: {
                    l: '146.091%',
                    t: '3.947%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '146.091%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '3.947%',
                    lvID: -1,
                    w: '13.169%',
                    h: '5.263%',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                }

            },
            sr: cp.fd,
            dn: 'si5096',
            visible: 1,
            effectiveVi: 1,
            JSONEffectData: false,
            fa: 100,
            vbwr: [1420, 24, 1548, 56],
            vb: [1420, 24, 1548, 56]
        },
        si5106: {
            name: 'Form_11',
            type: 612,
            from: 91,
            to: 180,
            rp: 0,
            rpa: 0,
            mdi: 'si5106c',
            tag: '',
            v: 0,
            enabled: true,
            defEn: true,
            vu: [],
            siaf: 0,
            sid: 3,
            slideItemThemeCounter: 0,
            presetData: [{
                presetId: '',
                presetType: 0,
                isOverridden: false
            }, {
                presetId: '',
                presetType: 4,
                isOverridden: false
            }, {
                presetId: '',
                presetType: 2,
                isOverridden: false
            }],
            widgetProps: '',
            retainState: false,
            immo: false,
            apsn: 'Slide604',
            efph: {},
            eflh: [],
            iflbx: false,
            ipflbx: true,
            vt: '',
            rplm: {
                360: 0,
                600: 0,
                972: 0
            },
            rprm: {
                360: 0,
                600: 0,
                972: 0
            },
            rptm: {
                360: 0,
                600: 0,
                972: 0
            },
            rpbm: {
                360: 0,
                600: 0,
                972: 0
            },
            rpta: {
                360: 2,
                600: 2,
                972: 2
            },
            rptl: {
                360: 1,
                600: 1,
                972: 1
            },
            rpvt: {
                360: {
                    vt: '',
                    text: ''
                },
                600: {
                    vt: '',
                    text: ''
                },
                972: {
                    vt: '',
                    text: ''
                }

            },
            subType: '',
            text: '{"blocks":[{"key":"4k0dr","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{"listDepth":"0","listType":"S_Bullets08","listIndent":"100 % ","listSize":"100 % ","overridden":"false"}}],"entityMap":{}}',
            trin: 0,
            trout: 0,
            stl: [{
                stn: 'Normal',
                stt: 0,
                stsi: [5106]
            }],
            stis: 0,
            bstiid: 5096,
            sipst: -1,
            sicbs: false,
            sihhs: false,
            sihds: false,
            parent: 'si5096',
            baseItemIdForPropertyFlow: -1,
            isDD: false
        },
        si5106c: {
            b: [0, 0, 128, 32],
            fh: false,
            fw: false,
            uid: 5106,
            iso: false,
            css: {
                360: {
                    l: '0.000%',
                    t: '0.000%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0.000%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0.000%',
                    lvID: -1,
                    w: '13.169%',
                    h: '5.263%',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                },
                600: {
                    l: '0.000%',
                    t: '0.000%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0.000%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0.000%',
                    lvID: -1,
                    w: '13.169%',
                    h: '5.263%',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                },
                972: {
                    l: '0.000%',
                    t: '0.000%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0.000%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0.000%',
                    lvID: -1,
                    w: '13.169%',
                    h: '5.263%',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                }

            },
            dn: 'si5106',
            visible: 1,
            effectiveVi: 1,
            JSONEffectData: false,
            hms: false,
            hme: false,
            subt: 1,
            bc: '#ffffff',
            fe: true,
            fca: 1,
            fa: 100,
            path: '',
            svg: false,
            sde: false,
            scp: 0,
            sc: '#0080ff',
            sw: 1,
            ss: 0,
            sa: 1,
            se: false,
            vbwr: [-2, -2, 130, 34],
            vb: [-2, -2, 130, 34]
        },
        Slide604: {
            lb: 'Libraries öffnen',
            id: 604,
            from: 91,
            to: 180,
            iols: 0,
            i360qs: false,
            sdu: 3,
            presetData: [{
                presetId: '',
                presetType: 3,
                isOverridden: false
            }],
            propTxtScaling: false,
            minFontSizeScaling: 14,
            useng: true,
            transition: {
                type: 0
            },
            mmot: false,
            mdi: 'Slide604c',
            st: 'Normal Slide',
            sk: 'Simulation',
            slideTag: '',
            type: 30,
            slideThemeCounter: 0,
            accProps: {},
            si: [{
                n: 'si630',
                t: 1268
            }],
            iph: [],
            oa: 'sf_646Ad,sf_810Ad,sf_902Ad,sf_1038Ad,sf_1050Ad,sf_1190Ad,sf_1330Ad,sf_1478Ad,sf_1486Ad,sf_1526Ad,sf_1652Ad',
            v: false,
            canvasData: {
                bc: '#ffffff',
                fa: 1,
                fe: true,
                iso: false,
                se: false
            },
            bookmarks: [],
            qs: ''
        },
        Slide604c: {
            b: [0, 0, 0, 0],
            css: {},
            sr: cp.fd,
            uid: 604,
            dn: 'Slide604',
            visible: '1'
        },
        si1741: {
            name: 'Simulation_3',
            type: 1268,
            from: 181,
            to: 270,
            rp: 0,
            rpa: 0,
            mdi: 'si1741c',
            tag: 'container-simulation-widget',
            v: 0,
            enabled: true,
            defEn: true,
            vu: [],
            siaf: 0,
            sid: 3,
            slideItemThemeCounter: 0,
            presetData: [{
                presetId: '',
                presetType: 14,
                isOverridden: false
            }, {
                presetId: '',
                presetType: 2,
                isOverridden: false
            }],
            widgetProps: '{"autoFit":true}',
            retainState: false,
            immo: false,
            apsn: 'Slide1715',
            efph: {},
            eflh: [],
            iflbx: false,
            ipflbx: true,
            si: [{
                n: 'si1733',
                t: 1268
            }],
            containerType: 'simulation-widget',
            widgetProps: '{"autoFit":true}',
            option: '',
            padding: {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            },
            parent: '',
            selectable: false,
            trin: 0,
            trout: 0,
            isDD: false
        },
        si1741c: {
            b: [0, 0, 0, 0],
            fh: false,
            fw: false,
            uid: 1741,
            iso: false,
            css: {
                360: {
                    l: '0px',
                    t: '0px',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0px',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0px',
                    lvID: -1,
                    w: '0px',
                    h: '0px',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                },
                600: {
                    l: '0px',
                    t: '0px',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0px',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0px',
                    lvID: -1,
                    w: '0px',
                    h: '0px',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                },
                972: {
                    l: '0px',
                    t: '0px',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0px',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0px',
                    lvID: -1,
                    w: '0px',
                    h: '0px',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                }

            },
            sr: cp.fd,
            dn: 'si1741',
            visible: 1,
            effectiveVi: 1,
            JSONEffectData: false,
            bc: '#ffffff',
            fe: true,
            fca: 1,
            fa: 100,
            sde: false,
            scp: 0,
            sc: '#0080ff',
            sw: 1,
            ss: 0,
            sa: 1,
            se: false,
            vbwr: [-1, -1, 1, 1],
            vb: [-1, -1, 1, 1]
        },
        si1733: {
            name: 'Simulation_non_responsive_3',
            type: 1268,
            from: 181,
            to: 270,
            rp: 0,
            rpa: 0,
            mdi: 'si1733c',
            tag: 'container-simulation-non-responsive',
            v: 0,
            enabled: true,
            defEn: true,
            vu: [],
            siaf: 0,
            sid: 3,
            slideItemThemeCounter: 0,
            presetData: [{
                presetId: '',
                presetType: 14,
                isOverridden: true
            }, {
                presetId: '',
                presetType: 2,
                isOverridden: true
            }],
            widgetProps: '{"visibilityInfo":{"slide-item-clickbox":false,"slide-item-highlight-box":false,"slide-item-comment-box":false,"slide-item-inputfield":false,"slide-item-mouse-pointer":false,"slide-item-highlight-box":true,"slide-item-comment-box":true,"slide-item-mouse-pointer":true},"sizeNPos":{"width":1728,"height":1080},"groupedItemsVisibility":{"slide-item-clickbox":0,"slide-item-highlight-box":0,"slide-item-comment-box":0,"slide-item-inputfield":0,"slide-item-mouse-pointer":0,"slide-item-highlight-box":1,"slide-item-comment-box":1,"slide-item-mouse-pointer":1},"canBeCard":false}',
            parentGroup: 'si1741',
            retainState: false,
            immo: false,
            apsn: 'Slide1715',
            efph: {},
            eflh: [],
            iflbx: false,
            ipflbx: true,
            si: [{
                n: 'si1752',
                t: 1269
            }, {
                n: 'si1772',
                t: 612
            }, {
                n: 'si1832',
                t: 612
            }, {
                n: 'si1842',
                t: 12
            }],
            containerType: 'simulation-non-responsive',
            widgetProps: '{"visibilityInfo":{"slide-item-clickbox":false,"slide-item-highlight-box":false,"slide-item-comment-box":false,"slide-item-inputfield":false,"slide-item-mouse-pointer":false,"slide-item-highlight-box":true,"slide-item-comment-box":true,"slide-item-mouse-pointer":true},"sizeNPos":{"width":1728,"height":1080},"groupedItemsVisibility":{"slide-item-clickbox":0,"slide-item-highlight-box":0,"slide-item-comment-box":0,"slide-item-inputfield":0,"slide-item-mouse-pointer":0,"slide-item-highlight-box":1,"slide-item-comment-box":1,"slide-item-mouse-pointer":1},"canBeCard":false}',
            option: '',
            padding: {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            },
            parent: 'si1741',
            selectable: false,
            trin: 0,
            trout: 0,
            isDD: false
        },
        si1733c: {
            b: [0, 0, 0, 0],
            fh: false,
            fw: false,
            uid: 1733,
            iso: true,
            css: {
                360: {
                    l: '0px',
                    t: '0px',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0px',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0px',
                    lvID: -1,
                    w: '0px',
                    h: '0px',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                },
                600: {
                    l: '0px',
                    t: '0px',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0px',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0px',
                    lvID: -1,
                    w: '0px',
                    h: '0px',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                },
                972: {
                    l: '0px',
                    t: '0px',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0px',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0px',
                    lvID: -1,
                    w: '0px',
                    h: '0px',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                }

            },
            sr: cp.fd,
            dn: 'si1733',
            visible: 1,
            effectiveVi: 1,
            JSONEffectData: false,
            imgf: {
                b: 0,
                c: 0,
                br: 0,
                o: 100,
                ifbm: 'normal',
                ift: 'Normal',
                ifi: 0,
                iff: {
                    bc: '#ffe2c8'
                },
                tiletype: 0,
                extraImageProps: '',
                tiletype: 0,
                imageFocus: 0,
                w: 3456,
                h: 2160,
                id: 1749,
                tsp: 50,
                ip: 'dr/01749.png'
            },
            fe: true,
            fca: 1,
            fa: 100,
            iso: true,
            sde: false,
            scp: 0,
            sc: '#0080ff',
            sw: 1,
            ss: 0,
            sa: 1,
            se: false,
            vbwr: [-1, -1, 1, 1],
            vb: [-1, -1, 1, 1]
        },
        si1752: {
            name: 'Highlight_box_2',
            type: 1269,
            from: 181,
            to: 270,
            rp: 0,
            rpa: 0,
            mdi: 'si1752c',
            tag: 'slide-item-highlight-box',
            v: 0,
            enabled: true,
            defEn: true,
            vu: [],
            siaf: 0,
            sid: 3,
            slideItemThemeCounter: 0,
            presetData: [{
                presetId: '',
                presetType: 13,
                isOverridden: false
            }],
            widgetProps: '{"isHighlightBox":true,"currentState":"normal","normal":{"opacity":"20","shapePresetData":{"presetId":"cp_clickbox_shape_solid_style","fillEnable":true,"fillType":1,"strokeEnable":true,"shadowEnable":false},"overriddenProperties":["strokeEnable","fillColor","opacity"],"appearenceProperties":{"fill":{"color":"#ad00ffFF"},"shadow":{},"stroke":{"enabled":false}}},"shapeData":{"type":"rect","attributes":{"rx":"0"}},"sizeNPos":{"top":612.142578125,"left":996.7654854910714,"width":80.16422816685267,"height":31.595703125}}',
            parentGroup: 'si1733',
            retainState: false,
            immo: false,
            apsn: 'Slide1715',
            efph: {},
            eflh: [],
            iflbx: false,
            ipflbx: true,
            ihb: true,
            si: [{
                n: 'si1762',
                t: 612
            }],
            te: false,
            ie: false,
            trin: 0,
            trout: 0,
            stl: [{
                stn: 'Normal',
                stt: 0,
                stsi: [1752]
            }],
            stis: 0,
            bstiid: -1,
            sipst: 0,
            sicbs: false,
            sihhs: false,
            sihds: false,
            siq: false,
            isDD: false
        },
        si1752c: {
            b: [1025, 616, 1059, 636],
            fh: false,
            fw: false,
            uid: 1752,
            iso: false,
            css: {
                360: {
                    l: '105.453%',
                    t: '101.316%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '105.453%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '101.316%',
                    lvID: -1,
                    w: '3.498%',
                    h: '3.289%',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                },
                600: {
                    l: '105.453%',
                    t: '101.316%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '105.453%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '101.316%',
                    lvID: -1,
                    w: '3.498%',
                    h: '3.289%',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                },
                972: {
                    l: '105.453%',
                    t: '101.316%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '105.453%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '101.316%',
                    lvID: -1,
                    w: '3.498%',
                    h: '3.289%',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                }

            },
            sr: cp.fd,
            dn: 'si1752',
            visible: 1,
            effectiveVi: 1,
            JSONEffectData: false,
            fa: 100,
            vbwr: [1025, 616, 1059, 636],
            vb: [1025, 616, 1059, 636]
        },
        si1762: {
            name: 'Form_2',
            type: 612,
            from: 181,
            to: 270,
            rp: 0,
            rpa: 0,
            mdi: 'si1762c',
            tag: '',
            v: 0,
            enabled: true,
            defEn: true,
            vu: [],
            siaf: 0,
            sid: 3,
            slideItemThemeCounter: 0,
            presetData: [{
                presetId: '',
                presetType: 0,
                isOverridden: false
            }, {
                presetId: '',
                presetType: 4,
                isOverridden: false
            }, {
                presetId: '',
                presetType: 2,
                isOverridden: false
            }],
            widgetProps: '',
            retainState: false,
            immo: false,
            apsn: 'Slide1715',
            efph: {},
            eflh: [],
            iflbx: false,
            ipflbx: true,
            vt: '',
            rplm: {
                360: 0,
                600: 0,
                972: 0
            },
            rprm: {
                360: 0,
                600: 0,
                972: 0
            },
            rptm: {
                360: 0,
                600: 0,
                972: 0
            },
            rpbm: {
                360: 0,
                600: 0,
                972: 0
            },
            rpta: {
                360: 2,
                600: 2,
                972: 2
            },
            rptl: {
                360: 1,
                600: 1,
                972: 1
            },
            rpvt: {
                360: {
                    vt: '',
                    text: ''
                },
                600: {
                    vt: '',
                    text: ''
                },
                972: {
                    vt: '',
                    text: ''
                }

            },
            subType: '',
            text: '{"blocks":[{"key":"4k0dr","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{"listDepth":"0","listType":"S_Bullets08","listIndent":"100 % ","listSize":"100 % ","overridden":"false"}}],"entityMap":{}}',
            trin: 0,
            trout: 0,
            stl: [{
                stn: 'Normal',
                stt: 0,
                stsi: [1762]
            }],
            stis: 0,
            bstiid: 1752,
            sipst: -1,
            sicbs: false,
            sihhs: false,
            sihds: false,
            parent: 'si1752',
            baseItemIdForPropertyFlow: -1,
            isDD: false
        },
        si1762c: {
            b: [0, 0, 34, 20],
            fh: false,
            fw: false,
            uid: 1762,
            iso: false,
            css: {
                360: {
                    l: '0.000%',
                    t: '0.000%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0.000%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0.000%',
                    lvID: -1,
                    w: '3.498%',
                    h: '3.289%',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                },
                600: {
                    l: '0.000%',
                    t: '0.000%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0.000%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0.000%',
                    lvID: -1,
                    w: '3.498%',
                    h: '3.289%',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                },
                972: {
                    l: '0.000%',
                    t: '0.000%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0.000%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0.000%',
                    lvID: -1,
                    w: '3.498%',
                    h: '3.289%',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                }

            },
            dn: 'si1762',
            visible: 1,
            effectiveVi: 1,
            JSONEffectData: false,
            hms: false,
            hme: false,
            subt: 1,
            bc: '#ffffff',
            fe: true,
            fca: 1,
            fa: 100,
            path: '',
            svg: false,
            sde: false,
            scp: 0,
            sc: '#0080ff',
            sw: 1,
            ss: 0,
            sa: 1,
            se: false,
            vbwr: [-2, -2, 36, 22],
            vb: [-2, -2, 36, 22]
        },
        si1772: {
            name: 'Rectangle_2',
            type: 612,
            from: 181,
            to: 270,
            rp: 0,
            rpa: 0,
            mdi: 'si1772c',
            tag: '',
            v: 0,
            enabled: true,
            defEn: true,
            vu: [],
            siaf: 0,
            sid: 3,
            slideItemThemeCounter: 0,
            presetData: [{
                presetId: 'cp_default_caption_shape_solid_style',
                presetType: 0,
                isOverridden: false
            }, {
                presetId: 'cp_default_quiz_caption_textinshape_style',
                presetType: 4,
                isOverridden: false
            }, {
                presetId: '',
                presetType: 2,
                isOverridden: false
            }],
            widgetProps: '{"sizeNPos":{"top":676,"left":1040,"width":300,"height":"auto"}}',
            parentGroup: 'si1733',
            retainState: false,
            immo: false,
            apsn: 'Slide1715',
            efph: {},
            eflh: [],
            iflbx: false,
            ipflbx: true,
            vt: '',
            rplm: {
                360: 0,
                600: 0,
                972: 0
            },
            rprm: {
                360: 0,
                600: 0,
                972: 0
            },
            rptm: {
                360: 0,
                600: 0,
                972: 0
            },
            rpbm: {
                360: 0,
                600: 0,
                972: 0
            },
            rpta: {
                360: 2,
                600: 2,
                972: 2
            },
            rptl: {
                360: 1,
                600: 1,
                972: 1
            },
            rpvt: {
                360: {
                    vt: '',
                    text: ''
                },
                600: {
                    vt: '',
                    text: ''
                },
                972: {
                    vt: '',
                    text: ''
                }

            },
            subType: '',
            text: '{"blocks":[{"key":"b8kef","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{"listDepth":"0","listType":"S_Bullets08","listIndent":"100%","listSize":"100%","overridden":"false","presetId":"cp_default_quiz_caption_textinshape_style"}}],"entityMap":{}}',
            isc: 1,
            trin: 0,
            trout: 0,
            stl: [{
                stn: 1783,
                stt: 0,
                dsr: 'Standardstatus',
                stsi: [1772]
            }],
            stis: 0,
            bstiid: -1,
            sipst: 0,
            sicbs: false,
            sihhs: false,
            sihds: false,
            stc: ['si1772', 'si1785', 'si1796', 'si1807'],
            isDD: false
        },
        si1772c: {
            b: [0, 0, 972, 48],
            fh: false,
            fw: false,
            uid: 1772,
            iso: false,
            css: {
                360: {
                    l: '0.000%',
                    t: '0.000%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0.000%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0.000%',
                    lvID: -1,
                    w: '100.000%',
                    h: '7.895%',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                },
                600: {
                    l: '0.000%',
                    t: '0.000%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0.000%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0.000%',
                    lvID: -1,
                    w: '100.000%',
                    h: '7.895%',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                },
                972: {
                    l: '0.000%',
                    t: '0.000%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0.000%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0.000%',
                    lvID: -1,
                    w: '100.000%',
                    h: '7.895%',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                }

            },
            dn: 'si1772',
            visible: 1,
            effectiveVi: 1,
            JSONEffectData: false,
            hms: false,
            hme: false,
            subt: 1,
            bc: '#c8e2ff',
            fe: true,
            fca: 1,
            fa: 0,
            path: 'M 0.000000 0.000000 L 972.000000 0.000000 L 972.000000 48.000000 L 0.000000 48.000000 Z ',
            svg: false,
            sde: false,
            scp: 0,
            sc: '#0080ff',
            sw: 1,
            ss: 0,
            sa: 1,
            se: false,
            vbwr: [-2, -2, 974, 50],
            vb: [-2, -2, 974, 50]
        },
        si1785: {
            name: '',
            type: 612,
            from: 181,
            to: 270,
            rp: 0,
            rpa: 0,
            mdi: 'si1785c',
            tag: '',
            v: 0,
            enabled: true,
            defEn: true,
            vu: [],
            siaf: 0,
            sid: 3,
            slideItemThemeCounter: 0,
            presetData: [{
                presetId: '',
                presetType: 0,
                isOverridden: false
            }, {
                presetId: '',
                presetType: 4,
                isOverridden: false
            }, {
                presetId: '',
                presetType: 2,
                isOverridden: false
            }],
            widgetProps: '{"sizeNPos":{"top":676,"left":1040,"width":300,"height":"auto"}}',
            parentGroup: 'si1733',
            retainState: false,
            immo: false,
            apsn: 'Slide1715',
            efph: {},
            eflh: [],
            iflbx: false,
            ipflbx: true,
            vt: '',
            rplm: {
                360: 0,
                600: 0,
                972: 0
            },
            rprm: {
                360: 0,
                600: 0,
                972: 0
            },
            rptm: {
                360: 0,
                600: 0,
                972: 0
            },
            rpbm: {
                360: 0,
                600: 0,
                972: 0
            },
            rpta: {
                360: 2,
                600: 2,
                972: 2
            },
            rptl: {
                360: 1,
                600: 1,
                972: 1
            },
            rpvt: {
                360: {
                    vt: '',
                    text: ''
                },
                600: {
                    vt: '',
                    text: ''
                },
                972: {
                    vt: '',
                    text: ''
                }

            },
            subType: '',
            text: '{"blocks":[{"key":"e7msa","text":"Erfolgstext eingeben","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":55,"style":"overridden:false"},{"offset":0,"length":55,"style":"opacity:1"},{"offset":0,"length":55,"style":"backgroundColor:unset"},{"offset":0,"length":55,"style":"defaultBackgroundColor:#5EFF67"},{"offset":0,"length":55,"style":"textHighlightEnable:false"},{"offset":0,"length":55,"style":"textOutlineEnable:false"},{"offset":0,"length":55,"style":"textShadowEnable:false"}],"entityRanges":[],"data":{"presetId":"text-caption_correct","listDepth":"0","listType":"S_Bullets08","listIndent":"100%","listSize":"100%","listColor":"#666666","overridden":"false"}}],"entityMap":{}}',
            isc: 1,
            trin: 0,
            trout: 0,
            bstin: 'si1772',
            stl: [{
                stn: 'Normal',
                stt: 0,
                stsi: [1785]
            }],
            stis: 0,
            bstiid: 1772,
            sipst: 101,
            sicbs: true,
            sihhs: false,
            sihds: false,
            baseItemIdForPropertyFlow: 1772,
            isDD: false
        },
        si1785c: {
            b: [0, 0, 972, 48],
            fh: false,
            fw: false,
            uid: 1785,
            iso: false,
            css: {
                360: {
                    l: '0.000%',
                    t: '0.000%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0.000%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0.000%',
                    lvID: -1,
                    w: '100.000%',
                    h: '7.895%',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                },
                600: {
                    l: '0.000%',
                    t: '0.000%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0.000%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0.000%',
                    lvID: -1,
                    w: '100.000%',
                    h: '7.895%',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                },
                972: {
                    l: '0.000%',
                    t: '0.000%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0.000%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0.000%',
                    lvID: -1,
                    w: '100.000%',
                    h: '7.895%',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                }

            },
            dn: 'si1785',
            visible: 0,
            effectiveVi: 1,
            JSONEffectData: false,
            hms: false,
            hme: false,
            subt: 1,
            bc: '#c8e2ff',
            fe: true,
            fca: 1,
            fa: 100,
            path: 'M 0.000000 0.000000 L 972.000000 0.000000 L 972.000000 48.000000 L 0.000000 48.000000 Z ',
            svg: false,
            sde: false,
            scp: 0,
            sc: '#0080ff',
            sw: 1,
            ss: 0,
            sa: 1,
            se: false,
            vbwr: [-2, -2, 974, 50],
            vb: [-2, -2, 974, 50]
        },
        si1796: {
            name: '',
            type: 612,
            from: 181,
            to: 270,
            rp: 0,
            rpa: 0,
            mdi: 'si1796c',
            tag: '',
            v: 0,
            enabled: true,
            defEn: true,
            vu: [],
            siaf: 0,
            sid: 3,
            slideItemThemeCounter: 0,
            presetData: [{
                presetId: '',
                presetType: 0,
                isOverridden: false
            }, {
                presetId: '',
                presetType: 4,
                isOverridden: false
            }, {
                presetId: '',
                presetType: 2,
                isOverridden: false
            }],
            widgetProps: '{"sizeNPos":{"top":676,"left":1040,"width":300,"height":"auto"}}',
            parentGroup: 'si1733',
            retainState: false,
            immo: false,
            apsn: 'Slide1715',
            efph: {},
            eflh: [],
            iflbx: false,
            ipflbx: true,
            vt: '',
            rplm: {
                360: 0,
                600: 0,
                972: 0
            },
            rprm: {
                360: 0,
                600: 0,
                972: 0
            },
            rptm: {
                360: 0,
                600: 0,
                972: 0
            },
            rpbm: {
                360: 0,
                600: 0,
                972: 0
            },
            rpta: {
                360: 2,
                600: 2,
                972: 2
            },
            rptl: {
                360: 1,
                600: 1,
                972: 1
            },
            rpvt: {
                360: {
                    vt: '',
                    text: ''
                },
                600: {
                    vt: '',
                    text: ''
                },
                972: {
                    vt: '',
                    text: ''
                }

            },
            subType: '',
            text: '{"blocks":[{"key":"ah2dc","text":"Misserfolgstext eingeben","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":57,"style":"overridden:false"},{"offset":0,"length":57,"style":"opacity:1"},{"offset":0,"length":57,"style":"backgroundColor:unset"},{"offset":0,"length":57,"style":"defaultBackgroundColor:#5EFF67"},{"offset":0,"length":57,"style":"textHighlightEnable:false"},{"offset":0,"length":57,"style":"textOutlineEnable:false"},{"offset":0,"length":57,"style":"textShadowEnable:false"}],"entityRanges":[],"data":{"presetId":"text-caption_incorrect","listDepth":"0","listType":"S_Bullets08","listIndent":"100%","listSize":"100%","listColor":"#666666","overridden":"false"}}],"entityMap":{}}',
            isc: 1,
            trin: 0,
            trout: 0,
            bstin: 'si1772',
            stl: [{
                stn: 'Normal',
                stt: 0,
                stsi: [1796]
            }],
            stis: 0,
            bstiid: 1772,
            sipst: 102,
            sicbs: true,
            sihhs: false,
            sihds: false,
            baseItemIdForPropertyFlow: 1772,
            isDD: false
        },
        si1796c: {
            b: [0, 0, 972, 48],
            fh: false,
            fw: false,
            uid: 1796,
            iso: false,
            css: {
                360: {
                    l: '0.000%',
                    t: '0.000%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0.000%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0.000%',
                    lvID: -1,
                    w: '100.000%',
                    h: '7.895%',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                },
                600: {
                    l: '0.000%',
                    t: '0.000%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0.000%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0.000%',
                    lvID: -1,
                    w: '100.000%',
                    h: '7.895%',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                },
                972: {
                    l: '0.000%',
                    t: '0.000%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0.000%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0.000%',
                    lvID: -1,
                    w: '100.000%',
                    h: '7.895%',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                }

            },
            dn: 'si1796',
            visible: 0,
            effectiveVi: 1,
            JSONEffectData: false,
            hms: false,
            hme: false,
            subt: 1,
            bc: '#c8e2ff',
            fe: true,
            fca: 1,
            fa: 100,
            path: 'M 0.000000 0.000000 L 972.000000 0.000000 L 972.000000 48.000000 L 0.000000 48.000000 Z ',
            svg: false,
            sde: false,
            scp: 0,
            sc: '#0080ff',
            sw: 1,
            ss: 0,
            sa: 1,
            se: false,
            vbwr: [-2, -2, 974, 50],
            vb: [-2, -2, 974, 50]
        },
        si1807: {
            name: '',
            type: 612,
            from: 181,
            to: 270,
            rp: 0,
            rpa: 0,
            mdi: 'si1807c',
            tag: '',
            v: 0,
            enabled: true,
            defEn: true,
            vu: [],
            siaf: 0,
            sid: 3,
            slideItemThemeCounter: 0,
            presetData: [{
                presetId: '',
                presetType: 0,
                isOverridden: false
            }, {
                presetId: '',
                presetType: 4,
                isOverridden: false
            }, {
                presetId: '',
                presetType: 2,
                isOverridden: false
            }],
            widgetProps: '{"sizeNPos":{"top":676,"left":1040,"width":300,"height":"auto"}}',
            parentGroup: 'si1733',
            retainState: false,
            immo: false,
            apsn: 'Slide1715',
            efph: {},
            eflh: [],
            iflbx: false,
            ipflbx: true,
            vt: '',
            rplm: {
                360: 0,
                600: 0,
                972: 0
            },
            rprm: {
                360: 0,
                600: 0,
                972: 0
            },
            rptm: {
                360: 0,
                600: 0,
                972: 0
            },
            rpbm: {
                360: 0,
                600: 0,
                972: 0
            },
            rpta: {
                360: 2,
                600: 2,
                972: 2
            },
            rptl: {
                360: 1,
                600: 1,
                972: 1
            },
            rpvt: {
                360: {
                    vt: '',
                    text: ''
                },
                600: {
                    vt: '',
                    text: ''
                },
                972: {
                    vt: '',
                    text: ''
                }

            },
            subType: '',
            text: '{"blocks":[{"key":"ah2dc","text":"Hinweistext eingeben","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":57,"style":"overridden:false"},{"offset":0,"length":57,"style":"opacity:1"},{"offset":0,"length":57,"style":"backgroundColor:unset"},{"offset":0,"length":57,"style":"defaultBackgroundColor:#5EFF67"},{"offset":0,"length":57,"style":"textHighlightEnable:false"},{"offset":0,"length":57,"style":"textOutlineEnable:false"},{"offset":0,"length":57,"style":"textShadowEnable:false"}],"entityRanges":[],"data":{"presetId":"text-caption_incorrect","listDepth":"0","listType":"S_Bullets08","listIndent":"100%","listSize":"100%","listColor":"#666666","overridden":"false"}}],"entityMap":{}}',
            isc: 1,
            trin: 0,
            trout: 0,
            bstin: 'si1772',
            stl: [{
                stn: 'Normal',
                stt: 0,
                stsi: [1807]
            }],
            stis: 0,
            bstiid: 1772,
            sipst: 103,
            sicbs: true,
            sihhs: false,
            sihds: false,
            baseItemIdForPropertyFlow: 1772,
            isDD: false
        },
        si1807c: {
            b: [0, 0, 972, 48],
            fh: false,
            fw: false,
            uid: 1807,
            iso: false,
            css: {
                360: {
                    l: '0.000%',
                    t: '0.000%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0.000%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0.000%',
                    lvID: -1,
                    w: '100.000%',
                    h: '7.895%',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                },
                600: {
                    l: '0.000%',
                    t: '0.000%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0.000%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0.000%',
                    lvID: -1,
                    w: '100.000%',
                    h: '7.895%',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                },
                972: {
                    l: '0.000%',
                    t: '0.000%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0.000%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0.000%',
                    lvID: -1,
                    w: '100.000%',
                    h: '7.895%',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                }

            },
            dn: 'si1807',
            visible: 0,
            effectiveVi: 1,
            JSONEffectData: false,
            hms: false,
            hme: false,
            subt: 1,
            bc: '#c8e2ff',
            fe: true,
            fca: 1,
            fa: 100,
            path: 'M 0.000000 0.000000 L 972.000000 0.000000 L 972.000000 48.000000 L 0.000000 48.000000 Z ',
            svg: false,
            sde: false,
            scp: 0,
            sc: '#0080ff',
            sw: 1,
            ss: 0,
            sa: 1,
            se: false,
            vbwr: [-2, -2, 974, 50],
            vb: [-2, -2, 974, 50]
        },
        si1832: {
            name: 'Anweisungen_2',
            type: 612,
            from: 181,
            to: 270,
            rp: 0,
            rpa: 0,
            mdi: 'si1832c',
            tag: 'slide-item-comment-box',
            v: 0,
            enabled: true,
            defEn: true,
            vu: [],
            siaf: 0,
            sid: 3,
            slideItemThemeCounter: 0,
            presetData: [{
                presetId: '',
                presetType: 0,
                isOverridden: false
            }, {
                presetId: '',
                presetType: 4,
                isOverridden: false
            }, {
                presetId: '',
                presetType: 2,
                isOverridden: false
            }],
            widgetProps: '{"currentState":"normal","normal":{"opacity":100,"padding":10,"editorState":{"blocks":[{"key":"4k0dr","text":"Auf Button «Add to file» klicken.","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":33,"style":"fontStretch:normal"},{"offset":0,"length":33,"style":"fontType:regular"},{"offset":0,"length":33,"style":"fontFamily:SBB"},{"offset":0,"length":33,"style":"color:#FFFFFF"},{"offset":0,"length":33,"style":"lineHeight:135%"},{"offset":0,"length":33,"style":"letterSpacing:0%"},{"offset":0,"length":33,"style":"textTransform:none"},{"offset":0,"length":33,"style":"textDecoration:none"},{"offset":0,"length":33,"style":"desktop-fontSize:20"},{"offset":0,"length":33,"style":"borderBottomStyle:none"},{"offset":0,"length":33,"style":"fontWeight:normal"},{"offset":0,"length":33,"style":"mobile-fontSize:20"},{"offset":0,"length":33,"style":"fontStyle:normal"},{"offset":0,"length":33,"style":"overridden:true"},{"offset":0,"length":33,"style":"tablet-fontSize:20"}],"entityRanges":[],"data":{"textAlign":"center","listType":"S_Bullets08","listIndent":"100 % ","listSize":"100 % ","listDepth":"0","overridden":"true","presetId":"text-comment-box"}}],"entityMap":{}},"shapePresetData":{"presetId":"cp_comment_box_shape_1_solid_style","fillEnable":true,"strokeEnable":false,"shadowEnable":false,"fillType":1},"appearenceProperties":{"fill":{"color":"#ad00ffFF"},"shadow":{},"stroke":{}},"overriddenProperties":[60005,"fillColor",60008,60004]},"shapeData":{"type":"rect","attributes":{"rx":"0"}},"sizeNPos":{"top":604.5848214285714,"left":1094.162388392857,"width":320}}',
            parentGroup: 'si1733',
            retainState: false,
            immo: false,
            apsn: 'Slide1715',
            efph: {},
            eflh: [],
            iflbx: false,
            ipflbx: true,
            vt: '',
            rplm: {
                360: 0,
                600: 0,
                972: 0
            },
            rprm: {
                360: 0,
                600: 0,
                972: 0
            },
            rptm: {
                360: 0,
                600: 0,
                972: 0
            },
            rpbm: {
                360: 0,
                600: 0,
                972: 0
            },
            rpta: {
                360: 2,
                600: 2,
                972: 2
            },
            rptl: {
                360: 1,
                600: 1,
                972: 1
            },
            rpvt: {
                360: {
                    vt: '',
                    text: ''
                },
                600: {
                    vt: '',
                    text: ''
                },
                972: {
                    vt: '',
                    text: ''
                }

            },
            subType: '',
            text: '{"blocks":[{"key":"4k0dr","text":"Auf den Bildlaufbereich „“ klicken","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{"presetId":"text-comment-box","listDepth":"0","listType":"S_Bullets08","listIndent":"100 % ","listSize":"100 % ","overridden":"false"}}],"entityMap":{}}',
            adj: [3085.71, -6171.43, 3600],
            isco: 1,
            trin: 0,
            trout: 0,
            stl: [{
                stn: 'Normal',
                stt: 0,
                stsi: [1832]
            }],
            stis: 0,
            bstiid: -1,
            sipst: 0,
            sicbs: false,
            sihhs: false,
            sihds: false,
            isDD: false
        },
        si1832c: {
            b: [1032, 646, 1352, 746],
            fh: false,
            fw: false,
            uid: 1832,
            iso: false,
            css: {
                360: {
                    l: '106.173%',
                    t: '106.250%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '106.173%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '106.250%',
                    lvID: -1,
                    w: '32.922%',
                    h: '16.447%',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                },
                600: {
                    l: '106.173%',
                    t: '106.250%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '106.173%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '106.250%',
                    lvID: -1,
                    w: '32.922%',
                    h: '16.447%',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                },
                972: {
                    l: '106.173%',
                    t: '106.250%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '106.173%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '106.250%',
                    lvID: -1,
                    w: '32.922%',
                    h: '16.447%',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                }

            },
            dn: 'si1832',
            visible: 1,
            effectiveVi: 1,
            JSONEffectData: false,
            hms: false,
            hme: false,
            subt: 57,
            bc: '#ffffff',
            fe: true,
            fca: 1,
            fa: 100,
            path: '',
            svg: false,
            sde: false,
            scp: 0,
            sc: '#0080ff',
            sw: 1,
            ss: 0,
            sa: 1,
            se: false,
            vbwr: [-2, -2, 1354, 748],
            vb: [-2, -2, 1354, 748]
        },
        si1842: {
            name: 'Maus_3',
            type: 12,
            from: 190,
            to: 270,
            rp: 0,
            rpa: 0,
            mdi: 'si1842c',
            tag: 'slide-item-mouse-pointer',
            v: 0,
            enabled: true,
            defEn: true,
            vu: [],
            siaf: 0.3,
            sid: 2.7,
            slideItemThemeCounter: 0,
            presetData: [{
                presetId: '',
                presetType: -1,
                isOverridden: false
            }],
            widgetProps: '{"mouseMovementPathType":1,"mouseMovementSpeed":1,"mouseStraightPath":false,"scaleValue":"medium","mouseClickData":{"color":"#ad00ffFF","showMouseClick":true,"scaleValue":"medium"},"svgData":{"mousePointerType":0},"mousePathPoints":{"mouseStartPointX":756,"mouseStartPointY":171,"mouseEndPointX":1058.0457589285716,"mouseEndPointY":627.0715680803571}}',
            parentGroup: 'si1733',
            retainState: false,
            immo: false,
            apsn: 'Slide1715',
            efph: {},
            eflh: [],
            iflbx: false,
            ipflbx: true,
            msa: '',
            trin: 0,
            trout: 0,
            isDD: false
        },
        si1842c: {
            b: [1038, 622, 1055, 645],
            fh: false,
            fw: false,
            uid: 1842,
            iso: false,
            css: {
                360: {
                    l: '106.790%',
                    t: '102.303%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '106.790%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '102.303%',
                    lvID: -1,
                    w: '17px',
                    h: '23px',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                },
                600: {
                    l: '106.790%',
                    t: '102.303%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '106.790%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '102.303%',
                    lvID: -1,
                    w: '17px',
                    h: '23px',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                },
                972: {
                    l: '106.790%',
                    t: '102.303%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '106.790%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '102.303%',
                    lvID: -1,
                    w: '17px',
                    h: '23px',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                }

            },
            sr: cp.fd,
            dn: 'si1842',
            visible: 1,
            effectiveVi: 1,
            JSONEffectData: false,
            t: 1,
            sz: 0,
            mpt: 0,
            data: {
                c: '#0000ff',
                fca: 1,
                r: 12
            },
            sde: false,
            se: false,
            vbwr: [764, 173, 1055, 645],
            vb: [764, 173, 1055, 645]
        },
        Slide1715: {
            lb: 'SBB Colors',
            id: 1715,
            from: 181,
            to: 270,
            iols: 0,
            i360qs: false,
            sdu: 3,
            presetData: [{
                presetId: '',
                presetType: 3,
                isOverridden: false
            }],
            propTxtScaling: false,
            minFontSizeScaling: 14,
            useng: true,
            transition: {
                type: 0
            },
            mmot: false,
            mdi: 'Slide1715c',
            st: 'Normal Slide',
            sk: 'Simulation',
            slideTag: '',
            type: 30,
            slideThemeCounter: 0,
            accProps: {},
            si: [{
                n: 'si1741',
                t: 1268
            }],
            iph: [],
            v: false,
            canvasData: {
                bc: '#ffffff',
                fa: 1,
                fe: true,
                iso: false,
                se: false
            },
            bookmarks: [],
            qs: ''
        },
        Slide1715c: {
            b: [0, 0, 0, 0],
            css: {},
            sr: cp.fd,
            uid: 1715,
            dn: 'Slide1715',
            visible: '1'
        },
        si2694: {
            name: 'Simulation_6',
            type: 1268,
            from: 271,
            to: 360,
            rp: 0,
            rpa: 0,
            mdi: 'si2694c',
            tag: 'container-simulation-widget',
            v: 0,
            enabled: true,
            defEn: true,
            vu: [],
            siaf: 0,
            sid: 3,
            slideItemThemeCounter: 0,
            presetData: [{
                presetId: '',
                presetType: 14,
                isOverridden: false
            }, {
                presetId: '',
                presetType: 2,
                isOverridden: false
            }],
            widgetProps: '{"autoFit":true}',
            retainState: false,
            immo: false,
            apsn: 'Slide2668',
            efph: {},
            eflh: [],
            iflbx: false,
            ipflbx: true,
            si: [{
                n: 'si2686',
                t: 1268
            }],
            containerType: 'simulation-widget',
            widgetProps: '{"autoFit":true}',
            option: '',
            padding: {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            },
            parent: '',
            selectable: false,
            trin: 0,
            trout: 0,
            isDD: false
        },
        si2694c: {
            b: [0, 0, 0, 0],
            fh: false,
            fw: false,
            uid: 2694,
            iso: false,
            css: {
                360: {
                    l: '0px',
                    t: '0px',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0px',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0px',
                    lvID: -1,
                    w: '0px',
                    h: '0px',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                },
                600: {
                    l: '0px',
                    t: '0px',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0px',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0px',
                    lvID: -1,
                    w: '0px',
                    h: '0px',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                },
                972: {
                    l: '0px',
                    t: '0px',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0px',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0px',
                    lvID: -1,
                    w: '0px',
                    h: '0px',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                }

            },
            sr: cp.fd,
            dn: 'si2694',
            visible: 1,
            effectiveVi: 1,
            JSONEffectData: false,
            bc: '#ffffff',
            fe: true,
            fca: 1,
            fa: 100,
            sde: false,
            scp: 0,
            sc: '#0080ff',
            sw: 1,
            ss: 0,
            sa: 1,
            se: false,
            vbwr: [-1, -1, 1, 1],
            vb: [-1, -1, 1, 1]
        },
        si2686: {
            name: 'Simulation_non_responsive_6',
            type: 1268,
            from: 271,
            to: 360,
            rp: 0,
            rpa: 0,
            mdi: 'si2686c',
            tag: 'container-simulation-non-responsive',
            v: 0,
            enabled: true,
            defEn: true,
            vu: [],
            siaf: 0,
            sid: 3,
            slideItemThemeCounter: 0,
            presetData: [{
                presetId: '',
                presetType: 14,
                isOverridden: true
            }, {
                presetId: '',
                presetType: 2,
                isOverridden: true
            }],
            widgetProps: '{"visibilityInfo":{"slide-item-clickbox":false,"slide-item-highlight-box":false,"slide-item-comment-box":false,"slide-item-inputfield":false,"slide-item-mouse-pointer":false,"slide-item-highlight-box":true,"slide-item-comment-box":true,"slide-item-mouse-pointer":true},"sizeNPos":{"width":1728,"height":1080},"groupedItemsVisibility":{"slide-item-clickbox":0,"slide-item-highlight-box":0,"slide-item-comment-box":0,"slide-item-inputfield":0,"slide-item-mouse-pointer":0,"slide-item-highlight-box":1,"slide-item-comment-box":1,"slide-item-mouse-pointer":1},"canBeCard":false}',
            parentGroup: 'si2694',
            retainState: false,
            immo: false,
            apsn: 'Slide2668',
            efph: {},
            eflh: [],
            iflbx: false,
            ipflbx: true,
            si: [{
                n: 'si2705',
                t: 1269
            }, {
                n: 'si2725',
                t: 612
            }, {
                n: 'si2785',
                t: 612
            }, {
                n: 'si2795',
                t: 12
            }],
            containerType: 'simulation-non-responsive',
            widgetProps: '{"visibilityInfo":{"slide-item-clickbox":false,"slide-item-highlight-box":false,"slide-item-comment-box":false,"slide-item-inputfield":false,"slide-item-mouse-pointer":false,"slide-item-highlight-box":true,"slide-item-comment-box":true,"slide-item-mouse-pointer":true},"sizeNPos":{"width":1728,"height":1080},"groupedItemsVisibility":{"slide-item-clickbox":0,"slide-item-highlight-box":0,"slide-item-comment-box":0,"slide-item-inputfield":0,"slide-item-mouse-pointer":0,"slide-item-highlight-box":1,"slide-item-comment-box":1,"slide-item-mouse-pointer":1},"canBeCard":false}',
            option: '',
            padding: {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            },
            parent: 'si2694',
            selectable: false,
            trin: 0,
            trout: 0,
            isDD: false
        },
        si2686c: {
            b: [0, 0, 0, 0],
            fh: false,
            fw: false,
            uid: 2686,
            iso: true,
            css: {
                360: {
                    l: '0px',
                    t: '0px',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0px',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0px',
                    lvID: -1,
                    w: '0px',
                    h: '0px',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                },
                600: {
                    l: '0px',
                    t: '0px',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0px',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0px',
                    lvID: -1,
                    w: '0px',
                    h: '0px',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                },
                972: {
                    l: '0px',
                    t: '0px',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0px',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0px',
                    lvID: -1,
                    w: '0px',
                    h: '0px',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                }

            },
            sr: cp.fd,
            dn: 'si2686',
            visible: 1,
            effectiveVi: 1,
            JSONEffectData: false,
            imgf: {
                b: 0,
                c: 0,
                br: 0,
                o: 100,
                ifbm: 'normal',
                ift: 'Normal',
                ifi: 0,
                iff: {
                    bc: '#ffe2c8'
                },
                tiletype: 0,
                extraImageProps: '',
                tiletype: 0,
                imageFocus: 0,
                w: 3456,
                h: 2160,
                id: 2702,
                tsp: 50,
                ip: 'dr/02702.png'
            },
            fe: true,
            fca: 1,
            fa: 100,
            iso: true,
            sde: false,
            scp: 0,
            sc: '#0080ff',
            sw: 1,
            ss: 0,
            sa: 1,
            se: false,
            vbwr: [-1, -1, 1, 1],
            vb: [-1, -1, 1, 1]
        },
        si2705: {
            name: 'Highlight_box_4',
            type: 1269,
            from: 271,
            to: 360,
            rp: 0,
            rpa: 0,
            mdi: 'si2705c',
            tag: 'slide-item-highlight-box',
            v: 0,
            enabled: true,
            defEn: true,
            vu: [],
            siaf: 0,
            sid: 3,
            slideItemThemeCounter: 0,
            presetData: [{
                presetId: '',
                presetType: 13,
                isOverridden: false
            }],
            widgetProps: '{"isHighlightBox":true,"currentState":"normal","normal":{"opacity":"20","shapePresetData":{"presetId":"cp_clickbox_shape_solid_style","fillEnable":true,"fillType":1,"strokeEnable":true,"shadowEnable":false},"appearenceProperties":{"fill":{"color":"#ad00ffFF"},"shadow":{},"stroke":{"enabled":false}},"overriddenProperties":["strokeEnable","fillColor","opacity"]},"shapeData":{"type":"rect","attributes":{"rx":"0"}},"sizeNPos":{"top":264.015625,"left":998.220703125,"width":78.830078125,"height":30.19140625}}',
            parentGroup: 'si2686',
            retainState: false,
            immo: false,
            apsn: 'Slide2668',
            efph: {},
            eflh: [],
            iflbx: false,
            ipflbx: true,
            ihb: true,
            si: [{
                n: 'si2715',
                t: 612
            }],
            te: false,
            ie: false,
            trin: 0,
            trout: 0,
            stl: [{
                stn: 'Normal',
                stt: 0,
                stsi: [2705]
            }],
            stis: 0,
            bstiid: -1,
            sipst: 0,
            sicbs: false,
            sihhs: false,
            sihds: false,
            siq: false,
            isDD: false
        },
        si2705c: {
            b: [1009, 273, 1043, 293],
            fh: false,
            fw: false,
            uid: 2705,
            iso: false,
            css: {
                360: {
                    l: '103.807%',
                    t: '44.901%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '103.807%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '44.901%',
                    lvID: -1,
                    w: '3.498%',
                    h: '3.289%',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                },
                600: {
                    l: '103.807%',
                    t: '44.901%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '103.807%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '44.901%',
                    lvID: -1,
                    w: '3.498%',
                    h: '3.289%',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                },
                972: {
                    l: '103.807%',
                    t: '44.901%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '103.807%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '44.901%',
                    lvID: -1,
                    w: '3.498%',
                    h: '3.289%',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                }

            },
            sr: cp.fd,
            dn: 'si2705',
            visible: 1,
            effectiveVi: 1,
            JSONEffectData: false,
            fa: 100,
            vbwr: [1009, 273, 1043, 293],
            vb: [1009, 273, 1043, 293]
        },
        si2715: {
            name: 'Form_4',
            type: 612,
            from: 271,
            to: 360,
            rp: 0,
            rpa: 0,
            mdi: 'si2715c',
            tag: '',
            v: 0,
            enabled: true,
            defEn: true,
            vu: [],
            siaf: 0,
            sid: 3,
            slideItemThemeCounter: 0,
            presetData: [{
                presetId: '',
                presetType: 0,
                isOverridden: false
            }, {
                presetId: '',
                presetType: 4,
                isOverridden: false
            }, {
                presetId: '',
                presetType: 2,
                isOverridden: false
            }],
            widgetProps: '',
            retainState: false,
            immo: false,
            apsn: 'Slide2668',
            efph: {},
            eflh: [],
            iflbx: false,
            ipflbx: true,
            vt: '',
            rplm: {
                360: 0,
                600: 0,
                972: 0
            },
            rprm: {
                360: 0,
                600: 0,
                972: 0
            },
            rptm: {
                360: 0,
                600: 0,
                972: 0
            },
            rpbm: {
                360: 0,
                600: 0,
                972: 0
            },
            rpta: {
                360: 2,
                600: 2,
                972: 2
            },
            rptl: {
                360: 1,
                600: 1,
                972: 1
            },
            rpvt: {
                360: {
                    vt: '',
                    text: ''
                },
                600: {
                    vt: '',
                    text: ''
                },
                972: {
                    vt: '',
                    text: ''
                }

            },
            subType: '',
            text: '{"blocks":[{"key":"4k0dr","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{"listDepth":"0","listType":"S_Bullets08","listIndent":"100 % ","listSize":"100 % ","overridden":"false"}}],"entityMap":{}}',
            trin: 0,
            trout: 0,
            stl: [{
                stn: 'Normal',
                stt: 0,
                stsi: [2715]
            }],
            stis: 0,
            bstiid: 2705,
            sipst: -1,
            sicbs: false,
            sihhs: false,
            sihds: false,
            parent: 'si2705',
            baseItemIdForPropertyFlow: -1,
            isDD: false
        },
        si2715c: {
            b: [0, 0, 34, 20],
            fh: false,
            fw: false,
            uid: 2715,
            iso: false,
            css: {
                360: {
                    l: '0.000%',
                    t: '0.000%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0.000%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0.000%',
                    lvID: -1,
                    w: '3.498%',
                    h: '3.289%',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                },
                600: {
                    l: '0.000%',
                    t: '0.000%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0.000%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0.000%',
                    lvID: -1,
                    w: '3.498%',
                    h: '3.289%',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                },
                972: {
                    l: '0.000%',
                    t: '0.000%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0.000%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0.000%',
                    lvID: -1,
                    w: '3.498%',
                    h: '3.289%',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                }

            },
            dn: 'si2715',
            visible: 1,
            effectiveVi: 1,
            JSONEffectData: false,
            hms: false,
            hme: false,
            subt: 1,
            bc: '#ffffff',
            fe: true,
            fca: 1,
            fa: 100,
            path: '',
            svg: false,
            sde: false,
            scp: 0,
            sc: '#0080ff',
            sw: 1,
            ss: 0,
            sa: 1,
            se: false,
            vbwr: [-2, -2, 36, 22],
            vb: [-2, -2, 36, 22]
        },
        si2725: {
            name: 'Rectangle_4',
            type: 612,
            from: 271,
            to: 360,
            rp: 0,
            rpa: 0,
            mdi: 'si2725c',
            tag: '',
            v: 0,
            enabled: true,
            defEn: true,
            vu: [],
            siaf: 0,
            sid: 3,
            slideItemThemeCounter: 0,
            presetData: [{
                presetId: 'cp_default_caption_shape_solid_style',
                presetType: 0,
                isOverridden: false
            }, {
                presetId: 'cp_default_quiz_caption_textinshape_style',
                presetType: 4,
                isOverridden: false
            }, {
                presetId: '',
                presetType: 2,
                isOverridden: false
            }],
            widgetProps: '{"sizeNPos":{"top":333,"left":1024,"width":300,"height":"auto"}}',
            parentGroup: 'si2686',
            retainState: false,
            immo: false,
            apsn: 'Slide2668',
            efph: {},
            eflh: [],
            iflbx: false,
            ipflbx: true,
            vt: '',
            rplm: {
                360: 0,
                600: 0,
                972: 0
            },
            rprm: {
                360: 0,
                600: 0,
                972: 0
            },
            rptm: {
                360: 0,
                600: 0,
                972: 0
            },
            rpbm: {
                360: 0,
                600: 0,
                972: 0
            },
            rpta: {
                360: 2,
                600: 2,
                972: 2
            },
            rptl: {
                360: 1,
                600: 1,
                972: 1
            },
            rpvt: {
                360: {
                    vt: '',
                    text: ''
                },
                600: {
                    vt: '',
                    text: ''
                },
                972: {
                    vt: '',
                    text: ''
                }

            },
            subType: '',
            text: '{"blocks":[{"key":"b8kef","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{"listDepth":"0","listType":"S_Bullets08","listIndent":"100%","listSize":"100%","overridden":"false","presetId":"cp_default_quiz_caption_textinshape_style"}}],"entityMap":{}}',
            isc: 1,
            trin: 0,
            trout: 0,
            stl: [{
                stn: 2736,
                stt: 0,
                dsr: 'Standardstatus',
                stsi: [2725]
            }],
            stis: 0,
            bstiid: -1,
            sipst: 0,
            sicbs: false,
            sihhs: false,
            sihds: false,
            stc: ['si2725', 'si2738', 'si2749', 'si2760'],
            isDD: false
        },
        si2725c: {
            b: [0, 0, 972, 48],
            fh: false,
            fw: false,
            uid: 2725,
            iso: false,
            css: {
                360: {
                    l: '0.000%',
                    t: '0.000%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0.000%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0.000%',
                    lvID: -1,
                    w: '100.000%',
                    h: '7.895%',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                },
                600: {
                    l: '0.000%',
                    t: '0.000%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0.000%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0.000%',
                    lvID: -1,
                    w: '100.000%',
                    h: '7.895%',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                },
                972: {
                    l: '0.000%',
                    t: '0.000%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0.000%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0.000%',
                    lvID: -1,
                    w: '100.000%',
                    h: '7.895%',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                }

            },
            dn: 'si2725',
            visible: 1,
            effectiveVi: 1,
            JSONEffectData: false,
            hms: false,
            hme: false,
            subt: 1,
            bc: '#c8e2ff',
            fe: true,
            fca: 1,
            fa: 0,
            path: 'M 0.000000 0.000000 L 972.000000 0.000000 L 972.000000 48.000000 L 0.000000 48.000000 Z ',
            svg: false,
            sde: false,
            scp: 0,
            sc: '#0080ff',
            sw: 1,
            ss: 0,
            sa: 1,
            se: false,
            vbwr: [-2, -2, 974, 50],
            vb: [-2, -2, 974, 50]
        },
        si2738: {
            name: '',
            type: 612,
            from: 271,
            to: 360,
            rp: 0,
            rpa: 0,
            mdi: 'si2738c',
            tag: '',
            v: 0,
            enabled: true,
            defEn: true,
            vu: [],
            siaf: 0,
            sid: 3,
            slideItemThemeCounter: 0,
            presetData: [{
                presetId: '',
                presetType: 0,
                isOverridden: false
            }, {
                presetId: '',
                presetType: 4,
                isOverridden: false
            }, {
                presetId: '',
                presetType: 2,
                isOverridden: false
            }],
            widgetProps: '{"sizeNPos":{"top":333,"left":1024,"width":300,"height":"auto"}}',
            parentGroup: 'si2686',
            retainState: false,
            immo: false,
            apsn: 'Slide2668',
            efph: {},
            eflh: [],
            iflbx: false,
            ipflbx: true,
            vt: '',
            rplm: {
                360: 0,
                600: 0,
                972: 0
            },
            rprm: {
                360: 0,
                600: 0,
                972: 0
            },
            rptm: {
                360: 0,
                600: 0,
                972: 0
            },
            rpbm: {
                360: 0,
                600: 0,
                972: 0
            },
            rpta: {
                360: 2,
                600: 2,
                972: 2
            },
            rptl: {
                360: 1,
                600: 1,
                972: 1
            },
            rpvt: {
                360: {
                    vt: '',
                    text: ''
                },
                600: {
                    vt: '',
                    text: ''
                },
                972: {
                    vt: '',
                    text: ''
                }

            },
            subType: '',
            text: '{"blocks":[{"key":"e7msa","text":"Erfolgstext eingeben","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":55,"style":"overridden:false"},{"offset":0,"length":55,"style":"opacity:1"},{"offset":0,"length":55,"style":"backgroundColor:unset"},{"offset":0,"length":55,"style":"defaultBackgroundColor:#5EFF67"},{"offset":0,"length":55,"style":"textHighlightEnable:false"},{"offset":0,"length":55,"style":"textOutlineEnable:false"},{"offset":0,"length":55,"style":"textShadowEnable:false"}],"entityRanges":[],"data":{"presetId":"text-caption_correct","listDepth":"0","listType":"S_Bullets08","listIndent":"100%","listSize":"100%","listColor":"#666666","overridden":"false"}}],"entityMap":{}}',
            isc: 1,
            trin: 0,
            trout: 0,
            bstin: 'si2725',
            stl: [{
                stn: 'Normal',
                stt: 0,
                stsi: [2738]
            }],
            stis: 0,
            bstiid: 2725,
            sipst: 101,
            sicbs: true,
            sihhs: false,
            sihds: false,
            baseItemIdForPropertyFlow: 2725,
            isDD: false
        },
        si2738c: {
            b: [0, 0, 972, 48],
            fh: false,
            fw: false,
            uid: 2738,
            iso: false,
            css: {
                360: {
                    l: '0.000%',
                    t: '0.000%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0.000%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0.000%',
                    lvID: -1,
                    w: '100.000%',
                    h: '7.895%',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                },
                600: {
                    l: '0.000%',
                    t: '0.000%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0.000%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0.000%',
                    lvID: -1,
                    w: '100.000%',
                    h: '7.895%',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                },
                972: {
                    l: '0.000%',
                    t: '0.000%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0.000%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0.000%',
                    lvID: -1,
                    w: '100.000%',
                    h: '7.895%',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                }

            },
            dn: 'si2738',
            visible: 0,
            effectiveVi: 1,
            JSONEffectData: false,
            hms: false,
            hme: false,
            subt: 1,
            bc: '#c8e2ff',
            fe: true,
            fca: 1,
            fa: 100,
            path: 'M 0.000000 0.000000 L 972.000000 0.000000 L 972.000000 48.000000 L 0.000000 48.000000 Z ',
            svg: false,
            sde: false,
            scp: 0,
            sc: '#0080ff',
            sw: 1,
            ss: 0,
            sa: 1,
            se: false,
            vbwr: [-2, -2, 974, 50],
            vb: [-2, -2, 974, 50]
        },
        si2749: {
            name: '',
            type: 612,
            from: 271,
            to: 360,
            rp: 0,
            rpa: 0,
            mdi: 'si2749c',
            tag: '',
            v: 0,
            enabled: true,
            defEn: true,
            vu: [],
            siaf: 0,
            sid: 3,
            slideItemThemeCounter: 0,
            presetData: [{
                presetId: '',
                presetType: 0,
                isOverridden: false
            }, {
                presetId: '',
                presetType: 4,
                isOverridden: false
            }, {
                presetId: '',
                presetType: 2,
                isOverridden: false
            }],
            widgetProps: '{"sizeNPos":{"top":333,"left":1024,"width":300,"height":"auto"}}',
            parentGroup: 'si2686',
            retainState: false,
            immo: false,
            apsn: 'Slide2668',
            efph: {},
            eflh: [],
            iflbx: false,
            ipflbx: true,
            vt: '',
            rplm: {
                360: 0,
                600: 0,
                972: 0
            },
            rprm: {
                360: 0,
                600: 0,
                972: 0
            },
            rptm: {
                360: 0,
                600: 0,
                972: 0
            },
            rpbm: {
                360: 0,
                600: 0,
                972: 0
            },
            rpta: {
                360: 2,
                600: 2,
                972: 2
            },
            rptl: {
                360: 1,
                600: 1,
                972: 1
            },
            rpvt: {
                360: {
                    vt: '',
                    text: ''
                },
                600: {
                    vt: '',
                    text: ''
                },
                972: {
                    vt: '',
                    text: ''
                }

            },
            subType: '',
            text: '{"blocks":[{"key":"ah2dc","text":"Misserfolgstext eingeben","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":57,"style":"overridden:false"},{"offset":0,"length":57,"style":"opacity:1"},{"offset":0,"length":57,"style":"backgroundColor:unset"},{"offset":0,"length":57,"style":"defaultBackgroundColor:#5EFF67"},{"offset":0,"length":57,"style":"textHighlightEnable:false"},{"offset":0,"length":57,"style":"textOutlineEnable:false"},{"offset":0,"length":57,"style":"textShadowEnable:false"}],"entityRanges":[],"data":{"presetId":"text-caption_incorrect","listDepth":"0","listType":"S_Bullets08","listIndent":"100%","listSize":"100%","listColor":"#666666","overridden":"false"}}],"entityMap":{}}',
            isc: 1,
            trin: 0,
            trout: 0,
            bstin: 'si2725',
            stl: [{
                stn: 'Normal',
                stt: 0,
                stsi: [2749]
            }],
            stis: 0,
            bstiid: 2725,
            sipst: 102,
            sicbs: true,
            sihhs: false,
            sihds: false,
            baseItemIdForPropertyFlow: 2725,
            isDD: false
        },
        si2749c: {
            b: [0, 0, 972, 48],
            fh: false,
            fw: false,
            uid: 2749,
            iso: false,
            css: {
                360: {
                    l: '0.000%',
                    t: '0.000%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0.000%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0.000%',
                    lvID: -1,
                    w: '100.000%',
                    h: '7.895%',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                },
                600: {
                    l: '0.000%',
                    t: '0.000%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0.000%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0.000%',
                    lvID: -1,
                    w: '100.000%',
                    h: '7.895%',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                },
                972: {
                    l: '0.000%',
                    t: '0.000%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0.000%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0.000%',
                    lvID: -1,
                    w: '100.000%',
                    h: '7.895%',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                }

            },
            dn: 'si2749',
            visible: 0,
            effectiveVi: 1,
            JSONEffectData: false,
            hms: false,
            hme: false,
            subt: 1,
            bc: '#c8e2ff',
            fe: true,
            fca: 1,
            fa: 100,
            path: 'M 0.000000 0.000000 L 972.000000 0.000000 L 972.000000 48.000000 L 0.000000 48.000000 Z ',
            svg: false,
            sde: false,
            scp: 0,
            sc: '#0080ff',
            sw: 1,
            ss: 0,
            sa: 1,
            se: false,
            vbwr: [-2, -2, 974, 50],
            vb: [-2, -2, 974, 50]
        },
        si2760: {
            name: '',
            type: 612,
            from: 271,
            to: 360,
            rp: 0,
            rpa: 0,
            mdi: 'si2760c',
            tag: '',
            v: 0,
            enabled: true,
            defEn: true,
            vu: [],
            siaf: 0,
            sid: 3,
            slideItemThemeCounter: 0,
            presetData: [{
                presetId: '',
                presetType: 0,
                isOverridden: false
            }, {
                presetId: '',
                presetType: 4,
                isOverridden: false
            }, {
                presetId: '',
                presetType: 2,
                isOverridden: false
            }],
            widgetProps: '{"sizeNPos":{"top":333,"left":1024,"width":300,"height":"auto"}}',
            parentGroup: 'si2686',
            retainState: false,
            immo: false,
            apsn: 'Slide2668',
            efph: {},
            eflh: [],
            iflbx: false,
            ipflbx: true,
            vt: '',
            rplm: {
                360: 0,
                600: 0,
                972: 0
            },
            rprm: {
                360: 0,
                600: 0,
                972: 0
            },
            rptm: {
                360: 0,
                600: 0,
                972: 0
            },
            rpbm: {
                360: 0,
                600: 0,
                972: 0
            },
            rpta: {
                360: 2,
                600: 2,
                972: 2
            },
            rptl: {
                360: 1,
                600: 1,
                972: 1
            },
            rpvt: {
                360: {
                    vt: '',
                    text: ''
                },
                600: {
                    vt: '',
                    text: ''
                },
                972: {
                    vt: '',
                    text: ''
                }

            },
            subType: '',
            text: '{"blocks":[{"key":"ah2dc","text":"Hinweistext eingeben","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":57,"style":"overridden:false"},{"offset":0,"length":57,"style":"opacity:1"},{"offset":0,"length":57,"style":"backgroundColor:unset"},{"offset":0,"length":57,"style":"defaultBackgroundColor:#5EFF67"},{"offset":0,"length":57,"style":"textHighlightEnable:false"},{"offset":0,"length":57,"style":"textOutlineEnable:false"},{"offset":0,"length":57,"style":"textShadowEnable:false"}],"entityRanges":[],"data":{"presetId":"text-caption_incorrect","listDepth":"0","listType":"S_Bullets08","listIndent":"100%","listSize":"100%","listColor":"#666666","overridden":"false"}}],"entityMap":{}}',
            isc: 1,
            trin: 0,
            trout: 0,
            bstin: 'si2725',
            stl: [{
                stn: 'Normal',
                stt: 0,
                stsi: [2760]
            }],
            stis: 0,
            bstiid: 2725,
            sipst: 103,
            sicbs: true,
            sihhs: false,
            sihds: false,
            baseItemIdForPropertyFlow: 2725,
            isDD: false
        },
        si2760c: {
            b: [0, 0, 972, 48],
            fh: false,
            fw: false,
            uid: 2760,
            iso: false,
            css: {
                360: {
                    l: '0.000%',
                    t: '0.000%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0.000%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0.000%',
                    lvID: -1,
                    w: '100.000%',
                    h: '7.895%',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                },
                600: {
                    l: '0.000%',
                    t: '0.000%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0.000%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0.000%',
                    lvID: -1,
                    w: '100.000%',
                    h: '7.895%',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                },
                972: {
                    l: '0.000%',
                    t: '0.000%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0.000%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0.000%',
                    lvID: -1,
                    w: '100.000%',
                    h: '7.895%',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                }

            },
            dn: 'si2760',
            visible: 0,
            effectiveVi: 1,
            JSONEffectData: false,
            hms: false,
            hme: false,
            subt: 1,
            bc: '#c8e2ff',
            fe: true,
            fca: 1,
            fa: 100,
            path: 'M 0.000000 0.000000 L 972.000000 0.000000 L 972.000000 48.000000 L 0.000000 48.000000 Z ',
            svg: false,
            sde: false,
            scp: 0,
            sc: '#0080ff',
            sw: 1,
            ss: 0,
            sa: 1,
            se: false,
            vbwr: [-2, -2, 974, 50],
            vb: [-2, -2, 974, 50]
        },
        si2785: {
            name: 'Anweisungen_4',
            type: 612,
            from: 271,
            to: 360,
            rp: 0,
            rpa: 0,
            mdi: 'si2785c',
            tag: 'slide-item-comment-box',
            v: 0,
            enabled: true,
            defEn: true,
            vu: [],
            siaf: 0,
            sid: 3,
            slideItemThemeCounter: 0,
            presetData: [{
                presetId: '',
                presetType: 0,
                isOverridden: false
            }, {
                presetId: '',
                presetType: 4,
                isOverridden: false
            }, {
                presetId: '',
                presetType: 2,
                isOverridden: false
            }],
            widgetProps: '{"currentState":"normal","normal":{"opacity":100,"padding":10,"editorState":{"blocks":[{"key":"4k0dr","text":"Auf Button «Add to file» klicken.","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":33,"style":"overridden:true"},{"offset":0,"length":33,"style":"tablet-fontSize:20"},{"offset":0,"length":33,"style":"fontStretch:normal"},{"offset":0,"length":33,"style":"fontType:regular"},{"offset":0,"length":33,"style":"fontFamily:SBB"},{"offset":0,"length":33,"style":"color:#FFFFFF"},{"offset":0,"length":33,"style":"lineHeight:135%"},{"offset":0,"length":33,"style":"letterSpacing:0%"},{"offset":0,"length":33,"style":"textTransform:none"},{"offset":0,"length":33,"style":"textDecoration:none"},{"offset":0,"length":33,"style":"desktop-fontSize:20"},{"offset":0,"length":33,"style":"borderBottomStyle:none"},{"offset":0,"length":33,"style":"fontWeight:normal"},{"offset":0,"length":33,"style":"mobile-fontSize:20"},{"offset":0,"length":33,"style":"fontStyle:normal"}],"entityRanges":[],"data":{"textAlign":"center","listType":"S_Bullets08","listIndent":"100 % ","listSize":"100 % ","listDepth":"0","overridden":"true","presetId":"text-comment-box"}}],"entityMap":{}},"shapePresetData":{"presetId":"cp_comment_box_shape_1_solid_style","fillEnable":true,"strokeEnable":false,"shadowEnable":false,"fillType":1},"appearenceProperties":{"fill":{"color":"#ad00ffFF"},"shadow":{},"stroke":{}},"overriddenProperties":[60005,"fillColor",60008,60004]},"shapeData":{"type":"rect","attributes":{"rx":"0"}},"sizeNPos":{"top":253.359375,"left":1094.32421875,"width":320}}',
            parentGroup: 'si2686',
            retainState: false,
            immo: false,
            apsn: 'Slide2668',
            efph: {},
            eflh: [],
            iflbx: false,
            ipflbx: true,
            vt: '',
            rplm: {
                360: 0,
                600: 0,
                972: 0
            },
            rprm: {
                360: 0,
                600: 0,
                972: 0
            },
            rptm: {
                360: 0,
                600: 0,
                972: 0
            },
            rpbm: {
                360: 0,
                600: 0,
                972: 0
            },
            rpta: {
                360: 2,
                600: 2,
                972: 2
            },
            rptl: {
                360: 1,
                600: 1,
                972: 1
            },
            rpvt: {
                360: {
                    vt: '',
                    text: ''
                },
                600: {
                    vt: '',
                    text: ''
                },
                972: {
                    vt: '',
                    text: ''
                }

            },
            subType: '',
            text: '{"blocks":[{"key":"4k0dr","text":"Auf den Bildlaufbereich „“ klicken","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{"presetId":"text-comment-box","listDepth":"0","listType":"S_Bullets08","listIndent":"100 % ","listSize":"100 % ","overridden":"false"}}],"entityMap":{}}',
            adj: [3085.71, -6171.43, 3600],
            isco: 1,
            trin: 0,
            trout: 0,
            stl: [{
                stn: 'Normal',
                stt: 0,
                stsi: [2785]
            }],
            stis: 0,
            bstiid: -1,
            sipst: 0,
            sicbs: false,
            sihhs: false,
            sihds: false,
            isDD: false
        },
        si2785c: {
            b: [1014, 303, 1334, 403],
            fh: false,
            fw: false,
            uid: 2785,
            iso: false,
            css: {
                360: {
                    l: '104.321%',
                    t: '49.836%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '104.321%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '49.836%',
                    lvID: -1,
                    w: '32.922%',
                    h: '16.447%',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                },
                600: {
                    l: '104.321%',
                    t: '49.836%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '104.321%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '49.836%',
                    lvID: -1,
                    w: '32.922%',
                    h: '16.447%',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                },
                972: {
                    l: '104.321%',
                    t: '49.836%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '104.321%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '49.836%',
                    lvID: -1,
                    w: '32.922%',
                    h: '16.447%',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                }

            },
            dn: 'si2785',
            visible: 1,
            effectiveVi: 1,
            JSONEffectData: false,
            hms: false,
            hme: false,
            subt: 57,
            bc: '#ffffff',
            fe: true,
            fca: 1,
            fa: 100,
            path: '',
            svg: false,
            sde: false,
            scp: 0,
            sc: '#0080ff',
            sw: 1,
            ss: 0,
            sa: 1,
            se: false,
            vbwr: [-2, -2, 1336, 405],
            vb: [-2, -2, 1336, 405]
        },
        si2795: {
            name: 'Maus_6',
            type: 12,
            from: 313,
            to: 360,
            rp: 0,
            rpa: 0,
            mdi: 'si2795c',
            tag: 'slide-item-mouse-pointer',
            v: 0,
            enabled: true,
            defEn: true,
            vu: [],
            siaf: 1.4,
            sid: 1.6,
            slideItemThemeCounter: 0,
            presetData: [{
                presetId: '',
                presetType: -1,
                isOverridden: false
            }],
            widgetProps: '{"mouseMovementPathType":1,"mouseMovementSpeed":1,"mouseStraightPath":false,"scaleValue":"medium","mouseClickData":{"color":"#ad00ffFF","showMouseClick":true,"scaleValue":"medium"},"svgData":{"mousePointerType":0},"mousePathPoints":{"mouseStartPointX":1058.0457589285716,"mouseStartPointY":627.0715680803571,"mouseEndPointX":1057.402483258929,"mouseEndPointY":278.3851841517857}}',
            parentGroup: 'si2686',
            retainState: false,
            immo: false,
            apsn: 'Slide2668',
            efph: {},
            eflh: [],
            iflbx: false,
            ipflbx: true,
            msa: '',
            trin: 0,
            trout: 0,
            isDD: false
        },
        si2795c: {
            b: [1022, 279, 1039, 302],
            fh: false,
            fw: false,
            uid: 2795,
            iso: false,
            css: {
                360: {
                    l: '105.144%',
                    t: '45.888%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '105.144%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '45.888%',
                    lvID: -1,
                    w: '17px',
                    h: '23px',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                },
                600: {
                    l: '105.144%',
                    t: '45.888%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '105.144%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '45.888%',
                    lvID: -1,
                    w: '17px',
                    h: '23px',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                },
                972: {
                    l: '105.144%',
                    t: '45.888%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '105.144%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '45.888%',
                    lvID: -1,
                    w: '17px',
                    h: '23px',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                }

            },
            sr: cp.fd,
            dn: 'si2795',
            visible: 1,
            effectiveVi: 1,
            JSONEffectData: false,
            t: 1,
            sz: 0,
            mpt: 0,
            data: {
                c: '#0000ff',
                fca: 1,
                r: 12
            },
            sde: false,
            se: false,
            vbwr: [1022, 279, 1050, 635],
            vb: [1022, 279, 1050, 635]
        },
        Slide2668: {
            lb: 'SBB Icons',
            id: 2668,
            from: 271,
            to: 360,
            iols: 0,
            i360qs: false,
            sdu: 3,
            presetData: [{
                presetId: '',
                presetType: 3,
                isOverridden: false
            }],
            propTxtScaling: false,
            minFontSizeScaling: 14,
            useng: true,
            transition: {
                type: 0
            },
            mmot: false,
            mdi: 'Slide2668c',
            st: 'Normal Slide',
            sk: 'Simulation',
            slideTag: '',
            type: 30,
            slideThemeCounter: 0,
            accProps: {},
            si: [{
                n: 'si2694',
                t: 1268
            }],
            iph: [],
            v: false,
            canvasData: {
                bc: '#ffffff',
                fa: 1,
                fe: true,
                iso: false,
                se: false
            },
            bookmarks: [],
            qs: ''
        },
        Slide2668c: {
            b: [0, 0, 0, 0],
            css: {},
            sr: cp.fd,
            uid: 2668,
            dn: 'Slide2668',
            visible: '1'
        },
        si3847: {
            name: 'Simulation_9',
            type: 1268,
            from: 361,
            to: 450,
            rp: 0,
            rpa: 0,
            mdi: 'si3847c',
            tag: 'container-simulation-widget',
            v: 0,
            enabled: true,
            defEn: true,
            vu: [],
            siaf: 0,
            sid: 3,
            slideItemThemeCounter: 0,
            presetData: [{
                presetId: '',
                presetType: 14,
                isOverridden: false
            }, {
                presetId: '',
                presetType: 2,
                isOverridden: false
            }],
            widgetProps: '{"autoFit":true}',
            retainState: false,
            immo: false,
            apsn: 'Slide3821',
            efph: {},
            eflh: [],
            iflbx: false,
            ipflbx: true,
            si: [{
                n: 'si3839',
                t: 1268
            }],
            containerType: 'simulation-widget',
            widgetProps: '{"autoFit":true}',
            option: '',
            padding: {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            },
            parent: '',
            selectable: false,
            trin: 0,
            trout: 0,
            isDD: false
        },
        si3847c: {
            b: [0, 0, 0, 0],
            fh: false,
            fw: false,
            uid: 3847,
            iso: false,
            css: {
                360: {
                    l: '0px',
                    t: '0px',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0px',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0px',
                    lvID: -1,
                    w: '0px',
                    h: '0px',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                },
                600: {
                    l: '0px',
                    t: '0px',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0px',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0px',
                    lvID: -1,
                    w: '0px',
                    h: '0px',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                },
                972: {
                    l: '0px',
                    t: '0px',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0px',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0px',
                    lvID: -1,
                    w: '0px',
                    h: '0px',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                }

            },
            sr: cp.fd,
            dn: 'si3847',
            visible: 1,
            effectiveVi: 1,
            JSONEffectData: false,
            bc: '#ffffff',
            fe: true,
            fca: 1,
            fa: 100,
            sde: false,
            scp: 0,
            sc: '#0080ff',
            sw: 1,
            ss: 0,
            sa: 1,
            se: false,
            vbwr: [-1, -1, 1, 1],
            vb: [-1, -1, 1, 1]
        },
        si3839: {
            name: 'Simulation_non_responsive_9',
            type: 1268,
            from: 361,
            to: 450,
            rp: 0,
            rpa: 0,
            mdi: 'si3839c',
            tag: 'container-simulation-non-responsive',
            v: 0,
            enabled: true,
            defEn: true,
            vu: [],
            siaf: 0,
            sid: 3,
            slideItemThemeCounter: 0,
            presetData: [{
                presetId: '',
                presetType: 14,
                isOverridden: true
            }, {
                presetId: '',
                presetType: 2,
                isOverridden: true
            }],
            widgetProps: '{"visibilityInfo":{"slide-item-clickbox":false,"slide-item-highlight-box":false,"slide-item-comment-box":false,"slide-item-inputfield":false,"slide-item-mouse-pointer":false,"slide-item-highlight-box":true,"slide-item-comment-box":true,"slide-item-mouse-pointer":true},"sizeNPos":{"width":1728,"height":1080},"groupedItemsVisibility":{"slide-item-clickbox":0,"slide-item-highlight-box":0,"slide-item-comment-box":0,"slide-item-inputfield":0,"slide-item-mouse-pointer":0,"slide-item-highlight-box":1,"slide-item-comment-box":1,"slide-item-mouse-pointer":1},"canBeCard":false}',
            parentGroup: 'si3847',
            retainState: false,
            immo: false,
            apsn: 'Slide3821',
            efph: {},
            eflh: [],
            iflbx: false,
            ipflbx: true,
            si: [{
                n: 'si3858',
                t: 1269
            }, {
                n: 'si3878',
                t: 612
            }, {
                n: 'si3938',
                t: 612
            }, {
                n: 'si3948',
                t: 12
            }],
            containerType: 'simulation-non-responsive',
            widgetProps: '{"visibilityInfo":{"slide-item-clickbox":false,"slide-item-highlight-box":false,"slide-item-comment-box":false,"slide-item-inputfield":false,"slide-item-mouse-pointer":false,"slide-item-highlight-box":true,"slide-item-comment-box":true,"slide-item-mouse-pointer":true},"sizeNPos":{"width":1728,"height":1080},"groupedItemsVisibility":{"slide-item-clickbox":0,"slide-item-highlight-box":0,"slide-item-comment-box":0,"slide-item-inputfield":0,"slide-item-mouse-pointer":0,"slide-item-highlight-box":1,"slide-item-comment-box":1,"slide-item-mouse-pointer":1},"canBeCard":false}',
            option: '',
            padding: {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            },
            parent: 'si3847',
            selectable: false,
            trin: 0,
            trout: 0,
            isDD: false
        },
        si3839c: {
            b: [0, 0, 0, 0],
            fh: false,
            fw: false,
            uid: 3839,
            iso: true,
            css: {
                360: {
                    l: '0px',
                    t: '0px',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0px',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0px',
                    lvID: -1,
                    w: '0px',
                    h: '0px',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                },
                600: {
                    l: '0px',
                    t: '0px',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0px',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0px',
                    lvID: -1,
                    w: '0px',
                    h: '0px',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                },
                972: {
                    l: '0px',
                    t: '0px',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0px',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0px',
                    lvID: -1,
                    w: '0px',
                    h: '0px',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                }

            },
            sr: cp.fd,
            dn: 'si3839',
            visible: 1,
            effectiveVi: 1,
            JSONEffectData: false,
            imgf: {
                b: 0,
                c: 0,
                br: 0,
                o: 100,
                ifbm: 'normal',
                ift: 'Normal',
                ifi: 0,
                iff: {
                    bc: '#ffe2c8'
                },
                tiletype: 0,
                extraImageProps: '',
                tiletype: 0,
                imageFocus: 0,
                w: 3456,
                h: 2160,
                id: 3855,
                tsp: 50,
                ip: 'dr/03855.png'
            },
            fe: true,
            fca: 1,
            fa: 100,
            iso: true,
            sde: false,
            scp: 0,
            sc: '#0080ff',
            sw: 1,
            ss: 0,
            sa: 1,
            se: false,
            vbwr: [-1, -1, 1, 1],
            vb: [-1, -1, 1, 1]
        },
        si3858: {
            name: 'Highlight_box_6',
            type: 1269,
            from: 361,
            to: 450,
            rp: 0,
            rpa: 0,
            mdi: 'si3858c',
            tag: 'slide-item-highlight-box',
            v: 0,
            enabled: true,
            defEn: true,
            vu: [],
            siaf: 0,
            sid: 3,
            slideItemThemeCounter: 0,
            presetData: [{
                presetId: '',
                presetType: 13,
                isOverridden: false
            }],
            widgetProps: '{"isHighlightBox":true,"currentState":"normal","normal":{"opacity":"20","shapePresetData":{"presetId":"cp_clickbox_shape_solid_style","fillEnable":true,"fillType":1,"strokeEnable":true,"shadowEnable":false},"appearenceProperties":{"fill":{"color":"#ad00ffFF"},"shadow":{},"stroke":{"enabled":false}},"overriddenProperties":["strokeEnable","fillColor","opacity"]},"shapeData":{"type":"rect","attributes":{"rx":"0"}},"sizeNPos":{"top":263.71875,"left":997.505859375,"width":79.548828125,"height":30.689453125}}',
            parentGroup: 'si3839',
            retainState: false,
            immo: false,
            apsn: 'Slide3821',
            efph: {},
            eflh: [],
            iflbx: false,
            ipflbx: true,
            ihb: true,
            si: [{
                n: 'si3868',
                t: 612
            }],
            te: false,
            ie: false,
            trin: 0,
            trout: 0,
            stl: [{
                stn: 'Normal',
                stt: 0,
                stsi: [3858]
            }],
            stis: 0,
            bstiid: -1,
            sipst: 0,
            sicbs: false,
            sihhs: false,
            sihds: false,
            siq: false,
            isDD: false
        },
        si3858c: {
            b: [995, 278, 1029, 298],
            fh: false,
            fw: false,
            uid: 3858,
            iso: false,
            css: {
                360: {
                    l: '102.366%',
                    t: '45.724%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '102.366%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '45.724%',
                    lvID: -1,
                    w: '3.498%',
                    h: '3.289%',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                },
                600: {
                    l: '102.366%',
                    t: '45.724%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '102.366%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '45.724%',
                    lvID: -1,
                    w: '3.498%',
                    h: '3.289%',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                },
                972: {
                    l: '102.366%',
                    t: '45.724%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '102.366%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '45.724%',
                    lvID: -1,
                    w: '3.498%',
                    h: '3.289%',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                }

            },
            sr: cp.fd,
            dn: 'si3858',
            visible: 1,
            effectiveVi: 1,
            JSONEffectData: false,
            fa: 100,
            vbwr: [995, 278, 1029, 298],
            vb: [995, 278, 1029, 298]
        },
        si3868: {
            name: 'Form_6',
            type: 612,
            from: 361,
            to: 450,
            rp: 0,
            rpa: 0,
            mdi: 'si3868c',
            tag: '',
            v: 0,
            enabled: true,
            defEn: true,
            vu: [],
            siaf: 0,
            sid: 3,
            slideItemThemeCounter: 0,
            presetData: [{
                presetId: '',
                presetType: 0,
                isOverridden: false
            }, {
                presetId: '',
                presetType: 4,
                isOverridden: false
            }, {
                presetId: '',
                presetType: 2,
                isOverridden: false
            }],
            widgetProps: '',
            retainState: false,
            immo: false,
            apsn: 'Slide3821',
            efph: {},
            eflh: [],
            iflbx: false,
            ipflbx: true,
            vt: '',
            rplm: {
                360: 0,
                600: 0,
                972: 0
            },
            rprm: {
                360: 0,
                600: 0,
                972: 0
            },
            rptm: {
                360: 0,
                600: 0,
                972: 0
            },
            rpbm: {
                360: 0,
                600: 0,
                972: 0
            },
            rpta: {
                360: 2,
                600: 2,
                972: 2
            },
            rptl: {
                360: 1,
                600: 1,
                972: 1
            },
            rpvt: {
                360: {
                    vt: '',
                    text: ''
                },
                600: {
                    vt: '',
                    text: ''
                },
                972: {
                    vt: '',
                    text: ''
                }

            },
            subType: '',
            text: '{"blocks":[{"key":"4k0dr","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{"listDepth":"0","listType":"S_Bullets08","listIndent":"100 % ","listSize":"100 % ","overridden":"false"}}],"entityMap":{}}',
            trin: 0,
            trout: 0,
            stl: [{
                stn: 'Normal',
                stt: 0,
                stsi: [3868]
            }],
            stis: 0,
            bstiid: 3858,
            sipst: -1,
            sicbs: false,
            sihhs: false,
            sihds: false,
            parent: 'si3858',
            baseItemIdForPropertyFlow: -1,
            isDD: false
        },
        si3868c: {
            b: [0, 0, 34, 20],
            fh: false,
            fw: false,
            uid: 3868,
            iso: false,
            css: {
                360: {
                    l: '0.000%',
                    t: '0.000%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0.000%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0.000%',
                    lvID: -1,
                    w: '3.498%',
                    h: '3.289%',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                },
                600: {
                    l: '0.000%',
                    t: '0.000%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0.000%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0.000%',
                    lvID: -1,
                    w: '3.498%',
                    h: '3.289%',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                },
                972: {
                    l: '0.000%',
                    t: '0.000%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0.000%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0.000%',
                    lvID: -1,
                    w: '3.498%',
                    h: '3.289%',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                }

            },
            dn: 'si3868',
            visible: 1,
            effectiveVi: 1,
            JSONEffectData: false,
            hms: false,
            hme: false,
            subt: 1,
            bc: '#ffffff',
            fe: true,
            fca: 1,
            fa: 100,
            path: '',
            svg: false,
            sde: false,
            scp: 0,
            sc: '#0080ff',
            sw: 1,
            ss: 0,
            sa: 1,
            se: false,
            vbwr: [-2, -2, 36, 22],
            vb: [-2, -2, 36, 22]
        },
        si3878: {
            name: 'Rectangle_6',
            type: 612,
            from: 361,
            to: 450,
            rp: 0,
            rpa: 0,
            mdi: 'si3878c',
            tag: '',
            v: 0,
            enabled: true,
            defEn: true,
            vu: [],
            siaf: 0,
            sid: 3,
            slideItemThemeCounter: 0,
            presetData: [{
                presetId: 'cp_default_caption_shape_solid_style',
                presetType: 0,
                isOverridden: false
            }, {
                presetId: 'cp_default_quiz_caption_textinshape_style',
                presetType: 4,
                isOverridden: false
            }, {
                presetId: '',
                presetType: 2,
                isOverridden: false
            }],
            widgetProps: '{"sizeNPos":{"top":338,"left":1010,"width":300,"height":"auto"}}',
            parentGroup: 'si3839',
            retainState: false,
            immo: false,
            apsn: 'Slide3821',
            efph: {},
            eflh: [],
            iflbx: false,
            ipflbx: true,
            vt: '',
            rplm: {
                360: 0,
                600: 0,
                972: 0
            },
            rprm: {
                360: 0,
                600: 0,
                972: 0
            },
            rptm: {
                360: 0,
                600: 0,
                972: 0
            },
            rpbm: {
                360: 0,
                600: 0,
                972: 0
            },
            rpta: {
                360: 2,
                600: 2,
                972: 2
            },
            rptl: {
                360: 1,
                600: 1,
                972: 1
            },
            rpvt: {
                360: {
                    vt: '',
                    text: ''
                },
                600: {
                    vt: '',
                    text: ''
                },
                972: {
                    vt: '',
                    text: ''
                }

            },
            subType: '',
            text: '{"blocks":[{"key":"b8kef","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{"listDepth":"0","listType":"S_Bullets08","listIndent":"100%","listSize":"100%","overridden":"false","presetId":"cp_default_quiz_caption_textinshape_style"}}],"entityMap":{}}',
            isc: 1,
            trin: 0,
            trout: 0,
            stl: [{
                stn: 3889,
                stt: 0,
                dsr: 'Standardstatus',
                stsi: [3878]
            }],
            stis: 0,
            bstiid: -1,
            sipst: 0,
            sicbs: false,
            sihhs: false,
            sihds: false,
            stc: ['si3878', 'si3891', 'si3902', 'si3913'],
            isDD: false
        },
        si3878c: {
            b: [0, 0, 972, 48],
            fh: false,
            fw: false,
            uid: 3878,
            iso: false,
            css: {
                360: {
                    l: '0.000%',
                    t: '0.000%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0.000%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0.000%',
                    lvID: -1,
                    w: '100.000%',
                    h: '7.895%',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                },
                600: {
                    l: '0.000%',
                    t: '0.000%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0.000%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0.000%',
                    lvID: -1,
                    w: '100.000%',
                    h: '7.895%',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                },
                972: {
                    l: '0.000%',
                    t: '0.000%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0.000%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0.000%',
                    lvID: -1,
                    w: '100.000%',
                    h: '7.895%',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                }

            },
            dn: 'si3878',
            visible: 1,
            effectiveVi: 1,
            JSONEffectData: false,
            hms: false,
            hme: false,
            subt: 1,
            bc: '#c8e2ff',
            fe: true,
            fca: 1,
            fa: 0,
            path: 'M 0.000000 0.000000 L 972.000000 0.000000 L 972.000000 48.000000 L 0.000000 48.000000 Z ',
            svg: false,
            sde: false,
            scp: 0,
            sc: '#0080ff',
            sw: 1,
            ss: 0,
            sa: 1,
            se: false,
            vbwr: [-2, -2, 974, 50],
            vb: [-2, -2, 974, 50]
        },
        si3891: {
            name: '',
            type: 612,
            from: 361,
            to: 450,
            rp: 0,
            rpa: 0,
            mdi: 'si3891c',
            tag: '',
            v: 0,
            enabled: true,
            defEn: true,
            vu: [],
            siaf: 0,
            sid: 3,
            slideItemThemeCounter: 0,
            presetData: [{
                presetId: '',
                presetType: 0,
                isOverridden: false
            }, {
                presetId: '',
                presetType: 4,
                isOverridden: false
            }, {
                presetId: '',
                presetType: 2,
                isOverridden: false
            }],
            widgetProps: '{"sizeNPos":{"top":338,"left":1010,"width":300,"height":"auto"}}',
            parentGroup: 'si3839',
            retainState: false,
            immo: false,
            apsn: 'Slide3821',
            efph: {},
            eflh: [],
            iflbx: false,
            ipflbx: true,
            vt: '',
            rplm: {
                360: 0,
                600: 0,
                972: 0
            },
            rprm: {
                360: 0,
                600: 0,
                972: 0
            },
            rptm: {
                360: 0,
                600: 0,
                972: 0
            },
            rpbm: {
                360: 0,
                600: 0,
                972: 0
            },
            rpta: {
                360: 2,
                600: 2,
                972: 2
            },
            rptl: {
                360: 1,
                600: 1,
                972: 1
            },
            rpvt: {
                360: {
                    vt: '',
                    text: ''
                },
                600: {
                    vt: '',
                    text: ''
                },
                972: {
                    vt: '',
                    text: ''
                }

            },
            subType: '',
            text: '{"blocks":[{"key":"e7msa","text":"Erfolgstext eingeben","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":55,"style":"overridden:false"},{"offset":0,"length":55,"style":"opacity:1"},{"offset":0,"length":55,"style":"backgroundColor:unset"},{"offset":0,"length":55,"style":"defaultBackgroundColor:#5EFF67"},{"offset":0,"length":55,"style":"textHighlightEnable:false"},{"offset":0,"length":55,"style":"textOutlineEnable:false"},{"offset":0,"length":55,"style":"textShadowEnable:false"}],"entityRanges":[],"data":{"presetId":"text-caption_correct","listDepth":"0","listType":"S_Bullets08","listIndent":"100%","listSize":"100%","listColor":"#666666","overridden":"false"}}],"entityMap":{}}',
            isc: 1,
            trin: 0,
            trout: 0,
            bstin: 'si3878',
            stl: [{
                stn: 'Normal',
                stt: 0,
                stsi: [3891]
            }],
            stis: 0,
            bstiid: 3878,
            sipst: 101,
            sicbs: true,
            sihhs: false,
            sihds: false,
            baseItemIdForPropertyFlow: 3878,
            isDD: false
        },
        si3891c: {
            b: [0, 0, 972, 48],
            fh: false,
            fw: false,
            uid: 3891,
            iso: false,
            css: {
                360: {
                    l: '0.000%',
                    t: '0.000%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0.000%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0.000%',
                    lvID: -1,
                    w: '100.000%',
                    h: '7.895%',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                },
                600: {
                    l: '0.000%',
                    t: '0.000%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0.000%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0.000%',
                    lvID: -1,
                    w: '100.000%',
                    h: '7.895%',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                },
                972: {
                    l: '0.000%',
                    t: '0.000%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0.000%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0.000%',
                    lvID: -1,
                    w: '100.000%',
                    h: '7.895%',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                }

            },
            dn: 'si3891',
            visible: 0,
            effectiveVi: 1,
            JSONEffectData: false,
            hms: false,
            hme: false,
            subt: 1,
            bc: '#c8e2ff',
            fe: true,
            fca: 1,
            fa: 100,
            path: 'M 0.000000 0.000000 L 972.000000 0.000000 L 972.000000 48.000000 L 0.000000 48.000000 Z ',
            svg: false,
            sde: false,
            scp: 0,
            sc: '#0080ff',
            sw: 1,
            ss: 0,
            sa: 1,
            se: false,
            vbwr: [-2, -2, 974, 50],
            vb: [-2, -2, 974, 50]
        },
        si3902: {
            name: '',
            type: 612,
            from: 361,
            to: 450,
            rp: 0,
            rpa: 0,
            mdi: 'si3902c',
            tag: '',
            v: 0,
            enabled: true,
            defEn: true,
            vu: [],
            siaf: 0,
            sid: 3,
            slideItemThemeCounter: 0,
            presetData: [{
                presetId: '',
                presetType: 0,
                isOverridden: false
            }, {
                presetId: '',
                presetType: 4,
                isOverridden: false
            }, {
                presetId: '',
                presetType: 2,
                isOverridden: false
            }],
            widgetProps: '{"sizeNPos":{"top":338,"left":1010,"width":300,"height":"auto"}}',
            parentGroup: 'si3839',
            retainState: false,
            immo: false,
            apsn: 'Slide3821',
            efph: {},
            eflh: [],
            iflbx: false,
            ipflbx: true,
            vt: '',
            rplm: {
                360: 0,
                600: 0,
                972: 0
            },
            rprm: {
                360: 0,
                600: 0,
                972: 0
            },
            rptm: {
                360: 0,
                600: 0,
                972: 0
            },
            rpbm: {
                360: 0,
                600: 0,
                972: 0
            },
            rpta: {
                360: 2,
                600: 2,
                972: 2
            },
            rptl: {
                360: 1,
                600: 1,
                972: 1
            },
            rpvt: {
                360: {
                    vt: '',
                    text: ''
                },
                600: {
                    vt: '',
                    text: ''
                },
                972: {
                    vt: '',
                    text: ''
                }

            },
            subType: '',
            text: '{"blocks":[{"key":"ah2dc","text":"Misserfolgstext eingeben","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":57,"style":"overridden:false"},{"offset":0,"length":57,"style":"opacity:1"},{"offset":0,"length":57,"style":"backgroundColor:unset"},{"offset":0,"length":57,"style":"defaultBackgroundColor:#5EFF67"},{"offset":0,"length":57,"style":"textHighlightEnable:false"},{"offset":0,"length":57,"style":"textOutlineEnable:false"},{"offset":0,"length":57,"style":"textShadowEnable:false"}],"entityRanges":[],"data":{"presetId":"text-caption_incorrect","listDepth":"0","listType":"S_Bullets08","listIndent":"100%","listSize":"100%","listColor":"#666666","overridden":"false"}}],"entityMap":{}}',
            isc: 1,
            trin: 0,
            trout: 0,
            bstin: 'si3878',
            stl: [{
                stn: 'Normal',
                stt: 0,
                stsi: [3902]
            }],
            stis: 0,
            bstiid: 3878,
            sipst: 102,
            sicbs: true,
            sihhs: false,
            sihds: false,
            baseItemIdForPropertyFlow: 3878,
            isDD: false
        },
        si3902c: {
            b: [0, 0, 972, 48],
            fh: false,
            fw: false,
            uid: 3902,
            iso: false,
            css: {
                360: {
                    l: '0.000%',
                    t: '0.000%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0.000%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0.000%',
                    lvID: -1,
                    w: '100.000%',
                    h: '7.895%',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                },
                600: {
                    l: '0.000%',
                    t: '0.000%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0.000%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0.000%',
                    lvID: -1,
                    w: '100.000%',
                    h: '7.895%',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                },
                972: {
                    l: '0.000%',
                    t: '0.000%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0.000%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0.000%',
                    lvID: -1,
                    w: '100.000%',
                    h: '7.895%',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                }

            },
            dn: 'si3902',
            visible: 0,
            effectiveVi: 1,
            JSONEffectData: false,
            hms: false,
            hme: false,
            subt: 1,
            bc: '#c8e2ff',
            fe: true,
            fca: 1,
            fa: 100,
            path: 'M 0.000000 0.000000 L 972.000000 0.000000 L 972.000000 48.000000 L 0.000000 48.000000 Z ',
            svg: false,
            sde: false,
            scp: 0,
            sc: '#0080ff',
            sw: 1,
            ss: 0,
            sa: 1,
            se: false,
            vbwr: [-2, -2, 974, 50],
            vb: [-2, -2, 974, 50]
        },
        si3913: {
            name: '',
            type: 612,
            from: 361,
            to: 450,
            rp: 0,
            rpa: 0,
            mdi: 'si3913c',
            tag: '',
            v: 0,
            enabled: true,
            defEn: true,
            vu: [],
            siaf: 0,
            sid: 3,
            slideItemThemeCounter: 0,
            presetData: [{
                presetId: '',
                presetType: 0,
                isOverridden: false
            }, {
                presetId: '',
                presetType: 4,
                isOverridden: false
            }, {
                presetId: '',
                presetType: 2,
                isOverridden: false
            }],
            widgetProps: '{"sizeNPos":{"top":338,"left":1010,"width":300,"height":"auto"}}',
            parentGroup: 'si3839',
            retainState: false,
            immo: false,
            apsn: 'Slide3821',
            efph: {},
            eflh: [],
            iflbx: false,
            ipflbx: true,
            vt: '',
            rplm: {
                360: 0,
                600: 0,
                972: 0
            },
            rprm: {
                360: 0,
                600: 0,
                972: 0
            },
            rptm: {
                360: 0,
                600: 0,
                972: 0
            },
            rpbm: {
                360: 0,
                600: 0,
                972: 0
            },
            rpta: {
                360: 2,
                600: 2,
                972: 2
            },
            rptl: {
                360: 1,
                600: 1,
                972: 1
            },
            rpvt: {
                360: {
                    vt: '',
                    text: ''
                },
                600: {
                    vt: '',
                    text: ''
                },
                972: {
                    vt: '',
                    text: ''
                }

            },
            subType: '',
            text: '{"blocks":[{"key":"ah2dc","text":"Hinweistext eingeben","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":57,"style":"overridden:false"},{"offset":0,"length":57,"style":"opacity:1"},{"offset":0,"length":57,"style":"backgroundColor:unset"},{"offset":0,"length":57,"style":"defaultBackgroundColor:#5EFF67"},{"offset":0,"length":57,"style":"textHighlightEnable:false"},{"offset":0,"length":57,"style":"textOutlineEnable:false"},{"offset":0,"length":57,"style":"textShadowEnable:false"}],"entityRanges":[],"data":{"presetId":"text-caption_incorrect","listDepth":"0","listType":"S_Bullets08","listIndent":"100%","listSize":"100%","listColor":"#666666","overridden":"false"}}],"entityMap":{}}',
            isc: 1,
            trin: 0,
            trout: 0,
            bstin: 'si3878',
            stl: [{
                stn: 'Normal',
                stt: 0,
                stsi: [3913]
            }],
            stis: 0,
            bstiid: 3878,
            sipst: 103,
            sicbs: true,
            sihhs: false,
            sihds: false,
            baseItemIdForPropertyFlow: 3878,
            isDD: false
        },
        si3913c: {
            b: [0, 0, 972, 48],
            fh: false,
            fw: false,
            uid: 3913,
            iso: false,
            css: {
                360: {
                    l: '0.000%',
                    t: '0.000%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0.000%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0.000%',
                    lvID: -1,
                    w: '100.000%',
                    h: '7.895%',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                },
                600: {
                    l: '0.000%',
                    t: '0.000%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0.000%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0.000%',
                    lvID: -1,
                    w: '100.000%',
                    h: '7.895%',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                },
                972: {
                    l: '0.000%',
                    t: '0.000%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0.000%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0.000%',
                    lvID: -1,
                    w: '100.000%',
                    h: '7.895%',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                }

            },
            dn: 'si3913',
            visible: 0,
            effectiveVi: 1,
            JSONEffectData: false,
            hms: false,
            hme: false,
            subt: 1,
            bc: '#c8e2ff',
            fe: true,
            fca: 1,
            fa: 100,
            path: 'M 0.000000 0.000000 L 972.000000 0.000000 L 972.000000 48.000000 L 0.000000 48.000000 Z ',
            svg: false,
            sde: false,
            scp: 0,
            sc: '#0080ff',
            sw: 1,
            ss: 0,
            sa: 1,
            se: false,
            vbwr: [-2, -2, 974, 50],
            vb: [-2, -2, 974, 50]
        },
        si3938: {
            name: 'Anweisungen_6',
            type: 612,
            from: 361,
            to: 450,
            rp: 0,
            rpa: 0,
            mdi: 'si3938c',
            tag: 'slide-item-comment-box',
            v: 0,
            enabled: true,
            defEn: true,
            vu: [],
            siaf: 0,
            sid: 3,
            slideItemThemeCounter: 0,
            presetData: [{
                presetId: '',
                presetType: 0,
                isOverridden: false
            }, {
                presetId: '',
                presetType: 4,
                isOverridden: false
            }, {
                presetId: '',
                presetType: 2,
                isOverridden: false
            }],
            widgetProps: '{"currentState":"normal","normal":{"opacity":100,"padding":10,"editorState":{"blocks":[{"key":"4k0dr","text":"Auf Button «Add to file» klicken.","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":33,"style":"fontFamily:SBB"},{"offset":0,"length":33,"style":"color:#FFFFFF"},{"offset":0,"length":33,"style":"lineHeight:135%"},{"offset":0,"length":33,"style":"letterSpacing:0%"},{"offset":0,"length":33,"style":"textTransform:none"},{"offset":0,"length":33,"style":"textDecoration:none"},{"offset":0,"length":33,"style":"desktop-fontSize:20"},{"offset":0,"length":33,"style":"borderBottomStyle:none"},{"offset":0,"length":33,"style":"fontWeight:normal"},{"offset":0,"length":33,"style":"mobile-fontSize:20"},{"offset":0,"length":33,"style":"fontStyle:normal"},{"offset":0,"length":33,"style":"overridden:true"},{"offset":0,"length":33,"style":"tablet-fontSize:20"},{"offset":0,"length":33,"style":"fontStretch:normal"},{"offset":0,"length":33,"style":"fontType:regular"}],"entityRanges":[],"data":{"textAlign":"center","listType":"S_Bullets08","listIndent":"100 % ","listSize":"100 % ","listDepth":"0","overridden":"true","presetId":"text-comment-box"}}],"entityMap":{}},"shapePresetData":{"presetId":"cp_comment_box_shape_1_solid_style","fillEnable":true,"strokeEnable":false,"shadowEnable":false,"fillType":1},"appearenceProperties":{"fill":{"color":"#ad00ffFF"},"shadow":{},"stroke":{}},"overriddenProperties":[60005,"fillColor",60008,60004]},"shapeData":{"type":"rect","attributes":{"rx":"0"}},"sizeNPos":{"top":253.7265625,"left":1094.40625,"width":320}}',
            parentGroup: 'si3839',
            retainState: false,
            immo: false,
            apsn: 'Slide3821',
            efph: {},
            eflh: [],
            iflbx: false,
            ipflbx: true,
            vt: '',
            rplm: {
                360: 0,
                600: 0,
                972: 0
            },
            rprm: {
                360: 0,
                600: 0,
                972: 0
            },
            rptm: {
                360: 0,
                600: 0,
                972: 0
            },
            rpbm: {
                360: 0,
                600: 0,
                972: 0
            },
            rpta: {
                360: 2,
                600: 2,
                972: 2
            },
            rptl: {
                360: 1,
                600: 1,
                972: 1
            },
            rpvt: {
                360: {
                    vt: '',
                    text: ''
                },
                600: {
                    vt: '',
                    text: ''
                },
                972: {
                    vt: '',
                    text: ''
                }

            },
            subType: '',
            text: '{"blocks":[{"key":"4k0dr","text":"Auf den Bildlaufbereich „“ klicken","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{"presetId":"text-comment-box","listDepth":"0","listType":"S_Bullets08","listIndent":"100 % ","listSize":"100 % ","overridden":"false"}}],"entityMap":{}}',
            adj: [3085.71, -6171.43, 3600],
            isco: 1,
            trin: 0,
            trout: 0,
            stl: [{
                stn: 'Normal',
                stt: 0,
                stsi: [3938]
            }],
            stis: 0,
            bstiid: -1,
            sipst: 0,
            sicbs: false,
            sihhs: false,
            sihds: false,
            isDD: false
        },
        si3938c: {
            b: [1002, 308, 1322, 408],
            fh: false,
            fw: false,
            uid: 3938,
            iso: false,
            css: {
                360: {
                    l: '103.086%',
                    t: '50.658%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '103.086%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '50.658%',
                    lvID: -1,
                    w: '32.922%',
                    h: '16.447%',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                },
                600: {
                    l: '103.086%',
                    t: '50.658%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '103.086%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '50.658%',
                    lvID: -1,
                    w: '32.922%',
                    h: '16.447%',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                },
                972: {
                    l: '103.086%',
                    t: '50.658%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '103.086%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '50.658%',
                    lvID: -1,
                    w: '32.922%',
                    h: '16.447%',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                }

            },
            dn: 'si3938',
            visible: 1,
            effectiveVi: 1,
            JSONEffectData: false,
            hms: false,
            hme: false,
            subt: 57,
            bc: '#ffffff',
            fe: true,
            fca: 1,
            fa: 100,
            path: '',
            svg: false,
            sde: false,
            scp: 0,
            sc: '#0080ff',
            sw: 1,
            ss: 0,
            sa: 1,
            se: false,
            vbwr: [-2, -2, 1324, 410],
            vb: [-2, -2, 1324, 410]
        },
        si3948: {
            name: 'Maus_9',
            type: 12,
            from: 403,
            to: 450,
            rp: 0,
            rpa: 0,
            mdi: 'si3948c',
            tag: 'slide-item-mouse-pointer',
            v: 0,
            enabled: true,
            defEn: true,
            vu: [],
            siaf: 1.4,
            sid: 1.6,
            slideItemThemeCounter: 0,
            presetData: [{
                presetId: '',
                presetType: -1,
                isOverridden: false
            }],
            widgetProps: '{"mouseMovementPathType":1,"mouseMovementSpeed":1,"mouseStraightPath":false,"scaleValue":"medium","mouseClickData":{"color":"#ad00ffFF","showMouseClick":true,"scaleValue":"medium"},"svgData":{"mousePointerType":0},"mousePathPoints":{"mouseStartPointX":1057.402483258929,"mouseStartPointY":278.3851841517857,"mouseEndPointX":1056.640764508929,"mouseEndPointY":278.01088169642856}}',
            parentGroup: 'si3839',
            retainState: false,
            immo: false,
            apsn: 'Slide3821',
            efph: {},
            eflh: [],
            iflbx: false,
            ipflbx: true,
            msa: '',
            trin: 0,
            trout: 0,
            isDD: false
        },
        si3948c: {
            b: [1008, 284, 1025, 307],
            fh: false,
            fw: false,
            uid: 3948,
            iso: false,
            css: {
                360: {
                    l: '103.704%',
                    t: '46.711%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '103.704%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '46.711%',
                    lvID: -1,
                    w: '17px',
                    h: '23px',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                },
                600: {
                    l: '103.704%',
                    t: '46.711%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '103.704%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '46.711%',
                    lvID: -1,
                    w: '17px',
                    h: '23px',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                },
                972: {
                    l: '103.704%',
                    t: '46.711%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '103.704%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '46.711%',
                    lvID: -1,
                    w: '17px',
                    h: '23px',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                }

            },
            sr: cp.fd,
            dn: 'si3948',
            visible: 1,
            effectiveVi: 1,
            JSONEffectData: false,
            t: 1,
            sz: 0,
            mpt: 0,
            data: {
                c: '#0000ff',
                fca: 1,
                r: 12
            },
            sde: false,
            se: false,
            vbwr: [1008, 284, 1034, 307],
            vb: [1008, 284, 1034, 307]
        },
        Slide3821: {
            lb: 'SBB Pictograms',
            id: 3821,
            from: 361,
            to: 450,
            iols: 0,
            i360qs: false,
            sdu: 3,
            presetData: [{
                presetId: '',
                presetType: 3,
                isOverridden: false
            }],
            propTxtScaling: false,
            minFontSizeScaling: 14,
            useng: true,
            transition: {
                type: 0
            },
            mmot: false,
            mdi: 'Slide3821c',
            st: 'Normal Slide',
            sk: 'Simulation',
            slideTag: '',
            type: 30,
            slideThemeCounter: 0,
            accProps: {},
            si: [{
                n: 'si3847',
                t: 1268
            }],
            iph: [],
            v: false,
            canvasData: {
                bc: '#ffffff',
                fa: 1,
                fe: true,
                iso: false,
                se: false
            },
            bookmarks: [],
            qs: ''
        },
        Slide3821c: {
            b: [0, 0, 0, 0],
            css: {},
            sr: cp.fd,
            uid: 3821,
            dn: 'Slide3821',
            visible: '1'
        },
        si4500: {
            name: 'Simulation_12',
            type: 1268,
            from: 451,
            to: 540,
            rp: 0,
            rpa: 0,
            mdi: 'si4500c',
            tag: 'container-simulation-widget',
            v: 0,
            enabled: true,
            defEn: true,
            vu: [],
            siaf: 0,
            sid: 3,
            slideItemThemeCounter: 0,
            presetData: [{
                presetId: '',
                presetType: 14,
                isOverridden: false
            }, {
                presetId: '',
                presetType: 2,
                isOverridden: false
            }],
            widgetProps: '{"autoFit":true}',
            retainState: false,
            immo: false,
            apsn: 'Slide4474',
            efph: {},
            eflh: [],
            iflbx: false,
            ipflbx: true,
            si: [{
                n: 'si4492',
                t: 1268
            }],
            containerType: 'simulation-widget',
            widgetProps: '{"autoFit":true}',
            option: '',
            padding: {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            },
            parent: '',
            selectable: false,
            trin: 0,
            trout: 0,
            isDD: false
        },
        si4500c: {
            b: [0, 0, 0, 0],
            fh: false,
            fw: false,
            uid: 4500,
            iso: false,
            css: {
                360: {
                    l: '0px',
                    t: '0px',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0px',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0px',
                    lvID: -1,
                    w: '0px',
                    h: '0px',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                },
                600: {
                    l: '0px',
                    t: '0px',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0px',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0px',
                    lvID: -1,
                    w: '0px',
                    h: '0px',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                },
                972: {
                    l: '0px',
                    t: '0px',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0px',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0px',
                    lvID: -1,
                    w: '0px',
                    h: '0px',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                }

            },
            sr: cp.fd,
            dn: 'si4500',
            visible: 1,
            effectiveVi: 1,
            JSONEffectData: false,
            bc: '#ffffff',
            fe: true,
            fca: 1,
            fa: 100,
            sde: false,
            scp: 0,
            sc: '#0080ff',
            sw: 1,
            ss: 0,
            sa: 1,
            se: false,
            vbwr: [-1, -1, 1, 1],
            vb: [-1, -1, 1, 1]
        },
        si4492: {
            name: 'Simulation_non_responsive_12',
            type: 1268,
            from: 451,
            to: 540,
            rp: 0,
            rpa: 0,
            mdi: 'si4492c',
            tag: 'container-simulation-non-responsive',
            v: 0,
            enabled: true,
            defEn: true,
            vu: [],
            siaf: 0,
            sid: 3,
            slideItemThemeCounter: 0,
            presetData: [{
                presetId: '',
                presetType: 14,
                isOverridden: true
            }, {
                presetId: '',
                presetType: 2,
                isOverridden: true
            }],
            widgetProps: '{"visibilityInfo":{"slide-item-clickbox":false,"slide-item-highlight-box":false,"slide-item-comment-box":false,"slide-item-inputfield":false,"slide-item-mouse-pointer":false,"slide-item-highlight-box":true,"slide-item-comment-box":true,"slide-item-mouse-pointer":true},"sizeNPos":{"width":1728,"height":1080},"groupedItemsVisibility":{"slide-item-clickbox":0,"slide-item-highlight-box":0,"slide-item-comment-box":0,"slide-item-inputfield":0,"slide-item-mouse-pointer":0,"slide-item-highlight-box":1,"slide-item-comment-box":1,"slide-item-mouse-pointer":1},"canBeCard":false}',
            parentGroup: 'si4500',
            retainState: false,
            immo: false,
            apsn: 'Slide4474',
            efph: {},
            eflh: [],
            iflbx: false,
            ipflbx: true,
            si: [{
                n: 'si4511',
                t: 1269
            }, {
                n: 'si4531',
                t: 612
            }, {
                n: 'si4591',
                t: 612
            }, {
                n: 'si4601',
                t: 12
            }],
            containerType: 'simulation-non-responsive',
            widgetProps: '{"visibilityInfo":{"slide-item-clickbox":false,"slide-item-highlight-box":false,"slide-item-comment-box":false,"slide-item-inputfield":false,"slide-item-mouse-pointer":false,"slide-item-highlight-box":true,"slide-item-comment-box":true,"slide-item-mouse-pointer":true},"sizeNPos":{"width":1728,"height":1080},"groupedItemsVisibility":{"slide-item-clickbox":0,"slide-item-highlight-box":0,"slide-item-comment-box":0,"slide-item-inputfield":0,"slide-item-mouse-pointer":0,"slide-item-highlight-box":1,"slide-item-comment-box":1,"slide-item-mouse-pointer":1},"canBeCard":false}',
            option: '',
            padding: {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            },
            parent: 'si4500',
            selectable: false,
            trin: 0,
            trout: 0,
            isDD: false
        },
        si4492c: {
            b: [0, 0, 0, 0],
            fh: false,
            fw: false,
            uid: 4492,
            iso: true,
            css: {
                360: {
                    l: '0px',
                    t: '0px',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0px',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0px',
                    lvID: -1,
                    w: '0px',
                    h: '0px',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                },
                600: {
                    l: '0px',
                    t: '0px',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0px',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0px',
                    lvID: -1,
                    w: '0px',
                    h: '0px',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                },
                972: {
                    l: '0px',
                    t: '0px',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0px',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0px',
                    lvID: -1,
                    w: '0px',
                    h: '0px',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                }

            },
            sr: cp.fd,
            dn: 'si4492',
            visible: 1,
            effectiveVi: 1,
            JSONEffectData: false,
            imgf: {
                b: 0,
                c: 0,
                br: 0,
                o: 100,
                ifbm: 'normal',
                ift: 'Normal',
                ifi: 0,
                iff: {
                    bc: '#ffe2c8'
                },
                tiletype: 0,
                extraImageProps: '',
                tiletype: 0,
                imageFocus: 0,
                w: 3456,
                h: 2160,
                id: 4508,
                tsp: 50,
                ip: 'dr/04508.png'
            },
            fe: true,
            fca: 1,
            fa: 100,
            iso: true,
            sde: false,
            scp: 0,
            sc: '#0080ff',
            sw: 1,
            ss: 0,
            sa: 1,
            se: false,
            vbwr: [-1, -1, 1, 1],
            vb: [-1, -1, 1, 1]
        },
        si4511: {
            name: 'Highlight_box_8',
            type: 1269,
            from: 451,
            to: 540,
            rp: 0,
            rpa: 0,
            mdi: 'si4511c',
            tag: 'slide-item-highlight-box',
            v: 0,
            enabled: true,
            defEn: true,
            vu: [],
            siaf: 0,
            sid: 3,
            slideItemThemeCounter: 0,
            presetData: [{
                presetId: '',
                presetType: 13,
                isOverridden: false
            }],
            widgetProps: '{"isHighlightBox":true,"currentState":"normal","normal":{"opacity":"20","shapePresetData":{"presetId":"cp_clickbox_shape_solid_style","fillEnable":true,"fillType":1,"strokeEnable":true,"shadowEnable":false},"appearenceProperties":{"fill":{"color":"#ad00ffFF"},"shadow":{},"stroke":{"enabled":false}},"overriddenProperties":["strokeEnable","fillColor","opacity"]},"shapeData":{"type":"rect","attributes":{"rx":"0"}},"sizeNPos":{"top":494.505859375,"left":997.609375,"width":79.3203125,"height":31.654296875}}',
            parentGroup: 'si4492',
            retainState: false,
            immo: false,
            apsn: 'Slide4474',
            efph: {},
            eflh: [],
            iflbx: false,
            ipflbx: true,
            ihb: true,
            si: [{
                n: 'si4521',
                t: 612
            }],
            te: false,
            ie: false,
            trin: 0,
            trout: 0,
            stl: [{
                stn: 'Normal',
                stt: 0,
                stsi: [4511]
            }],
            stis: 0,
            bstiid: -1,
            sipst: 0,
            sicbs: false,
            sihhs: false,
            sihds: false,
            siq: false,
            isDD: false
        },
        si4511c: {
            b: [1006, 502, 1040, 522],
            fh: false,
            fw: false,
            uid: 4511,
            iso: false,
            css: {
                360: {
                    l: '103.498%',
                    t: '82.566%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '103.498%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '82.566%',
                    lvID: -1,
                    w: '3.498%',
                    h: '3.289%',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                },
                600: {
                    l: '103.498%',
                    t: '82.566%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '103.498%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '82.566%',
                    lvID: -1,
                    w: '3.498%',
                    h: '3.289%',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                },
                972: {
                    l: '103.498%',
                    t: '82.566%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '103.498%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '82.566%',
                    lvID: -1,
                    w: '3.498%',
                    h: '3.289%',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                }

            },
            sr: cp.fd,
            dn: 'si4511',
            visible: 1,
            effectiveVi: 1,
            JSONEffectData: false,
            fa: 100,
            vbwr: [1006, 502, 1040, 522],
            vb: [1006, 502, 1040, 522]
        },
        si4521: {
            name: 'Form_8',
            type: 612,
            from: 451,
            to: 540,
            rp: 0,
            rpa: 0,
            mdi: 'si4521c',
            tag: '',
            v: 0,
            enabled: true,
            defEn: true,
            vu: [],
            siaf: 0,
            sid: 3,
            slideItemThemeCounter: 0,
            presetData: [{
                presetId: '',
                presetType: 0,
                isOverridden: false
            }, {
                presetId: '',
                presetType: 4,
                isOverridden: false
            }, {
                presetId: '',
                presetType: 2,
                isOverridden: false
            }],
            widgetProps: '',
            retainState: false,
            immo: false,
            apsn: 'Slide4474',
            efph: {},
            eflh: [],
            iflbx: false,
            ipflbx: true,
            vt: '',
            rplm: {
                360: 0,
                600: 0,
                972: 0
            },
            rprm: {
                360: 0,
                600: 0,
                972: 0
            },
            rptm: {
                360: 0,
                600: 0,
                972: 0
            },
            rpbm: {
                360: 0,
                600: 0,
                972: 0
            },
            rpta: {
                360: 2,
                600: 2,
                972: 2
            },
            rptl: {
                360: 1,
                600: 1,
                972: 1
            },
            rpvt: {
                360: {
                    vt: '',
                    text: ''
                },
                600: {
                    vt: '',
                    text: ''
                },
                972: {
                    vt: '',
                    text: ''
                }

            },
            subType: '',
            text: '{"blocks":[{"key":"4k0dr","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{"listDepth":"0","listType":"S_Bullets08","listIndent":"100 % ","listSize":"100 % ","overridden":"false"}}],"entityMap":{}}',
            trin: 0,
            trout: 0,
            stl: [{
                stn: 'Normal',
                stt: 0,
                stsi: [4521]
            }],
            stis: 0,
            bstiid: 4511,
            sipst: -1,
            sicbs: false,
            sihhs: false,
            sihds: false,
            parent: 'si4511',
            baseItemIdForPropertyFlow: -1,
            isDD: false
        },
        si4521c: {
            b: [0, 0, 34, 20],
            fh: false,
            fw: false,
            uid: 4521,
            iso: false,
            css: {
                360: {
                    l: '0.000%',
                    t: '0.000%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0.000%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0.000%',
                    lvID: -1,
                    w: '3.498%',
                    h: '3.289%',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                },
                600: {
                    l: '0.000%',
                    t: '0.000%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0.000%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0.000%',
                    lvID: -1,
                    w: '3.498%',
                    h: '3.289%',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                },
                972: {
                    l: '0.000%',
                    t: '0.000%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0.000%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0.000%',
                    lvID: -1,
                    w: '3.498%',
                    h: '3.289%',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                }

            },
            dn: 'si4521',
            visible: 1,
            effectiveVi: 1,
            JSONEffectData: false,
            hms: false,
            hme: false,
            subt: 1,
            bc: '#ffffff',
            fe: true,
            fca: 1,
            fa: 100,
            path: '',
            svg: false,
            sde: false,
            scp: 0,
            sc: '#0080ff',
            sw: 1,
            ss: 0,
            sa: 1,
            se: false,
            vbwr: [-2, -2, 36, 22],
            vb: [-2, -2, 36, 22]
        },
        si4531: {
            name: 'Rectangle_8',
            type: 612,
            from: 451,
            to: 540,
            rp: 0,
            rpa: 0,
            mdi: 'si4531c',
            tag: '',
            v: 0,
            enabled: true,
            defEn: true,
            vu: [],
            siaf: 0,
            sid: 3,
            slideItemThemeCounter: 0,
            presetData: [{
                presetId: 'cp_default_caption_shape_solid_style',
                presetType: 0,
                isOverridden: false
            }, {
                presetId: 'cp_default_quiz_caption_textinshape_style',
                presetType: 4,
                isOverridden: false
            }, {
                presetId: '',
                presetType: 2,
                isOverridden: false
            }],
            widgetProps: '{"sizeNPos":{"top":562,"left":1021,"width":300,"height":"auto"}}',
            parentGroup: 'si4492',
            retainState: false,
            immo: false,
            apsn: 'Slide4474',
            efph: {},
            eflh: [],
            iflbx: false,
            ipflbx: true,
            vt: '',
            rplm: {
                360: 0,
                600: 0,
                972: 0
            },
            rprm: {
                360: 0,
                600: 0,
                972: 0
            },
            rptm: {
                360: 0,
                600: 0,
                972: 0
            },
            rpbm: {
                360: 0,
                600: 0,
                972: 0
            },
            rpta: {
                360: 2,
                600: 2,
                972: 2
            },
            rptl: {
                360: 1,
                600: 1,
                972: 1
            },
            rpvt: {
                360: {
                    vt: '',
                    text: ''
                },
                600: {
                    vt: '',
                    text: ''
                },
                972: {
                    vt: '',
                    text: ''
                }

            },
            subType: '',
            text: '{"blocks":[{"key":"b8kef","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{"listDepth":"0","listType":"S_Bullets08","listIndent":"100%","listSize":"100%","overridden":"false","presetId":"cp_default_quiz_caption_textinshape_style"}}],"entityMap":{}}',
            isc: 1,
            trin: 0,
            trout: 0,
            stl: [{
                stn: 4542,
                stt: 0,
                dsr: 'Standardstatus',
                stsi: [4531]
            }],
            stis: 0,
            bstiid: -1,
            sipst: 0,
            sicbs: false,
            sihhs: false,
            sihds: false,
            stc: ['si4531', 'si4544', 'si4555', 'si4566'],
            isDD: false
        },
        si4531c: {
            b: [0, 0, 972, 48],
            fh: false,
            fw: false,
            uid: 4531,
            iso: false,
            css: {
                360: {
                    l: '0.000%',
                    t: '0.000%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0.000%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0.000%',
                    lvID: -1,
                    w: '100.000%',
                    h: '7.895%',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                },
                600: {
                    l: '0.000%',
                    t: '0.000%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0.000%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0.000%',
                    lvID: -1,
                    w: '100.000%',
                    h: '7.895%',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                },
                972: {
                    l: '0.000%',
                    t: '0.000%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0.000%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0.000%',
                    lvID: -1,
                    w: '100.000%',
                    h: '7.895%',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                }

            },
            dn: 'si4531',
            visible: 1,
            effectiveVi: 1,
            JSONEffectData: false,
            hms: false,
            hme: false,
            subt: 1,
            bc: '#c8e2ff',
            fe: true,
            fca: 1,
            fa: 0,
            path: 'M 0.000000 0.000000 L 972.000000 0.000000 L 972.000000 48.000000 L 0.000000 48.000000 Z ',
            svg: false,
            sde: false,
            scp: 0,
            sc: '#0080ff',
            sw: 1,
            ss: 0,
            sa: 1,
            se: false,
            vbwr: [-2, -2, 974, 50],
            vb: [-2, -2, 974, 50]
        },
        si4544: {
            name: '',
            type: 612,
            from: 451,
            to: 540,
            rp: 0,
            rpa: 0,
            mdi: 'si4544c',
            tag: '',
            v: 0,
            enabled: true,
            defEn: true,
            vu: [],
            siaf: 0,
            sid: 3,
            slideItemThemeCounter: 0,
            presetData: [{
                presetId: '',
                presetType: 0,
                isOverridden: false
            }, {
                presetId: '',
                presetType: 4,
                isOverridden: false
            }, {
                presetId: '',
                presetType: 2,
                isOverridden: false
            }],
            widgetProps: '{"sizeNPos":{"top":562,"left":1021,"width":300,"height":"auto"}}',
            parentGroup: 'si4492',
            retainState: false,
            immo: false,
            apsn: 'Slide4474',
            efph: {},
            eflh: [],
            iflbx: false,
            ipflbx: true,
            vt: '',
            rplm: {
                360: 0,
                600: 0,
                972: 0
            },
            rprm: {
                360: 0,
                600: 0,
                972: 0
            },
            rptm: {
                360: 0,
                600: 0,
                972: 0
            },
            rpbm: {
                360: 0,
                600: 0,
                972: 0
            },
            rpta: {
                360: 2,
                600: 2,
                972: 2
            },
            rptl: {
                360: 1,
                600: 1,
                972: 1
            },
            rpvt: {
                360: {
                    vt: '',
                    text: ''
                },
                600: {
                    vt: '',
                    text: ''
                },
                972: {
                    vt: '',
                    text: ''
                }

            },
            subType: '',
            text: '{"blocks":[{"key":"e7msa","text":"Erfolgstext eingeben","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":55,"style":"overridden:false"},{"offset":0,"length":55,"style":"opacity:1"},{"offset":0,"length":55,"style":"backgroundColor:unset"},{"offset":0,"length":55,"style":"defaultBackgroundColor:#5EFF67"},{"offset":0,"length":55,"style":"textHighlightEnable:false"},{"offset":0,"length":55,"style":"textOutlineEnable:false"},{"offset":0,"length":55,"style":"textShadowEnable:false"}],"entityRanges":[],"data":{"presetId":"text-caption_correct","listDepth":"0","listType":"S_Bullets08","listIndent":"100%","listSize":"100%","listColor":"#666666","overridden":"false"}}],"entityMap":{}}',
            isc: 1,
            trin: 0,
            trout: 0,
            bstin: 'si4531',
            stl: [{
                stn: 'Normal',
                stt: 0,
                stsi: [4544]
            }],
            stis: 0,
            bstiid: 4531,
            sipst: 101,
            sicbs: true,
            sihhs: false,
            sihds: false,
            baseItemIdForPropertyFlow: 4531,
            isDD: false
        },
        si4544c: {
            b: [0, 0, 972, 48],
            fh: false,
            fw: false,
            uid: 4544,
            iso: false,
            css: {
                360: {
                    l: '0.000%',
                    t: '0.000%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0.000%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0.000%',
                    lvID: -1,
                    w: '100.000%',
                    h: '7.895%',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                },
                600: {
                    l: '0.000%',
                    t: '0.000%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0.000%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0.000%',
                    lvID: -1,
                    w: '100.000%',
                    h: '7.895%',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                },
                972: {
                    l: '0.000%',
                    t: '0.000%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0.000%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0.000%',
                    lvID: -1,
                    w: '100.000%',
                    h: '7.895%',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                }

            },
            dn: 'si4544',
            visible: 0,
            effectiveVi: 1,
            JSONEffectData: false,
            hms: false,
            hme: false,
            subt: 1,
            bc: '#c8e2ff',
            fe: true,
            fca: 1,
            fa: 100,
            path: 'M 0.000000 0.000000 L 972.000000 0.000000 L 972.000000 48.000000 L 0.000000 48.000000 Z ',
            svg: false,
            sde: false,
            scp: 0,
            sc: '#0080ff',
            sw: 1,
            ss: 0,
            sa: 1,
            se: false,
            vbwr: [-2, -2, 974, 50],
            vb: [-2, -2, 974, 50]
        },
        si4555: {
            name: '',
            type: 612,
            from: 451,
            to: 540,
            rp: 0,
            rpa: 0,
            mdi: 'si4555c',
            tag: '',
            v: 0,
            enabled: true,
            defEn: true,
            vu: [],
            siaf: 0,
            sid: 3,
            slideItemThemeCounter: 0,
            presetData: [{
                presetId: '',
                presetType: 0,
                isOverridden: false
            }, {
                presetId: '',
                presetType: 4,
                isOverridden: false
            }, {
                presetId: '',
                presetType: 2,
                isOverridden: false
            }],
            widgetProps: '{"sizeNPos":{"top":562,"left":1021,"width":300,"height":"auto"}}',
            parentGroup: 'si4492',
            retainState: false,
            immo: false,
            apsn: 'Slide4474',
            efph: {},
            eflh: [],
            iflbx: false,
            ipflbx: true,
            vt: '',
            rplm: {
                360: 0,
                600: 0,
                972: 0
            },
            rprm: {
                360: 0,
                600: 0,
                972: 0
            },
            rptm: {
                360: 0,
                600: 0,
                972: 0
            },
            rpbm: {
                360: 0,
                600: 0,
                972: 0
            },
            rpta: {
                360: 2,
                600: 2,
                972: 2
            },
            rptl: {
                360: 1,
                600: 1,
                972: 1
            },
            rpvt: {
                360: {
                    vt: '',
                    text: ''
                },
                600: {
                    vt: '',
                    text: ''
                },
                972: {
                    vt: '',
                    text: ''
                }

            },
            subType: '',
            text: '{"blocks":[{"key":"ah2dc","text":"Misserfolgstext eingeben","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":57,"style":"overridden:false"},{"offset":0,"length":57,"style":"opacity:1"},{"offset":0,"length":57,"style":"backgroundColor:unset"},{"offset":0,"length":57,"style":"defaultBackgroundColor:#5EFF67"},{"offset":0,"length":57,"style":"textHighlightEnable:false"},{"offset":0,"length":57,"style":"textOutlineEnable:false"},{"offset":0,"length":57,"style":"textShadowEnable:false"}],"entityRanges":[],"data":{"presetId":"text-caption_incorrect","listDepth":"0","listType":"S_Bullets08","listIndent":"100%","listSize":"100%","listColor":"#666666","overridden":"false"}}],"entityMap":{}}',
            isc: 1,
            trin: 0,
            trout: 0,
            bstin: 'si4531',
            stl: [{
                stn: 'Normal',
                stt: 0,
                stsi: [4555]
            }],
            stis: 0,
            bstiid: 4531,
            sipst: 102,
            sicbs: true,
            sihhs: false,
            sihds: false,
            baseItemIdForPropertyFlow: 4531,
            isDD: false
        },
        si4555c: {
            b: [0, 0, 972, 48],
            fh: false,
            fw: false,
            uid: 4555,
            iso: false,
            css: {
                360: {
                    l: '0.000%',
                    t: '0.000%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0.000%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0.000%',
                    lvID: -1,
                    w: '100.000%',
                    h: '7.895%',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                },
                600: {
                    l: '0.000%',
                    t: '0.000%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0.000%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0.000%',
                    lvID: -1,
                    w: '100.000%',
                    h: '7.895%',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                },
                972: {
                    l: '0.000%',
                    t: '0.000%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0.000%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0.000%',
                    lvID: -1,
                    w: '100.000%',
                    h: '7.895%',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                }

            },
            dn: 'si4555',
            visible: 0,
            effectiveVi: 1,
            JSONEffectData: false,
            hms: false,
            hme: false,
            subt: 1,
            bc: '#c8e2ff',
            fe: true,
            fca: 1,
            fa: 100,
            path: 'M 0.000000 0.000000 L 972.000000 0.000000 L 972.000000 48.000000 L 0.000000 48.000000 Z ',
            svg: false,
            sde: false,
            scp: 0,
            sc: '#0080ff',
            sw: 1,
            ss: 0,
            sa: 1,
            se: false,
            vbwr: [-2, -2, 974, 50],
            vb: [-2, -2, 974, 50]
        },
        si4566: {
            name: '',
            type: 612,
            from: 451,
            to: 540,
            rp: 0,
            rpa: 0,
            mdi: 'si4566c',
            tag: '',
            v: 0,
            enabled: true,
            defEn: true,
            vu: [],
            siaf: 0,
            sid: 3,
            slideItemThemeCounter: 0,
            presetData: [{
                presetId: '',
                presetType: 0,
                isOverridden: false
            }, {
                presetId: '',
                presetType: 4,
                isOverridden: false
            }, {
                presetId: '',
                presetType: 2,
                isOverridden: false
            }],
            widgetProps: '{"sizeNPos":{"top":562,"left":1021,"width":300,"height":"auto"}}',
            parentGroup: 'si4492',
            retainState: false,
            immo: false,
            apsn: 'Slide4474',
            efph: {},
            eflh: [],
            iflbx: false,
            ipflbx: true,
            vt: '',
            rplm: {
                360: 0,
                600: 0,
                972: 0
            },
            rprm: {
                360: 0,
                600: 0,
                972: 0
            },
            rptm: {
                360: 0,
                600: 0,
                972: 0
            },
            rpbm: {
                360: 0,
                600: 0,
                972: 0
            },
            rpta: {
                360: 2,
                600: 2,
                972: 2
            },
            rptl: {
                360: 1,
                600: 1,
                972: 1
            },
            rpvt: {
                360: {
                    vt: '',
                    text: ''
                },
                600: {
                    vt: '',
                    text: ''
                },
                972: {
                    vt: '',
                    text: ''
                }

            },
            subType: '',
            text: '{"blocks":[{"key":"ah2dc","text":"Hinweistext eingeben","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":57,"style":"overridden:false"},{"offset":0,"length":57,"style":"opacity:1"},{"offset":0,"length":57,"style":"backgroundColor:unset"},{"offset":0,"length":57,"style":"defaultBackgroundColor:#5EFF67"},{"offset":0,"length":57,"style":"textHighlightEnable:false"},{"offset":0,"length":57,"style":"textOutlineEnable:false"},{"offset":0,"length":57,"style":"textShadowEnable:false"}],"entityRanges":[],"data":{"presetId":"text-caption_incorrect","listDepth":"0","listType":"S_Bullets08","listIndent":"100%","listSize":"100%","listColor":"#666666","overridden":"false"}}],"entityMap":{}}',
            isc: 1,
            trin: 0,
            trout: 0,
            bstin: 'si4531',
            stl: [{
                stn: 'Normal',
                stt: 0,
                stsi: [4566]
            }],
            stis: 0,
            bstiid: 4531,
            sipst: 103,
            sicbs: true,
            sihhs: false,
            sihds: false,
            baseItemIdForPropertyFlow: 4531,
            isDD: false
        },
        si4566c: {
            b: [0, 0, 972, 48],
            fh: false,
            fw: false,
            uid: 4566,
            iso: false,
            css: {
                360: {
                    l: '0.000%',
                    t: '0.000%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0.000%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0.000%',
                    lvID: -1,
                    w: '100.000%',
                    h: '7.895%',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                },
                600: {
                    l: '0.000%',
                    t: '0.000%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0.000%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0.000%',
                    lvID: -1,
                    w: '100.000%',
                    h: '7.895%',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                },
                972: {
                    l: '0.000%',
                    t: '0.000%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0.000%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0.000%',
                    lvID: -1,
                    w: '100.000%',
                    h: '7.895%',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                }

            },
            dn: 'si4566',
            visible: 0,
            effectiveVi: 1,
            JSONEffectData: false,
            hms: false,
            hme: false,
            subt: 1,
            bc: '#c8e2ff',
            fe: true,
            fca: 1,
            fa: 100,
            path: 'M 0.000000 0.000000 L 972.000000 0.000000 L 972.000000 48.000000 L 0.000000 48.000000 Z ',
            svg: false,
            sde: false,
            scp: 0,
            sc: '#0080ff',
            sw: 1,
            ss: 0,
            sa: 1,
            se: false,
            vbwr: [-2, -2, 974, 50],
            vb: [-2, -2, 974, 50]
        },
        si4591: {
            name: 'Anweisungen_8',
            type: 612,
            from: 451,
            to: 540,
            rp: 0,
            rpa: 0,
            mdi: 'si4591c',
            tag: 'slide-item-comment-box',
            v: 0,
            enabled: true,
            defEn: true,
            vu: [],
            siaf: 0,
            sid: 3,
            slideItemThemeCounter: 0,
            presetData: [{
                presetId: '',
                presetType: 0,
                isOverridden: false
            }, {
                presetId: '',
                presetType: 4,
                isOverridden: false
            }, {
                presetId: '',
                presetType: 2,
                isOverridden: false
            }],
            widgetProps: '{"currentState":"normal","normal":{"opacity":100,"padding":10,"editorState":{"blocks":[{"key":"4k0dr","text":"Auf Button «Add to file» klicken.","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":33,"style":"overridden:true"},{"offset":0,"length":33,"style":"tablet-fontSize:20"},{"offset":0,"length":33,"style":"fontStretch:normal"},{"offset":0,"length":33,"style":"fontType:regular"},{"offset":0,"length":33,"style":"fontFamily:SBB"},{"offset":0,"length":33,"style":"color:#FFFFFF"},{"offset":0,"length":33,"style":"lineHeight:135%"},{"offset":0,"length":33,"style":"letterSpacing:0%"},{"offset":0,"length":33,"style":"textTransform:none"},{"offset":0,"length":33,"style":"textDecoration:none"},{"offset":0,"length":33,"style":"desktop-fontSize:20"},{"offset":0,"length":33,"style":"borderBottomStyle:none"},{"offset":0,"length":33,"style":"fontWeight:normal"},{"offset":0,"length":33,"style":"mobile-fontSize:20"},{"offset":0,"length":33,"style":"fontStyle:normal"}],"entityRanges":[],"data":{"textAlign":"center","listType":"S_Bullets08","listIndent":"100 % ","listSize":"100 % ","listDepth":"0","overridden":"true","presetId":"text-comment-box"}}],"entityMap":{}},"shapePresetData":{"presetId":"cp_comment_box_shape_1_solid_style","fillEnable":true,"strokeEnable":false,"shadowEnable":false,"fillType":1},"appearenceProperties":{"fill":{"color":"#ad00ffFF"},"shadow":{},"stroke":{}},"overriddenProperties":[60005,"fillColor",60008,60004]},"shapeData":{"type":"rect","attributes":{"rx":"0"}},"sizeNPos":{"top":487.09375,"left":1094.58984375,"width":320}}',
            parentGroup: 'si4492',
            retainState: false,
            immo: false,
            apsn: 'Slide4474',
            efph: {},
            eflh: [],
            iflbx: false,
            ipflbx: true,
            vt: '',
            rplm: {
                360: 0,
                600: 0,
                972: 0
            },
            rprm: {
                360: 0,
                600: 0,
                972: 0
            },
            rptm: {
                360: 0,
                600: 0,
                972: 0
            },
            rpbm: {
                360: 0,
                600: 0,
                972: 0
            },
            rpta: {
                360: 2,
                600: 2,
                972: 2
            },
            rptl: {
                360: 1,
                600: 1,
                972: 1
            },
            rpvt: {
                360: {
                    vt: '',
                    text: ''
                },
                600: {
                    vt: '',
                    text: ''
                },
                972: {
                    vt: '',
                    text: ''
                }

            },
            subType: '',
            text: '{"blocks":[{"key":"4k0dr","text":"Auf den Bildlaufbereich „“ klicken","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{"presetId":"text-comment-box","listDepth":"0","listType":"S_Bullets08","listIndent":"100 % ","listSize":"100 % ","overridden":"false"}}],"entityMap":{}}',
            adj: [3085.71, -6171.43, 3600],
            isco: 1,
            trin: 0,
            trout: 0,
            stl: [{
                stn: 'Normal',
                stt: 0,
                stsi: [4591]
            }],
            stis: 0,
            bstiid: -1,
            sipst: 0,
            sicbs: false,
            sihhs: false,
            sihds: false,
            isDD: false
        },
        si4591c: {
            b: [1013, 532, 1333, 632],
            fh: false,
            fw: false,
            uid: 4591,
            iso: false,
            css: {
                360: {
                    l: '104.218%',
                    t: '87.500%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '104.218%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '87.500%',
                    lvID: -1,
                    w: '32.922%',
                    h: '16.447%',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                },
                600: {
                    l: '104.218%',
                    t: '87.500%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '104.218%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '87.500%',
                    lvID: -1,
                    w: '32.922%',
                    h: '16.447%',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                },
                972: {
                    l: '104.218%',
                    t: '87.500%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '104.218%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '87.500%',
                    lvID: -1,
                    w: '32.922%',
                    h: '16.447%',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                }

            },
            dn: 'si4591',
            visible: 1,
            effectiveVi: 1,
            JSONEffectData: false,
            hms: false,
            hme: false,
            subt: 57,
            bc: '#ffffff',
            fe: true,
            fca: 1,
            fa: 100,
            path: '',
            svg: false,
            sde: false,
            scp: 0,
            sc: '#0080ff',
            sw: 1,
            ss: 0,
            sa: 1,
            se: false,
            vbwr: [-2, -2, 1335, 634],
            vb: [-2, -2, 1335, 634]
        },
        si4601: {
            name: 'Maus_12',
            type: 12,
            from: 484,
            to: 540,
            rp: 0,
            rpa: 0,
            mdi: 'si4601c',
            tag: 'slide-item-mouse-pointer',
            v: 0,
            enabled: true,
            defEn: true,
            vu: [],
            siaf: 1.1,
            sid: 1.9,
            slideItemThemeCounter: 0,
            presetData: [{
                presetId: '',
                presetType: -1,
                isOverridden: false
            }],
            widgetProps: '{"mouseMovementPathType":1,"mouseMovementSpeed":1,"mouseStraightPath":false,"scaleValue":"medium","mouseClickData":{"color":"#ad00ffFF","showMouseClick":true,"scaleValue":"medium"},"svgData":{"mousePointerType":0},"mousePathPoints":{"mouseStartPointX":1056.640764508929,"mouseStartPointY":278.01088169642856,"mouseEndPointX":1059.0453404017858,"mouseEndPointY":508.890625}}',
            parentGroup: 'si4492',
            retainState: false,
            immo: false,
            apsn: 'Slide4474',
            efph: {},
            eflh: [],
            iflbx: false,
            ipflbx: true,
            msa: '',
            trin: 0,
            trout: 0,
            isDD: false
        },
        si4601c: {
            b: [1019, 508, 1036, 531],
            fh: false,
            fw: false,
            uid: 4601,
            iso: false,
            css: {
                360: {
                    l: '104.835%',
                    t: '83.553%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '104.835%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '83.553%',
                    lvID: -1,
                    w: '17px',
                    h: '23px',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                },
                600: {
                    l: '104.835%',
                    t: '83.553%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '104.835%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '83.553%',
                    lvID: -1,
                    w: '17px',
                    h: '23px',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                },
                972: {
                    l: '104.835%',
                    t: '83.553%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '104.835%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '83.553%',
                    lvID: -1,
                    w: '17px',
                    h: '23px',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                }

            },
            sr: cp.fd,
            dn: 'si4601',
            visible: 1,
            effectiveVi: 1,
            JSONEffectData: false,
            t: 1,
            sz: 0,
            mpt: 0,
            data: {
                c: '#0000ff',
                fca: 1,
                r: 12
            },
            sde: false,
            se: false,
            vbwr: [1019, 296, 1036, 531],
            vb: [1019, 296, 1036, 531]
        },
        Slide4474: {
            lb: 'Lyne Components',
            id: 4474,
            from: 451,
            to: 540,
            iols: 0,
            i360qs: false,
            sdu: 3,
            presetData: [{
                presetId: '',
                presetType: 3,
                isOverridden: false
            }],
            propTxtScaling: false,
            minFontSizeScaling: 14,
            useng: true,
            transition: {
                type: 0
            },
            mmot: false,
            mdi: 'Slide4474c',
            st: 'Normal Slide',
            sk: 'Simulation',
            slideTag: '',
            type: 30,
            slideThemeCounter: 0,
            accProps: {},
            si: [{
                n: 'si4500',
                t: 1268
            }],
            iph: [],
            v: false,
            canvasData: {
                bc: '#ffffff',
                fa: 1,
                fe: true,
                iso: false,
                se: false
            },
            bookmarks: [],
            qs: ''
        },
        Slide4474c: {
            b: [0, 0, 0, 0],
            css: {},
            sr: cp.fd,
            uid: 4474,
            dn: 'Slide4474',
            visible: '1'
        },
        si4676: {
            name: 'Simulation_13',
            type: 1268,
            from: 541,
            to: 630,
            rp: 0,
            rpa: 0,
            mdi: 'si4676c',
            tag: 'container-simulation-widget',
            v: 0,
            enabled: true,
            defEn: true,
            vu: [],
            siaf: 0,
            sid: 3,
            slideItemThemeCounter: 0,
            presetData: [{
                presetId: '',
                presetType: 14,
                isOverridden: false
            }, {
                presetId: '',
                presetType: 2,
                isOverridden: false
            }],
            widgetProps: '{"autoFit":true}',
            retainState: false,
            immo: false,
            apsn: 'Slide4650',
            efph: {},
            eflh: [],
            iflbx: false,
            ipflbx: true,
            si: [{
                n: 'si4668',
                t: 1268
            }],
            containerType: 'simulation-widget',
            widgetProps: '{"autoFit":true}',
            option: '',
            padding: {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            },
            parent: '',
            selectable: false,
            trin: 0,
            trout: 0,
            isDD: false
        },
        si4676c: {
            b: [0, 0, 0, 0],
            fh: false,
            fw: false,
            uid: 4676,
            iso: false,
            css: {
                360: {
                    l: '0px',
                    t: '0px',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0px',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0px',
                    lvID: -1,
                    w: '0px',
                    h: '0px',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                },
                600: {
                    l: '0px',
                    t: '0px',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0px',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0px',
                    lvID: -1,
                    w: '0px',
                    h: '0px',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                },
                972: {
                    l: '0px',
                    t: '0px',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0px',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0px',
                    lvID: -1,
                    w: '0px',
                    h: '0px',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                }

            },
            sr: cp.fd,
            dn: 'si4676',
            visible: 1,
            effectiveVi: 1,
            JSONEffectData: false,
            bc: '#ffffff',
            fe: true,
            fca: 1,
            fa: 100,
            sde: false,
            scp: 0,
            sc: '#0080ff',
            sw: 1,
            ss: 0,
            sa: 1,
            se: false,
            vbwr: [-1, -1, 1, 1],
            vb: [-1, -1, 1, 1]
        },
        si4668: {
            name: 'Simulation_non_responsive_13',
            type: 1268,
            from: 541,
            to: 630,
            rp: 0,
            rpa: 0,
            mdi: 'si4668c',
            tag: 'container-simulation-non-responsive',
            v: 0,
            enabled: true,
            defEn: true,
            vu: [],
            siaf: 0,
            sid: 3,
            slideItemThemeCounter: 0,
            presetData: [{
                presetId: '',
                presetType: 14,
                isOverridden: true
            }, {
                presetId: '',
                presetType: 2,
                isOverridden: true
            }],
            widgetProps: '{"visibilityInfo":{"slide-item-clickbox":false,"slide-item-highlight-box":false,"slide-item-comment-box":false,"slide-item-inputfield":false,"slide-item-mouse-pointer":false,"slide-item-highlight-box":true,"slide-item-comment-box":true,"slide-item-mouse-pointer":true},"sizeNPos":{"width":1728,"height":1080},"groupedItemsVisibility":{"slide-item-clickbox":0,"slide-item-highlight-box":0,"slide-item-comment-box":0,"slide-item-inputfield":0,"slide-item-mouse-pointer":0,"slide-item-highlight-box":1,"slide-item-comment-box":1,"slide-item-mouse-pointer":1},"canBeCard":false}',
            parentGroup: 'si4676',
            retainState: false,
            immo: false,
            apsn: 'Slide4650',
            efph: {},
            eflh: [],
            iflbx: false,
            ipflbx: true,
            si: [{
                n: 'si4687',
                t: 1269
            }, {
                n: 'si4707',
                t: 612
            }, {
                n: 'si4767',
                t: 612
            }, {
                n: 'si4777',
                t: 12
            }],
            containerType: 'simulation-non-responsive',
            widgetProps: '{"visibilityInfo":{"slide-item-clickbox":false,"slide-item-highlight-box":false,"slide-item-comment-box":false,"slide-item-inputfield":false,"slide-item-mouse-pointer":false,"slide-item-highlight-box":true,"slide-item-comment-box":true,"slide-item-mouse-pointer":true},"sizeNPos":{"width":1728,"height":1080},"groupedItemsVisibility":{"slide-item-clickbox":0,"slide-item-highlight-box":0,"slide-item-comment-box":0,"slide-item-inputfield":0,"slide-item-mouse-pointer":0,"slide-item-highlight-box":1,"slide-item-comment-box":1,"slide-item-mouse-pointer":1},"canBeCard":false}',
            option: '',
            padding: {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            },
            parent: 'si4676',
            selectable: false,
            trin: 0,
            trout: 0,
            isDD: false
        },
        si4668c: {
            b: [0, 0, 0, 0],
            fh: false,
            fw: false,
            uid: 4668,
            iso: true,
            css: {
                360: {
                    l: '0px',
                    t: '0px',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0px',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0px',
                    lvID: -1,
                    w: '0px',
                    h: '0px',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                },
                600: {
                    l: '0px',
                    t: '0px',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0px',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0px',
                    lvID: -1,
                    w: '0px',
                    h: '0px',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                },
                972: {
                    l: '0px',
                    t: '0px',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0px',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0px',
                    lvID: -1,
                    w: '0px',
                    h: '0px',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                }

            },
            sr: cp.fd,
            dn: 'si4668',
            visible: 1,
            effectiveVi: 1,
            JSONEffectData: false,
            imgf: {
                b: 0,
                c: 0,
                br: 0,
                o: 100,
                ifbm: 'normal',
                ift: 'Normal',
                ifi: 0,
                iff: {
                    bc: '#ffe2c8'
                },
                tiletype: 0,
                extraImageProps: '',
                tiletype: 0,
                imageFocus: 0,
                w: 3456,
                h: 2160,
                id: 4684,
                tsp: 50,
                ip: 'dr/04684.png'
            },
            fe: true,
            fca: 1,
            fa: 100,
            iso: true,
            sde: false,
            scp: 0,
            sc: '#0080ff',
            sw: 1,
            ss: 0,
            sa: 1,
            se: false,
            vbwr: [-1, -1, 1, 1],
            vb: [-1, -1, 1, 1]
        },
        si4687: {
            name: 'Highlight_box_9',
            type: 1269,
            from: 541,
            to: 630,
            rp: 0,
            rpa: 0,
            mdi: 'si4687c',
            tag: 'slide-item-highlight-box',
            v: 0,
            enabled: true,
            defEn: true,
            vu: [],
            siaf: 0,
            sid: 3,
            slideItemThemeCounter: 0,
            presetData: [{
                presetId: '',
                presetType: 13,
                isOverridden: false
            }],
            widgetProps: '{"isHighlightBox":true,"currentState":"normal","normal":{"opacity":"20","shapePresetData":{"presetId":"cp_clickbox_shape_solid_style","fillEnable":true,"fillType":1,"strokeEnable":true,"shadowEnable":false},"appearenceProperties":{"fill":{"color":"#ad00ffFF"},"shadow":{},"stroke":{"enabled":false}},"overriddenProperties":["strokeEnable","fillColor","opacity"]},"shapeData":{"type":"rect","attributes":{"rx":"0"}},"sizeNPos":{"top":570.947265625,"left":997.236328125,"width":78.642578125,"height":30.501953125}}',
            parentGroup: 'si4668',
            retainState: false,
            immo: false,
            apsn: 'Slide4650',
            efph: {},
            eflh: [],
            iflbx: false,
            ipflbx: true,
            ihb: true,
            si: [{
                n: 'si4697',
                t: 612
            }],
            te: false,
            ie: false,
            trin: 0,
            trout: 0,
            stl: [{
                stn: 'Normal',
                stt: 0,
                stsi: [4687]
            }],
            stis: 0,
            bstiid: -1,
            sipst: 0,
            sicbs: false,
            sihhs: false,
            sihds: false,
            siq: false,
            isDD: false
        },
        si4687c: {
            b: [1018, 572, 1052, 592],
            fh: false,
            fw: false,
            uid: 4687,
            iso: false,
            css: {
                360: {
                    l: '104.733%',
                    t: '94.079%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '104.733%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '94.079%',
                    lvID: -1,
                    w: '3.498%',
                    h: '3.289%',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                },
                600: {
                    l: '104.733%',
                    t: '94.079%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '104.733%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '94.079%',
                    lvID: -1,
                    w: '3.498%',
                    h: '3.289%',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                },
                972: {
                    l: '104.733%',
                    t: '94.079%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '104.733%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '94.079%',
                    lvID: -1,
                    w: '3.498%',
                    h: '3.289%',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                }

            },
            sr: cp.fd,
            dn: 'si4687',
            visible: 1,
            effectiveVi: 1,
            JSONEffectData: false,
            fa: 100,
            vbwr: [1018, 572, 1052, 592],
            vb: [1018, 572, 1052, 592]
        },
        si4697: {
            name: 'Form_9',
            type: 612,
            from: 541,
            to: 630,
            rp: 0,
            rpa: 0,
            mdi: 'si4697c',
            tag: '',
            v: 0,
            enabled: true,
            defEn: true,
            vu: [],
            siaf: 0,
            sid: 3,
            slideItemThemeCounter: 0,
            presetData: [{
                presetId: '',
                presetType: 0,
                isOverridden: false
            }, {
                presetId: '',
                presetType: 4,
                isOverridden: false
            }, {
                presetId: '',
                presetType: 2,
                isOverridden: false
            }],
            widgetProps: '',
            retainState: false,
            immo: false,
            apsn: 'Slide4650',
            efph: {},
            eflh: [],
            iflbx: false,
            ipflbx: true,
            vt: '',
            rplm: {
                360: 0,
                600: 0,
                972: 0
            },
            rprm: {
                360: 0,
                600: 0,
                972: 0
            },
            rptm: {
                360: 0,
                600: 0,
                972: 0
            },
            rpbm: {
                360: 0,
                600: 0,
                972: 0
            },
            rpta: {
                360: 2,
                600: 2,
                972: 2
            },
            rptl: {
                360: 1,
                600: 1,
                972: 1
            },
            rpvt: {
                360: {
                    vt: '',
                    text: ''
                },
                600: {
                    vt: '',
                    text: ''
                },
                972: {
                    vt: '',
                    text: ''
                }

            },
            subType: '',
            text: '{"blocks":[{"key":"4k0dr","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{"listDepth":"0","listType":"S_Bullets08","listIndent":"100 % ","listSize":"100 % ","overridden":"false"}}],"entityMap":{}}',
            trin: 0,
            trout: 0,
            stl: [{
                stn: 'Normal',
                stt: 0,
                stsi: [4697]
            }],
            stis: 0,
            bstiid: 4687,
            sipst: -1,
            sicbs: false,
            sihhs: false,
            sihds: false,
            parent: 'si4687',
            baseItemIdForPropertyFlow: -1,
            isDD: false
        },
        si4697c: {
            b: [0, 0, 34, 20],
            fh: false,
            fw: false,
            uid: 4697,
            iso: false,
            css: {
                360: {
                    l: '0.000%',
                    t: '0.000%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0.000%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0.000%',
                    lvID: -1,
                    w: '3.498%',
                    h: '3.289%',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                },
                600: {
                    l: '0.000%',
                    t: '0.000%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0.000%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0.000%',
                    lvID: -1,
                    w: '3.498%',
                    h: '3.289%',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                },
                972: {
                    l: '0.000%',
                    t: '0.000%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0.000%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0.000%',
                    lvID: -1,
                    w: '3.498%',
                    h: '3.289%',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                }

            },
            dn: 'si4697',
            visible: 1,
            effectiveVi: 1,
            JSONEffectData: false,
            hms: false,
            hme: false,
            subt: 1,
            bc: '#ffffff',
            fe: true,
            fca: 1,
            fa: 100,
            path: '',
            svg: false,
            sde: false,
            scp: 0,
            sc: '#0080ff',
            sw: 1,
            ss: 0,
            sa: 1,
            se: false,
            vbwr: [-2, -2, 36, 22],
            vb: [-2, -2, 36, 22]
        },
        si4707: {
            name: 'Rectangle_9',
            type: 612,
            from: 541,
            to: 630,
            rp: 0,
            rpa: 0,
            mdi: 'si4707c',
            tag: '',
            v: 0,
            enabled: true,
            defEn: true,
            vu: [],
            siaf: 0,
            sid: 3,
            slideItemThemeCounter: 0,
            presetData: [{
                presetId: 'cp_default_caption_shape_solid_style',
                presetType: 0,
                isOverridden: false
            }, {
                presetId: 'cp_default_quiz_caption_textinshape_style',
                presetType: 4,
                isOverridden: false
            }, {
                presetId: '',
                presetType: 2,
                isOverridden: false
            }],
            widgetProps: '{"sizeNPos":{"top":632,"left":1033,"width":300,"height":"auto"}}',
            parentGroup: 'si4668',
            retainState: false,
            immo: false,
            apsn: 'Slide4650',
            efph: {},
            eflh: [],
            iflbx: false,
            ipflbx: true,
            vt: '',
            rplm: {
                360: 0,
                600: 0,
                972: 0
            },
            rprm: {
                360: 0,
                600: 0,
                972: 0
            },
            rptm: {
                360: 0,
                600: 0,
                972: 0
            },
            rpbm: {
                360: 0,
                600: 0,
                972: 0
            },
            rpta: {
                360: 2,
                600: 2,
                972: 2
            },
            rptl: {
                360: 1,
                600: 1,
                972: 1
            },
            rpvt: {
                360: {
                    vt: '',
                    text: ''
                },
                600: {
                    vt: '',
                    text: ''
                },
                972: {
                    vt: '',
                    text: ''
                }

            },
            subType: '',
            text: '{"blocks":[{"key":"b8kef","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{"listDepth":"0","listType":"S_Bullets08","listIndent":"100%","listSize":"100%","overridden":"false","presetId":"cp_default_quiz_caption_textinshape_style"}}],"entityMap":{}}',
            isc: 1,
            trin: 0,
            trout: 0,
            stl: [{
                stn: 4718,
                stt: 0,
                dsr: 'Standardstatus',
                stsi: [4707]
            }],
            stis: 0,
            bstiid: -1,
            sipst: 0,
            sicbs: false,
            sihhs: false,
            sihds: false,
            stc: ['si4707', 'si4720', 'si4731', 'si4742'],
            isDD: false
        },
        si4707c: {
            b: [0, 0, 972, 48],
            fh: false,
            fw: false,
            uid: 4707,
            iso: false,
            css: {
                360: {
                    l: '0.000%',
                    t: '0.000%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0.000%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0.000%',
                    lvID: -1,
                    w: '100.000%',
                    h: '7.895%',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                },
                600: {
                    l: '0.000%',
                    t: '0.000%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0.000%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0.000%',
                    lvID: -1,
                    w: '100.000%',
                    h: '7.895%',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                },
                972: {
                    l: '0.000%',
                    t: '0.000%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0.000%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0.000%',
                    lvID: -1,
                    w: '100.000%',
                    h: '7.895%',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                }

            },
            dn: 'si4707',
            visible: 1,
            effectiveVi: 1,
            JSONEffectData: false,
            hms: false,
            hme: false,
            subt: 1,
            bc: '#c8e2ff',
            fe: true,
            fca: 1,
            fa: 0,
            path: 'M 0.000000 0.000000 L 972.000000 0.000000 L 972.000000 48.000000 L 0.000000 48.000000 Z ',
            svg: false,
            sde: false,
            scp: 0,
            sc: '#0080ff',
            sw: 1,
            ss: 0,
            sa: 1,
            se: false,
            vbwr: [-2, -2, 974, 50],
            vb: [-2, -2, 974, 50]
        },
        si4720: {
            name: '',
            type: 612,
            from: 541,
            to: 630,
            rp: 0,
            rpa: 0,
            mdi: 'si4720c',
            tag: '',
            v: 0,
            enabled: true,
            defEn: true,
            vu: [],
            siaf: 0,
            sid: 3,
            slideItemThemeCounter: 0,
            presetData: [{
                presetId: '',
                presetType: 0,
                isOverridden: false
            }, {
                presetId: '',
                presetType: 4,
                isOverridden: false
            }, {
                presetId: '',
                presetType: 2,
                isOverridden: false
            }],
            widgetProps: '{"sizeNPos":{"top":632,"left":1033,"width":300,"height":"auto"}}',
            parentGroup: 'si4668',
            retainState: false,
            immo: false,
            apsn: 'Slide4650',
            efph: {},
            eflh: [],
            iflbx: false,
            ipflbx: true,
            vt: '',
            rplm: {
                360: 0,
                600: 0,
                972: 0
            },
            rprm: {
                360: 0,
                600: 0,
                972: 0
            },
            rptm: {
                360: 0,
                600: 0,
                972: 0
            },
            rpbm: {
                360: 0,
                600: 0,
                972: 0
            },
            rpta: {
                360: 2,
                600: 2,
                972: 2
            },
            rptl: {
                360: 1,
                600: 1,
                972: 1
            },
            rpvt: {
                360: {
                    vt: '',
                    text: ''
                },
                600: {
                    vt: '',
                    text: ''
                },
                972: {
                    vt: '',
                    text: ''
                }

            },
            subType: '',
            text: '{"blocks":[{"key":"e7msa","text":"Erfolgstext eingeben","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":55,"style":"overridden:false"},{"offset":0,"length":55,"style":"opacity:1"},{"offset":0,"length":55,"style":"backgroundColor:unset"},{"offset":0,"length":55,"style":"defaultBackgroundColor:#5EFF67"},{"offset":0,"length":55,"style":"textHighlightEnable:false"},{"offset":0,"length":55,"style":"textOutlineEnable:false"},{"offset":0,"length":55,"style":"textShadowEnable:false"}],"entityRanges":[],"data":{"presetId":"text-caption_correct","listDepth":"0","listType":"S_Bullets08","listIndent":"100%","listSize":"100%","listColor":"#666666","overridden":"false"}}],"entityMap":{}}',
            isc: 1,
            trin: 0,
            trout: 0,
            bstin: 'si4707',
            stl: [{
                stn: 'Normal',
                stt: 0,
                stsi: [4720]
            }],
            stis: 0,
            bstiid: 4707,
            sipst: 101,
            sicbs: true,
            sihhs: false,
            sihds: false,
            baseItemIdForPropertyFlow: 4707,
            isDD: false
        },
        si4720c: {
            b: [0, 0, 972, 48],
            fh: false,
            fw: false,
            uid: 4720,
            iso: false,
            css: {
                360: {
                    l: '0.000%',
                    t: '0.000%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0.000%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0.000%',
                    lvID: -1,
                    w: '100.000%',
                    h: '7.895%',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                },
                600: {
                    l: '0.000%',
                    t: '0.000%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0.000%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0.000%',
                    lvID: -1,
                    w: '100.000%',
                    h: '7.895%',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                },
                972: {
                    l: '0.000%',
                    t: '0.000%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0.000%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0.000%',
                    lvID: -1,
                    w: '100.000%',
                    h: '7.895%',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                }

            },
            dn: 'si4720',
            visible: 0,
            effectiveVi: 1,
            JSONEffectData: false,
            hms: false,
            hme: false,
            subt: 1,
            bc: '#c8e2ff',
            fe: true,
            fca: 1,
            fa: 100,
            path: 'M 0.000000 0.000000 L 972.000000 0.000000 L 972.000000 48.000000 L 0.000000 48.000000 Z ',
            svg: false,
            sde: false,
            scp: 0,
            sc: '#0080ff',
            sw: 1,
            ss: 0,
            sa: 1,
            se: false,
            vbwr: [-2, -2, 974, 50],
            vb: [-2, -2, 974, 50]
        },
        si4731: {
            name: '',
            type: 612,
            from: 541,
            to: 630,
            rp: 0,
            rpa: 0,
            mdi: 'si4731c',
            tag: '',
            v: 0,
            enabled: true,
            defEn: true,
            vu: [],
            siaf: 0,
            sid: 3,
            slideItemThemeCounter: 0,
            presetData: [{
                presetId: '',
                presetType: 0,
                isOverridden: false
            }, {
                presetId: '',
                presetType: 4,
                isOverridden: false
            }, {
                presetId: '',
                presetType: 2,
                isOverridden: false
            }],
            widgetProps: '{"sizeNPos":{"top":632,"left":1033,"width":300,"height":"auto"}}',
            parentGroup: 'si4668',
            retainState: false,
            immo: false,
            apsn: 'Slide4650',
            efph: {},
            eflh: [],
            iflbx: false,
            ipflbx: true,
            vt: '',
            rplm: {
                360: 0,
                600: 0,
                972: 0
            },
            rprm: {
                360: 0,
                600: 0,
                972: 0
            },
            rptm: {
                360: 0,
                600: 0,
                972: 0
            },
            rpbm: {
                360: 0,
                600: 0,
                972: 0
            },
            rpta: {
                360: 2,
                600: 2,
                972: 2
            },
            rptl: {
                360: 1,
                600: 1,
                972: 1
            },
            rpvt: {
                360: {
                    vt: '',
                    text: ''
                },
                600: {
                    vt: '',
                    text: ''
                },
                972: {
                    vt: '',
                    text: ''
                }

            },
            subType: '',
            text: '{"blocks":[{"key":"ah2dc","text":"Misserfolgstext eingeben","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":57,"style":"overridden:false"},{"offset":0,"length":57,"style":"opacity:1"},{"offset":0,"length":57,"style":"backgroundColor:unset"},{"offset":0,"length":57,"style":"defaultBackgroundColor:#5EFF67"},{"offset":0,"length":57,"style":"textHighlightEnable:false"},{"offset":0,"length":57,"style":"textOutlineEnable:false"},{"offset":0,"length":57,"style":"textShadowEnable:false"}],"entityRanges":[],"data":{"presetId":"text-caption_incorrect","listDepth":"0","listType":"S_Bullets08","listIndent":"100%","listSize":"100%","listColor":"#666666","overridden":"false"}}],"entityMap":{}}',
            isc: 1,
            trin: 0,
            trout: 0,
            bstin: 'si4707',
            stl: [{
                stn: 'Normal',
                stt: 0,
                stsi: [4731]
            }],
            stis: 0,
            bstiid: 4707,
            sipst: 102,
            sicbs: true,
            sihhs: false,
            sihds: false,
            baseItemIdForPropertyFlow: 4707,
            isDD: false
        },
        si4731c: {
            b: [0, 0, 972, 48],
            fh: false,
            fw: false,
            uid: 4731,
            iso: false,
            css: {
                360: {
                    l: '0.000%',
                    t: '0.000%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0.000%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0.000%',
                    lvID: -1,
                    w: '100.000%',
                    h: '7.895%',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                },
                600: {
                    l: '0.000%',
                    t: '0.000%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0.000%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0.000%',
                    lvID: -1,
                    w: '100.000%',
                    h: '7.895%',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                },
                972: {
                    l: '0.000%',
                    t: '0.000%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0.000%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0.000%',
                    lvID: -1,
                    w: '100.000%',
                    h: '7.895%',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                }

            },
            dn: 'si4731',
            visible: 0,
            effectiveVi: 1,
            JSONEffectData: false,
            hms: false,
            hme: false,
            subt: 1,
            bc: '#c8e2ff',
            fe: true,
            fca: 1,
            fa: 100,
            path: 'M 0.000000 0.000000 L 972.000000 0.000000 L 972.000000 48.000000 L 0.000000 48.000000 Z ',
            svg: false,
            sde: false,
            scp: 0,
            sc: '#0080ff',
            sw: 1,
            ss: 0,
            sa: 1,
            se: false,
            vbwr: [-2, -2, 974, 50],
            vb: [-2, -2, 974, 50]
        },
        si4742: {
            name: '',
            type: 612,
            from: 541,
            to: 630,
            rp: 0,
            rpa: 0,
            mdi: 'si4742c',
            tag: '',
            v: 0,
            enabled: true,
            defEn: true,
            vu: [],
            siaf: 0,
            sid: 3,
            slideItemThemeCounter: 0,
            presetData: [{
                presetId: '',
                presetType: 0,
                isOverridden: false
            }, {
                presetId: '',
                presetType: 4,
                isOverridden: false
            }, {
                presetId: '',
                presetType: 2,
                isOverridden: false
            }],
            widgetProps: '{"sizeNPos":{"top":632,"left":1033,"width":300,"height":"auto"}}',
            parentGroup: 'si4668',
            retainState: false,
            immo: false,
            apsn: 'Slide4650',
            efph: {},
            eflh: [],
            iflbx: false,
            ipflbx: true,
            vt: '',
            rplm: {
                360: 0,
                600: 0,
                972: 0
            },
            rprm: {
                360: 0,
                600: 0,
                972: 0
            },
            rptm: {
                360: 0,
                600: 0,
                972: 0
            },
            rpbm: {
                360: 0,
                600: 0,
                972: 0
            },
            rpta: {
                360: 2,
                600: 2,
                972: 2
            },
            rptl: {
                360: 1,
                600: 1,
                972: 1
            },
            rpvt: {
                360: {
                    vt: '',
                    text: ''
                },
                600: {
                    vt: '',
                    text: ''
                },
                972: {
                    vt: '',
                    text: ''
                }

            },
            subType: '',
            text: '{"blocks":[{"key":"ah2dc","text":"Hinweistext eingeben","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":57,"style":"overridden:false"},{"offset":0,"length":57,"style":"opacity:1"},{"offset":0,"length":57,"style":"backgroundColor:unset"},{"offset":0,"length":57,"style":"defaultBackgroundColor:#5EFF67"},{"offset":0,"length":57,"style":"textHighlightEnable:false"},{"offset":0,"length":57,"style":"textOutlineEnable:false"},{"offset":0,"length":57,"style":"textShadowEnable:false"}],"entityRanges":[],"data":{"presetId":"text-caption_incorrect","listDepth":"0","listType":"S_Bullets08","listIndent":"100%","listSize":"100%","listColor":"#666666","overridden":"false"}}],"entityMap":{}}',
            isc: 1,
            trin: 0,
            trout: 0,
            bstin: 'si4707',
            stl: [{
                stn: 'Normal',
                stt: 0,
                stsi: [4742]
            }],
            stis: 0,
            bstiid: 4707,
            sipst: 103,
            sicbs: true,
            sihhs: false,
            sihds: false,
            baseItemIdForPropertyFlow: 4707,
            isDD: false
        },
        si4742c: {
            b: [0, 0, 972, 48],
            fh: false,
            fw: false,
            uid: 4742,
            iso: false,
            css: {
                360: {
                    l: '0.000%',
                    t: '0.000%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0.000%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0.000%',
                    lvID: -1,
                    w: '100.000%',
                    h: '7.895%',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                },
                600: {
                    l: '0.000%',
                    t: '0.000%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0.000%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0.000%',
                    lvID: -1,
                    w: '100.000%',
                    h: '7.895%',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                },
                972: {
                    l: '0.000%',
                    t: '0.000%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0.000%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0.000%',
                    lvID: -1,
                    w: '100.000%',
                    h: '7.895%',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                }

            },
            dn: 'si4742',
            visible: 0,
            effectiveVi: 1,
            JSONEffectData: false,
            hms: false,
            hme: false,
            subt: 1,
            bc: '#c8e2ff',
            fe: true,
            fca: 1,
            fa: 100,
            path: 'M 0.000000 0.000000 L 972.000000 0.000000 L 972.000000 48.000000 L 0.000000 48.000000 Z ',
            svg: false,
            sde: false,
            scp: 0,
            sc: '#0080ff',
            sw: 1,
            ss: 0,
            sa: 1,
            se: false,
            vbwr: [-2, -2, 974, 50],
            vb: [-2, -2, 974, 50]
        },
        si4767: {
            name: 'Anweisungen_9',
            type: 612,
            from: 541,
            to: 630,
            rp: 0,
            rpa: 0,
            mdi: 'si4767c',
            tag: 'slide-item-comment-box',
            v: 0,
            enabled: true,
            defEn: true,
            vu: [],
            siaf: 0,
            sid: 3,
            slideItemThemeCounter: 0,
            presetData: [{
                presetId: '',
                presetType: 0,
                isOverridden: false
            }, {
                presetId: '',
                presetType: 4,
                isOverridden: false
            }, {
                presetId: '',
                presetType: 2,
                isOverridden: false
            }],
            widgetProps: '{"currentState":"normal","normal":{"opacity":100,"padding":10,"editorState":{"blocks":[{"key":"4k0dr","text":"Auf Button «Add to file» klicken.","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":33,"style":"lineHeight:135%"},{"offset":0,"length":33,"style":"letterSpacing:0%"},{"offset":0,"length":33,"style":"textTransform:none"},{"offset":0,"length":33,"style":"textDecoration:none"},{"offset":0,"length":33,"style":"desktop-fontSize:20"},{"offset":0,"length":33,"style":"borderBottomStyle:none"},{"offset":0,"length":33,"style":"fontWeight:normal"},{"offset":0,"length":33,"style":"mobile-fontSize:20"},{"offset":0,"length":33,"style":"fontStyle:normal"},{"offset":0,"length":33,"style":"overridden:true"},{"offset":0,"length":33,"style":"tablet-fontSize:20"},{"offset":0,"length":33,"style":"fontStretch:normal"},{"offset":0,"length":33,"style":"fontType:regular"},{"offset":0,"length":33,"style":"fontFamily:SBB"},{"offset":0,"length":33,"style":"color:#FFFFFF"}],"entityRanges":[],"data":{"textAlign":"center","listType":"S_Bullets08","listIndent":"100 % ","listSize":"100 % ","listDepth":"0","overridden":"true","presetId":"text-comment-box"}}],"entityMap":{}},"shapePresetData":{"presetId":"cp_comment_box_shape_1_solid_style","fillEnable":true,"strokeEnable":false,"shadowEnable":false,"fillType":1},"appearenceProperties":{"fill":{"color":"#ad00ffFF"},"shadow":{},"stroke":{}},"overriddenProperties":[60005,"fillColor",60008,60004]},"shapeData":{"type":"rect","attributes":{"rx":"0"}},"sizeNPos":{"top":565.12109375,"left":1094.34375,"width":320}}',
            parentGroup: 'si4668',
            retainState: false,
            immo: false,
            apsn: 'Slide4650',
            efph: {},
            eflh: [],
            iflbx: false,
            ipflbx: true,
            vt: '',
            rplm: {
                360: 0,
                600: 0,
                972: 0
            },
            rprm: {
                360: 0,
                600: 0,
                972: 0
            },
            rptm: {
                360: 0,
                600: 0,
                972: 0
            },
            rpbm: {
                360: 0,
                600: 0,
                972: 0
            },
            rpta: {
                360: 2,
                600: 2,
                972: 2
            },
            rptl: {
                360: 1,
                600: 1,
                972: 1
            },
            rpvt: {
                360: {
                    vt: '',
                    text: ''
                },
                600: {
                    vt: '',
                    text: ''
                },
                972: {
                    vt: '',
                    text: ''
                }

            },
            subType: '',
            text: '{"blocks":[{"key":"4k0dr","text":"Auf den Bildlaufbereich „“ klicken","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{"presetId":"text-comment-box","listDepth":"0","listType":"S_Bullets08","listIndent":"100 % ","listSize":"100 % ","overridden":"false"}}],"entityMap":{}}',
            adj: [3085.71, -6171.43, 3600],
            isco: 1,
            trin: 0,
            trout: 0,
            stl: [{
                stn: 'Normal',
                stt: 0,
                stsi: [4767]
            }],
            stis: 0,
            bstiid: -1,
            sipst: 0,
            sicbs: false,
            sihhs: false,
            sihds: false,
            isDD: false
        },
        si4767c: {
            b: [1025, 602, 1345, 702],
            fh: false,
            fw: false,
            uid: 4767,
            iso: false,
            css: {
                360: {
                    l: '105.453%',
                    t: '99.013%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '105.453%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '99.013%',
                    lvID: -1,
                    w: '32.922%',
                    h: '16.447%',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                },
                600: {
                    l: '105.453%',
                    t: '99.013%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '105.453%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '99.013%',
                    lvID: -1,
                    w: '32.922%',
                    h: '16.447%',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                },
                972: {
                    l: '105.453%',
                    t: '99.013%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '105.453%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '99.013%',
                    lvID: -1,
                    w: '32.922%',
                    h: '16.447%',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                }

            },
            dn: 'si4767',
            visible: 1,
            effectiveVi: 1,
            JSONEffectData: false,
            hms: false,
            hme: false,
            subt: 57,
            bc: '#ffffff',
            fe: true,
            fca: 1,
            fa: 100,
            path: '',
            svg: false,
            sde: false,
            scp: 0,
            sc: '#0080ff',
            sw: 1,
            ss: 0,
            sa: 1,
            se: false,
            vbwr: [-2, -2, 1347, 704],
            vb: [-2, -2, 1347, 704]
        },
        si4777: {
            name: 'Maus_13',
            type: 12,
            from: 583,
            to: 630,
            rp: 0,
            rpa: 0,
            mdi: 'si4777c',
            tag: 'slide-item-mouse-pointer',
            v: 0,
            enabled: true,
            defEn: true,
            vu: [],
            siaf: 1.4,
            sid: 1.6,
            slideItemThemeCounter: 0,
            presetData: [{
                presetId: '',
                presetType: -1,
                isOverridden: false
            }],
            widgetProps: '{"mouseMovementPathType":1,"mouseMovementSpeed":1,"mouseStraightPath":false,"scaleValue":"medium","mouseClickData":{"color":"#ad00ffFF","showMouseClick":true,"scaleValue":"medium"},"svgData":{"mousePointerType":0},"mousePathPoints":{"mouseStartPointX":1059.0453404017858,"mouseStartPointY":508.890625,"mouseEndPointX":1056.890764508929,"mouseEndPointY":584.6888950892857}}',
            parentGroup: 'si4668',
            retainState: false,
            immo: false,
            apsn: 'Slide4650',
            efph: {},
            eflh: [],
            iflbx: false,
            ipflbx: true,
            msa: '',
            trin: 0,
            trout: 0,
            isDD: false
        },
        si4777c: {
            b: [1031, 578, 1048, 601],
            fh: false,
            fw: false,
            uid: 4777,
            iso: false,
            css: {
                360: {
                    l: '106.070%',
                    t: '95.066%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '106.070%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '95.066%',
                    lvID: -1,
                    w: '17px',
                    h: '23px',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                },
                600: {
                    l: '106.070%',
                    t: '95.066%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '106.070%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '95.066%',
                    lvID: -1,
                    w: '17px',
                    h: '23px',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                },
                972: {
                    l: '106.070%',
                    t: '95.066%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '106.070%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '95.066%',
                    lvID: -1,
                    w: '17px',
                    h: '23px',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                }

            },
            sr: cp.fd,
            dn: 'si4777',
            visible: 1,
            effectiveVi: 1,
            JSONEffectData: false,
            t: 1,
            sz: 0,
            mpt: 0,
            data: {
                c: '#0000ff',
                fca: 1,
                r: 12
            },
            sde: false,
            se: false,
            vbwr: [1031, 520, 1048, 601],
            vb: [1031, 520, 1048, 601]
        },
        Slide4650: {
            lb: 'Lyne Design Tokens',
            id: 4650,
            from: 541,
            to: 630,
            iols: 0,
            i360qs: false,
            sdu: 3,
            presetData: [{
                presetId: '',
                presetType: 3,
                isOverridden: false
            }],
            propTxtScaling: false,
            minFontSizeScaling: 14,
            useng: true,
            transition: {
                type: 0
            },
            mmot: false,
            mdi: 'Slide4650c',
            st: 'Normal Slide',
            sk: 'Simulation',
            slideTag: '',
            type: 30,
            slideThemeCounter: 0,
            accProps: {},
            si: [{
                n: 'si4676',
                t: 1268
            }],
            iph: [],
            v: false,
            canvasData: {
                bc: '#ffffff',
                fa: 1,
                fe: true,
                iso: false,
                se: false
            },
            bookmarks: [],
            qs: ''
        },
        Slide4650c: {
            b: [0, 0, 0, 0],
            css: {},
            sr: cp.fd,
            uid: 4650,
            dn: 'Slide4650',
            visible: '1'
        },
        si4810: {
            name: 'Simulation_14',
            type: 1268,
            from: 631,
            to: 720,
            rp: 0,
            rpa: 0,
            mdi: 'si4810c',
            tag: 'container-simulation-widget',
            v: 0,
            enabled: true,
            defEn: true,
            vu: [],
            siaf: 0,
            sid: 3,
            slideItemThemeCounter: 0,
            presetData: [{
                presetId: '',
                presetType: 14,
                isOverridden: false
            }, {
                presetId: '',
                presetType: 2,
                isOverridden: false
            }],
            widgetProps: '{"autoFit":true}',
            retainState: false,
            immo: false,
            apsn: 'Slide4784',
            efph: {},
            eflh: [],
            iflbx: false,
            ipflbx: true,
            si: [{
                n: 'si4802',
                t: 1268
            }],
            containerType: 'simulation-widget',
            widgetProps: '{"autoFit":true}',
            option: '',
            padding: {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            },
            parent: '',
            selectable: false,
            trin: 0,
            trout: 0,
            isDD: false
        },
        si4810c: {
            b: [0, 0, 0, 0],
            fh: false,
            fw: false,
            uid: 4810,
            iso: false,
            css: {
                360: {
                    l: '0px',
                    t: '0px',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0px',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0px',
                    lvID: -1,
                    w: '0px',
                    h: '0px',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                },
                600: {
                    l: '0px',
                    t: '0px',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0px',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0px',
                    lvID: -1,
                    w: '0px',
                    h: '0px',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                },
                972: {
                    l: '0px',
                    t: '0px',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0px',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0px',
                    lvID: -1,
                    w: '0px',
                    h: '0px',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                }

            },
            sr: cp.fd,
            dn: 'si4810',
            visible: 1,
            effectiveVi: 1,
            JSONEffectData: false,
            bc: '#ffffff',
            fe: true,
            fca: 1,
            fa: 100,
            sde: false,
            scp: 0,
            sc: '#0080ff',
            sw: 1,
            ss: 0,
            sa: 1,
            se: false,
            vbwr: [-1, -1, 1, 1],
            vb: [-1, -1, 1, 1]
        },
        si4802: {
            name: 'Simulation_non_responsive_14',
            type: 1268,
            from: 631,
            to: 720,
            rp: 0,
            rpa: 0,
            mdi: 'si4802c',
            tag: 'container-simulation-non-responsive',
            v: 0,
            enabled: true,
            defEn: true,
            vu: [],
            siaf: 0,
            sid: 3,
            slideItemThemeCounter: 0,
            presetData: [{
                presetId: '',
                presetType: 14,
                isOverridden: true
            }, {
                presetId: '',
                presetType: 2,
                isOverridden: true
            }],
            widgetProps: '{"visibilityInfo":{"slide-item-clickbox":false,"slide-item-highlight-box":false,"slide-item-comment-box":false,"slide-item-inputfield":false,"slide-item-mouse-pointer":false,"slide-item-highlight-box":true,"slide-item-comment-box":true,"slide-item-mouse-pointer":true},"sizeNPos":{"width":1728,"height":1080},"groupedItemsVisibility":{"slide-item-clickbox":0,"slide-item-highlight-box":0,"slide-item-comment-box":0,"slide-item-inputfield":0,"slide-item-mouse-pointer":0,"slide-item-highlight-box":1,"slide-item-comment-box":1,"slide-item-mouse-pointer":1},"canBeCard":false}',
            parentGroup: 'si4810',
            retainState: false,
            immo: false,
            apsn: 'Slide4784',
            efph: {},
            eflh: [],
            iflbx: false,
            ipflbx: true,
            si: [{
                n: 'si4821',
                t: 1269
            }, {
                n: 'si4841',
                t: 612
            }, {
                n: 'si4901',
                t: 612
            }, {
                n: 'si4911',
                t: 12
            }],
            containerType: 'simulation-non-responsive',
            widgetProps: '{"visibilityInfo":{"slide-item-clickbox":false,"slide-item-highlight-box":false,"slide-item-comment-box":false,"slide-item-inputfield":false,"slide-item-mouse-pointer":false,"slide-item-highlight-box":true,"slide-item-comment-box":true,"slide-item-mouse-pointer":true},"sizeNPos":{"width":1728,"height":1080},"groupedItemsVisibility":{"slide-item-clickbox":0,"slide-item-highlight-box":0,"slide-item-comment-box":0,"slide-item-inputfield":0,"slide-item-mouse-pointer":0,"slide-item-highlight-box":1,"slide-item-comment-box":1,"slide-item-mouse-pointer":1},"canBeCard":false}',
            option: '',
            padding: {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            },
            parent: 'si4810',
            selectable: false,
            trin: 0,
            trout: 0,
            isDD: false
        },
        si4802c: {
            b: [0, 0, 0, 0],
            fh: false,
            fw: false,
            uid: 4802,
            iso: true,
            css: {
                360: {
                    l: '0px',
                    t: '0px',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0px',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0px',
                    lvID: -1,
                    w: '0px',
                    h: '0px',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                },
                600: {
                    l: '0px',
                    t: '0px',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0px',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0px',
                    lvID: -1,
                    w: '0px',
                    h: '0px',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                },
                972: {
                    l: '0px',
                    t: '0px',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0px',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0px',
                    lvID: -1,
                    w: '0px',
                    h: '0px',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                }

            },
            sr: cp.fd,
            dn: 'si4802',
            visible: 1,
            effectiveVi: 1,
            JSONEffectData: false,
            imgf: {
                b: 0,
                c: 0,
                br: 0,
                o: 100,
                ifbm: 'normal',
                ift: 'Normal',
                ifi: 0,
                iff: {
                    bc: '#ffe2c8'
                },
                tiletype: 0,
                extraImageProps: '',
                tiletype: 0,
                imageFocus: 0,
                w: 3456,
                h: 2160,
                id: 4818,
                tsp: 50,
                ip: 'dr/04818.png'
            },
            fe: true,
            fca: 1,
            fa: 100,
            iso: true,
            sde: false,
            scp: 0,
            sc: '#0080ff',
            sw: 1,
            ss: 0,
            sa: 1,
            se: false,
            vbwr: [-1, -1, 1, 1],
            vb: [-1, -1, 1, 1]
        },
        si4821: {
            name: 'Highlight_box_10',
            type: 1269,
            from: 631,
            to: 720,
            rp: 0,
            rpa: 0,
            mdi: 'si4821c',
            tag: 'slide-item-highlight-box',
            v: 0,
            enabled: true,
            defEn: true,
            vu: [],
            siaf: 0,
            sid: 3,
            slideItemThemeCounter: 0,
            presetData: [{
                presetId: '',
                presetType: 13,
                isOverridden: false
            }],
            widgetProps: '{"isHighlightBox":true,"currentState":"normal","normal":{"opacity":"20","shapePresetData":{"presetId":"cp_clickbox_shape_solid_style","fillEnable":true,"fillType":1,"strokeEnable":true,"shadowEnable":false},"appearenceProperties":{"fill":{"color":"#ad00ffFF"},"shadow":{},"stroke":{"enabled":false}},"overriddenProperties":["strokeEnable","fillColor","opacity"]},"shapeData":{"type":"rect","attributes":{"rx":"0"}},"sizeNPos":{"top":105.7421875,"left":1057.62109375,"width":32.37890625,"height":32.216796875}}',
            parentGroup: 'si4802',
            retainState: false,
            immo: false,
            apsn: 'Slide4784',
            efph: {},
            eflh: [],
            iflbx: false,
            ipflbx: true,
            ihb: true,
            si: [{
                n: 'si4831',
                t: 612
            }],
            te: false,
            ie: false,
            trin: 0,
            trout: 0,
            stl: [{
                stn: 'Normal',
                stt: 0,
                stsi: [4821]
            }],
            stis: 0,
            bstiid: -1,
            sipst: 0,
            sicbs: false,
            sihhs: false,
            sihds: false,
            siq: false,
            isDD: false
        },
        si4821c: {
            b: [1050, 108, 1084, 128],
            fh: false,
            fw: false,
            uid: 4821,
            iso: false,
            css: {
                360: {
                    l: '108.025%',
                    t: '17.763%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '108.025%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '17.763%',
                    lvID: -1,
                    w: '3.498%',
                    h: '3.289%',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                },
                600: {
                    l: '108.025%',
                    t: '17.763%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '108.025%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '17.763%',
                    lvID: -1,
                    w: '3.498%',
                    h: '3.289%',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                },
                972: {
                    l: '108.025%',
                    t: '17.763%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '108.025%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '17.763%',
                    lvID: -1,
                    w: '3.498%',
                    h: '3.289%',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                }

            },
            sr: cp.fd,
            dn: 'si4821',
            visible: 1,
            effectiveVi: 1,
            JSONEffectData: false,
            fa: 100,
            vbwr: [1050, 108, 1084, 128],
            vb: [1050, 108, 1084, 128]
        },
        si4831: {
            name: 'Form_10',
            type: 612,
            from: 631,
            to: 720,
            rp: 0,
            rpa: 0,
            mdi: 'si4831c',
            tag: '',
            v: 0,
            enabled: true,
            defEn: true,
            vu: [],
            siaf: 0,
            sid: 3,
            slideItemThemeCounter: 0,
            presetData: [{
                presetId: '',
                presetType: 0,
                isOverridden: false
            }, {
                presetId: '',
                presetType: 4,
                isOverridden: false
            }, {
                presetId: '',
                presetType: 2,
                isOverridden: false
            }],
            widgetProps: '',
            retainState: false,
            immo: false,
            apsn: 'Slide4784',
            efph: {},
            eflh: [],
            iflbx: false,
            ipflbx: true,
            vt: '',
            rplm: {
                360: 0,
                600: 0,
                972: 0
            },
            rprm: {
                360: 0,
                600: 0,
                972: 0
            },
            rptm: {
                360: 0,
                600: 0,
                972: 0
            },
            rpbm: {
                360: 0,
                600: 0,
                972: 0
            },
            rpta: {
                360: 2,
                600: 2,
                972: 2
            },
            rptl: {
                360: 1,
                600: 1,
                972: 1
            },
            rpvt: {
                360: {
                    vt: '',
                    text: ''
                },
                600: {
                    vt: '',
                    text: ''
                },
                972: {
                    vt: '',
                    text: ''
                }

            },
            subType: '',
            text: '{"blocks":[{"key":"4k0dr","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{"listDepth":"0","listType":"S_Bullets08","listIndent":"100 % ","listSize":"100 % ","overridden":"false"}}],"entityMap":{}}',
            trin: 0,
            trout: 0,
            stl: [{
                stn: 'Normal',
                stt: 0,
                stsi: [4831]
            }],
            stis: 0,
            bstiid: 4821,
            sipst: -1,
            sicbs: false,
            sihhs: false,
            sihds: false,
            parent: 'si4821',
            baseItemIdForPropertyFlow: -1,
            isDD: false
        },
        si4831c: {
            b: [0, 0, 34, 20],
            fh: false,
            fw: false,
            uid: 4831,
            iso: false,
            css: {
                360: {
                    l: '0.000%',
                    t: '0.000%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0.000%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0.000%',
                    lvID: -1,
                    w: '3.498%',
                    h: '3.289%',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                },
                600: {
                    l: '0.000%',
                    t: '0.000%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0.000%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0.000%',
                    lvID: -1,
                    w: '3.498%',
                    h: '3.289%',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                },
                972: {
                    l: '0.000%',
                    t: '0.000%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0.000%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0.000%',
                    lvID: -1,
                    w: '3.498%',
                    h: '3.289%',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                }

            },
            dn: 'si4831',
            visible: 1,
            effectiveVi: 1,
            JSONEffectData: false,
            hms: false,
            hme: false,
            subt: 1,
            bc: '#ffffff',
            fe: true,
            fca: 1,
            fa: 100,
            path: '',
            svg: false,
            sde: false,
            scp: 0,
            sc: '#0080ff',
            sw: 1,
            ss: 0,
            sa: 1,
            se: false,
            vbwr: [-2, -2, 36, 22],
            vb: [-2, -2, 36, 22]
        },
        si4841: {
            name: 'Rectangle_10',
            type: 612,
            from: 631,
            to: 720,
            rp: 0,
            rpa: 0,
            mdi: 'si4841c',
            tag: '',
            v: 0,
            enabled: true,
            defEn: true,
            vu: [],
            siaf: 0,
            sid: 3,
            slideItemThemeCounter: 0,
            presetData: [{
                presetId: 'cp_default_caption_shape_solid_style',
                presetType: 0,
                isOverridden: false
            }, {
                presetId: 'cp_default_quiz_caption_textinshape_style',
                presetType: 4,
                isOverridden: false
            }, {
                presetId: '',
                presetType: 2,
                isOverridden: false
            }],
            widgetProps: '{"sizeNPos":{"top":168,"left":1065,"width":300,"height":"auto"}}',
            parentGroup: 'si4802',
            retainState: false,
            immo: false,
            apsn: 'Slide4784',
            efph: {},
            eflh: [],
            iflbx: false,
            ipflbx: true,
            vt: '',
            rplm: {
                360: 0,
                600: 0,
                972: 0
            },
            rprm: {
                360: 0,
                600: 0,
                972: 0
            },
            rptm: {
                360: 0,
                600: 0,
                972: 0
            },
            rpbm: {
                360: 0,
                600: 0,
                972: 0
            },
            rpta: {
                360: 2,
                600: 2,
                972: 2
            },
            rptl: {
                360: 1,
                600: 1,
                972: 1
            },
            rpvt: {
                360: {
                    vt: '',
                    text: ''
                },
                600: {
                    vt: '',
                    text: ''
                },
                972: {
                    vt: '',
                    text: ''
                }

            },
            subType: '',
            text: '{"blocks":[{"key":"b8kef","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{"listDepth":"0","listType":"S_Bullets08","listIndent":"100%","listSize":"100%","overridden":"false","presetId":"cp_default_quiz_caption_textinshape_style"}}],"entityMap":{}}',
            isc: 1,
            trin: 0,
            trout: 0,
            stl: [{
                stn: 4852,
                stt: 0,
                dsr: 'Standardstatus',
                stsi: [4841]
            }],
            stis: 0,
            bstiid: -1,
            sipst: 0,
            sicbs: false,
            sihhs: false,
            sihds: false,
            stc: ['si4841', 'si4854', 'si4865', 'si4876'],
            isDD: false
        },
        si4841c: {
            b: [0, 0, 972, 48],
            fh: false,
            fw: false,
            uid: 4841,
            iso: false,
            css: {
                360: {
                    l: '0.000%',
                    t: '0.000%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0.000%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0.000%',
                    lvID: -1,
                    w: '100.000%',
                    h: '7.895%',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                },
                600: {
                    l: '0.000%',
                    t: '0.000%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0.000%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0.000%',
                    lvID: -1,
                    w: '100.000%',
                    h: '7.895%',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                },
                972: {
                    l: '0.000%',
                    t: '0.000%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0.000%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0.000%',
                    lvID: -1,
                    w: '100.000%',
                    h: '7.895%',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                }

            },
            dn: 'si4841',
            visible: 1,
            effectiveVi: 1,
            JSONEffectData: false,
            hms: false,
            hme: false,
            subt: 1,
            bc: '#c8e2ff',
            fe: true,
            fca: 1,
            fa: 0,
            path: 'M 0.000000 0.000000 L 972.000000 0.000000 L 972.000000 48.000000 L 0.000000 48.000000 Z ',
            svg: false,
            sde: false,
            scp: 0,
            sc: '#0080ff',
            sw: 1,
            ss: 0,
            sa: 1,
            se: false,
            vbwr: [-2, -2, 974, 50],
            vb: [-2, -2, 974, 50]
        },
        si4854: {
            name: '',
            type: 612,
            from: 631,
            to: 720,
            rp: 0,
            rpa: 0,
            mdi: 'si4854c',
            tag: '',
            v: 0,
            enabled: true,
            defEn: true,
            vu: [],
            siaf: 0,
            sid: 3,
            slideItemThemeCounter: 0,
            presetData: [{
                presetId: '',
                presetType: 0,
                isOverridden: false
            }, {
                presetId: '',
                presetType: 4,
                isOverridden: false
            }, {
                presetId: '',
                presetType: 2,
                isOverridden: false
            }],
            widgetProps: '{"sizeNPos":{"top":168,"left":1065,"width":300,"height":"auto"}}',
            parentGroup: 'si4802',
            retainState: false,
            immo: false,
            apsn: 'Slide4784',
            efph: {},
            eflh: [],
            iflbx: false,
            ipflbx: true,
            vt: '',
            rplm: {
                360: 0,
                600: 0,
                972: 0
            },
            rprm: {
                360: 0,
                600: 0,
                972: 0
            },
            rptm: {
                360: 0,
                600: 0,
                972: 0
            },
            rpbm: {
                360: 0,
                600: 0,
                972: 0
            },
            rpta: {
                360: 2,
                600: 2,
                972: 2
            },
            rptl: {
                360: 1,
                600: 1,
                972: 1
            },
            rpvt: {
                360: {
                    vt: '',
                    text: ''
                },
                600: {
                    vt: '',
                    text: ''
                },
                972: {
                    vt: '',
                    text: ''
                }

            },
            subType: '',
            text: '{"blocks":[{"key":"e7msa","text":"Erfolgstext eingeben","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":55,"style":"overridden:false"},{"offset":0,"length":55,"style":"opacity:1"},{"offset":0,"length":55,"style":"backgroundColor:unset"},{"offset":0,"length":55,"style":"defaultBackgroundColor:#5EFF67"},{"offset":0,"length":55,"style":"textHighlightEnable:false"},{"offset":0,"length":55,"style":"textOutlineEnable:false"},{"offset":0,"length":55,"style":"textShadowEnable:false"}],"entityRanges":[],"data":{"presetId":"text-caption_correct","listDepth":"0","listType":"S_Bullets08","listIndent":"100%","listSize":"100%","listColor":"#666666","overridden":"false"}}],"entityMap":{}}',
            isc: 1,
            trin: 0,
            trout: 0,
            bstin: 'si4841',
            stl: [{
                stn: 'Normal',
                stt: 0,
                stsi: [4854]
            }],
            stis: 0,
            bstiid: 4841,
            sipst: 101,
            sicbs: true,
            sihhs: false,
            sihds: false,
            baseItemIdForPropertyFlow: 4841,
            isDD: false
        },
        si4854c: {
            b: [0, 0, 972, 48],
            fh: false,
            fw: false,
            uid: 4854,
            iso: false,
            css: {
                360: {
                    l: '0.000%',
                    t: '0.000%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0.000%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0.000%',
                    lvID: -1,
                    w: '100.000%',
                    h: '7.895%',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                },
                600: {
                    l: '0.000%',
                    t: '0.000%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0.000%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0.000%',
                    lvID: -1,
                    w: '100.000%',
                    h: '7.895%',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                },
                972: {
                    l: '0.000%',
                    t: '0.000%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0.000%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0.000%',
                    lvID: -1,
                    w: '100.000%',
                    h: '7.895%',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                }

            },
            dn: 'si4854',
            visible: 0,
            effectiveVi: 1,
            JSONEffectData: false,
            hms: false,
            hme: false,
            subt: 1,
            bc: '#c8e2ff',
            fe: true,
            fca: 1,
            fa: 100,
            path: 'M 0.000000 0.000000 L 972.000000 0.000000 L 972.000000 48.000000 L 0.000000 48.000000 Z ',
            svg: false,
            sde: false,
            scp: 0,
            sc: '#0080ff',
            sw: 1,
            ss: 0,
            sa: 1,
            se: false,
            vbwr: [-2, -2, 974, 50],
            vb: [-2, -2, 974, 50]
        },
        si4865: {
            name: '',
            type: 612,
            from: 631,
            to: 720,
            rp: 0,
            rpa: 0,
            mdi: 'si4865c',
            tag: '',
            v: 0,
            enabled: true,
            defEn: true,
            vu: [],
            siaf: 0,
            sid: 3,
            slideItemThemeCounter: 0,
            presetData: [{
                presetId: '',
                presetType: 0,
                isOverridden: false
            }, {
                presetId: '',
                presetType: 4,
                isOverridden: false
            }, {
                presetId: '',
                presetType: 2,
                isOverridden: false
            }],
            widgetProps: '{"sizeNPos":{"top":168,"left":1065,"width":300,"height":"auto"}}',
            parentGroup: 'si4802',
            retainState: false,
            immo: false,
            apsn: 'Slide4784',
            efph: {},
            eflh: [],
            iflbx: false,
            ipflbx: true,
            vt: '',
            rplm: {
                360: 0,
                600: 0,
                972: 0
            },
            rprm: {
                360: 0,
                600: 0,
                972: 0
            },
            rptm: {
                360: 0,
                600: 0,
                972: 0
            },
            rpbm: {
                360: 0,
                600: 0,
                972: 0
            },
            rpta: {
                360: 2,
                600: 2,
                972: 2
            },
            rptl: {
                360: 1,
                600: 1,
                972: 1
            },
            rpvt: {
                360: {
                    vt: '',
                    text: ''
                },
                600: {
                    vt: '',
                    text: ''
                },
                972: {
                    vt: '',
                    text: ''
                }

            },
            subType: '',
            text: '{"blocks":[{"key":"ah2dc","text":"Misserfolgstext eingeben","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":57,"style":"overridden:false"},{"offset":0,"length":57,"style":"opacity:1"},{"offset":0,"length":57,"style":"backgroundColor:unset"},{"offset":0,"length":57,"style":"defaultBackgroundColor:#5EFF67"},{"offset":0,"length":57,"style":"textHighlightEnable:false"},{"offset":0,"length":57,"style":"textOutlineEnable:false"},{"offset":0,"length":57,"style":"textShadowEnable:false"}],"entityRanges":[],"data":{"presetId":"text-caption_incorrect","listDepth":"0","listType":"S_Bullets08","listIndent":"100%","listSize":"100%","listColor":"#666666","overridden":"false"}}],"entityMap":{}}',
            isc: 1,
            trin: 0,
            trout: 0,
            bstin: 'si4841',
            stl: [{
                stn: 'Normal',
                stt: 0,
                stsi: [4865]
            }],
            stis: 0,
            bstiid: 4841,
            sipst: 102,
            sicbs: true,
            sihhs: false,
            sihds: false,
            baseItemIdForPropertyFlow: 4841,
            isDD: false
        },
        si4865c: {
            b: [0, 0, 972, 48],
            fh: false,
            fw: false,
            uid: 4865,
            iso: false,
            css: {
                360: {
                    l: '0.000%',
                    t: '0.000%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0.000%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0.000%',
                    lvID: -1,
                    w: '100.000%',
                    h: '7.895%',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                },
                600: {
                    l: '0.000%',
                    t: '0.000%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0.000%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0.000%',
                    lvID: -1,
                    w: '100.000%',
                    h: '7.895%',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                },
                972: {
                    l: '0.000%',
                    t: '0.000%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0.000%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0.000%',
                    lvID: -1,
                    w: '100.000%',
                    h: '7.895%',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                }

            },
            dn: 'si4865',
            visible: 0,
            effectiveVi: 1,
            JSONEffectData: false,
            hms: false,
            hme: false,
            subt: 1,
            bc: '#c8e2ff',
            fe: true,
            fca: 1,
            fa: 100,
            path: 'M 0.000000 0.000000 L 972.000000 0.000000 L 972.000000 48.000000 L 0.000000 48.000000 Z ',
            svg: false,
            sde: false,
            scp: 0,
            sc: '#0080ff',
            sw: 1,
            ss: 0,
            sa: 1,
            se: false,
            vbwr: [-2, -2, 974, 50],
            vb: [-2, -2, 974, 50]
        },
        si4876: {
            name: '',
            type: 612,
            from: 631,
            to: 720,
            rp: 0,
            rpa: 0,
            mdi: 'si4876c',
            tag: '',
            v: 0,
            enabled: true,
            defEn: true,
            vu: [],
            siaf: 0,
            sid: 3,
            slideItemThemeCounter: 0,
            presetData: [{
                presetId: '',
                presetType: 0,
                isOverridden: false
            }, {
                presetId: '',
                presetType: 4,
                isOverridden: false
            }, {
                presetId: '',
                presetType: 2,
                isOverridden: false
            }],
            widgetProps: '{"sizeNPos":{"top":168,"left":1065,"width":300,"height":"auto"}}',
            parentGroup: 'si4802',
            retainState: false,
            immo: false,
            apsn: 'Slide4784',
            efph: {},
            eflh: [],
            iflbx: false,
            ipflbx: true,
            vt: '',
            rplm: {
                360: 0,
                600: 0,
                972: 0
            },
            rprm: {
                360: 0,
                600: 0,
                972: 0
            },
            rptm: {
                360: 0,
                600: 0,
                972: 0
            },
            rpbm: {
                360: 0,
                600: 0,
                972: 0
            },
            rpta: {
                360: 2,
                600: 2,
                972: 2
            },
            rptl: {
                360: 1,
                600: 1,
                972: 1
            },
            rpvt: {
                360: {
                    vt: '',
                    text: ''
                },
                600: {
                    vt: '',
                    text: ''
                },
                972: {
                    vt: '',
                    text: ''
                }

            },
            subType: '',
            text: '{"blocks":[{"key":"ah2dc","text":"Hinweistext eingeben","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":57,"style":"overridden:false"},{"offset":0,"length":57,"style":"opacity:1"},{"offset":0,"length":57,"style":"backgroundColor:unset"},{"offset":0,"length":57,"style":"defaultBackgroundColor:#5EFF67"},{"offset":0,"length":57,"style":"textHighlightEnable:false"},{"offset":0,"length":57,"style":"textOutlineEnable:false"},{"offset":0,"length":57,"style":"textShadowEnable:false"}],"entityRanges":[],"data":{"presetId":"text-caption_incorrect","listDepth":"0","listType":"S_Bullets08","listIndent":"100%","listSize":"100%","listColor":"#666666","overridden":"false"}}],"entityMap":{}}',
            isc: 1,
            trin: 0,
            trout: 0,
            bstin: 'si4841',
            stl: [{
                stn: 'Normal',
                stt: 0,
                stsi: [4876]
            }],
            stis: 0,
            bstiid: 4841,
            sipst: 103,
            sicbs: true,
            sihhs: false,
            sihds: false,
            baseItemIdForPropertyFlow: 4841,
            isDD: false
        },
        si4876c: {
            b: [0, 0, 972, 48],
            fh: false,
            fw: false,
            uid: 4876,
            iso: false,
            css: {
                360: {
                    l: '0.000%',
                    t: '0.000%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0.000%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0.000%',
                    lvID: -1,
                    w: '100.000%',
                    h: '7.895%',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                },
                600: {
                    l: '0.000%',
                    t: '0.000%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0.000%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0.000%',
                    lvID: -1,
                    w: '100.000%',
                    h: '7.895%',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                },
                972: {
                    l: '0.000%',
                    t: '0.000%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0.000%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0.000%',
                    lvID: -1,
                    w: '100.000%',
                    h: '7.895%',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                }

            },
            dn: 'si4876',
            visible: 0,
            effectiveVi: 1,
            JSONEffectData: false,
            hms: false,
            hme: false,
            subt: 1,
            bc: '#c8e2ff',
            fe: true,
            fca: 1,
            fa: 100,
            path: 'M 0.000000 0.000000 L 972.000000 0.000000 L 972.000000 48.000000 L 0.000000 48.000000 Z ',
            svg: false,
            sde: false,
            scp: 0,
            sc: '#0080ff',
            sw: 1,
            ss: 0,
            sa: 1,
            se: false,
            vbwr: [-2, -2, 974, 50],
            vb: [-2, -2, 974, 50]
        },
        si4901: {
            name: 'Anweisungen_10',
            type: 612,
            from: 631,
            to: 720,
            rp: 0,
            rpa: 0,
            mdi: 'si4901c',
            tag: 'slide-item-comment-box',
            v: 0,
            enabled: true,
            defEn: true,
            vu: [],
            siaf: 0,
            sid: 3,
            slideItemThemeCounter: 0,
            presetData: [{
                presetId: '',
                presetType: 0,
                isOverridden: false
            }, {
                presetId: '',
                presetType: 4,
                isOverridden: false
            }, {
                presetId: '',
                presetType: 2,
                isOverridden: false
            }],
            widgetProps: '{"currentState":"normal","normal":{"opacity":100,"padding":10,"editorState":{"blocks":[{"key":"4k0dr","text":"Auf Schliessen-Button klicken.","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":30,"style":"overridden:true"},{"offset":0,"length":30,"style":"tablet-fontSize:20"},{"offset":0,"length":30,"style":"fontStretch:normal"},{"offset":0,"length":30,"style":"fontType:regular"},{"offset":0,"length":30,"style":"fontFamily:SBB"},{"offset":0,"length":30,"style":"color:#FFFFFF"},{"offset":0,"length":30,"style":"lineHeight:135%"},{"offset":0,"length":30,"style":"letterSpacing:0%"},{"offset":0,"length":30,"style":"textTransform:none"},{"offset":0,"length":30,"style":"textDecoration:none"},{"offset":0,"length":30,"style":"desktop-fontSize:20"},{"offset":0,"length":30,"style":"borderBottomStyle:none"},{"offset":0,"length":30,"style":"fontWeight:normal"},{"offset":0,"length":30,"style":"mobile-fontSize:20"},{"offset":0,"length":30,"style":"fontStyle:normal"}],"entityRanges":[],"data":{"presetId":"text-comment-box","listDepth":"0","listType":"S_Bullets08","listIndent":"100 % ","listSize":"100 % ","overridden":"true","textAlign":"center"}}],"entityMap":{}},"shapePresetData":{"presetId":"cp_comment_box_shape_1_solid_style","fillEnable":true,"strokeEnable":false,"shadowEnable":false,"fillType":1},"appearenceProperties":{"fill":{"color":"#ad00ffFF"},"shadow":{},"stroke":{}},"overriddenProperties":[60005,"fillColor",60008,60004]},"shapeData":{"type":"rect","attributes":{"rx":"0"}},"sizeNPos":{"top":98.97265625,"left":1094.6328125,"width":320}}',
            parentGroup: 'si4802',
            retainState: false,
            immo: false,
            apsn: 'Slide4784',
            efph: {},
            eflh: [],
            iflbx: false,
            ipflbx: true,
            vt: '',
            rplm: {
                360: 0,
                600: 0,
                972: 0
            },
            rprm: {
                360: 0,
                600: 0,
                972: 0
            },
            rptm: {
                360: 0,
                600: 0,
                972: 0
            },
            rpbm: {
                360: 0,
                600: 0,
                972: 0
            },
            rpta: {
                360: 2,
                600: 2,
                972: 2
            },
            rptl: {
                360: 1,
                600: 1,
                972: 1
            },
            rpvt: {
                360: {
                    vt: '',
                    text: ''
                },
                600: {
                    vt: '',
                    text: ''
                },
                972: {
                    vt: '',
                    text: ''
                }

            },
            subType: '',
            text: '{"blocks":[{"key":"4k0dr","text":"Auf den Bildlaufbereich „“ klicken","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{"presetId":"text-comment-box","listDepth":"0","listType":"S_Bullets08","listIndent":"100 % ","listSize":"100 % ","overridden":"false"}}],"entityMap":{}}',
            adj: [3085.71, -6171.43, 3600],
            isco: 1,
            trin: 0,
            trout: 0,
            stl: [{
                stn: 'Normal',
                stt: 0,
                stsi: [4901]
            }],
            stis: 0,
            bstiid: -1,
            sipst: 0,
            sicbs: false,
            sihhs: false,
            sihds: false,
            isDD: false
        },
        si4901c: {
            b: [1057, 138, 1377, 238],
            fh: false,
            fw: false,
            uid: 4901,
            iso: false,
            css: {
                360: {
                    l: '108.745%',
                    t: '22.697%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '108.745%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '22.697%',
                    lvID: -1,
                    w: '32.922%',
                    h: '16.447%',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                },
                600: {
                    l: '108.745%',
                    t: '22.697%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '108.745%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '22.697%',
                    lvID: -1,
                    w: '32.922%',
                    h: '16.447%',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                },
                972: {
                    l: '108.745%',
                    t: '22.697%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '108.745%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '22.697%',
                    lvID: -1,
                    w: '32.922%',
                    h: '16.447%',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                }

            },
            dn: 'si4901',
            visible: 1,
            effectiveVi: 1,
            JSONEffectData: false,
            hms: false,
            hme: false,
            subt: 57,
            bc: '#ffffff',
            fe: true,
            fca: 1,
            fa: 100,
            path: '',
            svg: false,
            sde: false,
            scp: 0,
            sc: '#0080ff',
            sw: 1,
            ss: 0,
            sa: 1,
            se: false,
            vbwr: [-2, -2, 1379, 240],
            vb: [-2, -2, 1379, 240]
        },
        si4911: {
            name: 'Maus_14',
            type: 12,
            from: 652,
            to: 720,
            rp: 0,
            rpa: 0,
            mdi: 'si4911c',
            tag: 'slide-item-mouse-pointer',
            v: 0,
            enabled: true,
            defEn: true,
            vu: [],
            siaf: 0.7,
            sid: 2.3,
            slideItemThemeCounter: 0,
            presetData: [{
                presetId: '',
                presetType: -1,
                isOverridden: false
            }],
            widgetProps: '{"mouseMovementPathType":1,"mouseMovementSpeed":1,"mouseStraightPath":false,"scaleValue":"medium","mouseClickData":{"color":"#ad00ffFF","showMouseClick":true,"scaleValue":"medium"},"svgData":{"mousePointerType":0},"mousePathPoints":{"mouseStartPointX":1056.890764508929,"mouseStartPointY":584.6888950892857,"mouseEndPointX":1074.062360491071,"mouseEndPointY":121.45410156249999}}',
            parentGroup: 'si4802',
            retainState: false,
            immo: false,
            apsn: 'Slide4784',
            efph: {},
            eflh: [],
            iflbx: false,
            ipflbx: true,
            msa: '',
            trin: 0,
            trout: 0,
            isDD: false
        },
        si4911c: {
            b: [1063, 114, 1080, 137],
            fh: false,
            fw: false,
            uid: 4911,
            iso: false,
            css: {
                360: {
                    l: '109.362%',
                    t: '18.750%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '109.362%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '18.750%',
                    lvID: -1,
                    w: '17px',
                    h: '23px',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                },
                600: {
                    l: '109.362%',
                    t: '18.750%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '109.362%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '18.750%',
                    lvID: -1,
                    w: '17px',
                    h: '23px',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                },
                972: {
                    l: '109.362%',
                    t: '18.750%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '109.362%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '18.750%',
                    lvID: -1,
                    w: '17px',
                    h: '23px',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                }

            },
            sr: cp.fd,
            dn: 'si4911',
            visible: 1,
            effectiveVi: 1,
            JSONEffectData: false,
            t: 1,
            sz: 0,
            mpt: 0,
            data: {
                c: '#0000ff',
                fca: 1,
                r: 12
            },
            sde: false,
            se: false,
            vbwr: [1043, 114, 1080, 591],
            vb: [1043, 114, 1080, 591]
        },
        Slide4784: {
            lb: 'Libraries schliessen',
            id: 4784,
            from: 631,
            to: 720,
            iols: 0,
            i360qs: false,
            sdu: 3,
            presetData: [{
                presetId: '',
                presetType: 3,
                isOverridden: false
            }],
            propTxtScaling: false,
            minFontSizeScaling: 14,
            useng: true,
            transition: {
                type: 0
            },
            mmot: false,
            mdi: 'Slide4784c',
            st: 'Normal Slide',
            sk: 'Simulation',
            slideTag: '',
            type: 30,
            slideThemeCounter: 0,
            accProps: {},
            si: [{
                n: 'si4810',
                t: 1268
            }],
            iph: [],
            v: false,
            canvasData: {
                bc: '#ffffff',
                fa: 1,
                fe: true,
                iso: false,
                se: false
            },
            bookmarks: [],
            qs: ''
        },
        Slide4784c: {
            b: [0, 0, 0, 0],
            css: {},
            sr: cp.fd,
            uid: 4784,
            dn: 'Slide4784',
            visible: '1'
        },
        si4944: {
            name: 'Simulation_15',
            type: 1268,
            from: 721,
            to: 810,
            rp: 0,
            rpa: 0,
            mdi: 'si4944c',
            tag: 'container-simulation-widget',
            v: 0,
            enabled: true,
            defEn: true,
            vu: [],
            siaf: 0,
            sid: 3,
            slideItemThemeCounter: 0,
            presetData: [{
                presetId: '',
                presetType: 14,
                isOverridden: false
            }, {
                presetId: '',
                presetType: 2,
                isOverridden: false
            }],
            widgetProps: '{"autoFit":true}',
            retainState: false,
            immo: false,
            apsn: 'Slide4918',
            efph: {},
            eflh: [],
            iflbx: false,
            ipflbx: true,
            si: [{
                n: 'si4936',
                t: 1268
            }],
            containerType: 'simulation-widget',
            widgetProps: '{"autoFit":true}',
            option: '',
            padding: {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            },
            parent: '',
            selectable: false,
            trin: 0,
            trout: 0,
            isDD: false
        },
        si4944c: {
            b: [0, 0, 0, 0],
            fh: false,
            fw: false,
            uid: 4944,
            iso: false,
            css: {
                360: {
                    l: '0px',
                    t: '0px',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0px',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0px',
                    lvID: -1,
                    w: '0px',
                    h: '0px',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                },
                600: {
                    l: '0px',
                    t: '0px',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0px',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0px',
                    lvID: -1,
                    w: '0px',
                    h: '0px',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                },
                972: {
                    l: '0px',
                    t: '0px',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0px',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0px',
                    lvID: -1,
                    w: '0px',
                    h: '0px',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                }

            },
            sr: cp.fd,
            dn: 'si4944',
            visible: 1,
            effectiveVi: 1,
            JSONEffectData: false,
            bc: '#ffffff',
            fe: true,
            fca: 1,
            fa: 100,
            sde: false,
            scp: 0,
            sc: '#0080ff',
            sw: 1,
            ss: 0,
            sa: 1,
            se: false,
            vbwr: [-1, -1, 1, 1],
            vb: [-1, -1, 1, 1]
        },
        si4936: {
            name: 'Simulation_non_responsive_15',
            type: 1268,
            from: 721,
            to: 810,
            rp: 0,
            rpa: 0,
            mdi: 'si4936c',
            tag: 'container-simulation-non-responsive',
            v: 0,
            enabled: true,
            defEn: true,
            vu: [],
            siaf: 0,
            sid: 3,
            slideItemThemeCounter: 0,
            presetData: [{
                presetId: '',
                presetType: 14,
                isOverridden: true
            }, {
                presetId: '',
                presetType: 2,
                isOverridden: true
            }],
            widgetProps: '{"visibilityInfo":{"slide-item-clickbox":false,"slide-item-highlight-box":false,"slide-item-comment-box":false,"slide-item-inputfield":false,"slide-item-mouse-pointer":false},"sizeNPos":{"width":1728,"height":1080},"groupedItemsVisibility":{"slide-item-clickbox":0,"slide-item-highlight-box":0,"slide-item-comment-box":0,"slide-item-inputfield":0,"slide-item-mouse-pointer":1},"canBeCard":false}',
            parentGroup: 'si4944',
            retainState: false,
            immo: false,
            apsn: 'Slide4918',
            efph: {},
            eflh: [],
            iflbx: false,
            ipflbx: true,
            si: [{
                n: 'si4955',
                t: 12
            }],
            containerType: 'simulation-non-responsive',
            widgetProps: '{"visibilityInfo":{"slide-item-clickbox":false,"slide-item-highlight-box":false,"slide-item-comment-box":false,"slide-item-inputfield":false,"slide-item-mouse-pointer":false},"sizeNPos":{"width":1728,"height":1080},"groupedItemsVisibility":{"slide-item-clickbox":0,"slide-item-highlight-box":0,"slide-item-comment-box":0,"slide-item-inputfield":0,"slide-item-mouse-pointer":1},"canBeCard":false}',
            option: '',
            padding: {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            },
            parent: 'si4944',
            selectable: false,
            trin: 0,
            trout: 0,
            isDD: false
        },
        si4936c: {
            b: [0, 0, 0, 0],
            fh: false,
            fw: false,
            uid: 4936,
            iso: true,
            css: {
                360: {
                    l: '0px',
                    t: '0px',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0px',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0px',
                    lvID: -1,
                    w: '0px',
                    h: '0px',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                },
                600: {
                    l: '0px',
                    t: '0px',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0px',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0px',
                    lvID: -1,
                    w: '0px',
                    h: '0px',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                },
                972: {
                    l: '0px',
                    t: '0px',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '0px',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '0px',
                    lvID: -1,
                    w: '0px',
                    h: '0px',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                }

            },
            sr: cp.fd,
            dn: 'si4936',
            visible: 1,
            effectiveVi: 1,
            JSONEffectData: false,
            imgf: {
                b: 0,
                c: 0,
                br: 0,
                o: 100,
                ifbm: 'normal',
                ift: 'Normal',
                ifi: 0,
                iff: {
                    bc: '#ffe2c8'
                },
                tiletype: 0,
                extraImageProps: '',
                tiletype: 0,
                imageFocus: 0,
                w: 3456,
                h: 2160,
                id: 4952,
                tsp: 50,
                ip: 'dr/04952.png'
            },
            fe: true,
            fca: 1,
            fa: 100,
            iso: true,
            sde: false,
            scp: 0,
            sc: '#0080ff',
            sw: 1,
            ss: 0,
            sa: 1,
            se: false,
            vbwr: [-1, -1, 1, 1],
            vb: [-1, -1, 1, 1]
        },
        si4955Ad: {
            src: 'ar/597.mp3',
            from: 721,
            du: 138,
            to: 724
        },
        si4955: {
            name: 'Maus_15',
            type: 12,
            from: 721,
            to: 810,
            rp: 0,
            rpa: 0,
            mdi: 'si4955c',
            tag: 'slide-item-mouse-pointer',
            v: 0,
            enabled: true,
            defEn: true,
            vu: [],
            siaf: 0,
            sid: 3,
            slideItemThemeCounter: 0,
            presetData: [{
                presetId: '',
                presetType: -1,
                isOverridden: false
            }],
            widgetProps: '{"mouseMovementPathType":1,"mouseMovementSpeed":1,"mouseStraightPath":false,"scaleValue":"medium","mouseClickData":{"color":"#0000ff","showMouseClick":0,"scaleValue":"medium"},"svgData":{"mousePointerType":0},"mousePathPoints":{"mouseStartPointX":1110.495396205357,"mouseStartPointY":116.76185825892857,"mouseEndPointX":-1408,"mouseEndPointY":346}}',
            parentGroup: 'si4936',
            retainState: false,
            immo: false,
            apsn: 'Slide4918',
            ia: 'si4955Ad',
            efph: {},
            eflh: [],
            iflbx: false,
            ipflbx: true,
            msa: 'si4955Ad',
            trin: 0,
            trout: 0,
            isDD: false
        },
        si4955c: {
            b: [-1412, 342, -1395, 365],
            fh: false,
            fw: false,
            uid: 4955,
            iso: false,
            css: {
                360: {
                    l: '-145.267%',
                    t: '56.250%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '-145.267%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '56.250%',
                    lvID: -1,
                    w: '17px',
                    h: '23px',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                },
                600: {
                    l: '-145.267%',
                    t: '56.250%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '-145.267%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '56.250%',
                    lvID: -1,
                    w: '17px',
                    h: '23px',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                },
                972: {
                    l: '-145.267%',
                    t: '56.250%',
                    b: 'auto',
                    r: 'auto',
                    lhEID: 0,
                    lhV: '-145.267%',
                    lhID: -1,
                    lvEID: 0,
                    lvV: '56.250%',
                    lvID: -1,
                    w: '17px',
                    h: '23px',
                    cah: false,
                    cav: false,
                    rpmm: {
                        mw: '1px',
                        mh: '1px',
                        Mw: '',
                        Mh: ''
                    },
                    p: 'absolute',
                    ipiv: 1
                }

            },
            sr: cp.fd,
            dn: 'si4955',
            visible: 1,
            effectiveVi: 1,
            JSONEffectData: false,
            t: 1,
            sz: 0,
            mpt: 0,
            data: {
                c: '#0000ff',
                fca: 1,
                r: 12
            },
            sde: false,
            se: false,
            vbwr: [-1412, 126, 1076, 365],
            vb: [-1412, 126, 1076, 365]
        },
        si4955Ad: {
            src: 'ar/Mouse.mp3',
            from: 721,
            to: 726,
            del: 2.818,
            msa: 1,
            du: 0.182
        },
        Slide4918: {
            lb: 'Ende',
            id: 4918,
            from: 721,
            to: 810,
            iols: 0,
            i360qs: false,
            sdu: 3,
            presetData: [{
                presetId: '',
                presetType: 3,
                isOverridden: false
            }],
            propTxtScaling: false,
            minFontSizeScaling: 14,
            useng: true,
            transition: {
                type: 0
            },
            mmot: false,
            mdi: 'Slide4918c',
            st: 'Normal Slide',
            sk: 'Simulation',
            slideTag: '',
            type: 30,
            slideThemeCounter: 0,
            accProps: {},
            si: [{
                n: 'si4944',
                t: 1268
            }],
            iph: [],
            oa: 'si4955Ad',
            v: false,
            canvasData: {
                bc: '#ffffff',
                fa: 1,
                fe: true,
                iso: false,
                se: false
            },
            bookmarks: [],
            qs: ''
        },
        Slide4918c: {
            b: [0, 0, 0, 0],
            css: {},
            sr: cp.fd,
            uid: 4918,
            dn: 'Slide4918',
            visible: '1'
        },
        quizzingData: {
            allowBackwardMovement: true,
            allowReviewMode: true,
            reviewShowAnswers: true,
            it: false,
            firstSlideInQuiz: -1,
            lastSlideInQuiz: -1,
            quizScopeEndSlide: -1,
            maxScore: 0,
            minScore: 0,
            maxPretestScore: 0,
            numQuestionsInQuiz: 0,
            numQuizAttemptsAllowed: 1,
            passingScore: 0,
            quizInfoCurrentAttempt: 0,
            quizInfoPercentScored: 0,
            quizMandateLevel: 0,
            quizID: 199,
            questionPoolsInitialized: true,
            quizInfoAttempts: 1,
            quizInfoLastSlidePointScored: 0,
            quizInfoMaxAttemptsOnCurrentQuestion: 1,
            quizInfoPassFail: 0,
            quizInfoPointsPerQuestionSlide: 0,
            quizInfoPointsScored: 0,
            quizInfoQuizPassPercent: 80,
            quizInfoQuizPassPoints: 0,
            quizInfoTotalCorrectAnswers: 0,
            quizInfoTotalProjectPoints: 0,
            quizInfoTotalQuestionsPerProject: 0,
            quizInfoTotalQuizPoints: 0,
            quizInfoTotalUnansweredQuestions: 0,
            reportingEnabled: false,
            submitAll: false,
            hidePlaybarInQuiz: false,
            quizBranchAware: false,
            passFailPassingScoreTypeInPrecent: true,
            passFailPassingScoreValue: 80,
            showRetake: false,
            showReviewButtons: true,
            oid: '$$OBJECTIVE_ID',
            quizVariableVsIdMap: {
                learnerId: 'var346',
                learnerName: 'var347',
                isInQuizScope: 'var368',
                isInReviewMode: 'var369',
                quizInfoPercentScored: 'var370',
                quizInfoAttempts: 'var371',
                quizInfoPassFail: 'var372',
                score: 'var373',
                quizInfoQuizPassPercent: 'var374',
                passingScore: 'var375',
                quizInfoTotalCorrectAnswers: 'var376',
                maxScore: 'var377',
                quizInfoTotalQuestionsPerProject: 'var378',
                quizInfoTotalUnansweredQuestions: 'var379',
                quizInfoAnswerChoice: 'var380',
                quizInfoPreviousQuestionScore: 'var381',
                questionInfoMaxAttempts: 'var382',
                questionInfoNegativePoints: 'var383',
                questionInfoPointsAssigned: 'var384'
            }

        },
        var346var346: {
            vid: 346,
            name: 'LMS.LearnerID',
            vv: '',
            vvt: 2,
            vt: 0
        },
        var347var347: {
            vid: 347,
            name: 'LMS.LearnerName',
            vv: '',
            vvt: 2,
            vt: 0
        },
        var348var348: {
            vid: 348,
            name: 'LMS.CourseName',
            vv: '',
            vvt: 2,
            vt: 0
        },
        var349var349: {
            vid: 349,
            name: 'Project.ClosedCaptions',
            vv: 0,
            vvt: 0,
            vt: 9
        },
        var350var350: {
            vid: 350,
            name: 'Project.MuteAudio',
            vv: 0,
            vvt: 0,
            vt: 9
        },
        var351var351: {
            vid: 351,
            name: 'Project.ShowPlaybar',
            vv: 1,
            vvt: 0,
            vt: 9
        },
        var352var352: {
            vid: 352,
            name: 'Project.ShowTOC',
            vv: 0,
            vvt: 0,
            vt: 9
        },
        var353var353: {
            vid: 353,
            name: 'Project.AudioLevel',
            vv: 100,
            vvt: 1,
            vt: 9
        },
        var354var354: {
            vid: 354,
            name: 'Project.LockTOC',
            vv: 0,
            vvt: 0,
            vt: 9
        },
        var355var355: {
            vid: 355,
            name: 'Project.CurrentSlideNumber',
            vv: 1,
            vvt: 1,
            vt: 9
        },
        var356var356: {
            vid: 356,
            name: 'Project.CurrentSlideName',
            vv: 'slide',
            vvt: 2,
            vt: 9
        },
        var357var357: {
            vid: 357,
            name: 'Project.SlideCount',
            vv: 1,
            vvt: 1,
            vt: 9
        },
        var358var358: {
            vid: 358,
            name: 'Date.Today',
            vv: 'dd',
            vvt: 3,
            vt: 5
        },
        var359var359: {
            vid: 359,
            name: 'Date.DateMMDDYY',
            vv: 'mm/dd/yyyy',
            vvt: 3,
            vt: 5
        },
        var360var360: {
            vid: 360,
            name: 'Date.DateDDMMYY',
            vv: 'dd/mm/yyyy',
            vvt: 3,
            vt: 5
        },
        var361var361: {
            vid: 361,
            name: 'Date.Day',
            vv: '1',
            vvt: 3,
            vt: 5
        },
        var362var362: {
            vid: 362,
            name: 'Date.Hours',
            vv: 'hh',
            vvt: 3,
            vt: 5
        },
        var363var363: {
            vid: 363,
            name: 'Date.LocaleString',
            vv: '',
            vvt: 3,
            vt: 5
        },
        var364var364: {
            vid: 364,
            name: 'Date.Minutes',
            vv: 'mm',
            vvt: 3,
            vt: 5
        },
        var365var365: {
            vid: 365,
            name: 'Date.Month',
            vv: 'mm',
            vvt: 3,
            vt: 5
        },
        var366var366: {
            vid: 366,
            name: 'Date.Time',
            vv: 'hh:mm:ss',
            vvt: 3,
            vt: 5
        },
        var367var367: {
            vid: 367,
            name: 'Date.Year',
            vv: 'yyyy',
            vvt: 3,
            vt: 5
        },
        var368var368: {
            vid: 368,
            name: 'Quiz.InScope',
            vv: 0,
            vvt: 0,
            vt: 7
        },
        var369var369: {
            vid: 369,
            name: 'Quiz.InReview',
            vv: 0,
            vvt: 0,
            vt: 7
        },
        var370var370: {
            vid: 370,
            name: 'Quiz.PercentageScore',
            vv: '0',
            vvt: 2,
            vt: 7
        },
        var371var371: {
            vid: 371,
            name: 'Quiz.AttemptCount',
            vv: 0,
            vvt: 1,
            vt: 7
        },
        var372var372: {
            vid: 372,
            name: 'Quiz.Pass',
            vv: 0,
            vvt: 0,
            vt: 7
        },
        var373var373: {
            vid: 373,
            name: 'Quiz.Score',
            vv: 0,
            vvt: 1,
            vt: 7
        },
        var374var374: {
            vid: 374,
            name: 'Quiz.PassPercentage',
            vv: 80,
            vvt: 1,
            vt: 7
        },
        var375var375: {
            vid: 375,
            name: 'Quiz.PassPoints',
            vv: 0,
            vvt: 1,
            vt: 7
        },
        var376var376: {
            vid: 376,
            name: 'Quiz.CorrectAnswerCount',
            vv: 0,
            vvt: 1,
            vt: 7
        },
        var377var377: {
            vid: 377,
            name: 'Quiz.MaxScore',
            vv: 0,
            vvt: 1,
            vt: 7
        },
        var378var378: {
            vid: 378,
            name: 'Quiz.QuestionCount',
            vv: 0,
            vvt: 1,
            vt: 7
        },
        var379var379: {
            vid: 379,
            name: 'Quiz.UnansweredQuestionCount',
            vv: 0,
            vvt: 1,
            vt: 7
        },
        var380var380: {
            vid: 380,
            name: 'Question.AnswerChoice',
            vv: '',
            vvt: 2,
            vt: 7
        },
        var381var381: {
            vid: 381,
            name: 'Question.PreviousQuestionScore',
            vv: 0,
            vvt: 1,
            vt: 7
        },
        var382var382: {
            vid: 382,
            name: 'Question.MaxAttempts',
            vv: 0,
            vvt: 1,
            vt: 7
        },
        var383var383: {
            vid: 383,
            name: 'Question.NegativePoints',
            vv: 0,
            vvt: 1,
            vt: 7
        },
        var384var384: {
            vid: 384,
            name: 'Question.PointsAssigned',
            vv: 0,
            vvt: 1,
            vt: 7
        },
        variableIdVsNameMap: {
            var346: 'LMS.LearnerID',
            var347: 'LMS.LearnerName',
            var348: 'LMS.CourseName',
            var349: 'Project.ClosedCaptions',
            var350: 'Project.MuteAudio',
            var351: 'Project.ShowPlaybar',
            var352: 'Project.ShowTOC',
            var353: 'Project.AudioLevel',
            var354: 'Project.LockTOC',
            var355: 'Project.CurrentSlideNumber',
            var356: 'Project.CurrentSlideName',
            var357: 'Project.SlideCount',
            var358: 'Date.Today',
            var359: 'Date.DateMMDDYY',
            var360: 'Date.DateDDMMYY',
            var361: 'Date.Day',
            var362: 'Date.Hours',
            var363: 'Date.LocaleString',
            var364: 'Date.Minutes',
            var365: 'Date.Month',
            var366: 'Date.Time',
            var367: 'Date.Year',
            var368: 'Quiz.InScope',
            var369: 'Quiz.InReview',
            var370: 'Quiz.PercentageScore',
            var371: 'Quiz.AttemptCount',
            var372: 'Quiz.Pass',
            var373: 'Quiz.Score',
            var374: 'Quiz.PassPercentage',
            var375: 'Quiz.PassPoints',
            var376: 'Quiz.CorrectAnswerCount',
            var377: 'Quiz.MaxScore',
            var378: 'Quiz.QuestionCount',
            var379: 'Quiz.UnansweredQuestionCount',
            var380: 'Question.AnswerChoice',
            var381: 'Question.PreviousQuestionScore',
            var382: 'Question.MaxAttempts',
            var383: 'Question.NegativePoints',
            var384: 'Question.PointsAssigned'
        },
        project: {
            fps: 30,
            hasTOC: 1,
            hasCC: false,
            showClosedCaptions: true,
            w: 1728,
            h: 1080,
            globalThemeCounter: 0,
            iw: 1728,
            ih: 1080,
            prm: [1, 1, 0, 0],
            stateNameToLocalizedStateNameMap: {
                kCPNormalState: 'Normal',
                kCPDownState: 'Klicken',
                kCPRolloverState: 'Darauf zeigen',
                kCPVisitedState: 'Aufgerufen',
                kCPDragoverState: '',
                kCPDragstartState: '',
                kCPDropCorrect: '',
                kCPDropIncorrect: '',
                kCPDropAccept: '',
                kCPDropReject: ''
            },
            prjBgColor: '#ffffff',
            pkt: 1,
            htmlBgColor: '#f5f4f1',
            shc: false,
            pN: 'libraries-adden.cpt'
        },
        projectThemeData: {
            image_presets: '{"theme_image_default":{"meta":{"name":"kCPImageStyleNormal","type":2,"fillEnable":1,"fillType":1,"borderEnable":0,"shadowEnable":0},"styles":{"border":{"color":"var(--theme_image_default--strokeColor)","size":1,"type":0,"style":0,"borderStyle":2},"boxShadow":{"shadowXOffset":1,"shadowYOffset":2,"shadowBlur":4,"color":"var(--theme_image_default--boxShadowColor)"},"imageFilter":{"filterType":"Normal","mixBlendMode":"normal"}}},"theme_image_greyscale":{"meta":{"name":"kCPImageStyleGreyscale","type":2,"fillEnable":1,"fillType":1,"borderEnable":0,"shadowEnable":0},"styles":{"border":{"color":"var(--theme_image_greyscale--strokeColor)","size":1,"type":0,"style":0,"borderStyle":2},"boxShadow":{"shadowXOffset":1,"shadowYOffset":2,"shadowBlur":4,"color":"var(--theme_image_greyscale--boxShadowColor)"},"imageFilter":{"filterType":"Greyscale","mixBlendMode":"saturation","intensity":"var(--theme_image_greyscale--intensity)","filterColor":{"fill":"#000000","fillOpacity":1}}}},"theme_image_lighten":{"meta":{"name":"kCPImageStyleLighten","type":2,"fillEnable":1,"fillType":1,"borderEnable":0,"shadowEnable":0},"styles":{"border":{"color":"var(--theme_image_lighten--strokeColor)","size":1,"type":0,"style":0,"borderStyle":2},"boxShadow":{"shadowXOffset":1,"shadowYOffset":2,"shadowBlur":4,"color":"var(--theme_image_lighten--boxShadowColor)"},"imageFilter":{"filterType":"Lighten","mixBlendMode":"soft-light","intensity":"var(--theme_image_lighten--intensity)","filterColor":{"fill":"#FFFFFF","fillOpacity":1}}}},"theme_image_darken":{"meta":{"name":"kCPImageStyleDarken","type":2,"fillEnable":1,"fillType":1,"borderEnable":0,"shadowEnable":0},"styles":{"border":{"color":"var(--theme_image_darken--strokeColor)","size":1,"type":0,"style":0,"borderStyle":2},"boxShadow":{"shadowXOffset":1,"shadowYOffset":2,"shadowBlur":4,"color":"var(--theme_image_darken--boxShadowColor)"},"imageFilter":{"filterType":"Darken","mixBlendMode":"soft-light","intensity":"var(--theme_image_darken--intensity)","filterColor":{"fill":"var(--black)","fillOpacity":1}}}},"theme_image_overlay":{"meta":{"name":"kCPImageStyleOverlay","type":2,"fillEnable":1,"fillType":1,"borderEnable":0,"shadowEnable":0},"styles":{"border":{"color":"var(--theme_image_overlay--strokeColor)","size":1,"type":0,"style":0,"borderStyle":2},"boxShadow":{"shadowXOffset":1,"shadowYOffset":2,"shadowBlur":4,"color":"var(--theme_image_overlay--boxShadowColor)"},"imageFilter":{"filterType":"Overlay","mixBlendMode":"overlay","intensity":"var(--theme_image_overlay--intensity)","filterColor":{"fill":"var(--theme_image_overlay--primaryFillColor)","fillOpacity":1,"gradientProps":{"linearGradientProps":{"colorStops":[{"color":"#378ef0","alpha":1,"scaledPosition":0},{"color":"#1c4778","alpha":1,"scaledPosition":1}],"endPoints":[{"x":50,"y":0},{"x":50,"y":100}]},"radialGradientProps":{"colorStops":[{"color":"#378ef0","alpha":1,"scaledPosition":0},{"color":"#1c4778","alpha":1,"scaledPosition":1}],"endPoints":[{"x":50,"y":50},{"x":100,"y":50}],"radialHandlePoints":[{"x":50,"y":100},{"x":100,"y":100}]}}}}}},"theme_image_colorize":{"meta":{"name":"kCPImageStyleColorize","type":2,"fillEnable":1,"fillType":1,"borderEnable":0,"shadowEnable":0},"styles":{"border":{"color":"var(--theme_image_colorize--strokeColor)","size":1,"type":0,"style":0,"borderStyle":2},"boxShadow":{"shadowXOffset":1,"shadowYOffset":2,"shadowBlur":4,"color":"var(--theme_image_colorize--boxShadowColor)"},"imageFilter":{"filterType":"Colorize","mixBlendMode":"color","intensity":"var(--theme_image_colorize--intensity)","filterColor":{"fill":"var(--theme_image_colorize--primaryFillColor)","fillOpacity":1,"gradientProps":{"linearGradientProps":{"colorStops":[{"color":"#378ef0","alpha":1,"scaledPosition":0},{"color":"#1c4778","alpha":1,"scaledPosition":1}],"endPoints":[{"x":50,"y":0},{"x":50,"y":100}]},"radialGradientProps":{"colorStops":[{"color":"#378ef0","alpha":1,"scaledPosition":0},{"color":"#1c4778","alpha":1,"scaledPosition":1}],"endPoints":[{"x":50,"y":50},{"x":100,"y":50}],"radialHandlePoints":[{"x":50,"y":100},{"x":100,"y":100}]}}}}}}}',
            meta: '{"name":"SBB","description":"kCPThemeLightDescription","version":"v3","guid":"x7fIqzr3M1T8ySXTwHija","default_presets":{"0":"cp_default_shape_solid_style","1":"text-body-1","2":"theme_image_default","3":"cp_default_slide_style","4":"cp_textinshape_body_1","5":"cp_default_line_shape_style","6":"cp_default_complex_shape_solid_style","7":"cp_button_style_1_textonly","8":"cp_checkbox_style_1_textonly","9":"cp_svg_style","10":"cp_dropDown_style_1","11":"cp_radiobutton_style_1_textonly","12":"cp_inputField_style_1","13":"cp_clickbox_style","14":"cp_responsive_container_style","15":"cp_default_shape_solid_style"},"color_palettes":[{"name":"Light Palette - 1","colors":["var(--color1)","var(--color2)","var(--color3)","var(--color4)","var(--color5)","var(--color6)","var(--color7)","var(--color5_light)","var(--color4_dark)"]}],"active_color_palette":0}',
            other_presets: '{"cp_default_slide_style":{"meta":{"fillEnable":1,"fillType":1,"strokeEnable":0,"type":3,"category":0},"backgroundColor":"#FFFFFF","outlineColor":"var(--palette-color5)","outlineWidth":1,"outlineStyle":"solid","outlineCap":"butt","fill":"#FFFFFF","fillOpacity":1,"gradientFill":{"linearFill":{"colorStops":[{"color":"var(--palette-color1)","alpha":1,"scaledPosition":0},{"color":"var(--palette-color2)","alpha":1,"scaledPosition":1}],"endPoints":[{"x":0,"y":0},{"x":100,"y":100}]},"radialFill":{"colorStops":[{"color":"var(--palette-color2)","alpha":1,"scaledPosition":0},{"color":"var(--palette-color1)","alpha":1,"scaledPosition":1}],"endPoints":[{"x":50,"y":50},{"x":100,"y":50}],"radialHandlePoints":[{"x":50,"y":100},{"x":100,"y":100}]}}},"cp_responsive_container_style":{"meta":{"fillEnable":1,"fillType":1,"strokeEnable":0,"shadowEnable":0,"type":14,"category":0},"fill":"var(--palette-color6)","fillOpacity":1,"stroke":"var(--palette-color3)","strokeWidth":1,"strokeLinecap":"butt","strokeDasharray":"none","boxShadow":{"x":1,"y":2,"blur":4,"spread":null,"color":"var(--greyscale3)","inset":1,"opacity":1},"gradientFill":{"linearFill":{"colorStops":[{"color":"var(--palette-color1)","alpha":1,"scaledPosition":0},{"color":"var(--palette-color0)","alpha":1,"scaledPosition":1}],"endPoints":[{"x":50,"y":0},{"x":50,"y":100}]},"radialFill":{"colorStops":[{"color":"var(--palette-color1)","alpha":1,"scaledPosition":0},{"color":"var(--palette-color0)","alpha":1,"scaledPosition":1}],"endPoints":[{"x":50,"y":50},{"x":100,"y":50}],"radialHandlePoints":[{"x":50,"y":100},{"x":100,"y":100}]}}},"cp_default_caption_shape_solid_style":{"meta":{"fillEnable":1,"fillType":1,"strokeEnable":0,"shadowEnable":0,"type":0,"category":0},"fill":"var(--palette-color1)","fillOpacity":1,"stroke":"var(--palette-color3)","strokeWidth":1,"strokeLinecap":"butt","strokeDasharray":"none","boxShadow":{"x":1,"y":2,"blur":4,"spread":null,"color":"var(--greyscale3)","inset":null,"opacity":1},"gradientFill":{"linearFill":{"colorStops":[{"color":"var(--palette-color1)","alpha":1,"scaledPosition":0},{"color":"var(--palette-color0)","alpha":1,"scaledPosition":1}],"endPoints":[{"x":50,"y":0},{"x":50,"y":100}]},"radialFill":{"colorStops":[{"color":"var(--palette-color1)","alpha":1,"scaledPosition":0},{"color":"var(--palette-color0)","alpha":1,"scaledPosition":1}],"endPoints":[{"x":50,"y":50},{"x":100,"y":50}],"radialHandlePoints":[{"x":50,"y":100},{"x":100,"y":100}]}}},"cp_default_caption_shape_solid_style_correct":{"meta":{"fillEnable":1,"fillType":1,"strokeEnable":0,"shadowEnable":0,"type":0,"category":0},"fill":"var(--success)","fillOpacity":1,"stroke":"var(--palette-color3)","strokeWidth":1,"strokeLinecap":"butt","strokeDasharray":"none","boxShadow":{"x":1,"y":2,"blur":4,"spread":null,"color":"var(--greyscale3)","inset":null,"opacity":1},"gradientFill":{"linearFill":{"colorStops":[{"color":"var(--palette-color1)","alpha":1,"scaledPosition":0},{"color":"var(--palette-color0)","alpha":1,"scaledPosition":1}],"endPoints":[{"x":50,"y":0},{"x":50,"y":100}]},"radialFill":{"colorStops":[{"color":"var(--palette-color1)","alpha":1,"scaledPosition":0},{"color":"var(--palette-color0)","alpha":1,"scaledPosition":1}],"endPoints":[{"x":50,"y":50},{"x":100,"y":50}],"radialHandlePoints":[{"x":50,"y":100},{"x":100,"y":100}]}}},"cp_default_caption_shape_solid_style_incorrect":{"meta":{"fillEnable":1,"fillType":1,"strokeEnable":0,"shadowEnable":0,"type":0,"category":0},"fill":"var(--error)","fillOpacity":1,"stroke":"var(--palette-color3)","strokeWidth":1,"strokeLinecap":"butt","strokeDasharray":"none","boxShadow":{"x":1,"y":2,"blur":4,"spread":null,"color":"var(--greyscale3)","inset":null,"opacity":1},"gradientFill":{"linearFill":{"colorStops":[{"color":"var(--palette-color1)","alpha":1,"scaledPosition":0},{"color":"var(--palette-color0)","alpha":1,"scaledPosition":1}],"endPoints":[{"x":50,"y":0},{"x":50,"y":100}]},"radialFill":{"colorStops":[{"color":"var(--palette-color1)","alpha":1,"scaledPosition":0},{"color":"var(--palette-color0)","alpha":1,"scaledPosition":1}],"endPoints":[{"x":50,"y":50},{"x":100,"y":50}],"radialHandlePoints":[{"x":50,"y":100},{"x":100,"y":100}]}}},"cp_default_caption_shape_solid_style_incomplete":{"meta":{"fillEnable":1,"fillType":1,"strokeEnable":0,"shadowEnable":0,"type":0,"category":0},"fill":"var(--incomplete)","fillOpacity":1,"stroke":"var(--palette-color3)","strokeWidth":1,"strokeLinecap":"butt","strokeDasharray":"none","boxShadow":{"x":1,"y":2,"blur":4,"spread":null,"color":"var(--greyscale3)","inset":null,"opacity":1},"gradientFill":{"linearFill":{"colorStops":[{"color":"var(--palette-color1)","alpha":1,"scaledPosition":0},{"color":"var(--palette-color0)","alpha":1,"scaledPosition":1}],"endPoints":[{"x":50,"y":0},{"x":50,"y":100}]},"radialFill":{"colorStops":[{"color":"var(--palette-color1)","alpha":1,"scaledPosition":0},{"color":"var(--palette-color0)","alpha":1,"scaledPosition":1}],"endPoints":[{"x":50,"y":50},{"x":100,"y":50}],"radialHandlePoints":[{"x":50,"y":100},{"x":100,"y":100}]}}},"cp_default_caption_shape_solid_style_hint":{"meta":{"fillEnable":1,"fillType":1,"strokeEnable":0,"shadowEnable":0,"type":0,"category":0},"fill":"var(--hint)","fillOpacity":1,"stroke":"var(--palette-color3)","strokeWidth":1,"strokeLinecap":"butt","strokeDasharray":"none","boxShadow":{"x":1,"y":2,"blur":4,"spread":null,"color":"var(--greyscale3)","inset":null,"opacity":1},"gradientFill":{"linearFill":{"colorStops":[{"color":"var(--palette-color1)","alpha":1,"scaledPosition":0},{"color":"var(--palette-color0)","alpha":1,"scaledPosition":1}],"endPoints":[{"x":50,"y":0},{"x":50,"y":100}]},"radialFill":{"colorStops":[{"color":"var(--palette-color1)","alpha":1,"scaledPosition":0},{"color":"var(--palette-color0)","alpha":1,"scaledPosition":1}],"endPoints":[{"x":50,"y":50},{"x":100,"y":50}],"radialHandlePoints":[{"x":50,"y":100},{"x":100,"y":100}]}}},"cp_default_caption_shape_solid_style_retry":{"meta":{"fillEnable":1,"fillType":1,"strokeEnable":0,"shadowEnable":0,"type":0,"category":0},"fill":"var(--retry)","fillOpacity":1,"stroke":"var(--palette-color3)","strokeWidth":1,"strokeLinecap":"butt","strokeDasharray":"none","boxShadow":{"x":1,"y":2,"blur":4,"spread":null,"color":"var(--greyscale3)","inset":null,"opacity":1},"gradientFill":{"linearFill":{"colorStops":[{"color":"var(--palette-color1)","alpha":1,"scaledPosition":0},{"color":"var(--palette-color0)","alpha":1,"scaledPosition":1}],"endPoints":[{"x":50,"y":0},{"x":50,"y":100}]},"radialFill":{"colorStops":[{"color":"var(--palette-color1)","alpha":1,"scaledPosition":0},{"color":"var(--palette-color0)","alpha":1,"scaledPosition":1}],"endPoints":[{"x":50,"y":50},{"x":100,"y":50}],"radialHandlePoints":[{"x":50,"y":100},{"x":100,"y":100}]}}},"cp_default_caption_shape_solid_style_timeout":{"meta":{"fillEnable":1,"fillType":1,"strokeEnable":0,"shadowEnable":0,"type":0,"category":0},"fill":"var(--timeout)","fillOpacity":1,"stroke":"var(--palette-color3)","strokeWidth":1,"strokeLinecap":"butt","strokeDasharray":"none","boxShadow":{"x":1,"y":2,"blur":4,"spread":null,"color":"var(--greyscale3)","inset":null,"opacity":1},"gradientFill":{"linearFill":{"colorStops":[{"color":"var(--palette-color1)","alpha":1,"scaledPosition":0},{"color":"var(--palette-color0)","alpha":1,"scaledPosition":1}],"endPoints":[{"x":50,"y":0},{"x":50,"y":100}]},"radialFill":{"colorStops":[{"color":"var(--palette-color1)","alpha":1,"scaledPosition":0},{"color":"var(--palette-color0)","alpha":1,"scaledPosition":1}],"endPoints":[{"x":50,"y":50},{"x":100,"y":50}],"radialHandlePoints":[{"x":50,"y":100},{"x":100,"y":100}]}}},"cp_default_shape_solid_style":{"meta":{"fillEnable":1,"fillType":1,"strokeEnable":0,"shadowEnable":0,"type":0,"category":0},"fill":"var(--palette-color6)","fillOpacity":1,"stroke":"var(--palette-color1)","strokeWidth":1,"strokeLinecap":"butt","strokeDasharray":"none","boxShadow":{"x":1,"y":2,"blur":4,"spread":null,"color":"var(--greyscale3)","inset":null,"opacity":1},"gradientFill":{"linearFill":{"colorStops":[{"color":"var(--palette-color1)","alpha":1,"scaledPosition":0},{"color":"var(--palette-color0)","alpha":1,"scaledPosition":1}],"endPoints":[{"x":50,"y":0},{"x":50,"y":100}]},"radialFill":{"colorStops":[{"color":"var(--palette-color1)","alpha":1,"scaledPosition":0},{"color":"var(--palette-color0)","alpha":1,"scaledPosition":1}],"endPoints":[{"x":50,"y":50},{"x":100,"y":50}],"radialHandlePoints":[{"x":50,"y":100},{"x":100,"y":100}]}}},"cp_default_shape_linear_style":{"meta":{"fillEnable":1,"fillType":1,"strokeEnable":0,"shadowEnable":0,"type":0,"category":0},"fill":"var(--palette-color1)","fillOpacity":1,"stroke":"var(--palette-color3)","strokeWidth":1,"strokeLinecap":"butt","strokeDasharray":"none","boxShadow":{"x":1,"y":2,"blur":4,"spread":null,"color":"var(--greyscale3)","inset":null,"opacity":1},"gradientFill":{"linearFill":{"colorStops":[{"color":"var(--palette-color1)","alpha":1,"scaledPosition":0},{"color":"var(--palette-color0)","alpha":1,"scaledPosition":1}],"endPoints":[{"x":50,"y":0},{"x":50,"y":100}]},"radialFill":{"colorStops":[{"color":"var(--palette-color1)","alpha":1,"scaledPosition":0},{"color":"var(--palette-color0)","alpha":1,"scaledPosition":1}],"endPoints":[{"x":50,"y":50},{"x":100,"y":50}],"radialHandlePoints":[{"x":50,"y":100},{"x":100,"y":100}]}}},"cp_default_shape_radial_style":{"meta":{"fillEnable":1,"fillType":1,"strokeEnable":0,"shadowEnable":0,"type":0,"category":0},"fill":"var(--palette-color1)","fillOpacity":1,"stroke":"var(--palette-color3)","strokeWidth":1,"strokeLinecap":"butt","strokeDasharray":"none","boxShadow":{"x":1,"y":2,"blur":4,"spread":null,"color":"var(--greyscale3)","inset":null,"opacity":1},"gradientFill":{"linearFill":{"colorStops":[{"color":"var(--palette-color1)","alpha":1,"scaledPosition":0},{"color":"var(--palette-color0)","alpha":1,"scaledPosition":1}],"endPoints":[{"x":50,"y":0},{"x":50,"y":100}]},"radialFill":{"colorStops":[{"color":"var(--palette-color1)","alpha":1,"scaledPosition":0},{"color":"var(--palette-color0)","alpha":1,"scaledPosition":1}],"endPoints":[{"x":50,"y":50},{"x":100,"y":50}],"radialHandlePoints":[{"x":50,"y":100},{"x":100,"y":100}]}}}}',
            theme: '{"--primary":"#F1EEE6","--color1":"#FFFFFF","--color2":"#F8F7F4","--color3":"#F1EEE6","--color4":"#D6D5D1","--color5":"#666666","--color6":"#333333","--color7":"#020C1C","--colorC7":"#F7F7F7","--disabledC12":"#989898","--color1_light":"#FFCD74","--color1_dark":"#C76D12","--color2_light":"#86FFFF","--color2_dark":"#00ACCC","--color3_light":"#9B5DFF","--color3_dark":"#0000CA","--color4_light":"#99FF99","--color4_dark":"#112FA7","--color5_light":"#163EE5","--color5_dark":"#00CB92","--color6_light":"#7697FF","--color6_dark":"#0040CB","--color7_light":"#FF8E64","--color7_dark":"#C5230B","--success":"#00973b","--error":"#c60018","--hint":"#CB6F10","--incomplete":"#E8BD2B","--timeout":"#C74545","--retry":"#CB6F10","--white":"#ffffff","--black":"#000000","--greyscale1":"#FFFFFF","--greyscale2":"#f6f6f6","--greyscale3":"#dcdcdc","--greyscale4":"#444444","--greyscale5":"#212121","--disabled":"#818181","--palette-color0":"var(--color1)","--palette-color1":"#f6f6f6","--palette-color2":"#e5e5e5","--palette-color3":"#dcdcdc","--palette-color4":"#767676","--palette-color5":"#444444","--palette-color6":"#212121","--palette-color7":"#eb0000","--palette-color8":"#c60018","--design-option-color1":"255, 255, 255","--design-option-color2":"248, 247, 244","--design-option-color3":"241, 238, 230","--design-option-color4":"214, 213, 209","--design-option-color5":"102, 102, 102","--design-option-color6":"51, 51, 51","--design-option-color7":"2, 12, 28","--design-option-color5_light":"22, 62, 229","--design-option-color4_dark":"17, 47, 167","--c1":"var(--design-option-color1)","--c2":"246, 246, 246","--c3":"229, 229, 229","--c4":"220, 220, 220","--c5":"118, 118, 118","--c6":"68, 68, 68","--c7":"33, 33, 33","--c8":"235, 0, 0","--c9":"198, 0, 24","--widget-container--fillcolor":"var(--palette-color1)","--font1":"Georgia","--font2":"Arial","--text-style-unset":"none","--text-heading-1--fontSize--desktop":"120px","--text-heading-1--fontSize--tablet":"100px","--text-heading-1--fontSize--mobile":"80px","--text-heading-1--fontFamily":"SBB","--text-heading-1--fontWeight":"bold","--text-heading-1--fontType":"regular","--text-heading-1--fontStyle":"normal","--text-heading-1--fontStretch":"normal","--text-heading-1--lineHeight":1.35,"--text-heading-1--marginLeft":"0px","--text-heading-1--color":"var(--palette-color6)","--text-heading-1--borderBottomStyle":"none","--text-heading-1--textDecoration":"none","--text-heading-1--letterSpacing":0,"--text-heading-1--textTransform":"none","--text-heading-1--stroke":"var(--palette-color2)","--text-heading-1--textAlign":"left","--text-heading-1--justifyContent":"flex-start","--text-heading-1--marginTop":"auto","--text-heading-1--marginBottom":"0","--text-heading-1--defaultTextStroke":"1px var(--palette-color2)","--text-heading-1--WebkitTextStroke":"var(--text-style-unset)","--text-heading-1--defaultTextShadow":"0px 4px 8px var(--greyscale2)","--text-heading-1--textShadow":"var(--text-style-unset)","--text-heading-2--fontSize--desktop":"80px","--text-heading-2--fontSize--tablet":"72px","--text-heading-2--fontSize--mobile":"60px","--text-heading-2--fontFamily":"SBB","--text-heading-2--fontWeight":"bold","--text-heading-2--fontType":"regular","--text-heading-2--fontStyle":"normal","--text-heading-2--fontStretch":"normal","--text-heading-2--lineHeight":1.35,"--text-heading-2--marginLeft":"0px","--text-heading-2--color":"var(--palette-color6)","--text-heading-2--borderBottomStyle":"none","--text-heading-2--textDecoration":"none","--text-heading-2--letterSpacing":0,"--text-heading-2--textTransform":"none","--text-heading-2--stroke":"var(--palette-color2)","--text-heading-2--textAlign":"left","--text-heading-2--justifyContent":"flex-start","--text-heading-2--marginTop":"auto","--text-heading-2--marginBottom":"0","--text-heading-2--defaultTextStroke":"1px var(--palette-color2)","--text-heading-2--WebkitTextStroke":"var(--text-style-unset)","--text-heading-2--defaultTextShadow":"0px 4px 8px var(--greyscale2)","--text-heading-2--textShadow":"var(--text-style-unset)","--text-heading-3--fontSize--desktop":"60px","--text-heading-3--fontSize--tablet":"52px","--text-heading-3--fontSize--mobile":"44px","--text-heading-3--fontFamily":"SBB","--text-heading-3--fontWeight":"bold","--text-heading-3--fontType":"regular","--text-heading-3--fontStyle":"normal","--text-heading-3--fontStretch":"normal","--text-heading-3--lineHeight":1.35,"--text-heading-3--marginLeft":"0px","--text-heading-3--color":"var(--palette-color6)","--text-heading-3--borderBottomStyle":"none","--text-heading-3--textDecoration":"none","--text-heading-3--letterSpacing":0,"--text-heading-3--textTransform":"none","--text-heading-3--stroke":"var(--palette-color2)","--text-heading-3--textAlign":"left","--text-heading-3--justifyContent":"flex-start","--text-heading-3--marginTop":"auto","--text-heading-3--marginBottom":"0","--text-heading-3--defaultTextStroke":"1px var(--palette-color2)","--text-heading-3--WebkitTextStroke":"var(--text-style-unset)","--text-heading-3--defaultTextShadow":"0px 4px 8px var(--greyscale2)","--text-heading-3--textShadow":"var(--text-style-unset)","--text-heading-4--fontSize--desktop":"52px","--text-heading-4--fontSize--tablet":"40px","--text-heading-4--fontSize--mobile":"32px","--text-heading-4--fontFamily":"SBB","--text-heading-4--fontWeight":"normal","--text-heading-4--fontType":"regular","--text-heading-4--fontStyle":"normal","--text-heading-4--fontStretch":"normal","--text-heading-4--lineHeight":1.5,"--text-heading-4--marginLeft":"0px","--text-heading-4--color":"var(--palette-color6)","--text-heading-4--borderBottomStyle":"none","--text-heading-4--textDecoration":"none","--text-heading-4--letterSpacing":0,"--text-heading-4--textTransform":"none","--text-heading-4--stroke":"var(--palette-color2)","--text-heading-4--textAlign":"left","--text-heading-4--justifyContent":"flex-start","--text-heading-4--marginTop":"auto","--text-heading-4--marginBottom":"0","--text-heading-4--defaultTextStroke":"1px var(--palette-color2)","--text-heading-4--WebkitTextStroke":"var(--text-style-unset)","--text-heading-4--defaultTextShadow":"0px 4px 8px var(--greyscale2)","--text-heading-4--textShadow":"var(--text-style-unset)","--text-heading-5--fontSize--desktop":"40px","--text-heading-5--fontSize--tablet":"32px","--text-heading-5--fontSize--mobile":"28px","--text-heading-5--fontFamily":"SBB","--text-heading-5--fontWeight":"normal","--text-heading-5--fontType":"regular","--text-heading-5--fontStyle":"normal","--text-heading-5--fontStretch":"normal","--text-heading-5--lineHeight":1.35,"--text-heading-5--marginLeft":"0px","--text-heading-5--color":"var(--palette-color6)","--text-heading-5--borderBottomStyle":"none","--text-heading-5--textDecoration":"none","--text-heading-5--letterSpacing":"0","--text-heading-5--textTransform":"none","--text-heading-5--stroke":"var(--palette-color2)","--text-heading-5--textAlign":"left","--text-heading-5--justifyContent":"flex-start","--text-heading-5--marginTop":"auto","--text-heading-5--marginBottom":"0","--text-heading-5--defaultTextStroke":"1px var(--palette-color2)","--text-heading-5--WebkitTextStroke":"var(--text-style-unset)","--text-heading-5--defaultTextShadow":"0px 4px 8px var(--greyscale2)","--text-heading-5--textShadow":"var(--text-style-unset)","--text-heading-6--fontSize--desktop":"36px","--text-heading-6--fontSize--tablet":"28px","--text-heading-6--fontSize--mobile":"24px","--text-heading-6--fontFamily":"SBB","--text-heading-6--fontWeight":"normal","--text-heading-6--fontType":"regular","--text-heading-6--fontStyle":"normal","--text-heading-6--fontStretch":"normal","--text-heading-6--lineHeight":1.35,"--text-heading-6--marginLeft":"0px","--text-heading-6--color":"var(--palette-color6)","--text-heading-6--borderBottomStyle":"none","--text-heading-6--textDecoration":"none","--text-heading-6--letterSpacing":"0","--text-heading-6--textTransform":"none","--text-heading-6--stroke":"var(--palette-color2)","--text-heading-6--textAlign":"left","--text-heading-6--justifyContent":"flex-start","--text-heading-6--marginTop":"auto","--text-heading-6--marginBottom":"0","--text-heading-6--defaultTextStroke":"1px var(--palette-color2)","--text-heading-6--WebkitTextStroke":"var(--text-style-unset)","--text-heading-6--defaultTextShadow":"0px 4px 8px var(--greyscale2)","--text-heading-6--textShadow":"var(--text-style-unset)","--text-heading-7--fontSize--desktop":"20px","--text-heading-7--fontSize--tablet":"20px","--text-heading-7--fontSize--mobile":"20px","--text-heading-7--fontFamily":"SBB","--text-heading-7--fontWeight":"normal","--text-heading-7--fontType":"regular","--text-heading-7--fontStyle":"normal","--text-heading-7--fontStretch":"normal","--text-heading-7--lineHeight":"1.35","--text-heading-7--marginLeft":"0px","--text-heading-7--color":"var(--palette-color5)","--text-heading-7--borderBottomStyle":"none","--text-heading-7--textDecoration":"none","--text-heading-7--letterSpacing":"0","--text-heading-7--textTransform":"none","--text-heading-7--stroke":"var(--palette-color2)","--text-heading-7--textAlign":"left","--text-heading-7--justifyContent":"flex-start","--text-heading-7--marginTop":"auto","--text-heading-7--marginBottom":"0","--text-heading-7--defaultTextStroke":"1px var(--palette-color2)","--text-heading-7--WebkitTextStroke":"var(--text-style-unset)","--text-heading-7--defaultTextShadow":"0px 4px 8px var(--greyscale2)","--text-heading-7--textShadow":"var(--text-style-unset)","--text-heading-8--fontSize--desktop":"72px","--text-heading-8--fontSize--tablet":"48px","--text-heading-8--fontSize--mobile":"32px","--text-heading-8--fontFamily":"SBB","--text-heading-8--fontWeight":"normal","--text-heading-8--fontType":"regular","--text-heading-8--fontStyle":"normal","--text-heading-8--fontStretch":"normal","--text-heading-8--lineHeight":"1.35","--text-heading-8--marginLeft":"0px","--text-heading-8--color":"var(--palette-color5)","--text-heading-8--borderBottomStyle":"none","--text-heading-8--textDecoration":"none","--text-heading-8--letterSpacing":"0","--text-heading-8--textTransform":"none","--text-heading-8--stroke":"var(--palette-color2)","--text-heading-8--textAlign":"center","--text-heading-8--justifyContent":"flex-start","--text-heading-8--marginTop":"auto","--text-heading-8--marginBottom":"0","--text-heading-8--defaultTextStroke":"1px var(--palette-color2)","--text-heading-8--WebkitTextStroke":"var(--text-style-unset)","--text-heading-8--defaultTextShadow":"0px 4px 8px var(--greyscale2)","--text-heading-8--textShadow":"var(--text-style-unset)","--text-heading-9--fontSize--desktop":"32px","--text-heading-9--fontSize--tablet":"32px","--text-heading-9--fontSize--mobile":"32px","--text-heading-9--fontFamily":"SBB","--text-heading-9--fontWeight":"normal","--text-heading-9--fontType":"regular","--text-heading-9--fontStyle":"normal","--text-heading-9--fontStretch":"normal","--text-heading-9--lineHeight":"1.35","--text-heading-9--marginLeft":"0px","--text-heading-9--color":"var(--palette-color5)","--text-heading-9--borderBottomStyle":"none","--text-heading-9--textDecoration":"none","--text-heading-9--letterSpacing":"0","--text-heading-9--textTransform":"none","--text-heading-9--stroke":"var(--palette-color2)","--text-heading-9--textAlign":"center","--text-heading-9--justifyContent":"flex-start","--text-heading-9--marginTop":"auto","--text-heading-9--marginBottom":"0","--text-heading-9--defaultTextStroke":"1px var(--palette-color2)","--text-heading-9--WebkitTextStroke":"var(--text-style-unset)","--text-heading-9--defaultTextShadow":"0px 4px 8px var(--greyscale2)","--text-heading-9--textShadow":"var(--text-style-unset)","--text-body-1--fontSize--desktop":"22px","--text-body-1--fontSize--tablet":"20px","--text-body-1--fontSize--mobile":"18px","--text-body-1--fontFamily":"SBB","--text-body-1--fontWeight":"normal","--text-body-1--fontType":"regular","--text-body-1--fontStyle":"normal","--text-body-1--fontStretch":"normal","--text-body-1--lineHeight":1.35,"--text-body-1--marginLeft":"0px","--text-body-1--color":"var(--palette-color5)","--text-body-1--borderBottomStyle":"none","--text-body-1--textDecoration":"none","--text-body-1--letterSpacing":0.03,"--text-body-1--textTransform":"none","--text-body-1--stroke":"var(--palette-color2)","--text-body-1--textAlign":"left","--text-body-1--justifyContent":"flex-start","--text-body-1--marginTop":"auto","--text-body-1--marginBottom":"0","--text-body-1--defaultTextStroke":"1px var(--palette-color2)","--text-body-1--WebkitTextStroke":"var(--text-style-unset)","--text-body-1--defaultTextShadow":"0px 4px 8px var(--greyscale2)","--text-body-1--textShadow":"var(--text-style-unset)","--text-body-2--fontSize--desktop":"22px","--text-body-2--fontSize--tablet":"20px","--text-body-2--fontSize--mobile":"18px","--text-body-2--fontFamily":"SBB","--text-body-2--fontWeight":"normal","--text-body-2--fontType":"regular","--text-body-2--fontStyle":"normal","--text-body-2--fontStretch":"normal","--text-body-2--lineHeight":1.35,"--text-body-2--marginLeft":"0px","--text-body-2--color":"var(--palette-color4)","--text-body-2--borderBottomStyle":"none","--text-body-2--textDecoration":"none","--text-body-2--letterSpacing":"0.03","--text-body-2--textTransform":"none","--text-body-2--Stroke":"var(--palette-color2)","--text-body-2--textAlign":"left","--text-body-2--justifyContent":"flex-start","--text-body-2--marginTop":"auto","--text-body-2--marginBottom":"0","--text-body-2--defaultTextStroke":"1px var(--palette-color2)","--text-body-2--WebkitTextStroke":"var(--text-style-unset)","--text-body-2--defaultTextShadow":"0px 4px 8px var(--greyscale2)","--text-body-2--textShadow":"var(--text-style-unset)","--text-body-3--fontSize--desktop":"18px","--text-body-3--fontSize--tablet":"16px","--text-body-3--fontSize--mobile":"16px","--text-body-3--fontFamily":"SBB","--text-body-3--fontWeight":"normal","--text-body-3--fontType":"regular","--text-body-3--fontStyle":"normal","--text-body-3--fontStretch":"normal","--text-body-3--lineHeight":"1.35","--text-body-3--marginLeft":"0px","--text-body-3--color":"var(--palette-color4)","--text-body-3--borderBottomStyle":"none","--text-body-3--textDecoration":"none","--text-body-3--letterSpacing":"0","--text-body-3--textTransform":"none","--text-body-3--Stroke":"var(--palette-color2)","--text-body-3--textAlign":"left","--text-body-3--justifyContent":"flex-start","--text-body-3--marginTop":"auto","--text-body-3--marginBottom":"0","--text-body-3--defaultTextStroke":"1px var(--palette-color2)","--text-body-3--WebkitTextStroke":"var(--text-style-unset)","--text-body-3--defaultTextShadow":"0px 4px 8px var(--greyscale2)","--text-body-3--textShadow":"var(--text-style-unset)","--text-body-4--fontSize--desktop":"18px","--text-body-4--fontSize--tablet":"16px","--text-body-4--fontSize--mobile":"16px","--text-body-4--fontFamily":"SBB","--text-body-4--fontWeight":"normal","--text-body-4--fontType":"regular","--text-body-4--fontStyle":"normal","--text-body-4--fontStretch":"normal","--text-body-4--lineHeight":"1.35","--text-body-4--marginLeft":"0px","--text-body-4--color":"var(--palette-color4)","--text-body-4--borderBottomStyle":"none","--text-body-4--textDecoration":"none","--text-body-4--letterSpacing":"0","--text-body-4--textTransform":"none","--text-body-4--Stroke":"var(--palette-color2)","--text-body-4--textAlign":"left","--text-body-4--justifyContent":"flex-start","--text-body-4--marginTop":"auto","--text-body-4--marginBottom":"0","--text-body-4--defaultTextStroke":"1px var(--palette-color2)","--text-body-4--WebkitTextStroke":"var(--text-style-unset)","--text-body-4--defaultTextShadow":"0px 4px 8px var(--greyscale2)","--text-body-4--textShadow":"var(--text-style-unset)","--text-body-5--fontSize--desktop":"18px","--text-body-5--fontSize--tablet":"16px","--text-body-5--fontSize--mobile":"16px","--text-body-5--fontFamily":"SBB","--text-body-5--fontWeight":"normal","--text-body-5--fontType":"italic","--text-body-5--fontStyle":"italic","--text-body-5--fontStretch":"normal","--text-body-5--lineHeight":"1.35","--text-body-5--marginLeft":"0px","--text-body-5--color":"var(--palette-color4)","--text-body-5--borderBottomStyle":"none","--text-body-5--textDecoration":"none","--text-body-5--letterSpacing":"0","--text-body-5--textTransform":"none","--text-body-5--Stroke":"var(--palette-color2)","--text-body-5--textAlign":"center","--text-body-5--justifyContent":"flex-start","--text-body-5--marginTop":"auto","--text-body-5--marginBottom":"0","--text-body-5--defaultTextStroke":"1px var(--palette-color2)","--text-body-5--WebkitTextStroke":"var(--text-style-unset)","--text-body-5--defaultTextShadow":"0px 4px 8px var(--greyscale2)","--text-body-5--textShadow":"var(--text-style-unset)","--text-body-6--fontSize--desktop":"16px","--text-body-6--fontSize--tablet":"14px","--text-body-6--fontSize--mobile":"14px","--text-body-6--fontFamily":"SBB","--text-body-6--fontWeight":"normal","--text-body-6--fontType":"regular","--text-body-6--fontStyle":"normal","--text-body-6--fontStretch":"normal","--text-body-6--lineHeight":"1.35","--text-body-6--marginLeft":"0px","--text-body-6--color":"var(--palette-color4)","--text-body-6--borderBottomStyle":"none","--text-body-6--textDecoration":"none","--text-body-6--letterSpacing":"0","--text-body-6--textTransform":"none","--text-body-6--Stroke":"var(--palette-color2)","--text-body-6--textAlign":"left","--text-body-6--justifyContent":"flex-start","--text-body-6--marginTop":"auto","--text-body-6--marginBottom":"0","--text-body-6--defaultTextStroke":"1px var(--palette-color2)","--text-body-6--WebkitTextStroke":"var(--text-style-unset)","--text-body-6--defaultTextShadow":"0px 4px 8px var(--greyscale2)","--text-body-6--textShadow":"var(--text-style-unset)","--text-component-1--fontSize--desktop":"22px","--text-component-1--fontSize--tablet":"20px","--text-component-1--fontSize--mobile":"20px","--text-component-1--fontFamily":"SBB","--text-component-1--fontWeight":"normal","--text-component-1--fontType":"regular","--text-component-1--fontStyle":"normal","--text-component-1--fontStretch":"normal","--text-component-1--lineHeight":"1.35","--text-component-1--marginLeft":"0px","--text-component-1--color":"var(--color6)","--text-component-1--borderBottomStyle":"none","--text-component-1--textDecoration":"none","--text-component-1--letterSpacing":"0","--text-component-1--textTransform":"none","--text-component-1--stroke":"var(--palette-color2)","--text-component-1--textAlign":"left","--text-component-1--justifyContent":"flex-start","--text-component-1--marginTop":"auto","--text-component-1--marginBottom":"0","--text-component-1--defaultTextStroke":"1px var(--palette-color2)","--text-component-1--WebkitTextStroke":"var(--text-style-unset)","--text-component-1--defaultTextShadow":"0px 4px 8px var(--greyscale2)","--text-component-1--textShadow":"var(--text-style-unset)","--text-component-2--fontSize--desktop":"24px","--text-component-2--fontSize--tablet":"20px","--text-component-2--fontSize--mobile":"20px","--text-component-2--fontFamily":"SBB","--text-component-2--fontWeight":"normal","--text-component-2--fontType":"regular","--text-component-2--fontStyle":"normal","--text-component-2--fontStretch":"normal","--text-component-2--lineHeight":"1.35","--text-component-2--marginLeft":"0px","--text-component-2--color":"var(--palette-color1)","--text-component-2--borderBottomStyle":"none","--text-component-2--textDecoration":"none","--text-component-2--letterSpacing":"0.16","--text-component-2--textTransform":"none","--text-component-2--stroke":"var(--palette-color2)","--text-component-2--textAlign":"left","--text-component-2--justifyContent":"flex-start","--text-component-2--marginTop":"auto","--text-component-2--marginBottom":"0","--text-component-2--defaultTextStroke":"1px var(--palette-color2)","--text-component-2--WebkitTextStroke":"var(--text-style-unset)","--text-component-2--defaultTextShadow":"0px 4px 8px var(--greyscale2)","--text-component-2--textShadow":"var(--text-style-unset)","--text-component-3--fontSize--desktop":"14px","--text-component-3--fontSize--tablet":"14px","--text-component-3--fontSize--mobile":"14px","--text-component-3--fontFamily":"SBB","--text-component-3--fontWeight":"normal","--text-component-3--fontType":"regular","--text-component-3--fontStyle":"normal","--text-component-3--fontStretch":"normal","--text-component-3--lineHeight":"1.35","--text-component-3--marginLeft":"0px","--text-component-3--color":"var(--palette-color6)","--text-component-3--borderBottomStyle":"none","--text-component-3--textDecoration":"none","--text-component-3--letterSpacing":"0.2","--text-component-3--textTransform":"uppercase","--text-component-3--stroke":"var(--palette-color2)","--text-component-3--textAlign":"center","--text-component-3--justifyContent":"flex-start","--text-component-3--marginTop":"auto","--text-component-3--marginBottom":"0","--text-component-3--defaultTextStroke":"1px var(--palette-color2)","--text-component-3--WebkitTextStroke":"var(--text-style-unset)","--text-component-3--defaultTextShadow":"0px 4px 8px var(--greyscale2)","--text-component-3--textShadow":"var(--text-style-unset)","--text-component-4--fontSize--desktop":"22px","--text-component-4--fontSize--tablet":"20px","--text-component-4--fontSize--mobile":"20px","--text-component-4--fontFamily":"SBB","--text-component-4--fontWeight":"normal","--text-component-4--fontType":"regular","--text-component-4--fontStyle":"normal","--text-component-4--fontStretch":"normal","--text-component-4--lineHeight":"1.35","--text-component-4--marginLeft":"0px","--text-component-4--color":"var(--color6)","--text-component-4--borderBottomStyle":"none","--text-component-4--textDecoration":"none","--text-component-4--letterSpacing":"0.02","--text-component-4--textTransform":"none","--text-component-4--stroke":"var(--palette-color2)","--text-component-4--textAlign":"left","--text-component-4--justifyContent":"flex-start","--text-component-4--marginTop":"auto","--text-component-4--marginBottom":"0","--text-component-4--defaultTextStroke":"1px var(--palette-color2)","--text-component-4--WebkitTextStroke":"var(--text-style-unset)","--text-component-4--defaultTextShadow":"0px 4px 8px var(--greyscale2)","--text-component-4--textShadow":"var(--text-style-unset)","--text-subheading-1--fontSize--desktop":"36px","--text-subheading-1--fontSize--tablet":"32px","--text-subheading-1--fontSize--mobile":"28px","--text-subheading-1--fontFamily":"SBB","--text-subheading-1--fontWeight":"normal","--text-subheading-1--fontType":"regular","--text-subheading-1--fontStyle":"normal","--text-subheading-1--fontStretch":"normal","--text-subheading-1--lineHeight":"1.1","--text-subheading-1--marginLeft":"0px","--text-subheading-1--color":"var(--palette-color6)","--text-subheading-1--borderBottomStyle":"none","--text-subheading-1--textDecoration":"none","--text-subheading-1--letterSpacing":"0.05","--text-subheading-1--textTransform":"uppercase","--text-subheading-1--stroke":"var(--palette-color2)","--text-subheading-1--textAlign":"left","--text-subheading-1--justifyContent":"flex-start","--text-subheading-1--marginTop":"auto","--text-subheading-1--marginBottom":"0","--text-subheading-1--defaultTextStroke":"1px var(--palette-color2)","--text-subheading-1--WebkitTextStroke":"var(--text-style-unset)","--text-subheading-1--defaultTextShadow":"0px 4px 8px var(--greyscale2)","--text-subheading-1--textShadow":"var(--text-style-unset)","--text-subheading-2--fontSize--desktop":"28px","--text-subheading-2--fontSize--tablet":"24px","--text-subheading-2--fontSize--mobile":"20px","--text-subheading-2--fontFamily":"SBB","--text-subheading-2--fontWeight":"normal","--text-subheading-2--fontType":"bold","--text-subheading-2--fontStyle":"normal","--text-subheading-2--fontStretch":"normal","--text-subheading-2--lineHeight":"1.15","--text-subheading-2--marginLeft":"0px","--text-subheading-2--color":"var(--palette-color6)","--text-subheading-2--borderBottomStyle":"none","--text-subheading-2--textDecoration":"none","--text-subheading-2--letterSpacing":"0.05","--text-subheading-2--textTransform":"none","--text-subheading-2--stroke":"var(--palette-color2)","--text-subheading-2--textAlign":"left","--text-subheading-2--justifyContent":"flex-start","--text-subheading-2--marginTop":"auto","--text-subheading-2--marginBottom":"0","--text-subheading-2--defaultTextStroke":"1px var(--palette-color2)","--text-subheading-2--WebkitTextStroke":"var(--text-style-unset)","--text-subheading-2--defaultTextShadow":"0px 4px 8px var(--greyscale2)","--text-subheading-2--textShadow":"var(--text-style-unset)","--text-subheading-3--fontSize--desktop":"26px","--text-subheading-3--fontSize--tablet":"22px","--text-subheading-3--fontSize--mobile":"18px","--text-subheading-3--fontFamily":"SBB","--text-subheading-3--fontWeight":"normal","--text-subheading-3--fontType":"regular","--text-subheading-3--fontStyle":"normal","--text-subheading-3--fontStretch":"normal","--text-subheading-3--lineHeight":"1.15","--text-subheading-3--marginLeft":"0px","--text-subheading-3--color":"var(--palette-color6)","--text-subheading-3--borderBottomStyle":"none","--text-subheading-3--textDecoration":"none","--text-subheading-3--letterSpacing":"0","--text-subheading-3--textTransform":"none","--text-subheading-3--stroke":"var(--palette-color2)","--text-subheading-3--textAlign":"center","--text-subheading-3--justifyContent":"flex-start","--text-subheading-3--marginTop":"auto","--text-subheading-3--marginBottom":"0","--text-subheading-3--defaultTextStroke":"1px var(--palette-color2)","--text-subheading-3--WebkitTextStroke":"var(--text-style-unset)","--text-subheading-3--defaultTextShadow":"0px 4px 8px var(--greyscale2)","--text-subheading-3--textShadow":"var(--text-style-unset)","--text-subheading-4--fontSize--desktop":"24px","--text-subheading-4--fontSize--tablet":"20px","--text-subheading-4--fontSize--mobile":"16px","--text-subheading-4--fontFamily":"SBB","--text-subheading-4--fontWeight":"normal","--text-subheading-4--fontType":"bold","--text-subheading-4--fontStyle":"normal","--text-subheading-4--fontStretch":"normal","--text-subheading-4--lineHeight":"1.15","--text-subheading-4--marginLeft":"0px","--text-subheading-4--color":"var(--palette-color0)","--text-subheading-4--borderBottomStyle":"none","--text-subheading-4--textDecoration":"none","--text-subheading-4--letterSpacing":"0.05","--text-subheading-4--textTransform":"none","--text-subheading-4--stroke":"var(--palette-color2)","--text-subheading-4--textAlign":"left","--text-subheading-4--justifyContent":"flex-start","--text-subheading-4--marginTop":"auto","--text-subheading-4--marginBottom":"0","--text-subheading-4--defaultTextStroke":"1px var(--palette-color2)","--text-subheading-4--WebkitTextStroke":"var(--text-style-unset)","--text-subheading-4--defaultTextShadow":"0px 4px 8px var(--greyscale2)","--text-subheading-4--textShadow":"var(--text-style-unset)","--text-subheading-5--fontSize--desktop":"24px","--text-subheading-5--fontSize--tablet":"20px","--text-subheading-5--fontSize--mobile":"16px","--text-subheading-5--fontFamily":"SBB","--text-subheading-5--fontWeight":"normal","--text-subheading-5--fontType":"bold","--text-subheading-5--fontStyle":"normal","--text-subheading-5--fontStretch":"normal","--text-subheading-5--lineHeight":"1.15","--text-subheading-5--marginLeft":"0px","--text-subheading-5--color":"var(--palette-color5)","--text-subheading-5--borderBottomStyle":"none","--text-subheading-5--textDecoration":"none","--text-subheading-5--letterSpacing":"-0.05","--text-subheading-5--textTransform":"none","--text-subheading-5--stroke":"var(--palette-color2)","--text-subheading-5--textAlign":"left","--text-subheading-5--justifyContent":"flex-start","--text-subheading-5--marginTop":"auto","--text-subheading-5--marginBottom":"0","--text-subheading-5--defaultTextStroke":"1px var(--palette-color2)","--text-subheading-5--WebkitTextStroke":"var(--text-style-unset)","--text-subheading-5--defaultTextShadow":"0px 4px 8px var(--greyscale2)","--text-subheading-5--textShadow":"var(--text-style-unset)","--text-subheading-6--fontSize--desktop":"18px","--text-subheading-6--fontSize--tablet":"16px","--text-subheading-6--fontSize--mobile":"14px","--text-subheading-6--fontFamily":"SBB","--text-subheading-6--fontWeight":"normal","--text-subheading-6--fontType":"bold","--text-subheading-6--fontStyle":"normal","--text-subheading-6--fontStretch":"normal","--text-subheading-6--lineHeight":"1.25","--text-subheading-6--marginLeft":"0px","--text-subheading-6--color":"var(--palette-color5)","--text-subheading-6--borderBottomStyle":"none","--text-subheading-6--textDecoration":"none","--text-subheading-6--letterSpacing":"0","--text-subheading-6--textTransform":"none","--text-subheading-6--stroke":"var(--palette-color2)","--text-subheading-6--textAlign":"left","--text-subheading-6--justifyContent":"flex-start","--text-subheading-6--marginTop":"auto","--text-subheading-6--marginBottom":"0","--text-subheading-6--defaultTextStroke":"1px var(--palette-color2)","--text-subheading-6--WebkitTextStroke":"var(--text-style-unset)","--text-subheading-6--defaultTextShadow":"0px 4px 8px var(--greyscale2)","--text-subheading-6--textShadow":"var(--text-style-unset)","--text-detail-1--fontSize--desktop":"20px","--text-detail-1--fontSize--tablet":"18px","--text-detail-1--fontSize--mobile":"16px","--text-detail-1--fontFamily":"SBB","--text-detail-1--fontWeight":"normal","--text-detail-1--fontType":"regular","--text-detail-1--fontStyle":"normal","--text-detail-1--fontStretch":"normal","--text-detail-1--lineHeight":"1.2","--text-detail-1--marginLeft":"0px","--text-detail-1--color":"var(--palette-color6)","--text-detail-1--borderBottomStyle":"none","--text-detail-1--textDecoration":"none","--text-detail-1--letterSpacing":"0","--text-detail-1--textTransform":"uppercase","--text-detail-1--stroke":"var(--palette-color5)","--text-detail-1--textAlign":"left","--text-detail-1--justifyContent":"flex-start","--text-detail-1--marginTop":"auto","--text-detail-1--marginBottom":"0","--text-detail-1--defaultTextStroke":"1px var(--palette-color2)","--text-detail-1--WebkitTextStroke":"var(--text-style-unset)","--text-detail-1--defaultTextShadow":"0px 4px 8px var(--greyscale2)","--text-detail-1--textShadow":"var(--text-style-unset)","--text-detail-2--fontSize--desktop":"16px","--text-detail-2--fontSize--tablet":"14px","--text-detail-2--fontSize--mobile":"12px","--text-detail-2--fontFamily":"SBB","--text-detail-2--fontWeight":"normal","--text-detail-2--fontType":"bold","--text-detail-2--fontStyle":"normal","--text-detail-2--fontStretch":"normal","--text-detail-2--lineHeight":"1.3","--text-detail-2--marginLeft":"0px","--text-detail-2--color":"var(--palette-color6)","--text-detail-2--borderBottomStyle":"none","--text-detail-2--textDecoration":"none","--text-detail-2--letterSpacing":"0","--text-detail-2--textTransform":"uppercase","--text-detail-2--stroke":"var(--palette-color2)","--text-detail-2--textAlign":"left","--text-detail-2--justifyContent":"flex-start","--text-detail-2--marginTop":"auto","--text-detail-2--marginBottom":"0","--text-detail-2--defaultTextStroke":"1px var(--palette-color2)","--text-detail-2--WebkitTextStroke":"var(--text-style-unset)","--text-detail-2--defaultTextShadow":"0px 4px 8px var(--greyscale2)","--text-detail-2--textShadow":"var(--text-style-unset)","--text-detail-3--fontSize--desktop":"16px","--text-detail-3--fontSize--tablet":"14px","--text-detail-3--fontSize--mobile":"12px","--text-detail-3--fontFamily":"SBB","--text-detail-3--fontWeight":"normal","--text-detail-3--fontType":"regular","--text-detail-3--fontStyle":"normal","--text-detail-3--fontStretch":"normal","--text-detail-3--lineHeight":"1.35","--text-detail-3--marginLeft":"0px","--text-detail-3--color":"var(--palette-color4)","--text-detail-3--borderBottomStyle":"none","--text-detail-3--textDecoration":"none","--text-detail-3--letterSpacing":"0.2","--text-detail-3--textTransform":"uppercase","--text-detail-3--stroke":"var(--palette-color2)","--text-detail-3--textAlign":"left","--text-detail-3--justifyContent":"flex-start","--text-detail-3--marginTop":"auto","--text-detail-3--marginBottom":"0","--text-detail-3--defaultTextStroke":"1px var(--palette-color2)","--text-detail-3--WebkitTextStroke":"var(--text-style-unset)","--text-detail-3--defaultTextShadow":"0px 4px 8px var(--greyscale2)","--text-detail-3--textShadow":"var(--text-style-unset)","--text-detail-4--fontSize--desktop":"22px","--text-detail-4--fontSize--tablet":"20px","--text-detail-4--fontSize--mobile":"20px","--text-detail-4--fontFamily":"SBB","--text-detail-4--fontWeight":"normal","--text-detail-4--fontType":"regular","--text-detail-4--fontStyle":"normal","--text-detail-4--fontStretch":"normal","--text-detail-4--lineHeight":"1.35","--text-detail-4--marginLeft":"0px","--text-detail-4--color":"var(--palette-color5)","--text-detail-4--borderBottomStyle":"none","--text-detail-4--textDecoration":"none","--text-detail-4--letterSpacing":"0","--text-detail-4--textTransform":"none","--text-detail-4--stroke":"var(--palette-color2)","--text-detail-4--textAlign":"center","--text-detail-4--justifyContent":"flex-start","--text-detail-4--marginTop":"auto","--text-detail-4--marginBottom":"0","--text-detail-4--defaultTextStroke":"1px var(--palette-color2)","--text-detail-4--WebkitTextStroke":"var(--text-style-unset)","--text-detail-4--defaultTextShadow":"0px 4px 8px var(--greyscale2)","--text-detail-4--textShadow":"var(--text-style-unset)","--text-variable-1--fontSize--desktop":"36px","--text-variable-1--fontSize--tablet":"32px","--text-variable-1--fontSize--mobile":"30px","--text-variable-1--fontFamily":"SBB","--text-variable-1--fontWeight":"normal","--text-variable-1--fontType":"bold","--text-variable-1--fontStyle":"normal","--text-variable-1--fontStretch":"normal","--text-variable-1--lineHeight":"1.2","--text-variable-1--marginLeft":"0px","--text-variable-1--color":"var(--palette-color7)","--text-variable-1--borderBottomStyle":"none","--text-variable-1--textDecoration":"none","--text-variable-1--letterSpacing":"0.02","--text-variable-1--textTransform":"none","--text-variable-1--stroke":"var(--palette-color2)","--text-variable-1--textAlign":"left","--text-variable-1--justifyContent":"flex-start","--text-variable-1--marginTop":"auto","--text-variable-1--marginBottom":"0","--text-variable-1--defaultTextStroke":"1px var(--palette-color2)","--text-variable-1--WebkitTextStroke":"var(--text-style-unset)","--text-variable-1--defaultTextShadow":"0px 4px 8px var(--greyscale2)","--text-variable-1--textShadow":"var(--text-style-unset)","--text-variable-2--fontSize--desktop":"24px","--text-variable-2--fontSize--tablet":"22px","--text-variable-2--fontSize--mobile":"20px","--text-variable-2--fontFamily":"SBB","--text-variable-2--fontWeight":"normal","--text-variable-2--fontType":"bold","--text-variable-2--fontStyle":"normal","--text-variable-2--fontStretch":"normal","--text-variable-2--lineHeight":"1.15","--text-variable-2--marginLeft":"0px","--text-variable-2--color":"var(--palette-color6)","--text-variable-2--borderBottomStyle":"none","--text-variable-2--textDecoration":"none","--text-variable-2--letterSpacing":"0","--text-variable-2--textTransform":"none","--text-variable-2--stroke":"var(--palette-color2)","--text-variable-2--textAlign":"left","--text-variable-2--justifyContent":"flex-start","--text-variable-2--marginTop":"auto","--text-variable-2--marginBottom":"0","--text-variable-2--defaultTextStroke":"1px var(--palette-color2)","--text-variable-2--WebkitTextStroke":"var(--text-style-unset)","--text-variable-2--defaultTextShadow":"0px 4px 8px var(--greyscale2)","--text-variable-2--textShadow":"var(--text-style-unset)","--text-variable-3--fontSize--desktop":"20px","--text-variable-3--fontSize--tablet":"18px","--text-variable-3--fontSize--mobile":"16px","--text-variable-3--fontFamily":"SBB","--text-variable-3--fontWeight":"normal","--text-variable-3--fontType":"bold","--text-variable-3--fontStyle":"normal","--text-variable-3--fontStretch":"normal","--text-variable-3--lineHeight":"1.2","--text-variable-3--marginLeft":"0px","--text-variable-3--color":"var(--palette-color6)","--text-variable-3--borderBottomStyle":"none","--text-variable-3--textDecoration":"none","--text-variable-3--letterSpacing":"0","--text-variable-3--textTransform":"none","--text-variable-3--stroke":"var(--palette-color2)","--text-variable-3--textAlign":"left","--text-variable-3--justifyContent":"flex-start","--text-variable-3--marginTop":"auto","--text-variable-3--marginBottom":"0","--text-variable-3--defaultTextStroke":"1px var(--palette-color2)","--text-variable-3--WebkitTextStroke":"var(--text-style-unset)","--text-variable-3--defaultTextShadow":"0px 4px 8px var(--greyscale2)","--text-variable-3--textShadow":"var(--text-style-unset)","--text-variable-4--fontSize--desktop":"16px","--text-variable-4--fontSize--tablet":"14px","--text-variable-4--fontSize--mobile":"12px","--text-variable-4--fontFamily":"SBB","--text-variable-4--fontWeight":"normal","--text-variable-4--fontType":"bold","--text-variable-4--fontStyle":"normal","--text-variable-4--fontStretch":"normal","--text-variable-4--lineHeight":"1.3","--text-variable-4--marginLeft":"0px","--text-variable-4--color":"var(--palette-color6)","--text-variable-4--borderBottomStyle":"none","--text-variable-4--textDecoration":"none","--text-variable-4--letterSpacing":"0.02","--text-variable-4--textTransform":"none","--text-variable-4--stroke":"var(--palette-color2)","--text-variable-4--textAlign":"left","--text-variable-4--justifyContent":"flex-start","--text-variable-4--marginTop":"auto","--text-variable-4--marginBottom":"0","--text-variable-4--defaultTextStroke":"1px var(--palette-color2)","--text-variable-4--WebkitTextStroke":"var(--text-style-unset)","--text-variable-4--defaultTextShadow":"0px 4px 8px var(--greyscale2)","--text-variable-4--textShadow":"var(--text-style-unset)","--text-question-1--fontSize--desktop":"48px","--text-question-1--fontSize--tablet":"20px","--text-question-1--fontSize--mobile":"20px","--text-question-1--fontFamily":"SBB","--text-question-1--fontWeight":"normal","--text-question-1--fontType":"regular","--text-question-1--fontStyle":"normal","--text-question-1--fontStretch":"normal","--text-question-1--lineHeight":"1.35","--text-question-1--marginLeft":"0px","--text-question-1--color":"var(--palette-color5)","--text-question-1--borderBottomStyle":"none","--text-question-1--textDecoration":"none","--text-question-1--letterSpacing":"0","--text-question-1--textTransform":"none","--text-question-1--stroke":"var(--palette-color2)","--text-question-1--textAlign":"left","--text-question-1--justifyContent":"flex-start","--text-question-1--marginTop":"auto","--text-question-1--marginBottom":"0","--text-question-1--defaultTextStroke":"1px var(--palette-color2)","--text-question-1--WebkitTextStroke":"var(--text-style-unset)","--text-question-1--defaultTextShadow":"0px 4px 8px var(--greyscale2)","--text-question-1--textShadow":"var(--text-style-unset)","--text-question-2--fontSize--desktop":"24px","--text-question-2--fontSize--tablet":"20px","--text-question-2--fontSize--mobile":"20px","--text-question-2--fontFamily":"SBB","--text-question-2--fontWeight":"normal","--text-question-2--fontType":"bold","--text-question-2--fontStyle":"normal","--text-question-2--fontStretch":"normal","--text-question-2--lineHeight":"1.35","--text-question-2--marginLeft":"0px","--text-question-2--color":"var(--palette-color5)","--text-question-2--borderBottomStyle":"none","--text-question-2--textDecoration":"none","--text-question-2--letterSpacing":"0","--text-question-2--textTransform":"none","--text-question-2--stroke":"var(--palette-color2)","--text-question-2--textAlign":"left","--text-question-2--justifyContent":"flex-start","--text-question-2--marginTop":"auto","--text-question-2--marginBottom":"0","--text-question-2--defaultTextStroke":"1px var(--palette-color2)","--text-question-2--WebkitTextStroke":"var(--text-style-unset)","--text-question-2--defaultTextShadow":"0px 4px 8px var(--greyscale2)","--text-question-2--textShadow":"var(--text-style-unset)","--text-button-1--fontSize--desktop":"16px","--text-button-1--fontSize--tablet":"16px","--text-button-1--fontSize--mobile":"16px","--text-button-1--fontFamily":"var(--font2)","--text-button-1--fontWeight":"normal","--text-button-1--fontType":"regular","--text-button-1--fontStyle":"normal","--text-button-1--fontStretch":"normal","--text-button-1--lineHeight":"1.25","--text-button-1--marginLeft":"0px","--text-button-1--color":"var(--palette-color7)","--text-button-1--borderBottomStyle":"none","--text-button-1--textDecoration":"none","--text-button-1--letterSpacing":"0.12","--text-button-1--textTransform":"uppercase","--text-button-1--stroke":"var(--palette-color2)","--text-button-1--textAlign":"center","--text-button-1--justifyContent":"flex-start","--text-button-1--marginTop":"auto","--text-button-1--marginBottom":"0","--text-button-1--defaultTextStroke":"1px var(--palette-color2)","--text-button-1--WebkitTextStroke":"var(--text-style-unset)","--text-button-1--defaultTextShadow":"0px 4px 8px var(--greyscale2)","--text-button-1--textShadow":"var(--text-style-unset)","--text-button-2--fontSize--desktop":"16px","--text-button-2--fontSize--tablet":"16px","--text-button-2--fontSize--mobile":"16px","--text-button-2--fontFamily":"var(--font2)","--text-button-2--fontWeight":"normal","--text-button-2--fontType":"regular","--text-button-2--fontStyle":"normal","--text-button-2--fontStretch":"normal","--text-button-2--lineHeight":"1.25","--text-button-2--marginLeft":"0px","--text-button-2--color":"var(--palette-color0)","--text-button-2--borderBottomStyle":"none","--text-button-2--textDecoration":"none","--text-button-2--letterSpacing":"0.12","--text-button-2--textTransform":"uppercase","--text-button-2--stroke":"var(--palette-color2)","--text-button-2--textAlign":"center","--text-button-2--justifyContent":"flex-start","--text-button-2--marginTop":"auto","--text-button-2--marginBottom":"0","--text-button-2--defaultTextStroke":"1px var(--palette-color2)","--text-button-2--WebkitTextStroke":"var(--text-style-unset)","--text-button-2--defaultTextShadow":"0px 4px 8px var(--greyscale2)","--text-button-2--textShadow":"var(--text-style-unset)","--text-button-3--fontSize--desktop":"16px","--text-button-3--fontSize--tablet":"16px","--text-button-3--fontSize--mobile":"16px","--text-button-3--fontFamily":"var(--font2)","--text-button-3--fontWeight":"normal","--text-button-3--fontType":"regular","--text-button-3--fontStyle":"normal","--text-button-3--fontStretch":"normal","--text-button-3--lineHeight":"1.25","--text-button-3--marginLeft":"0px","--text-button-3--color":"var(--palette-color5)","--text-button-3--borderBottomStyle":"none","--text-button-3--textDecoration":"none","--text-button-3--letterSpacing":"0.12","--text-button-3--textTransform":"uppercase","--text-button-3--stroke":"var(--palette-color2)","--text-button-3--textAlign":"center","--text-button-3--justifyContent":"flex-start","--text-button-3--marginTop":"auto","--text-button-3--marginBottom":"0","--text-button-3--defaultTextStroke":"1px var(--palette-color2)","--text-button-3--WebkitTextStroke":"var(--text-style-unset)","--text-button-3--defaultTextShadow":"0px 4px 8px var(--greyscale2)","--text-button-3--textShadow":"var(--text-style-unset)","--text-button-4--fontSize--desktop":"16px","--text-button-4--fontSize--tablet":"16px","--text-button-4--fontSize--mobile":"16px","--text-button-4--fontFamily":"var(--font2)","--text-button-4--fontWeight":"normal","--text-button-4--fontType":"regular","--text-button-4--fontStyle":"normal","--text-button-4--fontStretch":"normal","--text-button-4--lineHeight":"1.25","--text-button-4--marginLeft":"0px","--text-button-4--color":"var(--palette-color4)","--text-button-4--borderBottomStyle":"none","--text-button-4--textDecoration":"none","--text-button-4--letterSpacing":"0.12","--text-button-4--textTransform":"uppercase","--text-button-4--stroke":"var(--palette-color2)","--text-button-4--textAlign":"center","--text-button-4--justifyContent":"flex-start","--text-button-4--marginTop":"auto","--text-button-4--marginBottom":"0","--text-button-4--defaultTextStroke":"1px var(--palette-color2)","--text-button-4--WebkitTextStroke":"var(--text-style-unset)","--text-button-4--defaultTextShadow":"0px 4px 8px var(--greyscale2)","--text-button-4--textShadow":"var(--text-style-unset)","--text-uic-1--fontSize--desktop":"18px","--text-uic-1--fontSize--tablet":"18px","--text-uic-1--fontSize--mobile":"18px","--text-uic-1--fontFamily":"var(--font1)","--text-uic-1--fontWeight":"normal","--text-uic-1--fontType":"italic","--text-uic-1--fontStyle":"normal","--text-uic-1--fontStretch":"normal","--text-uic-1--lineHeight":"1.35","--text-uic-1--marginLeft":"0px","--text-uic-1--color":"var(--palette-color4)","--text-uic-1--borderBottomStyle":"none","--text-uic-1--textDecoration":"none","--text-uic-1--letterSpacing":"0","--text-uic-1--textTransform":"none","--text-uic-1--stroke":"var(--palette-color2)","--text-uic-1--textAlign":"left","--text-uic-1--justifyContent":"flex-start","--text-uic-1--marginTop":"auto","--text-uic-1--marginBottom":"0","--text-uic-1--defaultTextStroke":"1px var(--palette-color2)","--text-uic-1--WebkitTextStroke":"var(--text-style-unset)","--text-uic-1--defaultTextShadow":"0px 4px 8px var(--greyscale2)","--text-uic-1--textShadow":"var(--text-style-unset)","--text-uic-2--fontSize--desktop":"18px","--text-uic-2--fontSize--tablet":"18px","--text-uic-2--fontSize--mobile":"18px","--text-uic-2--fontFamily":"var(--font1)","--text-uic-2--fontWeight":"normal","--text-uic-2--fontType":"italic","--text-uic-2--fontStyle":"normal","--text-uic-2--fontStretch":"normal","--text-uic-2--lineHeight":"1.35","--text-uic-2--marginLeft":"0px","--text-uic-2--color":"var(--palette-color1)","--text-uic-2--borderBottomStyle":"none","--text-uic-2--textDecoration":"none","--text-uic-2--letterSpacing":"0","--text-uic-2--textTransform":"none","--text-uic-2--stroke":"var(--palette-color2)","--text-uic-2--textAlign":"left","--text-uic-2--justifyContent":"flex-start","--text-uic-2--marginTop":"auto","--text-uic-2--marginBottom":"0","--text-uic-2--defaultTextStroke":"1px var(--palette-color2)","--text-uic-2--WebkitTextStroke":"var(--text-style-unset)","--text-uic-2--defaultTextShadow":"0px 4px 8px var(--greyscale2)","--text-uic-2--textShadow":"var(--text-style-unset)","--text-uic-3--fontSize--desktop":"22px","--text-uic-3--fontSize--tablet":"22px","--text-uic-3--fontSize--mobile":"22px","--text-uic-3--fontFamily":"var(--font1)","--text-uic-3--fontWeight":"normal","--text-uic-3--fontType":"regular","--text-uic-3--fontStyle":"normal","--text-uic-3--fontStretch":"normal","--text-uic-3--lineHeight":"1.25","--text-uic-3--marginLeft":"0px","--text-uic-3--color":"var(--palette-color5)","--text-uic-3--borderBottomStyle":"none","--text-uic-3--textDecoration":"none","--text-uic-3--letterSpacing":"0","--text-uic-3--textTransform":"none","--text-uic-3--stroke":"var(--palette-color2)","--text-uic-3--textAlign":"left","--text-uic-3--justifyContent":"flex-start","--text-uic-3--marginTop":"auto","--text-uic-3--marginBottom":"0","--text-uic-3--defaultTextStroke":"1px var(--palette-color2)","--text-uic-3--WebkitTextStroke":"var(--text-style-unset)","--text-uic-3--defaultTextShadow":"0px 4px 8px var(--greyscale2)","--text-uic-3--textShadow":"var(--text-style-unset)","--text-uic-4--fontSize--desktop":"22px","--text-uic-4--fontSize--tablet":"22px","--text-uic-4--fontSize--mobile":"22px","--text-uic-4--fontFamily":"var(--font1)","--text-uic-4--fontWeight":"normal","--text-uic-4--fontType":"regular","--text-uic-4--fontStyle":"normal","--text-uic-4--fontStretch":"normal","--text-uic-4--lineHeight":"1.25","--text-uic-4--marginLeft":"0px","--text-uic-4--color":"var(--palette-color4)","--text-uic-4--borderBottomStyle":"none","--text-uic-4--textDecoration":"none","--text-uic-4--letterSpacing":"0","--text-uic-4--textTransform":"none","--text-uic-4--stroke":"var(--palette-color2)","--text-uic-4--textAlign":"left","--text-uic-4--justifyContent":"flex-start","--text-uic-4--marginTop":"auto","--text-uic-4--marginBottom":"0","--text-uic-4--defaultTextStroke":"1px var(--palette-color2)","--text-uic-4--WebkitTextStroke":"var(--text-style-unset)","--text-uic-4--defaultTextShadow":"0px 4px 8px var(--greyscale2)","--text-uic-4--textShadow":"var(--text-style-unset)","--text-uic-5--fontSize--desktop":"22px","--text-uic-5--fontSize--tablet":"22px","--text-uic-5--fontSize--mobile":"22px","--text-uic-5--fontFamily":"var(--font1)","--text-uic-5--fontWeight":"normal","--text-uic-5--fontType":"regular","--text-uic-5--fontStyle":"normal","--text-uic-5--fontStretch":"normal","--text-uic-5--lineHeight":"1.25","--text-uic-5--marginLeft":"0px","--text-uic-5--color":"var(--palette-color3)","--text-uic-5--borderBottomStyle":"none","--text-uic-5--textDecoration":"none","--text-uic-5--letterSpacing":"0","--text-uic-5--textTransform":"none","--text-uic-5--stroke":"var(--palette-color2)","--text-uic-5--textAlign":"left","--text-uic-5--justifyContent":"flex-start","--text-uic-5--marginTop":"auto","--text-uic-5--marginBottom":"0","--text-uic-5--defaultTextStroke":"1px var(--palette-color2)","--text-uic-5--WebkitTextStroke":"var(--text-style-unset)","--text-uic-5--defaultTextShadow":"0px 4px 8px var(--greyscale2)","--text-uic-5--textShadow":"var(--text-style-unset)","--text-uic-6--fontSize--desktop":"16px","--text-uic-6--fontSize--tablet":"16px","--text-uic-6--fontSize--mobile":"16px","--text-uic-6--fontFamily":"var(--font2)","--text-uic-6--fontWeight":"normal","--text-uic-6--fontType":"bold","--text-uic-6--fontStyle":"normal","--text-uic-6--fontStretch":"normal","--text-uic-6--lineHeight":"1.5","--text-uic-6--marginLeft":"0px","--text-uic-6--color":"var(--palette-color7)","--text-uic-6--borderBottomStyle":"none","--text-uic-6--textDecoration":"none","--text-uic-6--letterSpacing":"0.12","--text-uic-6--textTransform":"none","--text-uic-6--stroke":"var(--palette-color2)","--text-uic-6--textAlign":"left","--text-uic-6--justifyContent":"flex-start","--text-uic-6--marginTop":"auto","--text-uic-6--marginBottom":"0","--text-uic-6--defaultTextStroke":"1px var(--palette-color2)","--text-uic-6--WebkitTextStroke":"var(--text-style-unset)","--text-uic-6--defaultTextShadow":"0px 4px 8px var(--greyscale2)","--text-uic-6--textShadow":"var(--text-style-unset)","--text-closedcaptions--fontSize--desktop":"24px","--text-closedcaptions--fontSize--tablet":"24px","--text-closedcaptions--fontSize--mobile":"24px","--text-closedcaptions--fontFamily":"var(--font1)","--text-closedcaptions--fontWeight":"normal","--text-closedcaptions--fontType":"regular","--text-closedcaptions--fontStyle":"normal","--text-closedcaptions--fontStretch":"normal","--text-closedcaptions--lineHeight":"1.35","--text-closedcaptions--marginLeft":"0px","--text-closedcaptions--color":"var(--white)","--text-closedcaptions--borderBottomStyle":"none","--text-closedcaptions--textDecoration":"none","--text-closedcaptions--letterSpacing":"0","--text-closedcaptions--textTransform":"none","--text-closedcaptions--stroke":"var(--palette-color2)","--text-closedcaptions--textAlign":"center","--text-closedcaptions--justifyContent":"flex-start","--text-closedcaptions--marginTop":"auto","--text-closedcaptions--marginBottom":"0","--text-closedcaptions--defaultTextStroke":"1px var(--palette-color2)","--text-closedcaptions--WebkitTextStroke":"var(--text-style-unset)","--text-closedcaptions--defaultTextShadow":"0px 4px 8px var(--greyscale2)","--text-closedcaptions--textShadow":"var(--text-style-unset)","--text-caption--fontSize--desktop":"24px","--text-caption--fontSize--tablet":"24px","--text-caption--fontSize--mobile":"24px","--text-caption--fontFamily":"var(--font1)","--text-caption--fontWeight":"normal","--text-caption--fontType":"regular","--text-caption--fontStyle":"normal","--text-caption--fontStretch":"normal","--text-caption--lineHeight":"1.35","--text-caption--marginLeft":"0px","--text-caption--color":"var(--palette-color6)","--text-caption--borderBottomStyle":"none","--text-caption--textDecoration":"none","--text-caption--letterSpacing":"0","--text-caption--textTransform":"none","--text-caption--stroke":"var(--palette-color2)","--text-caption--textAlign":"center","--text-caption--justifyContent":"flex-start","--text-caption--marginTop":"auto","--text-caption--marginBottom":"0","--text-caption--defaultTextStroke":"1px var(--palette-color2)","--text-caption--WebkitTextStroke":"var(--text-style-unset)","--text-caption--defaultTextShadow":"0px 4px 8px var(--greyscale2)","--text-caption--textShadow":"var(--text-style-unset)","--text-caption_correct--fontSize--desktop":"24px","--text-caption_correct--fontSize--tablet":"24px","--text-caption_correct--fontSize--mobile":"24px","--text-caption_correct--fontFamily":"var(--font1)","--text-caption_correct--fontWeight":"normal","--text-caption_correct--fontType":"regular","--text-caption_correct--fontStyle":"normal","--text-caption_correct--fontStretch":"normal","--text-caption_correct--lineHeight":"1.35","--text-caption_correct--marginLeft":"0px","--text-caption_correct--color":"var(--palette-color6)","--text-caption_correct--borderBottomStyle":"none","--text-caption_correct--textDecoration":"none","--text-caption_correct--letterSpacing":"0","--text-caption_correct--textTransform":"none","--text-caption_correct--stroke":"var(--palette-color2)","--text-caption_correct--textAlign":"center","--text-caption_correct--justifyContent":"flex-start","--text-caption_correct--marginTop":"auto","--text-caption_correct--marginBottom":"0","--text-caption_correct--defaultTextStroke":"1px var(--palette-color2)","--text-caption_correct--WebkitTextStroke":"var(--text-style-unset)","--text-caption_correct--defaultTextShadow":"0px 4px 8px var(--greyscale2)","--text-caption_correct--textShadow":"var(--text-style-unset)","--text-caption_incorrect--fontSize--desktop":"24px","--text-caption_incorrect--fontSize--tablet":"24px","--text-caption_incorrect--fontSize--mobile":"24px","--text-caption_incorrect--fontFamily":"var(--font1)","--text-caption_incorrect--fontWeight":"normal","--text-caption_incorrect--fontType":"regular","--text-caption_incorrect--fontStyle":"normal","--text-caption_incorrect--fontStretch":"normal","--text-caption_incorrect--lineHeight":"1.35","--text-caption_incorrect--marginLeft":"0px","--text-caption_incorrect--color":"var(--palette-color6)","--text-caption_incorrect--borderBottomStyle":"none","--text-caption_incorrect--textDecoration":"none","--text-caption_incorrect--letterSpacing":"0","--text-caption_incorrect--textTransform":"none","--text-caption_incorrect--stroke":"var(--palette-color2)","--text-caption_incorrect--textAlign":"center","--text-caption_incorrect--justifyContent":"flex-start","--text-caption_incorrect--marginTop":"auto","--text-caption_incorrect--marginBottom":"0","--text-caption_incorrect--defaultTextStroke":"1px var(--palette-color2)","--text-caption_incorrect--WebkitTextStroke":"var(--text-style-unset)","--text-caption_incorrect--defaultTextShadow":"0px 4px 8px var(--greyscale2)","--text-caption_incorrect--textShadow":"var(--text-style-unset)","--text-caption_incomplete--fontSize--desktop":"24px","--text-caption_incomplete--fontSize--tablet":"24px","--text-caption_incomplete--fontSize--mobile":"24px","--text-caption_incomplete--fontFamily":"var(--font1)","--text-caption_incomplete--fontWeight":"normal","--text-caption_incomplete--fontType":"regular","--text-caption_incomplete--fontStyle":"normal","--text-caption_incomplete--fontStretch":"normal","--text-caption_incomplete--lineHeight":"1.35","--text-caption_incomplete--marginLeft":"0px","--text-caption_incomplete--color":"var(--palette-color6)","--text-caption_incomplete--borderBottomStyle":"none","--text-caption_incomplete--textDecoration":"none","--text-caption_incomplete--letterSpacing":"0","--text-caption_incomplete--textTransform":"none","--text-caption_incomplete--stroke":"var(--palette-color2)","--text-caption_incomplete--textAlign":"center","--text-caption_incomplete--justifyContent":"flex-start","--text-caption_incomplete--marginTop":"auto","--text-caption_incomplete--marginBottom":"0","--text-caption_incomplete--defaultTextStroke":"1px var(--palette-color2)","--text-caption_incomplete--WebkitTextStroke":"var(--text-style-unset)","--text-caption_incomplete--defaultTextShadow":"0px 4px 8px var(--greyscale2)","--text-caption_incomplete--textShadow":"var(--text-style-unset)","--text-caption_hint--fontSize--desktop":"24px","--text-caption_hint--fontSize--tablet":"24px","--text-caption_hint--fontSize--mobile":"24px","--text-caption_hint--fontFamily":"var(--font1)","--text-caption_hint--fontWeight":"normal","--text-caption_hint--fontType":"regular","--text-caption_hint--fontStyle":"normal","--text-caption_hint--fontStretch":"normal","--text-caption_hint--lineHeight":"1.35","--text-caption_hint--marginLeft":"0px","--text-caption_hint--color":"var(--palette-color6)","--text-caption_hint--borderBottomStyle":"none","--text-caption_hint--textDecoration":"none","--text-caption_hint--letterSpacing":"0","--text-caption_hint--textTransform":"none","--text-caption_hint--stroke":"var(--palette-color2)","--text-caption_hint--textAlign":"center","--text-caption_hint--justifyContent":"flex-start","--text-caption_hint--marginTop":"auto","--text-caption_hint--marginBottom":"0","--text-caption_hint--defaultTextStroke":"1px var(--palette-color2)","--text-caption_hint--WebkitTextStroke":"var(--text-style-unset)","--text-caption_hint--defaultTextShadow":"0px 4px 8px var(--greyscale2)","--text-caption_hint--textShadow":"var(--text-style-unset)","--text-caption_retry--fontSize--desktop":"24px","--text-caption_retry--fontSize--tablet":"24px","--text-caption_retry--fontSize--mobile":"24px","--text-caption_retry--fontFamily":"var(--font1)","--text-caption_retry--fontWeight":"normal","--text-caption_retry--fontType":"regular","--text-caption_retry--fontStyle":"normal","--text-caption_retry--fontStretch":"normal","--text-caption_retry--lineHeight":"1.35","--text-caption_retry--marginLeft":"0px","--text-caption_retry--color":"var(--palette-color6)","--text-caption_retry--borderBottomStyle":"none","--text-caption_retry--textDecoration":"none","--text-caption_retry--letterSpacing":"0","--text-caption_retry--textTransform":"none","--text-caption_retry--stroke":"var(--palette-color2)","--text-caption_retry--textAlign":"center","--text-caption_retry--justifyContent":"flex-start","--text-caption_retry--marginTop":"auto","--text-caption_retry--marginBottom":"0","--text-caption_retry--defaultTextStroke":"1px var(--palette-color2)","--text-caption_retry--WebkitTextStroke":"var(--text-style-unset)","--text-caption_retry--defaultTextShadow":"0px 4px 8px var(--greyscale2)","--text-caption_retry--textShadow":"var(--text-style-unset)","--text-caption_timeout--fontSize--desktop":"24px","--text-caption_timeout--fontSize--tablet":"24px","--text-caption_timeout--fontSize--mobile":"24px","--text-caption_timeout--fontFamily":"var(--font1)","--text-caption_timeout--fontWeight":"normal","--text-caption_timeout--fontType":"regular","--text-caption_timeout--fontStyle":"normal","--text-caption_timeout--fontStretch":"normal","--text-caption_timeout--lineHeight":"1.35","--text-caption_timeout--marginLeft":"0px","--text-caption_timeout--color":"var(--palette-color6)","--text-caption_timeout--borderBottomStyle":"none","--text-caption_timeout--textDecoration":"none","--text-caption_timeout--letterSpacing":"0","--text-caption_timeout--textTransform":"none","--text-caption_timeout--stroke":"var(--palette-color2)","--text-caption_timeout--textAlign":"center","--text-caption_timeout--justifyContent":"flex-start","--text-caption_timeout--marginTop":"auto","--text-caption_timeout--marginBottom":"0","--text-caption_timeout--defaultTextStroke":"1px var(--palette-color2)","--text-caption_timeout--WebkitTextStroke":"var(--text-style-unset)","--text-caption_timeout--defaultTextShadow":"0px 4px 8px var(--greyscale2)","--text-caption_timeout--textShadow":"var(--text-style-unset)","--text-caption_1--fontSize--desktop":"18px","--text-caption_1--fontSize--tablet":"18px","--text-caption_1--fontSize--mobile":"16px","--text-caption_1--fontFamily":"var(--font2)","--text-caption_1--fontWeight":"normal","--text-caption_1--fontType":"regular","--text-caption_1--fontStyle":"normal","--text-caption_1--fontStretch":"normal","--text-caption_1--lineHeight":"1.2","--text-caption_1--marginLeft":"0px","--text-caption_1--color":"#FFFFFF","--text-caption_1--borderBottomStyle":"none","--text-caption_1--textDecoration":"none","--text-caption_1--letterSpacing":"0","--text-caption_1--textTransform":"none","--text-caption_1--stroke":"#00000000","--text-caption_1--textAlign":"left","--text-caption_1--justifyContent":"flex-start","--text-caption_1--marginTop":"auto","--text-caption_1--marginBottom":"0","--text-caption_1--defaultTextStroke":"1px #00000000","--text-caption_1--WebkitTextStroke":"var(--text-style-unset)","--text-caption_1--defaultTextShadow":"0px 4px 8px var(--greyscale2)","--text-caption_1--textShadow":"var(--text-style-unset)","--text-caption_2--fontSize--desktop":"20px","--text-caption_2--fontSize--tablet":"20px","--text-caption_2--fontSize--mobile":"18px","--text-caption_2--fontFamily":"var(--font2)","--text-caption_2--fontWeight":"normal","--text-caption_2--fontType":"bold","--text-caption_2--fontStyle":"normal","--text-caption_2--fontStretch":"normal","--text-caption_2--lineHeight":"1.2","--text-caption_2--marginLeft":"0px","--text-caption_2--color":"#FFFFFF","--text-caption_2--borderBottomStyle":"none","--text-caption_2--textDecoration":"none","--text-caption_2--letterSpacing":"0","--text-caption_2--textTransform":"none","--text-caption_2--stroke":"#00000000","--text-caption_2--textAlign":"left","--text-caption_2--justifyContent":"flex-start","--text-caption_2--marginTop":"auto","--text-caption_2--marginBottom":"0","--text-caption_2--defaultTextStroke":"1px #00000000","--text-caption_2--WebkitTextStroke":"var(--text-style-unset)","--text-caption_2--defaultTextShadow":"0px 4px 8px var(--greyscale2)","--text-caption_2--textShadow":"var(--text-style-unset)","--text-caption_3--fontSize--desktop":"24px","--text-caption_3--fontSize--tablet":"24px","--text-caption_3--fontSize--mobile":"22px","--text-caption_3--fontFamily":"var(--font1)","--text-caption_3--fontWeight":"normal","--text-caption_3--fontType":"italic","--text-caption_3--fontStyle":"normal","--text-caption_3--fontStretch":"normal","--text-caption_3--lineHeight":"1.2","--text-caption_3--marginLeft":"0px","--text-caption_3--color":"#FFFFFF","--text-caption_3--borderBottomStyle":"none","--text-caption_3--textDecoration":"none","--text-caption_3--letterSpacing":"0","--text-caption_3--textTransform":"none","--text-caption_3--stroke":"#00000000","--text-caption_3--textAlign":"left","--text-caption_3--justifyContent":"flex-start","--text-caption_3--marginTop":"auto","--text-caption_3--marginBottom":"0","--text-caption_3--defaultTextStroke":"1px #00000000","--text-caption_3--WebkitTextStroke":"var(--text-style-unset)","--text-caption_3--defaultTextShadow":"0px 4px 8px var(--greyscale2)","--text-caption_3--textShadow":"var(--text-style-unset)","--text-caption_4--fontSize--desktop":"22px","--text-caption_4--fontSize--tablet":"22px","--text-caption_4--fontSize--mobile":"20px","--text-caption_4--fontFamily":"var(--font2)","--text-caption_4--fontWeight":"normal","--text-caption_4--fontType":"italic","--text-caption_4--fontStyle":"normal","--text-caption_4--fontStretch":"normal","--text-caption_4--lineHeight":"1.3","--text-caption_4--marginLeft":"0px","--text-caption_4--color":"#666666","--text-caption_4--borderBottomStyle":"none","--text-caption_4--textDecoration":"none","--text-caption_4--letterSpacing":"0","--text-caption_4--textTransform":"none","--text-caption_4--stroke":"#00000000","--text-caption_4--textAlign":"left","--text-caption_4--justifyContent":"flex-start","--text-caption_4--marginTop":"auto","--text-caption_4--marginBottom":"0","--text-caption_4--defaultTextStroke":"1px #00000000","--text-caption_4--WebkitTextStroke":"var(--text-style-unset)","--text-caption_4--defaultTextShadow":"0px 4px 8px var(--greyscale2)","--text-caption_4--textShadow":"var(--text-style-unset)","--text-comment-box--fontSize--desktop":"20px","--text-comment-box--fontSize--tablet":"20px","--text-comment-box--fontSize--mobile":"20px","--text-comment-box--fontFamily":"var(--font1)","--text-comment-box--fontWeight":"normal","--text-comment-box--fontType":"regular","--text-comment-box--fontStyle":"normal","--text-comment-box--fontStretch":"normal","--text-comment-box--lineHeight":"1.35","--text-comment-box--marginLeft":"0px","--text-comment-box--color":"var(--palette-color6)","--text-comment-box--borderBottomStyle":"none","--text-comment-box--textDecoration":"none","--text-comment-box--letterSpacing":"0","--text-comment-box--textTransform":"none","--text-comment-box--stroke":"var(--palette-color2)","--text-comment-box--textAlign":"center","--text-comment-box--justifyContent":"flex-start","--text-comment-box--marginTop":"auto","--text-comment-box--marginBottom":"0","--text-comment-box--defaultTextStroke":"1px var(--palette-color2)","--text-comment-box--WebkitTextStroke":"var(--text-style-unset)","--text-comment-box--defaultTextShadow":"0px 4px 8px var(--greyscale2)","--text-comment-box--textShadow":"var(--text-style-unset)","--theme_image_default--strokeColor":"var(--palette-color1)","--theme_image_default--boxShadowColor":"var(--greyscale3)","--theme_image_greyscale--strokeColor":"var(--palette-color1)","--theme_image_greyscale--boxShadowColor":"var(--greyscale3)","--theme_image_greyscale--intensity":100,"--theme_image_lighten--strokeColor":"var(--palette-color1)","--theme_image_lighten--boxShadowColor":"var(--greyscale3)","--theme_image_lighten--intensity":80,"--theme_image_darken--strokeColor":"var(--palette-color1)","--theme_image_darken--boxShadowColor":"var(--greyscale3)","--theme_image_darken--intensity":80,"--theme_image_overlay--strokeColor":"var(--palette-color1)","--theme_image_overlay--boxShadowColor":"var(--greyscale3)","--theme_image_overlay--intensity":80,"--theme_image_overlay--primaryFillColor":"var(--palette-color2)","--theme_image_overlay--secondaryFillColor":"var(--palette-color1)","--theme_image_colorize--strokeColor":"var(--palette-color1)","--theme_image_colorize--boxShadowColor":"var(--greyscale3)","--theme_image_colorize--intensity":80,"--theme_image_colorize--primaryFillColor":"var(--palette-color4)","--theme_image_colorize--secondaryFillColor":"var(--palette-color1)","--button-normal--primaryColor":"#eb0000","--button-normal--borderColor":"var(--palette-color7)","--button-normal--shadowColor":"var(--greyscale3)","--text-button-normal--color":"var(--palette-color0)","--text-button-normal--fontFamily":"SBB","--text-button-normal--fontType":"regular","--text-button-normal--fontSize--desktop":"16px","--text-button-normal--fontSize--tablet":"16px","--text-button-normal--fontSize--mobile":"16px","--button-selected--primaryColor":"#212121","--button-selected--borderColor":"#212121","--button-selected--shadowColor":"var(--greyscale3)","--text-button-selected--color":"#FFFFFF","--text-button-selected--fontFamily":"SBB","--text-button-selected--fontType":"regular","--text-button-selected--fontSize--desktop":"16px","--text-button-selected--fontSize--tablet":"16px","--text-button-selected--fontSize--mobile":"16px","--button-disabled--primaryColor":"var(--palette-color3)","--button-disabled--borderColor":"var(--palette-color3)","--button-disabled--shadowColor":"var(--greyscale3)","--text-button-disabled--color":"var(--palette-color4)","--text-button-disabled--fontFamily":"SBB","--text-button-disabled--fontType":"regular","--text-button-disabled--fontSize--desktop":"16px","--text-button-disabled--fontSize--tablet":"16px","--text-button-disabled--fontSize--mobile":"16px","--button-hover--primaryColor":"#c60018","--button-hover--borderColor":"#c60018","--button-hover--shadowColor":"var(--greyscale3)","--text-button-hover--color":"var(--palette-color0)","--text-button-hover--fontFamily":"SBB","--text-button-hover--fontType":"regular","--text-button-hover--fontSize--desktop":"16px","--text-button-hover--fontSize--tablet":"16px","--text-button-hover--fontSize--mobile":"16px","--button-visited--primaryColor":"#eb0000","--button-visited--borderColor":"#eb0000","--button-visited--shadowColor":"var(--greyscale3)","--text-button-visited--color":"var(--palette-color0)","--text-button-visited--fontFamily":"SBB","--text-button-visited--fontType":"regular","--text-button-visited--fontSize--desktop":"16px","--text-button-visited--fontSize--tablet":"16px","--text-button-visited--fontSize--mobile":"16px","--checkbox-normal--primaryColor":"var(--palette-color0)","--checkbox-normal--borderColor":"#767676","--checkbox-normal--shadowColor":"var(--greyscale3)","--text-checkbox-normal--color":"#212121","--text-checkbox-normal--fontFamily":"SBB","--text-checkbox-normal--fontType":"regular","--text-checkbox-normal--fontSize--desktop":"22px","--text-checkbox-normal--fontSize--tablet":"20px","--text-checkbox-normal--fontSize--mobile":"20px","--checkbox-selected--primaryColor":"#FFFFFF","--checkbox-selected--borderColor":"#212121","--checkbox-selected--shadowColor":"#dcdcdc","--text-checkbox-selected--color":"#212121","--text-checkbox-selected--fontFamily":"SBB","--text-checkbox-selected--fontType":"regular","--text-checkbox-selected--fontSize--desktop":"22px","--text-checkbox-selected--fontSize--tablet":"20px","--text-checkbox-selected--fontSize--mobile":"20px","--checkbox-disabled-checked--primaryColor":"var(--palette-color3)","--checkbox-disabled-checked--borderColor":"var(--palette-color3)","--checkbox-disabled-checked--shadowColor":"var(--greyscale3)","--text-checkbox-disabled-checked--color":"var(--palette-color3)","--text-checkbox-disabled-checked--fontFamily":"var(--font1)","--text-checkbox-disabled-checked--fontType":"regular","--text-checkbox-disabled-checked--fontSize--desktop":"22px","--text-checkbox-disabled-checked--fontSize--tablet":"20px","--text-checkbox-disabled-checked--fontSize--mobile":"20px","--checkbox-hover--primaryColor":"var(--palette-color0)","--checkbox-hover--borderColor":"#212121","--checkbox-hover--shadowColor":"var(--greyscale3)","--text-checkbox-hover--color":"var(--palette-color5)","--text-checkbox-hover--fontFamily":"SBB","--text-checkbox-hover--fontType":"regular","--text-checkbox-hover--fontSize--desktop":"22px","--text-checkbox-hover--fontSize--tablet":"20px","--text-checkbox-hover--fontSize--mobile":"20px","--checkbox-disabled-unchecked--primaryColor":"var(--palette-color3)","--checkbox-disabled-unchecked--borderColor":"var(--palette-color3)","--checkbox-disabled-unchecked--shadowColor":"var(--greyscale3)","--text-checkbox-disabled-unchecked--color":"var(--palette-color3)","--text-checkbox-disabled-unchecked--fontFamily":"var(--font1)","--text-checkbox-disabled-unchecked--fontType":"regular","--text-checkbox-disabled-unchecked--fontSize--desktop":"22px","--text-checkbox-disabled-unchecked--fontSize--tablet":"20px","--text-checkbox-disabled-unchecked--fontSize--mobile":"20px","--inputfield-normal--primaryColor":"var(--palette-color0)","--inputfield-normal--borderColor":"#767676","--inputfield-normal--shadowColor":"var(--greyscale3)","--text-inputfield-normal--color":"#212121","--text-inputfield-normal--fontFamily":"SBB","--text-inputfield-normal--fontType":"regular","--text-inputfield-normal--fontSize--desktop":"18px","--text-inputfield-normal--fontSize--tablet":"20px","--text-inputfield-normal--fontSize--mobile":"20px","--inputfield-active--primaryColor":"var(--palette-color0)","--inputfield-active--borderColor":"#212121","--inputfield-active--shadowColor":"#var(--greyscale3)","--text-inputfield-active--color":"#212121","--text-inputfield-active--fontFamily":"SBB","--text-inputfield-active--fontType":"regular","--text-inputfield-active--fontSize--desktop":"18px","--text-inputfield-active--fontSize--tablet":"20px","--text-inputfield-active--fontSize--mobile":"20px","--inputfield-disabled--primaryColor":"var(--palette-color3)","--inputfield-disabled--borderColor":"var(--palette-color3)","--inputfield-disabled--shadowColor":"var(--greyscale3)","--text-inputfield-disabled--color":"var(--palette-color1)","--text-inputfield-disabled--fontFamily":"SBB","--text-inputfield-disabled--fontType":"regular","--text-inputfield-disabled--fontSize--desktop":"18px","--text-inputfield-disabled--fontSize--tablet":"20px","--text-inputfield-disabled--fontSize--mobile":"20px","--inputfield-focusLost--primaryColor":"var(--palette-color0)","--inputfield-focusLost--borderColor":"var(--palette-color3)","--inputfield-focusLost--shadowColor":"var(--greyscale3)","--text-inputfield-focusLost--color":"var(--palette-color4)","--text-inputfield-focusLost--fontFamily":"SBB","--text-inputfield-focusLost--fontType":"regular","--text-inputfield-focusLost--fontSize--desktop":"18px","--text-inputfield-focusLost--fontSize--tablet":"20px","--text-inputfield-focusLost--fontSize--mobile":"20px","--inputfield-error--primaryColor":"var(--palette-color0)","--inputfield-error--borderColor":"var(--error)","--inputfield-error--shadowColor":"var(--greyscale3)","--text-inputfield-error--color":"#c60018","--text-inputfield-error--fontFamily":"SBB","--text-inputfield-error--fontType":"regular","--text-inputfield-error--fontSize--desktop":"18px","--text-inputfield-error--fontSize--tablet":"20px","--text-inputfield-error--fontSize--mobile":"20px","--dropdown-normal--primaryColor":"var(--palette-color0)","--dropdown-normal--borderColor":"#767676","--dropdown-normal--shadowColor":"var(--greyscale3)","--text-dropdown-normal--color":"#212121","--text-dropdown-normal--fontFamily":"var(--font1)","--text-dropdown-normal--fontType":"italic","--text-dropdown-normal--fontSize--desktop":"18px","--text-dropdown-normal--fontSize--tablet":"18px","--text-dropdown-normal--fontSize--mobile":"18px","--dropdown-selected--primaryColor":"var(--palette-color0)","--dropdown-selected--borderColor":"#212121","--dropdown-selected--shadowColor":"var(--greyscale3)","--text-dropdown-selected--color":"var(--palette-color4)","--text-dropdown-selected--fontFamily":"var(--font1)","--text-dropdown-selected--fontType":"italic","--text-dropdown-selected--fontSize--desktop":"18px","--text-dropdown-selected--fontSize--tablet":"18px","--text-dropdown-selected--fontSize--mobile":"18px","--dropdown-disabled--primaryColor":"var(--palette-color3)","--dropdown-disabled--borderColor":"var(--palette-color3)","--dropdown-disabled--shadowColor":"var(--greyscale3)","--text-dropdown-disabled--color":"var(--palette-color1)","--text-dropdown-disabled--fontFamily":"var(--font1)","--text-dropdown-disabled--fontType":"italic","--text-dropdown-disabled--fontSize--desktop":"18px","--text-dropdown-disabled--fontSize--tablet":"18px","--text-dropdown-disabled--fontSize--mobile":"18px","--dropdown-hover--primaryColor":"var(--palette-color0)","--dropdown-hover--borderColor":"#212121","--dropdown-hover--shadowColor":"var(--greyscale3)","--text-dropdown-hover--color":"#212121","--text-dropdown-hover--fontFamily":"var(--font1)","--text-dropdown-hover--fontType":"italic","--text-dropdown-hover--fontSize--desktop":"18px","--text-dropdown-hover--fontSize--tablet":"18px","--text-dropdown-hover--fontSize--mobile":"18px","--radio-normal--primaryColor":"var(--palette-color0)","--radio-normal--borderColor":"#767676","--radio-normal--shadowColor":"var(--greyscale3)","--text-radio-normal--color":"#212121","--text-radio-normal--fontFamily":"SBB","--text-radio-normal--fontType":"regular","--text-radio-normal--fontSize--desktop":"22px","--text-radio-normal--fontSize--tablet":"20px","--text-radio-normal--fontSize--mobile":"20px","--radio-selected--primaryColor":"var(--palette-color0)","--radio-selected--borderColor":"#212121","--radio-selected--shadowColor":"var(--greyscale3)","--text-radio-selected--color":"#212121","--text-radio-selected--fontFamily":"SBB","--text-radio-selected--fontType":"regular","--text-radio-selected--fontSize--desktop":"22px","--text-radio-selected--fontSize--tablet":"20px","--text-radio-selected--fontSize--mobile":"20px","--radio-disabled-checked--primaryColor":"var(--palette-color3)","--radio-disabled-checked--borderColor":"var(--palette-color3)","--radio-disabled-checked--shadowColor":"var(--greyscale3)","--text-radio-disabled-checked--color":"var(--palette-color3)","--text-radio-disabled-checked--fontFamily":"SBB","--text-radio-disabled-checked--fontType":"regular","--text-radio-disabled-checked--fontSize--desktop":"22px","--text-radio-disabled-checked--fontSize--tablet":"20px","--text-radio-disabled-checked--fontSize--mobile":"20px","--radio-hover--primaryColor":"var(--palette-color0)","--radio-hover--borderColor":"#212121","--radio-hover--shadowColor":"var(--greyscale3)","--text-radio-hover--color":"var(--palette-color5)","--text-radio-hover--fontFamily":"SBB","--text-radio-hover--fontType":"regular","--text-radio-hover--fontSize--desktop":"22px","--text-radio-hover--fontSize--tablet":"20px","--text-radio-hover--fontSize--mobile":"20px","--radio-disabled-unchecked--primaryColor":"var(--palette-color3)","--radio-disabled-unchecked--borderColor":"var(--palette-color3)","--radio-disabled-unchecked--shadowColor":"var(--greyscale3)","--text-radio-disabled-unchecked--color":"var(--palette-color3)","--text-radio-disabled-unchecked--fontFamily":"SBB","--text-radio-disabled-unchecked--fontType":"regular","--text-radio-disabled-unchecked--fontSize--desktop":"22px","--text-radio-disabled-unchecked--fontSize--tablet":"20px","--text-radio-disabled-unchecked--fontSize--mobile":"20px","--video_preset-color":"#666666","--video_preset-borderColor":"#666666","--clickbox-preset-fill-color":"#3F80E4","--drag-object-default-state-fill-color":"255, 255, 255","--drag-object-hover-state-fill-color":"250, 250, 250","--drag-object-transition-state-fill-color":"250, 250, 250","--drag-object-dragOver-state-fill-color":"250, 250, 250","--drag-object-dropped-state-fill-color":"255, 255, 255","--drag-object-default-state-border-color":"214, 213, 209","--drag-object-hover-state-border-color":"214, 213, 209","--drag-object-transition-state-border-color":"214, 213, 209","--drag-object-dragOver-state-border-color":"230, 132, 80","--drag-object-dropped-state-border-color":"214, 213, 209","--drop-object-default-state-fill-color":"255, 255, 255","--drop-object-hover-state-fill-color":"255, 255, 255","--drop-object-dragOver-state-fill-color":"230, 132, 80","--drop-object-dropped-state-fill-color":"255, 255, 255","--drop-object-default-state-border-color":"42, 49, 62","--drop-object-hover-state-border-color":"230, 132, 80","--drop-object-dragOver-state-border-color":"230, 132, 80","--drop-object-dropped-state-border-color":"42, 49, 62","--inputfield-edited--primaryColor":"var(--palette-color0)","--inputfield-edited--borderColor":"var(--palette-color3)","--inputfield-edited--shadowColor":"var(--greyscale3)","--text-inputfield-edited--color":"var(--palette-color4)","--text-inputfield-edited--fontFamily":"var(--font1)","--text-inputfield-edited--fontType":"regular","--text-inputfield-edited--fontSize--desktop":"18px","--text-inputfield-edited--fontSize--tablet":"20px","--text-inputfield-edited--fontSize--mobile":"20px","--text-heading-1--text-highlight-color":"var(palette-color3)","--text-heading-2--text-highlight-color":"var(palette-color3)","--text-heading-3--text-highlight-color":"var(palette-color3)","--text-heading-4--text-highlight-color":"var(palette-color3)","--text-heading-5--text-highlight-color":"var(palette-color3)","--text-heading-6--text-highlight-color":"var(palette-color3)","--text-heading-7--text-highlight-color":"var(palette-color3)","--text-heading-8--text-highlight-color":"var(palette-color3)","--text-heading-9--text-highlight-color":"var(palette-color3)","--text-body-1--text-highlight-color":"var(palette-color3)","--text-body-2--text-highlight-color":"var(palette-color3)","--text-body-3--text-highlight-color":"var(palette-color3)","--text-body-4--text-highlight-color":"var(palette-color3)","--text-body-5--text-highlight-color":"var(palette-color3)","--text-body-6--text-highlight-color":"var(palette-color3)","--text-component-1--text-highlight-color":"var(palette-color3)","--text-component-2--text-highlight-color":"var(palette-color3)","--text-component-3--text-highlight-color":"var(palette-color3)","--text-component-4--text-highlight-color":"var(palette-color3)","--text-subheading-1--text-highlight-color":"var(palette-color3)","--text-subheading-2--text-highlight-color":"var(palette-color3)","--text-subheading-3--text-highlight-color":"var(palette-color3)","--text-subheading-4--text-highlight-color":"var(palette-color3)","--text-subheading-5--text-highlight-color":"var(palette-color3)","--text-subheading-6--text-highlight-color":"var(palette-color3)","--text-detail-1--text-highlight-color":"var(palette-color3)","--text-detail-2--text-highlight-color":"var(palette-color3)","--text-detail-3--text-highlight-color":"var(palette-color3)","--text-detail-4--text-highlight-color":"var(palette-color3)","--text-variable-1--text-highlight-color":"var(palette-color3)","--text-variable-2--text-highlight-color":"var(palette-color3)","--text-variable-3--text-highlight-color":"var(palette-color3)","--text-variable-4--text-highlight-color":"var(palette-color3)","--text-question-1--text-highlight-color":"var(palette-color3)","--text-question-2--text-highlight-color":"var(palette-color3)","--button-normal--fontType":"REGULAR","--button-hover--fontType":"REGULAR","--button-visited--fontType":"REGULAR","--button-selected--fontType":"REGULAR","--button-disabled--fontType":"REGULAR","--checkbox-normal--fontType":"REGULAR","--checkbox-hover--fontType":"REGULAR","--checkbox-selected--fontType":"REGULAR","--radio-normal--fontType":"REGULAR","--radio-hover--fontType":"REGULAR","--radio-selected--fontType":"REGULAR","--radio-disabled-checked--fontType":"REGULAR","--radio-disabled-unchecked--fontType":"REGULAR","--inputfield-error--fontType":"REGULAR","--inputfield-disabled--fontType":"REGULAR","--inputfield-focusLost--fontType":"REGULAR","--inputfield-active--fontType":"REGULAR","--inputfield-normal--fontType":"REGULAR"}',
            uic_presets: '{"cp_button_shape_1_solid_style":{"meta":{"fillEnable":1,"fillType":1,"strokeEnable":1,"shadowEnable":0,"type":0,"category":0},"fill":"var(--button-normal--primaryColor)","fillOpacity":1,"stroke":"var(--button-normal--borderColor)","strokeWidth":1,"strokeLinecap":"butt","strokeDasharray":"none","brightness":0,"contrast":0,"saturation":0,"sharpness":0,"boxShadow":{"x":1,"y":2,"blur":4,"spread":null,"color":"var(--button-normal--shadowColor)","inset":null,"opacity":1},"gradientFill":{"linearFill":{"colorStops":[{"color":"var(--palette-color1)","alpha":1,"scaledPosition":0},{"color":"var(--palette-color0)","alpha":1,"scaledPosition":1}],"endPoints":[{"x":50,"y":0},{"x":50,"y":100}]},"radialFill":{"colorStops":[{"color":"var(--palette-color1)","alpha":1,"scaledPosition":0},{"color":"var(--palette-color0)","alpha":1,"scaledPosition":1}],"endPoints":[{"x":50,"y":50},{"x":100,"y":50}],"radialHandlePoints":[{"x":50,"y":100},{"x":100,"y":100}]}}},"cp_button_shape_1_solid_style_hover":{"meta":{"fillEnable":1,"fillType":1,"strokeEnable":1,"shadowEnable":1,"type":0,"category":0},"fill":"var(--button-hover--primaryColor)","fillOpacity":1,"stroke":"var(--button-hover--borderColor)","strokeWidth":1,"strokeLinecap":"butt","strokeDasharray":"none","brightness":0,"contrast":0,"saturation":0,"sharpness":0,"boxShadow":{"x":0,"y":0,"blur":7,"spread":null,"color":"var(--button-hover--shadowColor)","inset":null,"opacity":0.53},"gradientFill":{"linearFill":{"colorStops":[{"color":"var(--palette-color1)","alpha":1,"scaledPosition":0},{"color":"var(--palette-color0)","alpha":1,"scaledPosition":1}],"endPoints":[{"x":50,"y":0},{"x":50,"y":100}]},"radialFill":{"colorStops":[{"color":"var(--palette-color1)","alpha":1,"scaledPosition":0},{"color":"var(--palette-color0)","alpha":1,"scaledPosition":1}],"endPoints":[{"x":50,"y":50},{"x":100,"y":50}],"radialHandlePoints":[{"x":50,"y":100},{"x":100,"y":100}]}}},"cp_button_shape_1_solid_style_selected":{"meta":{"fillEnable":1,"fillType":1,"strokeEnable":1,"shadowEnable":0,"type":0,"category":0},"fill":"var(--button-selected--primaryColor)","fillOpacity":1,"stroke":"var(--button-selected--borderColor)","strokeWidth":1,"strokeLinecap":"butt","strokeDasharray":"none","brightness":0,"contrast":0,"saturation":0,"sharpness":0,"boxShadow":{"x":1,"y":2,"blur":4,"spread":null,"color":"--button-selected--shadowColor","inset":null,"opacity":1},"gradientFill":{"linearFill":{"colorStops":[{"color":"var(--palette-color1)","alpha":1,"scaledPosition":0},{"color":"var(--palette-color0)","alpha":1,"scaledPosition":1}],"endPoints":[{"x":50,"y":0},{"x":50,"y":100}]},"radialFill":{"colorStops":[{"color":"var(--palette-color1)","alpha":1,"scaledPosition":0},{"color":"var(--palette-color0)","alpha":1,"scaledPosition":1}],"endPoints":[{"x":50,"y":50},{"x":100,"y":50}],"radialHandlePoints":[{"x":50,"y":100},{"x":100,"y":100}]}}},"cp_button_shape_1_solid_style_visited":{"meta":{"fillEnable":1,"fillType":1,"strokeEnable":1,"shadowEnable":0,"type":0,"category":0},"fill":"var(--button-visited--primaryColor)","fillOpacity":1,"stroke":"var(--button-visited--borderColor)","strokeWidth":1,"strokeLinecap":"butt","strokeDasharray":"none","brightness":0,"contrast":0,"saturation":0,"sharpness":0,"boxShadow":{"x":1,"y":2,"blur":4,"spread":null,"color":"var(--button-visited--shadowColor)","inset":null,"opacity":1},"gradientFill":{"linearFill":{"colorStops":[{"color":"var(--palette-color1)","alpha":1,"scaledPosition":0},{"color":"var(--palette-color0)","alpha":1,"scaledPosition":1}],"endPoints":[{"x":50,"y":0},{"x":50,"y":100}]},"radialFill":{"colorStops":[{"color":"var(--palette-color1)","alpha":1,"scaledPosition":0},{"color":"var(--palette-color0)","alpha":1,"scaledPosition":1}],"endPoints":[{"x":50,"y":50},{"x":100,"y":50}],"radialHandlePoints":[{"x":50,"y":100},{"x":100,"y":100}]}}},"cp_button_shape_1_solid_style_disabled":{"meta":{"fillEnable":1,"fillType":1,"strokeEnable":1,"shadowEnable":0,"type":0,"category":0},"fill":"var(--button-disabled--primaryColor)","fillOpacity":1,"stroke":"var(--button-disabled--borderColor)","strokeWidth":1,"strokeLinecap":"butt","strokeDasharray":"none","brightness":0,"contrast":0,"saturation":0,"sharpness":0,"boxShadow":{"x":1,"y":2,"blur":4,"spread":null,"color":"var(--button-disabled--shadowColor)","inset":null,"opacity":1},"gradientFill":{"linearFill":{"colorStops":[{"color":"var(--palette-color1)","alpha":1,"scaledPosition":0},{"color":"var(--palette-color0)","alpha":1,"scaledPosition":1}],"endPoints":[{"x":50,"y":0},{"x":50,"y":100}]},"radialFill":{"colorStops":[{"color":"var(--palette-color1)","alpha":1,"scaledPosition":0},{"color":"var(--palette-color0)","alpha":1,"scaledPosition":1}],"endPoints":[{"x":50,"y":50},{"x":100,"y":50}],"radialHandlePoints":[{"x":50,"y":100},{"x":100,"y":100}]}}},"cp_button_shape_8_solid_style":{"fill":"var(--palette-color0)","fillOpacity":1,"stroke":"#707070","strokeWidth":1,"strokeLinecap":"butt","strokeDasharray":"none","brightness":0,"contrast":0,"saturation":0,"sharpness":0,"boxShadow":{"x":1,"y":2,"blur":4,"spread":null,"color":"var(--greyscale3)","inset":null,"opacity":1},"gradientFill":{"linearFill":{"colorStops":[{"color":"var(--palette-color1)","alpha":1,"scaledPosition":0},{"color":"var(--palette-color0)","alpha":1,"scaledPosition":1}],"endPoints":[{"x":50,"y":0},{"x":50,"y":100}]},"radialFill":{"colorStops":[{"color":"var(--palette-color1)","alpha":1,"scaledPosition":0},{"color":"var(--palette-color0)","alpha":1,"scaledPosition":1}],"endPoints":[{"x":50,"y":50},{"x":100,"y":50}],"radialHandlePoints":[{"x":50,"y":100},{"x":100,"y":100}]}}},"cp_button_shape_8_solid_style_hover":{"fill":"#9ec4f3","fillOpacity":1,"stroke":"var(--color6)","strokeWidth":1,"strokeLinecap":"butt","strokeDasharray":"none","brightness":0,"contrast":0,"saturation":0,"sharpness":0,"boxShadow":{"x":0,"y":0,"blur":7,"spread":null,"color":"var(--black)","inset":null,"opacity":0.53},"gradientFill":{"linearFill":{"colorStops":[{"color":"var(--palette-color1)","alpha":1,"scaledPosition":0},{"color":"var(--palette-color0)","alpha":1,"scaledPosition":1}],"endPoints":[{"x":50,"y":0},{"x":50,"y":100}]},"radialFill":{"colorStops":[{"color":"var(--palette-color1)","alpha":1,"scaledPosition":0},{"color":"var(--palette-color0)","alpha":1,"scaledPosition":1}],"endPoints":[{"x":50,"y":50},{"x":100,"y":50}],"radialHandlePoints":[{"x":50,"y":100},{"x":100,"y":100}]}}},"cp_button_shape_8_solid_style_selected":{"fill":"var(--palette-color5)","fillOpacity":1,"stroke":"var(--color6)","strokeWidth":1,"strokeLinecap":"butt","strokeDasharray":"none","brightness":0,"contrast":0,"saturation":0,"sharpness":0,"boxShadow":{"x":1,"y":2,"blur":4,"spread":null,"color":"var(--greyscale3)","inset":null,"opacity":1},"gradientFill":{"linearFill":{"colorStops":[{"color":"var(--palette-color1)","alpha":1,"scaledPosition":0},{"color":"var(--palette-color0)","alpha":1,"scaledPosition":1}],"endPoints":[{"x":50,"y":0},{"x":50,"y":100}]},"radialFill":{"colorStops":[{"color":"var(--palette-color1)","alpha":1,"scaledPosition":0},{"color":"var(--palette-color0)","alpha":1,"scaledPosition":1}],"endPoints":[{"x":50,"y":50},{"x":100,"y":50}],"radialHandlePoints":[{"x":50,"y":100},{"x":100,"y":100}]}}},"cp_button_shape_8_solid_style_visited":{"fill":"#0A00FF","fillOpacity":1,"stroke":"var(--color6)","strokeWidth":1,"strokeLinecap":"butt","strokeDasharray":"none","brightness":0,"contrast":0,"saturation":0,"sharpness":0,"boxShadow":{"x":1,"y":2,"blur":4,"spread":null,"color":"var(--greyscale3)","inset":null,"opacity":1},"gradientFill":{"linearFill":{"colorStops":[{"color":"var(--palette-color1)","alpha":1,"scaledPosition":0},{"color":"var(--palette-color0)","alpha":1,"scaledPosition":1}],"endPoints":[{"x":50,"y":0},{"x":50,"y":100}]},"radialFill":{"colorStops":[{"color":"var(--palette-color1)","alpha":1,"scaledPosition":0},{"color":"var(--palette-color0)","alpha":1,"scaledPosition":1}],"endPoints":[{"x":50,"y":50},{"x":100,"y":50}],"radialHandlePoints":[{"x":50,"y":100},{"x":100,"y":100}]}}},"cp_button_shape_8_solid_style_disabled":{"fill":"#0A00FF","fillOpacity":1,"stroke":"var(--color6)","strokeWidth":1,"strokeLinecap":"butt","strokeDasharray":"none","brightness":0,"contrast":0,"saturation":0,"sharpness":0,"boxShadow":{"x":1,"y":2,"blur":4,"spread":null,"color":"var(--greyscale3)","inset":null,"opacity":1},"gradientFill":{"linearFill":{"colorStops":[{"color":"var(--palette-color1)","alpha":1,"scaledPosition":0},{"color":"var(--palette-color0)","alpha":1,"scaledPosition":1}],"endPoints":[{"x":50,"y":0},{"x":50,"y":100}]},"radialFill":{"colorStops":[{"color":"var(--palette-color1)","alpha":1,"scaledPosition":0},{"color":"var(--palette-color0)","alpha":1,"scaledPosition":1}],"endPoints":[{"x":50,"y":50},{"x":100,"y":50}],"radialHandlePoints":[{"x":50,"y":100},{"x":100,"y":100}]}}},"cp_checkbox_shape_1_solid_style":{"meta":{"fillEnable":1,"fillType":1,"strokeEnable":1,"shadowEnable":0,"type":0,"category":0},"fill":"var(--checkbox-normal--primaryColor)","fillOpacity":1,"stroke":"var(--checkbox-normal--borderColor)","strokeWidth":2,"strokeLinecap":"butt","strokeDasharray":"none","brightness":0,"contrast":0,"saturation":0,"sharpness":0,"boxShadow":{"x":1,"y":2,"blur":4,"spread":null,"color":"var(--checkbox-normal--shadowColor)","inset":null,"opacity":1},"gradientFill":{"linearFill":{"colorStops":[{"color":"var(--palette-color1)","alpha":1,"scaledPosition":0},{"color":"var(--palette-color0)","alpha":1,"scaledPosition":1}],"endPoints":[{"x":50,"y":0},{"x":50,"y":100}]},"radialFill":{"colorStops":[{"color":"var(--palette-color1)","alpha":1,"scaledPosition":0},{"color":"var(--palette-color0)","alpha":1,"scaledPosition":1}],"endPoints":[{"x":50,"y":50},{"x":100,"y":50}],"radialHandlePoints":[{"x":50,"y":100},{"x":100,"y":100}]}}},"cp_checkbox_shape_1_solid_style_hover":{"meta":{"fillEnable":1,"fillType":1,"strokeEnable":1,"shadowEnable":0,"type":0,"category":0},"fill":"var(--checkbox-hover--primaryColor)","fillOpacity":1,"stroke":"var(--checkbox-hover--borderColor)","strokeWidth":3,"strokeLinecap":"butt","strokeDasharray":"none","brightness":0,"contrast":0,"saturation":0,"sharpness":0,"boxShadow":{"x":1,"y":2,"blur":4,"spread":null,"color":"var(--checkbox-hover--shadowColor)","inset":null,"opacity":1},"gradientFill":{"linearFill":{"colorStops":[{"color":"var(--palette-color1)","alpha":1,"scaledPosition":0},{"color":"var(--palette-color0)","alpha":1,"scaledPosition":1}],"endPoints":[{"x":50,"y":0},{"x":50,"y":100}]},"radialFill":{"colorStops":[{"color":"var(--palette-color1)","alpha":1,"scaledPosition":0},{"color":"var(--palette-color0)","alpha":1,"scaledPosition":1}],"endPoints":[{"x":50,"y":50},{"x":100,"y":50}],"radialHandlePoints":[{"x":50,"y":100},{"x":100,"y":100}]}}},"cp_checkbox_shape_1_solid_style_selected":{"meta":{"fillEnable":1,"fillType":1,"strokeEnable":1,"shadowEnable":0,"type":0,"category":0},"fill":"var(--checkbox-selected--primaryColor)","fillOpacity":1,"stroke":"var(--checkbox-selected--borderColor)","strokeWidth":2,"strokeLinecap":"butt","strokeDasharray":"none","brightness":0,"contrast":0,"saturation":0,"sharpness":0,"boxShadow":{"x":1,"y":2,"blur":4,"spread":null,"color":"var(--checkbox-selected--shadowColor)","inset":null,"opacity":1},"gradientFill":{"linearFill":{"colorStops":[{"color":"var(--palette-color1)","alpha":1,"scaledPosition":0},{"color":"var(--palette-color0)","alpha":1,"scaledPosition":1}],"endPoints":[{"x":50,"y":0},{"x":50,"y":100}]},"radialFill":{"colorStops":[{"color":"var(--palette-color1)","alpha":1,"scaledPosition":0},{"color":"var(--palette-color0)","alpha":1,"scaledPosition":1}],"endPoints":[{"x":50,"y":50},{"x":100,"y":50}],"radialHandlePoints":[{"x":50,"y":100},{"x":100,"y":100}]}}},"cp_checkbox_shape_1_solid_style_disabled_checked":{"meta":{"fillEnable":1,"fillType":1,"strokeEnable":1,"shadowEnable":0,"type":0,"category":0},"fill":"var(--checkbox-disabled-checked--primaryColor)","fillOpacity":1,"stroke":"var(--checkbox-disabled-checked--borderColor)","strokeWidth":2,"strokeLinecap":"butt","strokeDasharray":"none","brightness":0,"contrast":0,"saturation":0,"sharpness":0,"boxShadow":{"x":1,"y":2,"blur":4,"spread":null,"color":"var(--checkbox-disabled-checked--shadowColor)","inset":null,"opacity":1},"gradientFill":{"linearFill":{"colorStops":[{"color":"var(--palette-color1)","alpha":1,"scaledPosition":0},{"color":"var(--palette-color0)","alpha":1,"scaledPosition":1}],"endPoints":[{"x":50,"y":0},{"x":50,"y":100}]},"radialFill":{"colorStops":[{"color":"var(--palette-color1)","alpha":1,"scaledPosition":0},{"color":"var(--palette-color0)","alpha":1,"scaledPosition":1}],"endPoints":[{"x":50,"y":50},{"x":100,"y":50}],"radialHandlePoints":[{"x":50,"y":100},{"x":100,"y":100}]}}},"cp_checkbox_shape_1_solid_style_disabled_unchecked":{"meta":{"fillEnable":1,"fillType":1,"strokeEnable":1,"shadowEnable":0,"type":0,"category":0},"fill":"var(--checkbox-disabled-unchecked--primaryColor)","fillOpacity":1,"stroke":"var(--checkbox-disabled-unchecked--borderColor)","strokeWidth":2,"strokeLinecap":"butt","strokeDasharray":"none","brightness":0,"contrast":0,"saturation":0,"sharpness":0,"boxShadow":{"x":1,"y":2,"blur":4,"spread":null,"color":"var(--checkbox-disabled-unchecked--shadowColor)","inset":null,"opacity":1},"gradientFill":{"linearFill":{"colorStops":[{"color":"var(--palette-color1)","alpha":1,"scaledPosition":0},{"color":"var(--palette-color0)","alpha":1,"scaledPosition":1}],"endPoints":[{"x":50,"y":0},{"x":50,"y":100}]},"radialFill":{"colorStops":[{"color":"var(--palette-color1)","alpha":1,"scaledPosition":0},{"color":"var(--palette-color0)","alpha":1,"scaledPosition":1}],"endPoints":[{"x":50,"y":50},{"x":100,"y":50}],"radialHandlePoints":[{"x":50,"y":100},{"x":100,"y":100}]}}},"cp_inputField_shape_1_solid_style":{"meta":{"fillEnable":1,"fillType":1,"strokeEnable":1,"shadowEnable":0,"type":0,"category":0},"fill":"var(--inputfield-normal--primaryColor)","fillOpacity":1,"stroke":"var(--inputfield-normal--borderColor)","strokeWidth":2,"strokeLinecap":"butt","strokeDasharray":"none","brightness":0,"contrast":0,"saturation":0,"sharpness":0,"boxShadow":{"x":1,"y":2,"blur":4,"spread":null,"color":"var(--inputfield-normal--shadowColor)","inset":null,"opacity":1},"gradientFill":{"linearFill":{"colorStops":[{"color":"var(--palette-color1)","alpha":1,"scaledPosition":0},{"color":"var(--palette-color0)","alpha":1,"scaledPosition":1}],"endPoints":[{"x":50,"y":0},{"x":50,"y":100}]},"radialFill":{"colorStops":[{"color":"var(--palette-color1)","alpha":1,"scaledPosition":0},{"color":"var(--palette-color0)","alpha":1,"scaledPosition":1}],"endPoints":[{"x":50,"y":50},{"x":100,"y":50}],"radialHandlePoints":[{"x":50,"y":100},{"x":100,"y":100}]}}},"cp_inputField_shape_1_solid_style_active":{"meta":{"fillEnable":1,"fillType":1,"strokeEnable":1,"shadowEnable":0,"type":0,"category":0},"fill":"var(--inputfield-active--primaryColor)","fillOpacity":1,"stroke":"var(--inputfield-active--borderColor)","strokeWidth":2,"strokeLinecap":"butt","strokeDasharray":"none","brightness":0,"contrast":0,"saturation":0,"sharpness":0,"boxShadow":{"x":1,"y":2,"blur":4,"spread":null,"color":"var(--inputfield-active--shadowColor)","inset":null,"opacity":1},"gradientFill":{"linearFill":{"colorStops":[{"color":"var(--palette-color1)","alpha":1,"scaledPosition":0},{"color":"var(--palette-color0)","alpha":1,"scaledPosition":1}],"endPoints":[{"x":50,"y":0},{"x":50,"y":100}]},"radialFill":{"colorStops":[{"color":"var(--palette-color1)","alpha":1,"scaledPosition":0},{"color":"var(--palette-color0)","alpha":1,"scaledPosition":1}],"endPoints":[{"x":50,"y":50},{"x":100,"y":50}],"radialHandlePoints":[{"x":50,"y":100},{"x":100,"y":100}]}}},"cp_inputField_shape_1_solid_style_focusLost":{"meta":{"fillEnable":1,"fillType":1,"strokeEnable":1,"shadowEnable":0,"type":0,"category":0},"fill":"var(--inputfield-focusLost--primaryColor)","fillOpacity":1,"stroke":"var(--inputfield-focusLost--borderColor)","strokeWidth":2,"strokeLinecap":"butt","strokeDasharray":"none","brightness":0,"contrast":0,"saturation":0,"sharpness":0,"boxShadow":{"x":1,"y":2,"blur":4,"spread":null,"color":"var(--inputfield-focusLost--shadowColor)","inset":null,"opacity":1},"gradientFill":{"linearFill":{"colorStops":[{"color":"var(--palette-color1)","alpha":1,"scaledPosition":0},{"color":"var(--palette-color0)","alpha":1,"scaledPosition":1}],"endPoints":[{"x":50,"y":0},{"x":50,"y":100}]},"radialFill":{"colorStops":[{"color":"var(--palette-color1)","alpha":1,"scaledPosition":0},{"color":"var(--palette-color0)","alpha":1,"scaledPosition":1}],"endPoints":[{"x":50,"y":50},{"x":100,"y":50}],"radialHandlePoints":[{"x":50,"y":100},{"x":100,"y":100}]}}},"cp_inputField_shape_1_solid_style_error":{"meta":{"fillEnable":1,"fillType":1,"strokeEnable":1,"shadowEnable":0,"type":0,"category":0},"fill":"var(--inputfield-error--primaryColor)","fillOpacity":1,"stroke":"var(--inputfield-error--borderColor)","strokeWidth":2,"strokeLinecap":"butt","strokeDasharray":"none","brightness":0,"contrast":0,"saturation":0,"sharpness":0,"boxShadow":{"x":1,"y":2,"blur":4,"spread":null,"color":"var(--inputfield-error--shadowColor)","inset":null,"opacity":1},"gradientFill":{"linearFill":{"colorStops":[{"color":"var(--palette-color1)","alpha":1,"scaledPosition":0},{"color":"var(--palette-color0)","alpha":1,"scaledPosition":1}],"endPoints":[{"x":50,"y":0},{"x":50,"y":100}]},"radialFill":{"colorStops":[{"color":"var(--palette-color1)","alpha":1,"scaledPosition":0},{"color":"var(--palette-color0)","alpha":1,"scaledPosition":1}],"endPoints":[{"x":50,"y":50},{"x":100,"y":50}],"radialHandlePoints":[{"x":50,"y":100},{"x":100,"y":100}]}}},"cp_inputField_shape_1_solid_style_disabled":{"meta":{"fillEnable":1,"fillType":1,"strokeEnable":1,"shadowEnable":0,"type":0,"category":0},"fill":"var(--inputfield-disabled--primaryColor)","fillOpacity":1,"stroke":"var(--inputfield-disabled--borderColor)","strokeWidth":2,"strokeLinecap":"butt","strokeDasharray":"none","brightness":0,"contrast":0,"saturation":0,"sharpness":0,"boxShadow":{"x":1,"y":2,"blur":4,"spread":null,"color":"var(--inputfield-disabled--shadowColor)","inset":null,"opacity":1},"gradientFill":{"linearFill":{"colorStops":[{"color":"var(--palette-color1)","alpha":1,"scaledPosition":0},{"color":"var(--palette-color0)","alpha":1,"scaledPosition":1}],"endPoints":[{"x":50,"y":0},{"x":50,"y":100}]},"radialFill":{"colorStops":[{"color":"var(--palette-color1)","alpha":1,"scaledPosition":0},{"color":"var(--palette-color0)","alpha":1,"scaledPosition":1}],"endPoints":[{"x":50,"y":50},{"x":100,"y":50}],"radialHandlePoints":[{"x":50,"y":100},{"x":100,"y":100}]}}},"cp_dropDown_shape_1_solid_style":{"meta":{"fillEnable":1,"fillType":1,"strokeEnable":1,"shadowEnable":0,"type":0,"category":0},"fill":"var(--dropdown-normal--primaryColor)","fillOpacity":1,"stroke":"var(--dropdown-normal--borderColor)","strokeWidth":1,"strokeLinecap":"butt","strokeDasharray":"none","brightness":0,"contrast":0,"saturation":0,"sharpness":0,"boxShadow":{"x":1,"y":2,"blur":4,"spread":null,"color":"var(--dropdown-normal--shadowColor)","inset":null,"opacity":1},"gradientFill":{"linearFill":{"colorStops":[{"color":"var(--palette-color1)","alpha":1,"scaledPosition":0},{"color":"var(--palette-color0)","alpha":1,"scaledPosition":1}],"endPoints":[{"x":50,"y":0},{"x":50,"y":100}]},"radialFill":{"colorStops":[{"color":"var(--palette-color1)","alpha":1,"scaledPosition":0},{"color":"var(--palette-color0)","alpha":1,"scaledPosition":1}],"endPoints":[{"x":50,"y":50},{"x":100,"y":50}],"radialHandlePoints":[{"x":50,"y":100},{"x":100,"y":100}]}}},"cp_dropDown_shape_1_solid_style_hover":{"meta":{"fillEnable":1,"fillType":1,"strokeEnable":1,"shadowEnable":0,"type":0,"category":0},"fill":"var(--dropdown-hover--primaryColor)","fillOpacity":1,"stroke":"var(--dropdown-hover--borderColor)","strokeWidth":1,"strokeLinecap":"butt","strokeDasharray":"none","brightness":0,"contrast":0,"saturation":0,"sharpness":0,"boxShadow":{"x":0,"y":0,"blur":14,"spread":null,"color":"var(--dropdown-hover--shadowColor)","inset":null,"opacity":0.78},"gradientFill":{"linearFill":{"colorStops":[{"color":"var(--palette-color1)","alpha":1,"scaledPosition":0},{"color":"var(--palette-color0)","alpha":1,"scaledPosition":1}],"endPoints":[{"x":50,"y":0},{"x":50,"y":100}]},"radialFill":{"colorStops":[{"color":"var(--palette-color1)","alpha":1,"scaledPosition":0},{"color":"var(--palette-color0)","alpha":1,"scaledPosition":1}],"endPoints":[{"x":50,"y":50},{"x":100,"y":50}],"radialHandlePoints":[{"x":50,"y":100},{"x":100,"y":100}]}}},"cp_dropDown_shape_1_solid_style_selected":{"meta":{"fillEnable":1,"fillType":1,"strokeEnable":1,"shadowEnable":0,"type":0,"category":0},"fill":"var(--dropdown-selected--primaryColor)","fillOpacity":1,"stroke":"var(--dropdown-selected--borderColor)","strokeWidth":1,"strokeLinecap":"butt","strokeDasharray":"none","brightness":0,"contrast":0,"saturation":0,"sharpness":0,"boxShadow":{"x":1,"y":2,"blur":4,"spread":null,"color":"var(--dropdown-selected--shadowColor)","inset":null,"opacity":1},"gradientFill":{"linearFill":{"colorStops":[{"color":"var(--palette-color1)","alpha":1,"scaledPosition":0},{"color":"var(--palette-color0)","alpha":1,"scaledPosition":1}],"endPoints":[{"x":50,"y":0},{"x":50,"y":100}]},"radialFill":{"colorStops":[{"color":"var(--palette-color1)","alpha":1,"scaledPosition":0},{"color":"var(--palette-color0)","alpha":1,"scaledPosition":1}],"endPoints":[{"x":50,"y":50},{"x":100,"y":50}],"radialHandlePoints":[{"x":50,"y":100},{"x":100,"y":100}]}}},"cp_dropDown_shape_1_solid_style_disabled":{"meta":{"fillEnable":1,"fillType":1,"strokeEnable":1,"shadowEnable":0,"type":0,"category":0},"fill":"var(--dropdown-disabled--primaryColor)","fillOpacity":1,"stroke":"var(--dropdown-disabled--borderColor)","strokeWidth":1,"strokeLinecap":"butt","strokeDasharray":"none","brightness":0,"contrast":0,"saturation":0,"sharpness":0,"boxShadow":{"x":1,"y":2,"blur":4,"spread":null,"color":"var(--dropdown-disabled--shadowColor)","inset":null,"opacity":1},"gradientFill":{"linearFill":{"colorStops":[{"color":"var(--palette-color1)","alpha":1,"scaledPosition":0},{"color":"var(--palette-color0)","alpha":1,"scaledPosition":1}],"endPoints":[{"x":50,"y":0},{"x":50,"y":100}]},"radialFill":{"colorStops":[{"color":"var(--palette-color1)","alpha":1,"scaledPosition":0},{"color":"var(--palette-color0)","alpha":1,"scaledPosition":1}],"endPoints":[{"x":50,"y":50},{"x":100,"y":50}],"radialHandlePoints":[{"x":50,"y":100},{"x":100,"y":100}]}}},"video_preset_style":{"fillEnable":0,"strokeEnable":0,"shadowEnable":0,"fill":"var(--video_preset-color)","fillOpacity":1,"stroke":"var(--video_preset-border)","strokeWidth":1,"strokeLinecap":"butt","strokeDasharray":"none","brightness":0,"contrast":0,"saturation":0,"sharpness":0,"boxShadow":{"x":1,"y":2,"blur":4,"spread":null,"color":"var(--greyscale3)","inset":null,"opacity":1},"gradientFill":{"linearFill":{"colorStops":[{"color":"var(--palette-color1)","alpha":1,"scaledPosition":0},{"color":"var(--palette-color0)","alpha":1,"scaledPosition":1}],"endPoints":[{"x":50,"y":0},{"x":50,"y":100}]},"radialFill":{"colorStops":[{"color":"var(--palette-color1)","alpha":1,"scaledPosition":0},{"color":"var(--palette-color0)","alpha":1,"scaledPosition":1}],"endPoints":[{"x":50,"y":50},{"x":100,"y":50}],"radialHandlePoints":[{"x":50,"y":100},{"x":100,"y":100}]}}},"cp_comment_box_shape_1_solid_style":{"fill":"#F2B807","fillOpacity":1,"stroke":"var(--palette-color3)","strokeWidth":1,"strokeLinecap":"butt","strokeDasharray":"none","boxShadow":{"x":1,"y":2,"blur":4,"spread":null,"color":"var(--greyscale3)","inset":null,"opacity":1},"gradientFill":{"linearFill":{"colorStops":[{"color":"var(--palette-color1)","alpha":1,"scaledPosition":0},{"color":"var(--palette-color0)","alpha":1,"scaledPosition":1}],"endPoints":[{"x":50,"y":0},{"x":50,"y":100}]},"radialFill":{"colorStops":[{"color":"var(--palette-color1)","alpha":1,"scaledPosition":0},{"color":"var(--palette-color0)","alpha":1,"scaledPosition":1}],"endPoints":[{"x":50,"y":50},{"x":100,"y":50}],"radialHandlePoints":[{"x":50,"y":100},{"x":100,"y":100}]}}},"cp_clickbox_shape_solid_style":{"fill":"var(--clickbox-preset-fill-color)","fillOpacity":0.6,"stroke":"var(--palette-color3)","strokeWidth":1,"strokeLinecap":"butt","strokeDasharray":"2, 3","brightness":0,"contrast":0,"saturation":0,"sharpness":0,"boxShadow":{"x":1,"y":2,"blur":4,"spread":null,"color":"var(--greyscale3)","inset":null,"opacity":1},"gradientFill":{"linearFill":{"colorStops":[{"color":"var(--palette-color1)","alpha":1,"scaledPosition":0},{"color":"var(--palette-color0)","alpha":1,"scaledPosition":1}],"endPoints":[{"x":50,"y":0},{"x":50,"y":100}]},"radialFill":{"colorStops":[{"color":"var(--palette-color1)","alpha":1,"scaledPosition":0},{"color":"var(--palette-color0)","alpha":1,"scaledPosition":1}],"endPoints":[{"x":50,"y":50},{"x":100,"y":50}],"radialHandlePoints":[{"x":50,"y":100},{"x":100,"y":100}]}}},"button_shape_1_normal":{"meta":{"fillEnable":1,"fillType":1,"strokeEnable":1,"shadowEnable":0,"type":0,"category":0},"fill":"var(--button-normal--primaryColor)","fillOpacity":1,"stroke":"var(--button-normal--borderColor)","strokeWidth":2,"strokeLinecap":"butt","strokeDasharray":"none","brightness":0,"contrast":0,"saturation":0,"sharpness":0,"boxShadow":{"x":1,"y":2,"blur":4,"spread":null,"color":"var(--button-normal--shadowColor)","inset":null,"opacity":1},"gradientFill":{"linearFill":{"colorStops":[{"color":"var(--palette-color1)","alpha":1,"scaledPosition":0},{"color":"var(--palette-color0)","alpha":1,"scaledPosition":1}],"endPoints":[{"x":50,"y":0},{"x":50,"y":100}]},"radialFill":{"colorStops":[{"color":"var(--palette-color1)","alpha":1,"scaledPosition":0},{"color":"var(--palette-color0)","alpha":1,"scaledPosition":1}],"endPoints":[{"x":50,"y":50},{"x":100,"y":50}],"radialHandlePoints":[{"x":50,"y":100},{"x":100,"y":100}]}}},"button_shape_1_hover":{"meta":{"fillEnable":1,"fillType":1,"strokeEnable":1,"shadowEnable":0,"type":0,"category":0},"fill":"var(--button-hover--primaryColor)","fillOpacity":1,"stroke":"var(--button-hover--borderColor)","strokeWidth":2,"strokeLinecap":"butt","strokeDasharray":"none","brightness":0,"contrast":0,"saturation":0,"sharpness":0,"boxShadow":{"x":1,"y":2,"blur":4,"spread":null,"color":"var(--button-hover--shadowColor)","inset":null,"opacity":1},"gradientFill":{"linearFill":{"colorStops":[{"color":"var(--palette-color1)","alpha":1,"scaledPosition":0},{"color":"var(--palette-color0)","alpha":1,"scaledPosition":1}],"endPoints":[{"x":50,"y":0},{"x":50,"y":100}]},"radialFill":{"colorStops":[{"color":"var(--palette-color1)","alpha":1,"scaledPosition":0},{"color":"var(--palette-color0)","alpha":1,"scaledPosition":1}],"endPoints":[{"x":50,"y":50},{"x":100,"y":50}],"radialHandlePoints":[{"x":50,"y":100},{"x":100,"y":100}]}}},"button_shape_1_selected":{"meta":{"fillEnable":1,"fillType":1,"strokeEnable":1,"shadowEnable":0,"type":0,"category":0},"fill":"var(--button-selected--primaryColor)","fillOpacity":1,"stroke":"var(--button-selected--borderColor)","strokeWidth":2,"strokeLinecap":"butt","strokeDasharray":"none","brightness":0,"contrast":0,"saturation":0,"sharpness":0,"boxShadow":{"x":1,"y":2,"blur":4,"spread":null,"color":"var(--button-hover--shadowColor)","inset":null,"opacity":1},"gradientFill":{"linearFill":{"colorStops":[{"color":"var(--palette-color1)","alpha":1,"scaledPosition":0},{"color":"var(--palette-color0)","alpha":1,"scaledPosition":1}],"endPoints":[{"x":50,"y":0},{"x":50,"y":100}]},"radialFill":{"colorStops":[{"color":"var(--palette-color1)","alpha":1,"scaledPosition":0},{"color":"var(--palette-color0)","alpha":1,"scaledPosition":1}],"endPoints":[{"x":50,"y":50},{"x":100,"y":50}],"radialHandlePoints":[{"x":50,"y":100},{"x":100,"y":100}]}}},"button_shape_1_visited":{"meta":{"fillEnable":1,"fillType":1,"strokeEnable":1,"shadowEnable":0,"type":0,"category":0},"fill":"var(--button-visited--primaryColor)","fillOpacity":1,"stroke":"var(--button-visited--borderColor)","strokeWidth":2,"strokeLinecap":"butt","strokeDasharray":"none","brightness":0,"contrast":0,"saturation":0,"sharpness":0,"boxShadow":{"x":1,"y":2,"blur":4,"spread":null,"color":"var(--button-hover--shadowColor)","inset":null,"opacity":1},"gradientFill":{"linearFill":{"colorStops":[{"color":"var(--palette-color1)","alpha":1,"scaledPosition":0},{"color":"var(--palette-color0)","alpha":1,"scaledPosition":1}],"endPoints":[{"x":50,"y":0},{"x":50,"y":100}]},"radialFill":{"colorStops":[{"color":"var(--palette-color1)","alpha":1,"scaledPosition":0},{"color":"var(--palette-color0)","alpha":1,"scaledPosition":1}],"endPoints":[{"x":50,"y":50},{"x":100,"y":50}],"radialHandlePoints":[{"x":50,"y":100},{"x":100,"y":100}]}}},"button_shape_1_disabled":{"meta":{"fillEnable":1,"fillType":1,"strokeEnable":1,"shadowEnable":0,"type":0,"category":0},"fill":"var(--button-disabled--primaryColor)","fillOpacity":1,"stroke":"var(--button-disabled--borderColor)","strokeWidth":2,"strokeLinecap":"butt","strokeDasharray":"none","brightness":0,"contrast":0,"saturation":0,"sharpness":0,"boxShadow":{"x":1,"y":2,"blur":4,"spread":null,"color":"var(--button-hover--shadowColor)","inset":null,"opacity":1},"gradientFill":{"linearFill":{"colorStops":[{"color":"var(--palette-color1)","alpha":1,"scaledPosition":0},{"color":"var(--palette-color0)","alpha":1,"scaledPosition":1}],"endPoints":[{"x":50,"y":0},{"x":50,"y":100}]},"radialFill":{"colorStops":[{"color":"var(--palette-color1)","alpha":1,"scaledPosition":0},{"color":"var(--palette-color0)","alpha":1,"scaledPosition":1}],"endPoints":[{"x":50,"y":50},{"x":100,"y":50}],"radialHandlePoints":[{"x":50,"y":100},{"x":100,"y":100}]}}},"button_navigate_default":{"meta":{"fillEnable":1,"fillType":1,"strokeEnable":1,"shadowEnable":0,"type":0,"category":0},"fill":"#333333","fillOpacity":1,"stroke":"#D6D5D1","strokeWidth":2,"strokeLinecap":"butt","strokeDasharray":"none","brightness":0,"contrast":0,"saturation":0,"sharpness":0,"boxShadow":{"x":1,"y":2,"blur":4,"spread":null,"color":"var(--button-hover--shadowColor)","inset":null,"opacity":1},"gradientFill":{"linearFill":{"colorStops":[{"color":"var(--palette-color1)","alpha":1,"scaledPosition":0},{"color":"var(--palette-color0)","alpha":1,"scaledPosition":1}],"endPoints":[{"x":50,"y":0},{"x":50,"y":100}]},"radialFill":{"colorStops":[{"color":"var(--palette-color1)","alpha":1,"scaledPosition":0},{"color":"var(--palette-color0)","alpha":1,"scaledPosition":1}],"endPoints":[{"x":50,"y":50},{"x":100,"y":50}],"radialHandlePoints":[{"x":50,"y":100},{"x":100,"y":100}]}}},"button_navigate_hover":{"meta":{"fillEnable":1,"fillType":1,"strokeEnable":1,"shadowEnable":0,"type":0,"category":0},"fill":"#000000","fillOpacity":1,"stroke":"#D6D5D1","strokeWidth":2,"strokeLinecap":"butt","strokeDasharray":"none","brightness":0,"contrast":0,"saturation":0,"sharpness":0,"boxShadow":{"x":1,"y":2,"blur":4,"spread":null,"color":"var(--button-hover--shadowColor)","inset":null,"opacity":1},"gradientFill":{"linearFill":{"colorStops":[{"color":"var(--palette-color1)","alpha":1,"scaledPosition":0},{"color":"var(--palette-color0)","alpha":1,"scaledPosition":1}],"endPoints":[{"x":50,"y":0},{"x":50,"y":100}]},"radialFill":{"colorStops":[{"color":"var(--palette-color1)","alpha":1,"scaledPosition":0},{"color":"var(--palette-color0)","alpha":1,"scaledPosition":1}],"endPoints":[{"x":50,"y":50},{"x":100,"y":50}],"radialHandlePoints":[{"x":50,"y":100},{"x":100,"y":100}]}}},"button_navigate_disabled":{"meta":{"fillEnable":1,"fillType":1,"strokeEnable":1,"shadowEnable":0,"type":0,"category":0},"fill":"#D6D5D1","fillOpacity":1,"stroke":"#D6D5D1","strokeWidth":2,"strokeLinecap":"butt","strokeDasharray":"none","brightness":0,"contrast":0,"saturation":0,"sharpness":0,"boxShadow":{"x":1,"y":2,"blur":4,"spread":null,"color":"var(--button-hover--shadowColor)","inset":null,"opacity":1},"gradientFill":{"linearFill":{"colorStops":[{"color":"var(--palette-color1)","alpha":1,"scaledPosition":0},{"color":"var(--palette-color0)","alpha":1,"scaledPosition":1}],"endPoints":[{"x":50,"y":0},{"x":50,"y":100}]},"radialFill":{"colorStops":[{"color":"var(--palette-color1)","alpha":1,"scaledPosition":0},{"color":"var(--palette-color0)","alpha":1,"scaledPosition":1}],"endPoints":[{"x":50,"y":50},{"x":100,"y":50}],"radialHandlePoints":[{"x":50,"y":100},{"x":100,"y":100}]}}},"dropdown_shape_1_normal":{"meta":{"fillEnable":1,"fillType":1,"strokeEnable":1,"shadowEnable":0,"type":0,"category":0},"fill":"var(--dropdown-normal--primaryColor)","fillOpacity":1,"stroke":"var(--dropdown-normal--borderColor)","strokeWidth":2,"strokeLinecap":"butt","strokeDasharray":"none","brightness":0,"contrast":0,"saturation":0,"sharpness":0,"boxShadow":{"x":1,"y":2,"blur":4,"spread":null,"color":"var(--dropdown-normal--shadowColor)","inset":null,"opacity":1},"gradientFill":{"linearFill":{"colorStops":[{"color":"var(--palette-color1)","alpha":1,"scaledPosition":0},{"color":"var(--palette-color0)","alpha":1,"scaledPosition":1}],"endPoints":[{"x":50,"y":0},{"x":50,"y":100}]},"radialFill":{"colorStops":[{"color":"var(--palette-color1)","alpha":1,"scaledPosition":0},{"color":"var(--palette-color0)","alpha":1,"scaledPosition":1}],"endPoints":[{"x":50,"y":50},{"x":100,"y":50}],"radialHandlePoints":[{"x":50,"y":100},{"x":100,"y":100}]}}},"dropdown_shape_1_hover":{"meta":{"fillEnable":1,"fillType":1,"strokeEnable":1,"shadowEnable":0,"type":0,"category":0},"fill":"var(--dropdown-hover--primaryColor)","fillOpacity":1,"stroke":"var(--dropdown-hover--borderColor)","strokeWidth":3,"strokeLinecap":"butt","strokeDasharray":"none","brightness":0,"contrast":0,"saturation":0,"sharpness":0,"boxShadow":{"x":1,"y":2,"blur":4,"spread":null,"color":"var(--dropdown-hover--shadowColor)","inset":null,"opacity":1},"gradientFill":{"linearFill":{"colorStops":[{"color":"var(--palette-color1)","alpha":1,"scaledPosition":0},{"color":"var(--palette-color0)","alpha":1,"scaledPosition":1}],"endPoints":[{"x":50,"y":0},{"x":50,"y":100}]},"radialFill":{"colorStops":[{"color":"var(--palette-color1)","alpha":1,"scaledPosition":0},{"color":"var(--palette-color0)","alpha":1,"scaledPosition":1}],"endPoints":[{"x":50,"y":50},{"x":100,"y":50}],"radialHandlePoints":[{"x":50,"y":100},{"x":100,"y":100}]}}},"dropdown_shape_1_selected":{"meta":{"fillEnable":1,"fillType":1,"strokeEnable":1,"shadowEnable":0,"type":0,"category":0},"fill":"var(--dropdown-selected--primaryColor)","fillOpacity":1,"stroke":"var(--dropdown-selected--borderColor)","strokeWidth":2,"strokeLinecap":"butt","strokeDasharray":"none","brightness":0,"contrast":0,"saturation":0,"sharpness":0,"boxShadow":{"x":1,"y":2,"blur":4,"spread":null,"color":"var(--dropdown-selected--shadowColor)","inset":null,"opacity":1},"gradientFill":{"linearFill":{"colorStops":[{"color":"var(--palette-color1)","alpha":1,"scaledPosition":0},{"color":"var(--palette-color0)","alpha":1,"scaledPosition":1}],"endPoints":[{"x":50,"y":0},{"x":50,"y":100}]},"radialFill":{"colorStops":[{"color":"var(--palette-color1)","alpha":1,"scaledPosition":0},{"color":"var(--palette-color0)","alpha":1,"scaledPosition":1}],"endPoints":[{"x":50,"y":50},{"x":100,"y":50}],"radialHandlePoints":[{"x":50,"y":100},{"x":100,"y":100}]}}},"dropdown_shape_1_disabled":{"meta":{"fillEnable":1,"fillType":1,"strokeEnable":1,"shadowEnable":0,"type":0,"category":0},"fill":"var(--dropdown-disabled--primaryColor)","fillOpacity":1,"stroke":"var(--dropdown-disabled--borderColor)","strokeWidth":2,"strokeLinecap":"butt","strokeDasharray":"none","brightness":0,"contrast":0,"saturation":0,"sharpness":0,"boxShadow":{"x":1,"y":2,"blur":4,"spread":null,"color":"var(--dropdown-disabled--shadowColor)","inset":null,"opacity":1},"gradientFill":{"linearFill":{"colorStops":[{"color":"var(--palette-color1)","alpha":1,"scaledPosition":0},{"color":"var(--palette-color0)","alpha":1,"scaledPosition":1}],"endPoints":[{"x":50,"y":0},{"x":50,"y":100}]},"radialFill":{"colorStops":[{"color":"var(--palette-color1)","alpha":1,"scaledPosition":0},{"color":"var(--palette-color0)","alpha":1,"scaledPosition":1}],"endPoints":[{"x":50,"y":50},{"x":100,"y":50}],"radialHandlePoints":[{"x":50,"y":100},{"x":100,"y":100}]}}},"radio_shape_1_normal":{"meta":{"fillEnable":1,"fillType":1,"strokeEnable":1,"shadowEnable":0,"type":0,"category":0},"fill":"var(--radio-normal--primaryColor)","fillOpacity":1,"stroke":"var(--radio-normal--borderColor)","strokeWidth":2,"strokeLinecap":"butt","strokeDasharray":"none","brightness":0,"contrast":0,"saturation":0,"sharpness":0,"boxShadow":{"x":1,"y":2,"blur":4,"spread":null,"color":"var(--radio-normal--shadowColor)","inset":null,"opacity":1},"gradientFill":{"linearFill":{"colorStops":[{"color":"var(--palette-color1)","alpha":1,"scaledPosition":0},{"color":"var(--palette-color0)","alpha":1,"scaledPosition":1}],"endPoints":[{"x":50,"y":0},{"x":50,"y":100}]},"radialFill":{"colorStops":[{"color":"var(--palette-color1)","alpha":1,"scaledPosition":0},{"color":"var(--palette-color0)","alpha":1,"scaledPosition":1}],"endPoints":[{"x":50,"y":50},{"x":100,"y":50}],"radialHandlePoints":[{"x":50,"y":100},{"x":100,"y":100}]}}},"radio_shape_1_hover":{"meta":{"fillEnable":1,"fillType":1,"strokeEnable":1,"shadowEnable":0,"type":0,"category":0},"fill":"var(--radio-hover--primaryColor)","fillOpacity":1,"stroke":"var(--radio-hover--borderColor)","strokeWidth":3,"strokeLinecap":"butt","strokeDasharray":"none","brightness":0,"contrast":0,"saturation":0,"sharpness":0,"boxShadow":{"x":1,"y":2,"blur":4,"spread":null,"color":"var(--radio-hover--shadowColor)","inset":null,"opacity":1},"gradientFill":{"linearFill":{"colorStops":[{"color":"var(--palette-color1)","alpha":1,"scaledPosition":0},{"color":"var(--palette-color0)","alpha":1,"scaledPosition":1}],"endPoints":[{"x":50,"y":0},{"x":50,"y":100}]},"radialFill":{"colorStops":[{"color":"var(--palette-color1)","alpha":1,"scaledPosition":0},{"color":"var(--palette-color0)","alpha":1,"scaledPosition":1}],"endPoints":[{"x":50,"y":50},{"x":100,"y":50}],"radialHandlePoints":[{"x":50,"y":100},{"x":100,"y":100}]}}},"radio_shape_1_selected":{"meta":{"fillEnable":1,"fillType":1,"strokeEnable":1,"shadowEnable":0,"type":0,"category":0},"fill":"var(--radio-selected--primaryColor)","fillOpacity":1,"stroke":"var(--radio-selected--borderColor)","strokeWidth":2,"strokeLinecap":"butt","strokeDasharray":"none","brightness":0,"contrast":0,"saturation":0,"sharpness":0,"boxShadow":{"x":1,"y":2,"blur":4,"spread":null,"color":"var(--radio-selected--shadowColor)","inset":null,"opacity":1},"gradientFill":{"linearFill":{"colorStops":[{"color":"var(--palette-color1)","alpha":1,"scaledPosition":0},{"color":"var(--palette-color0)","alpha":1,"scaledPosition":1}],"endPoints":[{"x":50,"y":0},{"x":50,"y":100}]},"radialFill":{"colorStops":[{"color":"var(--palette-color1)","alpha":1,"scaledPosition":0},{"color":"var(--palette-color0)","alpha":1,"scaledPosition":1}],"endPoints":[{"x":50,"y":50},{"x":100,"y":50}],"radialHandlePoints":[{"x":50,"y":100},{"x":100,"y":100}]}}},"radio_shape_1_disabled_checked":{"meta":{"fillEnable":1,"fillType":1,"strokeEnable":1,"shadowEnable":0,"type":0,"category":0},"fill":"var(--radio-disabled-checked--primaryColor)","fillOpacity":1,"stroke":"var(--radio-disabled-checked--borderColor)","strokeWidth":2,"strokeLinecap":"butt","strokeDasharray":"none","brightness":0,"contrast":0,"saturation":0,"sharpness":0,"boxShadow":{"x":1,"y":2,"blur":4,"spread":null,"color":"var(--radio-disabled-checked--shadowColor)","inset":null,"opacity":1},"gradientFill":{"linearFill":{"colorStops":[{"color":"var(--palette-color1)","alpha":1,"scaledPosition":0},{"color":"var(--palette-color0)","alpha":1,"scaledPosition":1}],"endPoints":[{"x":50,"y":0},{"x":50,"y":100}]},"radialFill":{"colorStops":[{"color":"var(--palette-color1)","alpha":1,"scaledPosition":0},{"color":"var(--palette-color0)","alpha":1,"scaledPosition":1}],"endPoints":[{"x":50,"y":50},{"x":100,"y":50}],"radialHandlePoints":[{"x":50,"y":100},{"x":100,"y":100}]}}},"radio_shape_1_disabled_unchecked":{"meta":{"fillEnable":1,"fillType":1,"strokeEnable":1,"shadowEnable":0,"type":0,"category":0},"fill":"var(--radio-disabled-unchecked--primaryColor)","fillOpacity":1,"stroke":"var(--radio-disabled-unchecked--borderColor)","strokeWidth":2,"strokeLinecap":"butt","strokeDasharray":"none","brightness":0,"contrast":0,"saturation":0,"sharpness":0,"boxShadow":{"x":1,"y":2,"blur":4,"spread":null,"color":"var(--radio-disabled-unchecked--shadowColor)","inset":null,"opacity":1},"gradientFill":{"linearFill":{"colorStops":[{"color":"var(--palette-color1)","alpha":1,"scaledPosition":0},{"color":"var(--palette-color0)","alpha":1,"scaledPosition":1}],"endPoints":[{"x":50,"y":0},{"x":50,"y":100}]},"radialFill":{"colorStops":[{"color":"var(--palette-color1)","alpha":1,"scaledPosition":0},{"color":"var(--palette-color0)","alpha":1,"scaledPosition":1}],"endPoints":[{"x":50,"y":50},{"x":100,"y":50}],"radialHandlePoints":[{"x":50,"y":100},{"x":100,"y":100}]}}},"cp_clicktoreveal_default":{"meta":{"fillEnable":1,"fillType":1,"strokeEnable":1,"shadowEnable":0,"type":0,"category":0},"fill":"#ffffff","fillOpacity":1,"stroke":"#ffffff","strokeWidth":1,"strokeLinecap":"butt","strokeDasharray":"none","brightness":0,"contrast":0,"saturation":0,"sharpness":0,"boxShadow":{"x":1,"y":2,"blur":4,"spread":null,"color":"var(--radio-disabled-unchecked--shadowColor)","inset":null,"opacity":1},"gradientFill":{"linearFill":{"colorStops":[{"color":"var(--palette-color1)","alpha":1,"scaledPosition":0},{"color":"var(--palette-color0)","alpha":1,"scaledPosition":1}],"endPoints":[{"x":50,"y":0},{"x":50,"y":100}]},"radialFill":{"colorStops":[{"color":"var(--palette-color1)","alpha":1,"scaledPosition":0},{"color":"var(--palette-color0)","alpha":1,"scaledPosition":1}],"endPoints":[{"x":50,"y":50},{"x":100,"y":50}],"radialHandlePoints":[{"x":50,"y":100},{"x":100,"y":100}]}}},"cp_button_shape_8_linear_style":{"meta":{"fillEnable":1,"fillType":3,"strokeEnable":1,"shadowEnable":0,"type":0,"category":0},"fill":"var(--palette-color0)","fillOpacity":1,"stroke":"var(--black)","strokeWidth":1,"strokeLinecap":"butt","strokeDasharray":"none","brightness":0,"contrast":0,"saturation":0,"sharpness":0,"boxShadow":{"x":1,"y":2,"blur":4,"spread":null,"color":"var(--greyscale3)","inset":null,"opacity":1},"gradientFill":{"linearFill":{"colorStops":[{"color":"#FF335E","alpha":1,"scaledPosition":0},{"color":"#ECA8B6","alpha":1,"scaledPosition":1}],"endPoints":[{"x":50,"y":0},{"x":50,"y":100}]},"radialFill":{"colorStops":[{"color":"var(--palette-color7)","alpha":1,"scaledPosition":0},{"color":"var(--palette-color8)","alpha":1,"scaledPosition":1}],"endPoints":[{"x":50,"y":50},{"x":100,"y":50}],"radialHandlePoints":[{"x":50,"y":100},{"x":100,"y":100}]}}},"cp_button_shape_8_solid_style_blue":{"fill":"#ADD8E6","fillOpacity":1,"stroke":"var(--black)","strokeWidth":1,"strokeLinecap":"butt","strokeDasharray":"none","brightness":0,"contrast":0,"saturation":0,"sharpness":0,"boxShadow":{"x":1,"y":2,"blur":4,"spread":null,"color":"var(--greyscale3)","inset":null,"opacity":1},"gradientFill":{"linearFill":{"colorStops":[{"color":"#FF335E","alpha":1,"scaledPosition":0},{"color":"#ECA8B6","alpha":1,"scaledPosition":1}],"endPoints":[{"x":50,"y":0},{"x":50,"y":100}]},"radialFill":{"colorStops":[{"color":"var(--palette-color1)","alpha":1,"scaledPosition":0},{"color":"var(--palette-color0)","alpha":1,"scaledPosition":1}],"endPoints":[{"x":50,"y":50},{"x":100,"y":50}],"radialHandlePoints":[{"x":50,"y":100},{"x":100,"y":100}]}}},"cp_inputField_shape_1_solid_style_edited":{"meta":{"fillEnable":1,"fillType":1,"strokeEnable":1,"shadowEnable":0,"type":0,"category":0},"fill":"var(--inputfield-normal--primaryColor)","fillOpacity":1,"stroke":"var(--inputfield-normal--borderColor)","strokeWidth":2,"strokeLinecap":"butt","strokeDasharray":"none","brightness":0,"contrast":0,"saturation":0,"sharpness":0,"boxShadow":{"x":1,"y":2,"blur":4,"spread":null,"color":"var(--inputfield-normal--shadowColor)","inset":null,"opacity":1},"gradientFill":{"linearFill":{"colorStops":[{"color":"var(--palette-color1)","alpha":1,"scaledPosition":0},{"color":"var(--palette-color0)","alpha":1,"scaledPosition":1}],"endPoints":[{"x":50,"y":0},{"x":50,"y":100}]},"radialFill":{"colorStops":[{"color":"var(--palette-color1)","alpha":1,"scaledPosition":0},{"color":"var(--palette-color0)","alpha":1,"scaledPosition":1}],"endPoints":[{"x":50,"y":50},{"x":100,"y":50}],"radialHandlePoints":[{"x":50,"y":100},{"x":100,"y":100}]}}}}'
        },
        project_main: {
            from: 1,
            to: 0,
            currentFrame: 1,
            featureFlags: {
                isNewWidgetArchitecture: '{"isEnabled":true,"featureData":{}}'
            },
            useResponsive: true,
            responsiveType: 512,
            isResponsiveSim: 1,
            currentFrame: 1,
            useWidgetVersion7: false,
            isPublishedFromLacuna: false,
            vestr: 0,
            vim: 0,
            slides: 'Slide460,Slide604,Slide1715,Slide2668,Slide3821,Slide4474,Slide4650,Slide4784,Slide4918',
            questions: '',
            autoplay: false,
            preloader: true,
            preloaderFileName: 'dr/loading.gif',
            preloaderPercentage: 100,
            pprtd: false,
            peon: false,
            fadeInAtStart: 0,
            fadeOutAtEnd: 0
        },
        borderProperties: {
            hasBorder: false
        },
        playBarProperties: {
            hasPlayBar: true,
            position: 3,
            layout: 3,
            showOnHover: false,
            overlay: true,
            tworow: false,
            hasRewind: true,
            hasBackward: true,
            hasPlay: true,
            hasEnterVR: false,
            hasSlider: true,
            hasForward: true,
            hasCC: false,
            hasAudioOn: true,
            hasExit: true,
            hasFastForward: true,
            applyColors: false,
            alpha: 100,
            noToolTips: false,
            locale: 3
        },
        tocProperties: {
            tocProperties: '{"tocConfig":{"labels":{"TITLE":"Inhaltsverzeichnis","SLIDE_DETAILS":"FOLIENTITEL","DURATION":"DAUER","CLOSE_BUTTON_LABEL":"Schließen"},"slideDetails":[{"parentId":null,"isVisible":true,"isResultSlide":false,"labelShouldBeInSync":true,"originalId":460,"isQuizSlide":false,"label":"Start","slideVisited":false,"type":"slide","id":"Slide460"},{"parentId":null,"isVisible":true,"isResultSlide":false,"labelShouldBeInSync":true,"originalId":604,"isQuizSlide":false,"label":"Libraries öffnen","slideVisited":false,"type":"slide","id":"Slide604"},{"parentId":null,"isVisible":true,"isResultSlide":false,"labelShouldBeInSync":true,"originalId":1715,"isQuizSlide":false,"label":"SBB Colors","slideVisited":false,"type":"slide","id":"Slide1715"},{"parentId":null,"isVisible":true,"isResultSlide":false,"labelShouldBeInSync":true,"originalId":2668,"isQuizSlide":false,"label":"SBB Icons","slideVisited":false,"type":"slide","id":"Slide2668"},{"parentId":null,"isVisible":true,"isResultSlide":false,"labelShouldBeInSync":true,"originalId":3821,"isQuizSlide":false,"label":"SBB Pictograms","slideVisited":false,"type":"slide","id":"Slide3821"},{"parentId":null,"isVisible":true,"isResultSlide":false,"labelShouldBeInSync":true,"originalId":4474,"isQuizSlide":false,"label":"Lyne Components","slideVisited":false,"type":"slide","id":"Slide4474"},{"parentId":null,"isVisible":true,"isResultSlide":false,"labelShouldBeInSync":true,"originalId":4650,"isQuizSlide":false,"label":"Lyne Design Tokens","slideVisited":false,"type":"slide","id":"Slide4650"},{"parentId":null,"isVisible":true,"isResultSlide":false,"labelShouldBeInSync":true,"originalId":4784,"isQuizSlide":false,"label":"Libraries schliessen","slideVisited":false,"type":"slide","id":"Slide4784"},{"parentId":null,"isVisible":true,"isResultSlide":false,"labelShouldBeInSync":true,"originalId":4918,"isQuizSlide":false,"label":"Ende","slideVisited":false,"type":"slide","id":"Slide4918"}],"tocGeneratedOnPreviewClick":false,"preserveSlidesOrder":true},"playbarConfig":{"isPlaybarControlsPlayEnabled":true,"isPlaybarControlsNextEnabled":true,"isPlaybarControlsTOCEnabled":false,"isShowPlaybarEnabled":true,"isShowTooltipsEnabled":false,"isPlaybarControlsBackEnabled":true,"isHidePlaybarInQuizEnabled":false,"isPlaybarControlsMuteEnabled":false,"isPlaybarControlsClosedCaptionsEnabled":false}}'
        },
        trecs: [{
                link: 460,
                text: []
            }, {
                link: 604,
                text: []
            }, {
                link: 1715,
                text: []
            }, {
                link: 2668,
                text: []
            }, {
                link: 3821,
                text: []
            }, {
                link: 4474,
                text: []
            }, {
                link: 4650,
                text: []
            }, {
                link: 4784,
                text: []
            }, {
                link: 4918,
                text: []
            }]

            ,
        typekit: {
            kit_id: ''
        },
    };
    cp.model.projectImages = [
        'assets/htmlimages/ThreeD_Close.svg',
        'assets/htmlimages/ThreeD_HotspotDefaultGlow.png',
        'assets/htmlimages/ThreeD_HotspotGlow.png',
        'assets/htmlimages/assessmenthotspotvisited.svg',
        'assets/htmlimages/expand_icon.png',
        'assets/htmlimages/img_trans.gif',
        'assets/htmlimages/placeholder.png'
    ];
    cp.model.data.images = [{
        ip: 'dr/01749.png',
        ipiv: {
            360: 1,
            600: 1,
            972: 1
        }

    }, {
        ip: 'dr/02702.png',
        ipiv: {
            360: 1,
            600: 1,
            972: 1
        }

    }, {
        ip: 'dr/03855.png',
        ipiv: {
            360: 1,
            600: 1,
            972: 1
        }

    }, {
        ip: 'dr/04508.png',
        ipiv: {
            360: 1,
            600: 1,
            972: 1
        }

    }, {
        ip: 'dr/04684.png',
        ipiv: {
            360: 1,
            600: 1,
            972: 1
        }

    }, {
        ip: 'dr/04818.png',
        ipiv: {
            360: 1,
            600: 1,
            972: 1
        }

    }, {
        ip: 'dr/0494.png',
        ipiv: {
            360: 1,
            600: 1,
            972: 1
        }

    }, {
        ip: 'dr/04952.png',
        ipiv: {
            360: 1,
            600: 1,
            972: 1
        }

    }, {
        ip: 'dr/0638.png',
        ipiv: {
            360: 1,
            600: 1,
            972: 1
        }

    }, {
        ip: 'dr/sfs0.jpg',
        ipiv: {
            360: 1,
            600: 1,
            972: 1
        }

    }];
    cp.model.imageresources = [];
    cp.model.audioresources = [{
        slideID: 1,
        ResourceList: {
            resources: ['ar/KeyClick.mp3']
        }

    }, {
        slideID: 8,
        ResourceList: {
            resources: ['ar/597.mp3', 'ar/Mouse.mp3']
        }

    }];
    cp.model.videos = [];
    cp.model.slideVideos = [];
    cp.model.tocVideos = [];
    cp.model.audios = [
        'ar/KeyClick.mp3',
        'ar/597.mp3',
        'ar/Mouse.mp3'
    ];

    cp.initVariables = function() {
        cp.cv('CaptivateVersion', '12.3.0', 1, 1000, 0);
        cp.cv('Date.DateDDMMYY', 'dd/mm/yyyy', 1, 15, 0);
        cp.cv('Date.DateMMDDYY', 'mm/dd/yyyy', 1, 15, 0);
        cp.cv('Date.Day', 1, 1, 15, 0);
        cp.cv('Date.Hours', 'hh', 1, 15, 0);
        cp.cv('Date.LocaleString', '', 1, 15, 0);
        cp.cv('Date.Minutes', 'mm', 1, 15, 0);
        cp.cv('Date.Month', 'mm', 1, 15, 0);
        cp.cv('Date.Time', 'hh:mm:ss', 1, 15, 0);
        cp.cv('Date.Today', 'dd', 1, 15, 0);
        cp.cv('Date.Year', 'yyyy', 1, 15, 0);
        cp.cv('Project.AudioLevel', 100, 1, 15, 0);
        cp.cv('Project.ClosedCaptions', 0, 1, 15, 0);
        cp.cv('Project.CurrentSlideName', 'slide', 1, 15, 0);
        cp.cv('Project.CurrentSlideNumber', 1, 1, 15, 0);
        cp.cv('Project.LockTOC', 0, 1, 15, 0);
        cp.cv('Project.MuteAudio', 0, 1, 15, 0);
        cp.cv('Project.ShowPlaybar', 1, 1, 15, 0);
        cp.cv('Project.ShowTOC', 0, 1, 15, 0);
        cp.cv('Project.SlideCount', 1, 1, 15, 0);
        cp.cv('Question.AnswerChoice', '', 1, 15, 0);
        cp.cv('Question.MaxAttempts', 0, 1, 15, 0);
        cp.cv('Question.NegativePoints', 0, 1, 15, 0);
        cp.cv('Question.PointsAssigned', 0, 1, 15, 0);
        cp.cv('Question.PreviousQuestionScore', 0, 1, 15, 0);
        cp.cv('Quiz.AttemptCount', 0, 1, 15, 0);
        cp.cv('Quiz.CorrectAnswerCount', 0, 1, 15, 0);
        cp.cv('Quiz.InReview', 0, 1, 15, 0);
        cp.cv('Quiz.InScope', 0, 1, 15, 0);
        cp.cv('Quiz.MaxScore', 0, 1, 1000, 0);
        cp.cv('Quiz.Pass', 0, 1, 15, 0);
        cp.cv('Quiz.PassPercentage', 80, 1, 1000, 0);
        cp.cv('Quiz.PassPoints', 0, 1, 1000, 0);
        cp.cv('Quiz.PercentageScore', 0, 1, 15, 0);
        cp.cv('Quiz.QuestionCount', 0, 1, 1000, 0);
        cp.cv('Quiz.Score', 0, 1, 15, 0);
        cp.cv('Quiz.UnansweredQuestionCount', 0, 1, 1000, 0);
        cp.cv('cpInfoHasPlaybar', 1, 1, 1000, 0);
        cp.cv('cpInfoSlidesInProject', 9, 1, 1000, 0);
        cp.cv('cpLockTOC', 0, 1, 1000, 0);
        cp.cv('cpQuizInfoPreTestTotalQuestions', 0, 1, 1000, 0);
        cp.cv('cpQuizInfoTotalQuizPoints', 0, 1, 1000, 0);
        cp.cv('cpInfoPrevFrame', 0, 1, 15, 0);
        cp.cv('LMS.CourseName', '', 0, 15, 0);
        cp.cv('LMS.LearnerID', '', 0, 15, 0);
        cp.cv('LMS.LearnerName', '', 0, 15, 0);
    };
    cp.ReportingVariables = "LMS.CourseName,LMS.LearnerID,LMS.LearnerName,";
};
cp.sbw = 0;
cp.useg = 0;
cp.geo = 0;
cp.pg = 0;
cp.win8 = 0;
cp.autoGrow = 1;
cp.fluidFont = 1;