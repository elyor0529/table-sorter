/**
 * Created by elyor on 23/09/2016.
 */

/*
 * simple data
 * */
var dataA = [{
    "company_name": "Medline Industries, Inc.",
    "product": "Benzalkonium Chloride",
    "price": "481.63"
}, {
    "company_name": "PD-Rx Pharmaceuticals, Inc.",
    "product": "Alprazolam",
    "price": "167.62",
    "fda_date_approved": "02/12/2015"
}, {
    "company_name": "West-ward Pharmaceutical Corp.",
    "product": "Flumazenil",
    "fda_date_approved": "23/04/2015"
}, {
    "company_name": "HyVee Inc",
    "product": "Aspirin",
    "price": "218.32",
    "fda_date_approved": "26/07/2015"
}, {
    "company_name": "Aurobindo Pharma Limited",
    "product": "carisoprodol",
    "price": "375.58",
    "fda_date_approved": "28/11/2014"
}, {
    "company_name": "Apotex Corp",
    "product": "Risperidone",
    "price": "213.49",
    "fda_date_approved": "06/11/2015"
}, {
    "company_name": "Unit Dose Services",
    "product": "Lovastatin",
    "price": "169.14",
    "fda_date_approved": "14/09/2015"
}, {
    "company_name": "Jubilant HollisterStier LLC",
    "product": "Dog Hair Canis spp.",
    "fda_date_approved": "31/12/2014"
}, {
    "company_name": "AAA Pharmaceutical, Inc.",
    "product": "ACETAMINOPHEN, CHLORPHENIRAMINE MALEATE, DEXTROMETHORPHAN HYDROBROMIDE, and PHENYLEPHRINE HYDROCHLORIDE",
    "price": "183.33",
    "fda_date_approved": "13/12/2015"
}, {
    "company_name": "AKG Innovations LLC",
    "product": "AVOBENZONE, OCTINOXATE, OCTISALATE",
    "fda_date_approved": "22/01/2015"
}, {"company_name": "hikma Farmaceutica", "product": "Oxytocin"}, {
    "company_name": "prime Packaging, Inc.",
    "product": "Avobenzone, Homosalate, Octisalate, Octocrylene, Oxybenzone",
    "price": "208.17"
}, {
    "company_name": "Davion, Inc",
    "product": "Triclosan",
    "price": "80.30",
    "fda_date_approved": "13/12/2014"
}, {
    "company_name": "CARDINAL HEALTH",
    "product": "CARBOXYMETHYLCELLULOSE SODIUM, GLYCERIN",
    "price": "330.22",
    "fda_date_approved": "11/08/2015"
}, {
    "company_name": "Amgen Inc",
    "product": "darbepoetin alfa",
    "price": "332.28",
    "fda_date_approved": "01/07/2015"
}, {
    "company_name": "Autumn Harp, Inc.",
    "product": "Salicylic Acid",
    "price": "34.43",
    "fda_date_approved": "25/03/2015"
}, {
    "company_name": "American Regent, Inc.",
    "product": "sodium phosphate, monobasic, monohydrate and sodium phosphate, dibasic anhydrous",
    "price": "11.60"
}, {
    "company_name": "J. A. Cosmetics U.S. INC",
    "product": "TITANIUM DIOXIDE",
    "price": "130.90",
    "fda_date_approved": "01/12/2015"
}, {
    "company_name": "NATURE REPUBLIC CO., LTD.",
    "product": "Titanium Dioxide, OCTINOXATE, Zinc Oxide",
    "price": "124.48"
}, {
    "company_name": "L. Perrigo Company",
    "product": "Dextromethorphan Hydrobromide, Guaifenesin",
    "price": "73.09",
    "fda_date_approved": "03/02/2016"
}];


var dataB = [{"first_name": "Billy", "last_name": "Campbell", "phone": "62-(500)527-5325"}, {
    "first_name": "Jonathan",
    "last_name": "Black",
    "country": "Russia",
    "phone": "7-(729)811-4597"
}, {
    "first_name": "cheryl",
    "last_name": "Harvey",
    "country": "Indonesia",
    "phone": "62-(825)454-3810"
}, {"first_name": "Cynthia", "last_name": "Cooper"}, {
    "first_name": "Thomas",
    "last_name": "Stevens",
    "phone": "86-(527)535-8464"
}, {"first_name": "Jane", "last_name": "Chavez", "country": "Netherlands"}, {
    "first_name": "bobby",
    "last_name": "Price",
    "country": "China",
    "phone": "86-(898)723-6749"
}, {"first_name": "Steve", "last_name": "Hansen", "phone": "93-(362)494-5552"}, {
    "first_name": "Alan",
    "last_name": "Cruz",
    "country": "Philippines",
    "phone": "63-(617)248-8832"
}, {
    "first_name": "Dennis",
    "last_name": "Baker",
    "country": "Iran",
    "phone": "98-(436)329-3723"
}, {"first_name": "Ernest", "last_name": "Bishop", "phone": "86-(566)429-1138"}, {
    "first_name": "Russell",
    "last_name": "Meyer",
    "phone": "62-(687)827-4302"
}, {
    "first_name": "Ryan",
    "last_name": "Mendoza",
    "country": "Poland",
    "phone": "48-(537)109-0373"
}, {"first_name": "Maria", "last_name": "Greene", "phone": "92-(831)367-8049"}, {
    "first_name": "Elizabeth",
    "last_name": "Moore",
    "country": "Philippines",
    "phone": "63-(694)844-9255"
}, {"first_name": "Ronald", "last_name": "kim", "phone": "46-(339)931-9221"}, {
    "first_name": "Samuel",
    "last_name": "Jacobs",
    "country": "Russia",
    "phone": "7-(936)156-5229"
}, {"first_name": "Fred", "last_name": "Ross", "phone": "55-(594)481-7354"}, {
    "first_name": "Andrew",
    "last_name": "Burns",
    "country": "Portugal",
    "phone": "351-(174)443-8706"
}, {"first_name": "Robert", "last_name": "Frazier", "country": "Somalia"}];

// page load
window.onload = function () {

    //task#1 - load data
    var tableA = document.getElementById("tableA").getElementsByTagName('tbody')[0];
    for (var i in dataA) {
        var rowA = tableA.insertRow(tableA.rows.length);
        var jsonItem = dataA[i];

        rowA.insertCell(0).appendChild(createTextNode(jsonItem.company_name));
        rowA.insertCell(1).appendChild(createTextNode(jsonItem.product));
        rowA.insertCell(2).appendChild(createTextNode(jsonItem.price));
        rowA.insertCell(3).appendChild(createTextNode(jsonItem.fda_date_approved));
    }
    var tableB = document.getElementById("tableB").getElementsByTagName('tbody')[0];
    for (var i in dataB) {
        var rowB = tableB.insertRow(tableB.rows.length);
        var jsonItem = dataB[i];

        rowB.insertCell(0).appendChild(createTextNode(jsonItem.first_name));
        rowB.insertCell(1).appendChild(createTextNode(jsonItem.last_name));
        rowB.insertCell(2).appendChild(createTextNode(jsonItem.country));
        rowB.insertCell(3).appendChild(createTextNode(jsonItem.phone));
    }

    //task#2 - sort functionality
    var sorterA = MTableSorter.create('tableA');
    var sorterB = MTableSorter.create('tableB');
};

//create html table cell node
function createTextNode(obj) {
    return document.createTextNode(detectValue(obj));
}

//skip to for sorting undefined values
function detectValue(obj) {
    if (typeof obj === "undefined") {
        return "";
    }
    return obj;
}

//main table sorter
function MTableSorter() {

    var sorterPrototype,
        addEvent,
        removeEvent,
        hasEventListener = !!document.addEventListener;

    if (!Object.create) {
        // Define Missing Function
        Object.create = function (prototype) {
            var Obj = function () {
                return undefined;
            };
            Obj.prototype = prototype;
            return new Obj();
        };
    }

    // Cross Browser event binding
    addEvent = function (element, eventName, callback) {
        if (hasEventListener) {
            element.addEventListener(eventName, callback, false);
        } else {
            element.attachEvent('on' + eventName, callback);
        }
    };

    // Cross Browser event removal
    removeEvent = function (element, eventName, callback) {
        if (hasEventListener) {
            element.removeEventListener(eventName, callback, false);
        } else {
            element.detachEvent('on' + eventName, callback);
        }
    };

    sorterPrototype = {

        getCell: function (row) {
            var that = this;
            return that.trs[row].cells[that.column];
        },

        sort: function (e) {
            var that = this,
                th = e.target;

            // TODO: make sure target 'th' is not a child element of a <th>
            //  We can't use currentTarget because of backwards browser support
            //  IE6,7,8 don't have it.

            // set the data retrieval function for this column
            that.column = th.cellIndex;
            that.get = that.getAccessor(th.getAttribute('data-sorter'));

            if (that.prevCol === that.column) {
                // if already sorted, reverse
                th.className = th.className !== 'ascend' ? 'ascend' : 'descend';
                that.reverseTable();
            }
            else {
                // not sorted - call quicksort
                th.className = 'ascend';
                if (that.prevCol !== -1 && that.ths[that.prevCol].className !== 'exc_cell') {
                    that.ths[that.prevCol].className = '';
                }
                that.quicksort(0, that.trs.length);
            }
            that.prevCol = that.column;
        },

        getAccessor: function (sortType) {
            var that = this,
                accessors = that.accessors;

            if (accessors && accessors[sortType]) {
                return accessors[sortType];
            }

            switch (sortType) {
                case "link":
                    return function (row) {
                        return that.getCell(row).firstChild.firstChild.nodeValue;
                    };
                case "input":
                    return function (row) {
                        return that.getCell(row).firstChild.value;
                    };
                case "numeric":
                    return function (row) {
                        return parseNumber(that.getCell(row).firstChild.nodeValue, 10);
                    };
                case "date":
                    return function (row) {
                        return parseDate(that.getCell(row).firstChild.nodeValue);
                    };
                default: /* Plain Text */
                    return function (row) {
                        return that.getCell(row).firstChild.nodeValue;
                    };
            }
        },

        exchange: function (i, j) {
            var that = this,
                tbody = that.tbody,
                trs = that.trs,
                tmpNode;

            if (i === j + 1) {
                tbody.insertBefore(trs[i], trs[j]);
            } else if (j === i + 1) {
                tbody.insertBefore(trs[j], trs[i]);
            } else {
                tmpNode = tbody.replaceChild(trs[i], trs[j]);
                if (!trs[i]) {
                    tbody.appendChild(tmpNode);
                } else {
                    tbody.insertBefore(tmpNode, trs[i]);
                }
            }
        },

        reverseTable: function () {
            var that = this,
                i;

            for (i = 1; i < that.trs.length; i++) {
                that.tbody.insertBefore(that.trs[i], that.trs[0]);
            }
        },

        quicksort: function (lo, hi) {
            var i, j, pivot,
                that = this;

            if (hi <= lo + 1) {
                return;
            }

            if ((hi - lo) === 2) {
                if (that.get(hi - 1) > that.get(lo)) {
                    that.exchange(hi - 1, lo);
                }
                return;
            }

            i = lo + 1;
            j = hi - 1;

            if (that.get(lo) > that.get(i)) {
                that.exchange(i, lo);
            }
            if (that.get(j) > that.get(lo)) {
                that.exchange(lo, j);
            }
            if (that.get(lo) > that.get(i)) {
                that.exchange(i, lo);
            }

            pivot = that.get(lo);

            while (true) {
                j--;
                while (pivot > that.get(j)) {
                    j--;
                }
                i++;
                while (that.get(i) > pivot) {
                    i++;
                }
                if (j <= i) {
                    break;
                }
                that.exchange(i, j);
            }
            that.exchange(lo, j);

            if ((j - lo) < (hi - j)) {
                that.quicksort(lo, j);
                that.quicksort(j + 1, hi);
            } else {
                that.quicksort(j + 1, hi);
                that.quicksort(lo, j);
            }
        },

        init: function (table, initialSortedColumn, customDataAccessors) {
            var that = this,
                i;

            if (typeof table === 'string') {
                table = document.getElementById(table);
            }

            that.table = table;
            that.ths = table.getElementsByTagName("th");
            that.tbody = table.tBodies[0];
            that.trs = that.tbody.getElementsByTagName("tr");
            that.prevCol = ( initialSortedColumn && initialSortedColumn > 0 ) ? initialSortedColumn : -1;
            that.accessors = customDataAccessors;
            that.boundSort = that.sort.bind(that);

            for (i = 0; i < that.ths.length; i++) {
                addEvent(that.ths[i], 'click', that.boundSort);
            }
        },

        destroy: function () {
            var that = this,
                i;

            if (that.ths) {
                for (i = 0; i < that.ths.length; i++) {
                    removeEvent(that.ths[i], 'click', that.boundSort);
                }
            }
        }
    };

    return {
        create: function (table, initialSortedColumn, customDataAccessors) {
            var sorter = Object.create(sorterPrototype);

            sorter.init(table, initialSortedColumn, customDataAccessors);

            return sorter;
        }
    };
}

//parse custom short format
function parseDate(input) {
    if (input.length > 0) {
        var parts = input.split('/');
        return new Date(parts[2], parts[1], parts[0]);
    }

    return null;
}

//parse number
function parseNumber(input) {
    if (input.length > 0) {
        return parseFloat(input);
    }

    return null;
}
