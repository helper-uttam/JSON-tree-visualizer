export function jsonToFlow(json) {
    const nodes = [];
    const edges = [];
    let xCounter = 0;

    function visit(value, path = '$', depth = 0, parentId = null) {
        const id = path;
        const type = value === null ? 'null' : Array.isArray(value) ? 'array' : typeof value;

        // create node with simple position
        nodes.push({
            id,
            data: { label: id, value, type },
            position: { x: xCounter * 200, y: depth * 100 } // horizontal spacing
        });

        if (parentId) {
            edges.push({ id: `${parentId}-${id}`, source: parentId, target: id });
        }

        xCounter += 1; // next node thoda right me

        if (type === 'object') {
            for (const key in value) {
                visit(value[key], `${path}.${key}`, depth + 1, id);
            }
        } else if (type === 'array') {
            for (let i = 0; i < value.length; i++) {
                visit(value[i], `${path}[${i}]`, depth + 1, id);
            }
        }
    }

    visit(json);
    return { nodes, edges };
}
