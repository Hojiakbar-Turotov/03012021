const invoicesDate = document.getElementById("invoicesDate");
const invoicesId = document.getElementById("invoicesId");
const invoicesSupple = document.getElementById("invoicesSupple");
const invoicesCommit = document.getElementById("invoicesCommit");
const d = new Date();
let countId = 1;
let invoicesInfo = [
    {
        invoicesDate: `${d.getDate()}-${d.getMonth() + 1}-${d.getFullYear()}`,
        invoicesId: `INV-00000${countId}`,
        invoicesSupple: `${d.getDate()}-${d.getMonth() + 1}-${d.getFullYear()}`,
        invoicesCommit: `Test invoice`
    }
];

for (let i = 0; i < invoicesInfo.length; i++) {
    const invoicestr = document.createElement("tr");
    const invoicesDateTd = document.createElement("td");
    invoicesDateTd.innerHTML = invoicesInfo[i].invoicesDate;
    const invoicesIdTd = document.createElement("td");
    invoicesIdTd.innerHTML = invoicesInfo[i].invoicesId;
    const invoicesSuppleTd = document.createElement("td");
    invoicesSuppleTd.innerHTML = invoicesInfo[i].invoicesSupple;
    const invoicesCommitTd = document.createElement("td");
    invoicesCommitTd.innerHTML = invoicesInfo[i].invoicesCommit;
    invoicestr.append(invoicesDateTd);
    invoicestr.append(invoicesIdTd);
    invoicestr.append(invoicesSuppleTd);
    invoicestr.append(invoicesCommitTd);
    document.getElementById('invoicesInfo').append(invoicestr);
}

function addInvoices(x){
    if(x){
        document.getElementById('header').classList.add("d-none");
        document.getElementById('addInvoices').classList.remove("d-none");
    } else{
        document.getElementById('header').classList.remove("d-none");
        document.getElementById('addInvoices').classList.add("d-none");
    }
    clrInvoicesForm();
    invoicesDate.value = `INV-00000${countId + 1}`;
}
function saveInvoices(){
    invoicesInfo[countId] = {
        invoicesDate: invoicesDate.value,
        invoicesId: invoicesId.value,
        invoicesSupple: invoicesSupple.value,
        invoicesCommit: invoicesCommit.value,
    };
    for (let i = 0; i < invoicesInfo.length - countId; i++) {
        const invoicestr = document.createElement("tr");
        const invoicesDateTd = document.createElement("td");
        invoicesDateTd.innerHTML = invoicesInfo[i + countId].invoicesDate;
        const invoicesIdTd = document.createElement("td");
        invoicesIdTd.innerHTML = invoicesInfo[i + countId].invoicesId;
        const invoicesSuppleTd = document.createElement("td");
        invoicesSuppleTd.innerHTML = invoicesInfo[i + countId].invoicesSupple;
        const invoicesCommitTd = document.createElement("td");
        invoicesCommitTd.innerHTML = invoicesInfo[i + countId].invoicesCommit;
        invoicestr.append(invoicesDateTd);
        invoicestr.append(invoicesIdTd);
        invoicestr.append(invoicesSuppleTd);
        invoicestr.append(invoicesCommitTd);
        document.getElementById('invoicesInfo').append(invoicestr);
    }
    countId++;
    addInvoices(false);
}
function clrInvoicesForm(){
    invoicesDate.value = '';
    invoicesId.value = ''; 
    invoicesSupple.value = '';
    invoicesCommit.value = '';
}