function e(a) {
  throw a;
}
var f = void 0;
function l(a, d, b) {
  var c = 0;
  d === f && e(Error("missing endian"));
  a === f && e(Error("missing buffer"));
  b === f && e(Error("missing offset"));
  b + 1 >= a.length && e(Error("Trying to read beyond buffer length"));
  "big" == d ? (c = a[b] << 8, c |= a[b + 1]) : (c = a[b], c |= a[b + 1] << 8);
  return c
}
function n(a, d, b) {
  var c = 0;
  d === f && e(Error("missing endian"));
  a === f && e(Error("missing buffer"));
  b === f && e(Error("missing offset"));
  b + 3 >= a.length && e(Error("Trying to read beyond buffer length"));
  "big" == d ? (c = a[b + 1] << 16, c |= a[b + 2] << 8, c |= a[b + 3], c = 16777216 * a[b] + c) : (c = a[b + 2] << 16, c |= a[b + 1] << 8, c |= a[b], c = 16777216 * a[b + 3] + c);
  return c
}
function o(a, d, b) {
  var c = Array(2);
  d === f && e(Error("missing endian"));
  a === f && e(Error("missing buffer"));
  b === f && e(Error("missing offset"));
  b + 7 >= a.length && e(Error("Trying to read beyond buffer length"));
  "big" == d ? (c[0] = n(a, d, b), c[1] = n(a, d, b + 4)) : (c[0] = n(a, d, b + 4), c[1] = n(a, d, b));
  return c
}
function p(a, d) {
  "number" != typeof a && e(new (Error("cannot write a non-number as a number")));
  0 > a && e(Error("specified a negative value for writing an unsigned value"));
  a > d && e(Error("value is larger than maximum value for type"));
  Math.floor(a) !== a && e(Error("value has a fractional component"));
  return a
}
function q(a, d, b, c) {
  a === f && e(Error("missing value"));
  d === f && e(Error("missing endian"));
  b === f && e(Error("missing buffer"));
  c === f && e(Error("missing offset"));
  c >= b.length && b instanceof Buffer && e(Error("Trying to write beyond buffer length"));
  a = p(a, 255);
  b[c] = a
}
function r(a, d, b, c) {
  a === f && e(Error("missing value"));
  d === f && e(Error("missing endian"));
  b === f && e(Error("missing buffer"));
  c === f && e(Error("missing offset"));
  c + 1 >= b.length && b instanceof Buffer && e(Error("Trying to write beyond buffer length"));
  a = p(a, 65535);
  "big" == d ? (b[c] = (a & 65280) >>> 8, b[c + 1] = a & 255) : (b[c + 1] = (a & 65280) >>> 8, b[c] = a & 255)
}
function s(a, d, b, c) {
  a === f && e(Error("missing value"));
  d === f && e(Error("missing endian"));
  b === f && e(Error("missing buffer"));
  c === f && e(Error("missing offset"));
  c + 3 >= b.length && b instanceof Buffer && e(Error("Trying to write beyond buffer length"));
  a = p(a, 4294967295);
  "big" == d ? (b[c] = (a - (a & 16777215)) / Math.pow(2, 24), b[c + 1] = a >>> 16 & 255, b[c + 2] = a >>> 8 & 255, b[c + 3] = a & 255) : (b[c + 3] = (a - (a & 16777215)) / Math.pow(2, 24), b[c + 2] = a >>> 16 & 255, b[c + 1] = a >>> 8 & 255, b[c] = a & 255)
}
function t(a, d, b) {
  "number" != typeof a && e(new (Error("cannot write a non-number as a number")));
  a > d && e(Error("value larger than maximum allowed value"));
  a < b && e(Error("value smaller than minimum allowed value"));
  Math.floor(a) !== a && e(Error("value has a fractional component"));
  return a
}
function u(a, d, b) {
  d === f && e(Error("missing endian"));
  a === f && e(Error("missing buffer"));
  b === f && e(Error("missing offset"));
  b >= a.length && e(Error("Trying to read beyond buffer length"));
  return a[b]
}
var v = l, w = n, x = q, y = r, z = s;
function A(a, d, b) {
  d === f && e(Error("missing endian"));
  a === f && e(Error("missing buffer"));
  b === f && e(Error("missing offset"));
  b >= a.length && e(Error("Trying to read beyond buffer length"));
  return!(a[b] & 128) ? a[b] : -1 * (255 - a[b] + 1)
}
function B(a, d, b) {
  d === f && e(Error("missing endian"));
  a === f && e(Error("missing buffer"));
  b === f && e(Error("missing offset"));
  b + 1 >= a.length && e(Error("Trying to read beyond buffer length"));
  a = l(a, d, b);
  return!(a & 32768) ? a : -1 * (65535 - a + 1)
}
function C(a, d, b) {
  d === f && e(Error("missing endian"));
  a === f && e(Error("missing buffer"));
  b === f && e(Error("missing offset"));
  b + 3 >= a.length && e(Error("Trying to read beyond buffer length"));
  a = n(a, d, b);
  return!(a & 2147483648) ? a : -1 * (4294967295 - a + 1)
}
function D(a, d, b, c) {
  a === f && e(Error("missing value"));
  d === f && e(Error("missing endian"));
  b === f && e(Error("missing buffer"));
  c === f && e(Error("missing offset"));
  c >= b.length && b instanceof Buffer && e(Error("Trying to write beyond buffer length"));
  a = t(a, 127, -240);
  0 <= a ? q(a, d, b, c) : q(255 + a + 1, d, b, c)
}
function E(a, d, b, c) {
  a === f && e(Error("missing value"));
  d === f && e(Error("missing endian"));
  b === f && e(Error("missing buffer"));
  c === f && e(Error("missing offset"));
  c + 1 >= b.length && b instanceof Buffer && e(Error("Trying to write beyond buffer length"));
  a = t(a, 32767, -61440);
  0 <= a ? r(a, d, b, c) : r(65535 + a + 1, d, b, c)
}
function F(a, d, b, c) {
  a === f && e(Error("missing value"));
  d === f && e(Error("missing endian"));
  b === f && e(Error("missing buffer"));
  c === f && e(Error("missing offset"));
  c + 3 >= b.length && b instanceof Buffer && e(Error("Trying to write beyond buffer length"));
  a = t(a, 2147483647, -4026531840);
  0 <= a ? s(a, d, b, c) : s(4294967295 + a + 1, d, b, c)
}
function G(a, d, b) {
  var c = [];
  d === f && e(Error("missing endian"));
  a === f && e(Error("missing buffer"));
  b === f && e(Error("missing offset"));
  b + 3 >= a.length && e(Error("Trying to read beyond buffer length"));
  "big" == d ? (c[0] = a[b], c[1] = a[b + 1], c[2] = a[b + 2], c[3] = a[b + 3]) : (c[3] = a[b], c[2] = a[b + 1], c[1] = a[b + 2], c[0] = a[b + 3]);
  a = c[0] & 128;
  d = (c[0] & 127) << 1;
  d |= (c[1] & 128) >>> 7;
  b = (c[1] & 127) << 16;
  b |= c[2] << 8;
  b |= c[3];
  if(!a && 255 == d && 0 === b) {
    return Number.POSITIVE_INFINITY
  }
  if(a && 255 == d && 0 === b) {
    return Number.NEGATIVE_INFINITY
  }
  if(255 == d && 0 !== b) {
    return Number.NaN
  }
  if(0 === d && 0 === b) {
    return 0
  }
  d -= 127;
  -127 == d ? (d++, c = 0) : c = 1;
  c = (c + b * Math.pow(2, -23)) * Math.pow(2, d);
  a && (c *= -1);
  return c
}
function H(a, d, b) {
  var c = [], g;
  d === f && e(Error("missing endian"));
  a === f && e(Error("missing buffer"));
  b === f && e(Error("missing offset"));
  b + 7 >= a.length && e(Error("Trying to read beyond buffer length"));
  "big" == d ? (c[0] = a[b], c[1] = a[b + 1], c[2] = a[b + 2], c[3] = a[b + 3], c[4] = a[b + 4], c[5] = a[b + 5], c[6] = a[b + 6], c[7] = a[b + 7]) : (c[7] = a[b], c[6] = a[b + 1], c[5] = a[b + 2], c[4] = a[b + 3], c[3] = a[b + 4], c[2] = a[b + 5], c[1] = a[b + 6], c[0] = a[b + 7]);
  a = c[0] & 128;
  d = (c[0] & 127) << 4;
  d |= (c[1] & 240) >>> 4;
  g = c[7];
  g |= c[6] << 8;
  g |= c[5] << 16;
  b = c[4];
  b |= c[3] << 8;
  b |= c[2] << 16;
  b |= (c[1] & 15) << 24;
  b *= Math.pow(2, 24);
  b += g;
  if(!a && 2047 == d && 0 === b) {
    return Number.POSITIVE_INFINITY
  }
  if(a && 2047 == d && 0 === b) {
    return Number.NEGATIVE_INFINITY
  }
  if(2047 == d && 0 !== b) {
    return Number.NaN
  }
  if(0 === d && 0 === b) {
    return 0
  }
  d -= 1023;
  -1023 == d ? (d++, c = 0) : c = 1;
  c = (c + b * Math.pow(2, -52)) * Math.pow(2, d);
  a && (c *= -1);
  return c
}
function I(a, d, b, c) {
  var g, h, j, i = [];
  a === f && e(Error("missing value"));
  d === f && e(Error("missing endian"));
  b === f && e(Error("missing buffer"));
  c === f && e(Error("missing offset"));
  c + 3 >= b.length && b instanceof Buffer && e(Error("Trying to write beyond buffer length"));
  isNaN(a) ? (g = 0, h = 255, a = 23) : a == Number.POSITIVE_INFINITY ? (g = 0, h = 255, a = 0) : a == Number.NEGATIVE_INFINITY ? (g = 1, h = 255, a = 0) : (0 > a ? (g = 1, a = Math.abs(a)) : g = 0, j = Math.floor(Math.log(a) / Math.log(2)), -127 >= j) ? (h = 0, a = a * Math.pow(2, 149) & 8388607) : (h = 127 + j, a *= Math.pow(2, 23 - j), a &= 8388607);
  i[0] = g << 7 | (h & 254) >>> 1;
  i[1] = (h & 1) << 7 | (a & 8323072) >>> 16;
  i[2] = (a & 65280) >>> 8;
  i[3] = a & 255;
  "big" == d ? (b[c] = i[0], b[c + 1] = i[1], b[c + 2] = i[2], b[c + 3] = i[3]) : (b[c] = i[3], b[c + 1] = i[2], b[c + 2] = i[1], b[c + 3] = i[0])
}
function J(a, d, b, c) {
  var g, h, j, i = [];
  a === f && e(Error("missing value"));
  d === f && e(Error("missing endian"));
  b === f && e(Error("missing buffer"));
  c === f && e(Error("missing offset"));
  c + 7 >= b.length && b instanceof Buffer && e(Error("Trying to write beyond buffer length"));
  isNaN(a) ? (g = 0, h = 2047, a = 23) : a == Number.POSITIVE_INFINITY ? (g = 0, h = 2047, a = 0) : a == Number.NEGATIVE_INFINITY ? (g = 1, h = 2047, a = 0) : (0 > a ? (g = 1, a = Math.abs(a)) : g = 0, j = Math.floor(Math.log(a) / Math.log(2)), 2.225073858507201E-308 >= a || -1023 >= j ? (h = 0, a = a * Math.pow(2, 1023) * Math.pow(2, 51)) : (1023 < j && (j = 1023), h = 1023 + j, a *= Math.pow(2, -j), a *= Math.pow(2, 52)), a %= Math.pow(2, 52));
  i[7] = a & 255;
  i[6] = a >>> 8 & 255;
  i[5] = a >>> 16 & 255;
  a = (a - (a & 16777215)) / Math.pow(2, 24);
  i[4] = a & 255;
  i[3] = a >>> 8 & 255;
  i[2] = a >>> 16 & 255;
  i[1] = (h & 15) << 4 | a >>> 24;
  i[0] = g << 7 | (h & 2032) >>> 4;
  "big" == d ? (b[c] = i[0], b[c + 1] = i[1], b[c + 2] = i[2], b[c + 3] = i[3], b[c + 4] = i[4], b[c + 5] = i[5], b[c + 6] = i[6], b[c + 7] = i[7]) : (b[c + 7] = i[0], b[c + 6] = i[1], b[c + 5] = i[2], b[c + 4] = i[3], b[c + 3] = i[4], b[c + 2] = i[5], b[c + 1] = i[6], b[c] = i[7])
}
var K = require("assert"), T = {uint8_t:{a:L, write:M}, uint16_t:{a:N, write:O}, uint32_t:{a:P, write:Q}, int8_t:{a:R, write:S}, int16_t:{a:aa, write:ba}, int32_t:{a:ca, write:da}, "float":{a:ea, write:fa}, "double":{a:ga, write:ha}, "char":{a:ia, write:ja}, "char[]":{a:ka, write:la}};
function L(a, d, b) {
  return{value:u(d, a, b), size:1}
}
function N(a, d, b) {
  return{value:v(d, a, b), size:2}
}
function P(a, d, b) {
  return{value:w(d, a, b), size:4}
}
function R(a, d, b) {
  return{value:A(d, a, b), size:1}
}
function aa(a, d, b) {
  return{value:B(d, a, b), size:2}
}
function ca(a, d, b) {
  return{value:C(d, a, b), size:4}
}
function ea(a, d, b) {
  return{value:G(d, a, b), size:4}
}
function ga(a, d, b) {
  return{value:H(d, a, b), size:8}
}
function ia(a, d, b) {
  var c = new Buffer(1);
  c[0] = u(d, a, b);
  return{value:c, size:1}
}
function ka(a, d, b, c) {
  var g, h = new Buffer(a);
  for(g = 0;g < a;g++) {
    h[g] = u(b, d, c + g)
  }
  return{value:h, size:a}
}
function M(a, d, b, c) {
  x(a, d, b, c);
  return 1
}
function O(a, d, b, c) {
  y(a, d, b, c);
  return 2
}
function Q(a, d, b, c) {
  z(a, d, b, c);
  return 4
}
function S(a, d, b, c) {
  D(a, d, b, c);
  return 1
}
function ba(a, d, b, c) {
  E(a, d, b, c);
  return 2
}
function da(a, d, b, c) {
  F(a, d, b, c);
  return 4
}
function fa(a, d, b, c) {
  I(a, d, b, c);
  return 4
}
function ha(a, d, b, c) {
  J(a, d, b, c);
  return 8
}
function ja(a, d, b) {
  a instanceof Buffer || e(Error("Input must be a buffer"));
  u(a[0], d, b);
  return 1
}
function la(a, d, b, c, g) {
  var h;
  a instanceof Buffer || e(Error("Input must be a buffer"));
  a.length > d && e(Error("value length greater than array length"));
  for(h = 0;h < a.length && h < d;h++) {
    x(a[h], b, c, g + h)
  }
  for(;h < d;h++) {
    x(0, b, g + h)
  }
  return d
}
function U(a) {
  var d, b;
  "string" != typeof a && e(Error("type must be a Javascript string"));
  b = a.lastIndexOf("]");
  if(-1 == b) {
    return-1 != a.lastIndexOf("[") && e(Error("found invalid type with '[' but no corresponding ']'")), {type:a}
  }
  d = a.lastIndexOf("[");
  -1 == d && e(Error("found invalid type with ']' but no corresponding '['"));
  d >= b && e(Error("malformed type, ']' appears before '['"));
  return{type:a.substring(0, d), c:a.substring(d + 1, b)}
}
function V(a) {
  a || e(Error("missing required argument"));
  "endian" in a || e(Error("missing required endian value"));
  "big" != a.endian && "little" != a.endian && e(Error("Invalid endian type"));
  this.b = a.endian;
  var a = {}, d;
  for(d in T) {
    a[d] = T[d]
  }
  this.types = a
}
function W(a, d) {
  for(var b = "", c = U(a);c.len !== f;) {
    isNaN(parseInt(c.len, 10)) ? ("number" != typeof d[c.len] && e(Error("cannot sawp in non-number for array value")), b = "[" + d[c.len] + "]" + b) : b = "[" + c.len + "]" + b, c = U(c.type)
  }
  return b = c.type + b
}
function X(a, d, b, c, g, h) {
  var j;
  console.log(d);
  K.d(d in a.types);
  console.log(d + ":" + a.types[d]);
  if("string" == typeof a.types[d]) {
    j = U(a.types[d]);
    if("read" == b) {
      return Y(a, j, c, g)
    }
    if("write" == b) {
      return Z(a, h, j, c, g)
    }
    e(Error("invalid dispatch type to resolveTypedef"))
  }
  if("read" == b) {
    return $(a, a.types[d], c, g)
  }
  if("write" == b) {
    return $(a, h, a.types[d], c)
  }
  e(Error("invalid dispatch type to resolveTypedef"))
}
function Y(a, d, b, c) {
  var g;
  if(d.len !== f) {
    if(g = parseInt(d.len, 10), isNaN(g) && e(Error("somehow got a non-numeric length")), "char" == d.type) {
      a = T["char[]"].read(g, a.b, b, c)
    }else {
      var h, j, i = c, k = Array(g);
      j = U(d.type);
      for(d = 0;d < g;d++) {
        h = Y(a, j, b, c), c += h.size, k[d] = h.value
      }
      a = {value:k, size:c - i}
    }
  }else {
    a = d.type in T ? T[d.type].read(a.b, b, c) : X(a, d.type, "read", b, c)
  }
  return a
}
function $(a, d, b, c) {
  var g, h, j, i, k = c, m = {};
  for(h = 0;h < d.length;h++) {
    i = Object.keys(d[h])[0], j = d[h][i], g = U(W(j.type, m)), "offset" in j && (c = k + j.offset), g = Y(a, g, b, c), c += g.size, m[i] = g.value
  }
  return{e:m, size:c - k}
}
function Z(a, d, b, c, g) {
  var h;
  if(b.len !== f) {
    if(h = parseInt(b.len, 10), isNaN(h) && e(Error("somehow got a non-numeric length")), "char" == b.type) {
      a = T["char[]"].write(d, h, a.b, c, g)
    }else {
      var j, i = g;
      d instanceof Array || e(Error("asked to write an array, but value is not an array"));
      d.length != h && e(Error("asked to write array of length " + h + " but that does not match value length: " + d.length));
      j = U(b.type);
      for(b = 0;b < h;b++) {
        g += Z(a, d[b], j, c, g)
      }
      a = g - i
    }
  }else {
    a = b.type in T ? T[b.type].write(d, a.b, c, g) : X(a, b.type, "write", c, g, d)
  }
  return a
}
V.prototype.write = function(a, d, b) {
  a === f && e(Error("missing definition for what we should beparsing"));
  d === f && e(Error("missing buffer for what we should beparsing"));
  b === f && e(Error("missing offset for what we should beparsing"));
  var c = this.types, g = ["value"], h, j, i, k, m = {};
  a instanceof Array || e(Error("definition is not an array"));
  0 === a.length && e(Error("definition must have at least one element"));
  for(h = 0;h < a.length;h++) {
    i = a[h];
    i instanceof Object || e(Error("definition must be an array ofobjects"));
    k = Object.keys(i);
    1 != k.length && e(Error("definition entry must only have one key"));
    k[0] in m && e(Error("Specified name already specified: " + k[0]));
    "type" in i[k[0]] || e(Error("missing required type definition"));
    for(j = U(i[k[0]].type);j.len !== f;) {
      isNaN(parseInt(j.len, 10)) && !(j.len in m) && e(Error("Given an array length without a matching type")), j = U(j.type)
    }
    j.type in c || e(Error("type not found or typdefed: " + j.type));
    if(g !== f) {
      for(j = 0;j < g.length;j++) {
        g[j] in i[k[0]] || e(Error("Missing required field: " + g[j]))
      }
    }
    m[k[0]] = !0
  }
  k = b;
  m = {};
  for(c = 0;c < a.length;c++) {
    i = Object.keys(a[c])[0], g = a[c][i], h = U(W(g.type, m)), "offset" in g && (b = k + g.offset), b += Z(this, g.value, h, d, b), m[i] = g.value
  }
};
exports.Parser = V;
exports.ruint8 = u;
exports.ruint16 = v;
exports.ruint32 = w;
exports.ruint64 = o;
exports.wuint8 = x;
exports.wuint16 = y;
exports.wuint32 = z;
exports.wuint64 = function(a, d, b, c) {
  a === f && e(Error("missing value"));
  a instanceof Array || e(Error("value must be an array"));
  2 != a.length && e(Error("value must be an array of length 2"));
  d === f && e(Error("missing endian"));
  b === f && e(Error("missing buffer"));
  c === f && e(Error("missing offset"));
  c + 7 >= b.length && b instanceof Buffer && e(Error("Trying to write beyond buffer length"));
  p(a[0], 4294967295);
  p(a[1], 4294967295);
  "big" == d ? (s(a[0], d, b, c), s(a[1], d, b, c + 3)) : (s(a[0], d, b, c + 3), s(a[1], d, b, c))
};
exports.rsint8 = A;
exports.rsint16 = B;
exports.rsint32 = C;
exports.rsint64 = function(a, d, b) {
  d === f && e(Error("missing endian"));
  a === f && e(Error("missing buffer"));
  b === f && e(Error("missing offset"));
  b + 3 >= a.length && e(Error("Trying to read beyond buffer length"));
  a = o(a, d, b);
  if(!(a[0] & 2147483648)) {
    return a
  }
  a[0] = -1 * (4294967295 - a[0]);
  a[1] = -1 * (4294967295 - a[1] + 1);
  return a
};
exports.wsint8 = D;
exports.wsint16 = E;
exports.wsint32 = F;
exports.wsint64 = function(a, d, b, c) {
  var g = Array(2);
  a === f && e(Error("missing value"));
  a instanceof Array || e(Error("value must be an array"));
  2 != a.length && e(Error("value must be an array of length 2"));
  d === f && e(Error("missing endian"));
  b === f && e(Error("missing buffer"));
  c === f && e(Error("missing offset"));
  c + 7 >= b.length && b instanceof Buffer && e(Error("Trying to write beyond buffer length"));
  t(a[0], 2147483647, -4026531840);
  t(a[1], 4294967295, -4294967295);
  0 > a[0] || 0 > a[1] ? (g[0] = 4294967295 - Math.abs(a[0]), g[1] = 4294967296 - Math.abs(a[1]), 4294967296 == g[1] && (g[1] = 0, g[0]++)) : (g[0] = a[0], g[1] = a[1]);
  "big" == d ? (s(g[0], d, b, c), s(g[1], d, b, c + 4)) : (s(g[0], d, b, c + 4), s(g[1], d, b, c))
};
exports.rfloat = G;
exports.rdouble = H;
exports.wfloat = I;
exports.wdouble = J;
exports.deftypes = T;

