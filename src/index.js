var jsgraphs = require('js-graph-algorithms/src/jsgraphs');



///kuruksal
var g;

document.getElementById('numc').onclick = function(){
    var numv = document.getElementById('numv').value
     g = new jsgraphs.WeightedGraph(numv);
    console.log(numv)
}

document.getElementById('addedge').onclick = function(){
    var to = document.getElementById('tov').value
    var from = document.getElementById('fromv').value
    var dist = document.getElementById('dist').value
    g.addEdge(new jsgraphs.Edge(from, to, dist));
}

document.getElementById('drowk').onclick = function(){
    var kruskal = new jsgraphs.KruskalMST(g); 
    var mst = kruskal.mst;
    

    var g_nodes = [];
    var g_edges = [];
    for(var v=0; v < g.V; ++v){
        g.node(v).label = 'Node ' + v; // assigned 'Node {v}' as label for node v
        g_nodes.push({
           id: v,
           label: g.node(v).label
        });
    }
    
    for(var i=0; i < mst.length; ++i) {
        var e = mst[i];
        var v = e.either();
        var w = e.other(v);
        e.highlighted = true;
        console.log('(' + v + ', ' + w + '): ' + e.weight);
        g_edges.push({
            from: v,
            to: w,
            length: e.weight,
            label: '' + e.weight,
            color: '#ff0000',
            value: 2
        });
    }
    
    for(var v = 0; v < g.V; ++v) {
        
        var adj_v = g.adj(v);
        for(var i = 0; i < adj_v.length; ++i) {
            var e = adj_v[i];
            var w = e.other(v);
            if(w > v) continue; // make sure only one edge between w and v since the graph is undirected
            if(e.highlighted) continue;
            
            g_edges.push({
                from: v,
                to: w,
                length: e.weight,
                label: '' + e.weight
            });
        };
    }

    console.log(g.V); // display 6, which is the number of vertices in g
    console.log(g.adj(0)); // display [5, 1, 2], which is the adjacent list to vertex 0
    
    var nodes = new vis.DataSet(g_nodes);

    // create an array with edges
    var edges = new vis.DataSet(g_edges);

    // create a network
    var container = document.getElementById('mynetwork');
    var data = {
        nodes: nodes,
        edges: edges
    };
    var options = {};
    var network = new vis.Network(container, data, options);
}

document.getElementById('drowp').onclick = function(){
    var prim = new jsgraphs.EagerPrimMST(g)
    var mst2 = prim.mst;
    

    var g_nodes = [];
    var g_edges = [];
    for(var v=0; v < g.V; ++v){
        g.node(v).label = 'Node ' + v; // assigned 'Node {v}' as label for node v
        g_nodes.push({
           id: v,
           label: g.node(v).label
        });
    }
    
    for(var i=0; i < mst.length; ++i) {
        var e = mst[i];
        var v = e.either();
        var w = e.other(v);
        e.highlighted = true;
        console.log('(' + v + ', ' + w + '): ' + e.weight);
        g_edges.push({
            from: v,
            to: w,
            length: e.weight,
            label: '' + e.weight,
            color: '#ff0000',
            value: 2
        });
    }
    
    for(var v = 0; v < g.V; ++v) {
        
        var adj_v = g.adj(v);
        for(var i = 0; i < adj_v.length; ++i) {
            var e = adj_v[i];
            var w = e.other(v);
            if(w > v) continue; // make sure only one edge between w and v since the graph is undirected
            if(e.highlighted) continue;
            
            g_edges.push({
                from: v,
                to: w,
                length: e.weight,
                label: '' + e.weight
            });
        };
    }

    console.log(g.V); // display 6, which is the number of vertices in g
    console.log(g.adj(0)); // display [5, 1, 2], which is the adjacent list to vertex 0
    
    var nodes = new vis.DataSet(g_nodes);

    // create an array with edges
    var edges = new vis.DataSet(g_edges);

    // create a network
    var container = document.getElementById('mynetwork');
    var data = {
        nodes: nodes,
        edges: edges
    };
    var options = {};
    var network = new vis.Network(container, data, options);
}
    
    

    

