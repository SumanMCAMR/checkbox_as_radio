function cbclick(e) {
    e = e || event;
    var cb = e.srcElement || e.target;
    if (cb.type !== "checkbox") {
      return true;
    }
    var cbxs = document
        .getElementById("radiocb")
        .getElementsByTagName("input"),
      i = cbxs.length;
    while (i--) {
      if (
        cbxs[i].type &&
        cbxs[i].type == "checkbox" &&
        cbxs[i].id !== cb.id
      ) {
        cbxs[i].checked = false;
      }
    }
  }