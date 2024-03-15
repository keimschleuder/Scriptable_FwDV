// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: red; icon-glyph: fire;
const widget = new ListWidget()

let wTxt1 = widget.addText("3")
wTxt1.centerAlignText()

if (config.runsInApp){
  let fm = FileManager.iCloud()
  let doc = fm.documentsDirectory()
  doc = doc + "/Feuerwehr/"

  let fwdv = doc + "FwDV3.pdf"

  QuickLook.present(fwdv, true)
}

Script.setWidget(widget)