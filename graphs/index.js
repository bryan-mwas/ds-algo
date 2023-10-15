module.exports = {
  graph: {
    a: ["b", "c"],
    b: ["d"],
    c: ["e"],
    d: ["f"],
    e: [],
    f: [],
  },
  graph2: {
    f: ["g", "i"],
    g: ["h"],
    h: [],
    i: ["g", "k"],
    j: ["i"],
    k: [],
  },
  edges: [
    ["i", "j"],
    ["k", "i"],
    ["m", "k"],
    ["k", "l"],
    ["o", "n"],
  ],
};
