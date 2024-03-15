// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: red; icon-glyph: fire;
const widget = new ListWidget()

widget.addText("FwDV")
widget.addText("nachschlagen")

if (config.runsInApp){
  let alert = new Alert()
  alert.addAction("FwDV 1")
  alert.addAction("Ausbildung der Freiwilligen Feuerwehren")
  alert.addAction("FwDV 3")
  alert.addAction("Atemschutz")
  alert.addAction("Tauchen")
  alert.addAction("Die tragbaren Leitern")
  alert.addAction("Führung und Leitung im Einsatz")
  alert.addAction("Einheiten im ABC-Einsatz")
  alert.addCancelAction("Cancel")
  
  let result = await alert.present()
  
  let fm = FileManager.iCloud()
  let doc = fm.documentsDirectory()
  doc = doc + "/Feuerwehr/"
  
  if (result != -1) {
    switch (result) {
      case 0:
        doc = doc + "FwDV1.pdf"
        break;
      case 1:
        doc = doc + "FwDV2.pdf"
        break;
      case 2:
        doc = doc + "FwDV3.pdf"
        break;
      case 3:
        doc = doc + "FwDV7.pdf"
        break;
      case 4:
        doc = doc + "FwDV8.pdf"
        break;
      case 5:
        doc = doc + "FwDV10.pdf"
        break;
      case 6:
        doc = doc + "FwDV100.pdf"
        break;
      case 7:
        doc = doc + "FwDV500.pdf"
        break;
      
      default:
        doc = doc + "FwDV3.pdf"
        break;
    }
    
    QuickLook.present(doc, true)
  }
}

Script.setWidget(widget)