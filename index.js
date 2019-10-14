// init

// Solo clavier - Channel 01 Note 36-96
const playSoloClavier = note => {
  if (note < 36 || note > 96) throw new Error("Note not in allowed range!");
  midi.sendMessage([144, note, 127]);
};

const stopSoloClavier = note => {
  if (note < 36 || note > 96) throw new Error("Note not in allowed range!");
  midi.sendMessage([128, note, 0]);
};

// Accompaniment clavier - Channel 02 Note 36-96
const playAccompanimentClavier = note => {
  if (note < 36 || note > 96) throw new Error("Note not in allowed range!");
  midi.sendMessage([145, note, 127]);
};

const stopAccompanimentClavier = note => {
  if (note < 36 || note > 96) throw new Error("Note not in allowed range!");
  midi.sendMessage([129, note, 0]);
};

// Pedal - Channel 03 Note 36-67
const playPedal = note => {
  if (note < 36 || note > 67) throw new Error("Note not in allowed range!");
  midi.sendMessage([146, note, 127]);
};

const stopPedal = note => {
  if (note < 36 || note > 67) throw new Error("Note not in allowed range!");
  midi.sendMessage([130, note, 0]);
};

// Solo 2nd - Channel 04 Note 36-96
const playSoloSecond = note => {
  if (note < 36 || note > 96) throw new Error("Note not in allowed range!");
  midi.sendMessage([147, note, 127]);
};

const stopSoloSecond = note => {
  if (note < 36 || note > 96) throw new Error("Note not in allowed range!");
  midi.sendMessage([131, note, 0]);
};

// Accompaniment 2nd - Channel 05 Note 36-96
const playAccompanimentSecond = note => {
  if (note < 36 || note > 96) throw new Error("Note not in allowed range!");
  midi.sendMessage([148, note, 127]);
};

const stopAccompanimentSecond = note => {
  if (note < 36 || note > 96) throw new Error("Note not in allowed range!");
  midi.sendMessage([132, note, 0]);
};

// Door Bell - Channel 16 Note 22
const playDoorbell = () => midi.sendMessage([159, 22, 127]);
const stopDoorbell = () => midi.sendMessage([143, 22, 0]);

// Swell pedal - Channel 07 Controller 11
// TODO

// Swell shades - Channel 07 Note 47-57
// TODO

// Stops Second Touch, trem - Channel 16 Note 14-21
// Pedal stops - Channel 16 Note 23-33
// Accompaniment Stops - Channel 16 Note 34-56
// Stops Solo - Channel 16 Note 57-79
const setStop = stop => {
  if (stop < 14 || stop > 79 || stop === 22) {
    throw new Error("Stop not in allowed range!");
  }

  midi.sendMessage([159, stop, 127]);
};

const unsetStop = stop => {
  if (stop < 14 || stop > 79 || stop === 22) {
    throw new Error("Stop not in allowed range!");
  }

  midi.sendMessage([143, stop, 127]);
};

// Acc Sostenuto Switch - Channel 16 Note 91
// TODO

// Solo Sostenuto Switch - Channel 16 Note 90
// TODO

// Pedal 2nd touch Switch - Channel 16 Note 92
// TODO

// Pistons - Channel 16 PC 1-10
// TODO

// General Cancel - Channel 16 PC 11
// TODO

// Piston Set - Channel 16 PC 12
// TODO

// Stop Keys Map - Channel 16 PC 13
// TODO

// Memory Select, 12 pos - Channel 16 Controller 20 Data 00-11
// TODO
