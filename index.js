"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const stream_1 = __importDefault(require("./stream"));
exports.stream = stream_1.default;
const getArgs = (arg1, arg2) => {
    let attributes, children;
    if (arg1) {
        if (typeof arg1 === 'string')
            children = arg1;
        else if (arg1 instanceof Array)
            children = arg1;
        else
            attributes = arg1;
    }
    if (arg2 && (arg2 === 'string' || arg2 instanceof Node))
        children = arg2;
    return { attributes, children };
};
const _element = (tag) => (arg1, arg2) => {
    const { attributes, children } = getArgs(arg1, arg2);
    const element = document.createElement(tag);
    if (attributes) {
        let keys = Object.keys(attributes);
        for (let i = 0; i < keys.length; i++) {
            let attribute = keys[i], value = attributes[keys[i]];
            if (typeof value === 'string')
                element.setAttribute(attribute, value);
            else if (value)
                element.setAttribute(attribute, '');
            else
                element.removeAttribute(attribute);
        }
    }
    if (children) {
        if (typeof children == 'string')
            element.textContent = children;
        else
            for (let i = 0; i < children.length; i++)
                element.appendChild(children[i]);
    }
    return element;
};
const a = _element('a'), abbr = _element('abbr'), acronym = _element('acronym'), address = _element('address'), applet = _element('applet'), area = _element('area'), article = _element('article'), aside = _element('aside'), audio = _element('audio'), b = _element('b'), base = _element('base'), basefont = _element('basefont'), bdo = _element('bdo'), bgsound = _element('bgsound'), big = _element('big'), blink = _element('blink'), blockquote = _element('blockquote'), body = _element('body'), br = _element('br'), button = _element('button'), canvas = _element('canvas'), caption = _element('caption'), center = _element('center'), cite = _element('cite'), code = _element('code'), col = _element('col'), colgroup = _element('colgroup'), command = _element('command'), datalist = _element('datalist'), dd = _element('dd'), del = _element('del'), details = _element('details'), dfn = _element('dfn'), div = _element('div'), dl = _element('dl'), dt = _element('dt'), em = _element('em'), embed = _element('embed'), fieldset = _element('fieldset'), figcaption = _element('figcaption'), figure = _element('figure'), font = _element('font'), footer = _element('footer'), form = _element('form'), frame = _element('frame'), frameset = _element('frameset'), h1 = _element('h1'), h2 = _element('h2'), h3 = _element('h3'), h4 = _element('h4'), h5 = _element('h5'), h6 = _element('h6'), head = _element('head'), header = _element('header'), hgroup = _element('hgroup'), hr = _element('hr'), html = _element('html'), i = _element('i'), iframe = _element('iframe'), img = _element('img'), input = _element('input'), ins = _element('ins'), isindex = _element('isindex'), kbd = _element('kbd'), keygen = _element('keygen'), label = _element('label'), legend = _element('legend'), li = _element('li'), link = _element('link'), listing = _element('listing'), map = _element('map'), mark = _element('mark'), marquee = _element('marquee'), math = _element('math'), menu = _element('menu'), meta = _element('meta'), meter = _element('meter'), nav = _element('nav'), nextid = _element('nextid'), nobr = _element('nobr'), noembed = _element('noembed'), noframes = _element('noframes'), noscript = _element('noscript'), object = _element('object'), ol = _element('ol'), optgroup = _element('optgroup'), option = _element('option'), output = _element('output'), p = _element('p'), param = _element('param'), plaintext = _element('plaintext'), pre = _element('pre'), progress = _element('progress'), q = _element('q'), rp = _element('rp'), rt = _element('rt'), ruby = _element('ruby'), s = _element('s'), samp = _element('samp'), script = _element('script'), section = _element('section'), select = _element('select'), small = _element('small'), source = _element('source'), spacer = _element('spacer'), span = _element('span'), strike = _element('strike'), strong = _element('strong'), style = _element('style'), sub = _element('sub'), sup = _element('sup'), summary = _element('summary'), svg = _element('svg'), table = _element('table'), tbody = _element('tbody'), td = _element('td'), textarea = _element('textarea'), tfoot = _element('tfoot'), th = _element('th'), thead = _element('thead'), time = _element('time'), title = _element('title'), tr = _element('tr'), track = _element('track'), tt = _element('tt'), u = _element('u'), ul = _element('ul'), var_ = _element('var'), video = _element('video'), wbr = _element('wbr'), xmp = _element('xmp');
exports.a = a;
exports.abbr = abbr;
exports.acronym = acronym;
exports.address = address;
exports.applet = applet;
exports.area = area;
exports.article = article;
exports.aside = aside;
exports.audio = audio;
exports.b = b;
exports.base = base;
exports.basefont = basefont;
exports.bdo = bdo;
exports.bgsound = bgsound;
exports.big = big;
exports.blink = blink;
exports.blockquote = blockquote;
exports.body = body;
exports.br = br;
exports.button = button;
exports.canvas = canvas;
exports.caption = caption;
exports.center = center;
exports.cite = cite;
exports.code = code;
exports.col = col;
exports.colgroup = colgroup;
exports.command = command;
exports.datalist = datalist;
exports.dd = dd;
exports.del = del;
exports.details = details;
exports.dfn = dfn;
exports.div = div;
exports.dl = dl;
exports.dt = dt;
exports.em = em;
exports.embed = embed;
exports.fieldset = fieldset;
exports.figcaption = figcaption;
exports.figure = figure;
exports.font = font;
exports.footer = footer;
exports.form = form;
exports.frame = frame;
exports.frameset = frameset;
exports.h1 = h1;
exports.h2 = h2;
exports.h3 = h3;
exports.h4 = h4;
exports.h5 = h5;
exports.h6 = h6;
exports.head = head;
exports.header = header;
exports.hgroup = hgroup;
exports.hr = hr;
exports.html = html;
exports.i = i;
exports.iframe = iframe;
exports.img = img;
exports.input = input;
exports.ins = ins;
exports.isindex = isindex;
exports.kbd = kbd;
exports.keygen = keygen;
exports.label = label;
exports.legend = legend;
exports.li = li;
exports.link = link;
exports.listing = listing;
exports.map = map;
exports.mark = mark;
exports.marquee = marquee;
exports.math = math;
exports.menu = menu;
exports.meta = meta;
exports.meter = meter;
exports.nav = nav;
exports.nextid = nextid;
exports.nobr = nobr;
exports.noembed = noembed;
exports.noframes = noframes;
exports.noscript = noscript;
exports.object = object;
exports.ol = ol;
exports.optgroup = optgroup;
exports.option = option;
exports.output = output;
exports.p = p;
exports.param = param;
exports.plaintext = plaintext;
exports.pre = pre;
exports.progress = progress;
exports.q = q;
exports.rp = rp;
exports.rt = rt;
exports.ruby = ruby;
exports.s = s;
exports.samp = samp;
exports.script = script;
exports.section = section;
exports.select = select;
exports.small = small;
exports.source = source;
exports.spacer = spacer;
exports.span = span;
exports.strike = strike;
exports.strong = strong;
exports.style = style;
exports.sub = sub;
exports.sup = sup;
exports.summary = summary;
exports.svg = svg;
exports.table = table;
exports.tbody = tbody;
exports.td = td;
exports.textarea = textarea;
exports.tfoot = tfoot;
exports.th = th;
exports.thead = thead;
exports.time = time;
exports.title = title;
exports.tr = tr;
exports.track = track;
exports.tt = tt;
exports.u = u;
exports.ul = ul;
exports.var_ = var_;
exports.video = video;
exports.wbr = wbr;
exports.xmp = xmp;
