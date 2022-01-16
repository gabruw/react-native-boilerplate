interface X {
    r: number;
    g: number;
    b: number;
    a: number;
}

const lightenDarken = (percent: number, colorA: string, colorB: string | boolean = false, isLinear = false): string => {
    let pSBCr;

    let r, g, b, P, f, t, h;
    let a: string | number | boolean = typeof colorB === 'string';

    if (percent < -1 || percent > 1 || (colorA[0] !== 'r' && colorA[0] !== '#') || (colorB && !a)) {
        return '#FFFFFF';
    }

    if (!pSBCr) {
        pSBCr = (d: string | string[] | number | boolean) => {
            const x: X = {} as X;
            let n = String(d).length;

            if (n > 9) {
                [r, g, b, a] = d = String(d).split(',');
                n = d.length;

                if (n < 3 || n > 4) {
                    return null;
                }

                x.r = parseInt(r[3] == 'a' ? r.slice(5) : r.slice(4));
                x.g = parseInt(g);
                x.b = parseInt(b);

                x.a = a ? parseFloat(String(a)) : -1;
            } else {
                if (n == 8 || n == 6 || n < 4) {
                    return null;
                }

                if (n < 6) {
                    d =
                        '#' +
                        String(d)[1] +
                        String(d)[1] +
                        String(d)[2] +
                        String(d)[2] +
                        String(d)[3] +
                        String(d)[3] +
                        (n > 4 ? String(d)[4] + String(d)[4] : '');
                }

                d = parseInt(String(d).slice(1), 16);

                if (n == 9 || n == 5) {
                    x.r = (d >> 24) & 255;
                    x.g = (d >> 16) & 255;
                    x.b = (d >> 8) & 255;
                    x.a = Math.round((d & 255) / 0.255) / 1000;
                } else {
                    x.r = d >> 16;
                    x.g = (d >> 8) & 255;
                    x.b = d & 255;
                    x.a = -1;
                }
            }

            return x;
        };
    }

    h = colorA.length > 9;
    h = a ? (String(colorB).length > 9 ? true : colorB === 'c' ? !h : false) : h;
    f = pSBCr(colorA);
    P = percent < 0;
    t = colorB && colorB != 'c' ? pSBCr(colorB) : P ? { r: 0, g: 0, b: 0, a: -1 } : { r: 255, g: 255, b: 255, a: -1 };
    percent = P ? percent * -1 : percent;
    P = 1 - percent;

    if (!f || !t) {
        return '#FFFFFF';
    }

    if (isLinear) {
        r = Math.round(P * f.r + percent * t.r);
        g = Math.round(P * f.g + percent * t.g);
        b = Math.round(P * f.b + percent * t.b);
    } else {
        r = Math.round((P * f.r ** 2 + percent * t.r ** 2) ** 0.5);
        g = Math.round((P * f.g ** 2 + percent * t.g ** 2) ** 0.5);
        b = Math.round((P * f.b ** 2 + percent * t.b ** 2) ** 0.5);
    }

    a = f.a;
    t = t.a;
    f = a >= 0 || t >= 0;
    a = f ? (a < 0 ? t : t < 0 ? a : a * P + t * percent) : 0;

    if (h) {
        return 'rgb' + (f ? 'a(' : '(') + r + ',' + g + ',' + b + (f ? ',' + Math.round(a * 1000) / 1000 : '') + ')';
    } else {
        return (
            '#' +
            (4294967296 + r * 16777216 + g * 65536 + b * 256 + (f ? Math.round(a * 255) : 0))
                .toString(16)
                .slice(1, f ? undefined : -2)
        );
    }
};

export default lightenDarken;
