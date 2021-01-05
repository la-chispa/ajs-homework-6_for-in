const obj = {
  name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
};

export default function orderByProps(data, order = []) {
  const unordered = [];
  for (const prop in data) {
    if (Object.prototype.hasOwnProperty.call(data, prop)) {
      unordered.push({ key: prop, value: data[prop] });
    }
  }
  const byProps = unordered.filter((i) => order.includes(i.key));
  const byAphabet = unordered.filter((i) => !order.includes(i.key));
  byAphabet.sort((a, b) => {
    const x = (a.key > b.key) ? 1 : -1;
    return x;
  });
  return byProps.concat(byAphabet);
}

orderByProps(obj, ['name', 'level']);
