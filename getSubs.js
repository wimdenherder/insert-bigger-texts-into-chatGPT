async function fetchYtInitialPlayerResponse() {
  let pageHtml = await (await fetch(window.location.href)).text();
  try { return JSON.parse(pageHtml.split(`var ytInitialPlayerResponse = `)[1].split(`;var`)[0]); } catch(err) { return ytInitialPlayerResponse }
}

async function getSubs(fromLanguageCode) {
  let YT = await fetchYtInitialPlayerResponse();
  if(!YT.captions) return [];
  let ct = YT.captions.playerCaptionsTracklistRenderer.captionTracks;
  let url = ct.find(x => x.vssId.indexOf('.' + fromLanguageCode) === 0);
  url = url ? url.baseUrl + '&fmt=json3' : (fromLanguageCode !== 'en' ? 
    ct.find(x => x.vssId.indexOf('.en') === 0) || ct[0] : 
    ct[0]).baseUrl + '&fmt=json3&tlang=' + fromLanguageCode;
  let subsdata = (await (await fetch(url)).json()).events;
  subsdata = subsdata.map(x => ({...x, text: x.segs?.map(x => x.utf8)?.join(" ")?.replace(/\n/g,' ')?.replace(/♪|'|"|\.{2,}|\<[\s\S]*?\>|\{[\s\S]*?\}|\[[\s\S]*?\]/g,'')?.trim() || ''}));
  return subsdata;
}

async function downloadSubsToTextFile(filename) {
  const text = (await getSubs('en')).map(x => x.segs?.map(y => y.utf8).filter(x => x.trim()).join('\n')).join(" ")
  var element = document.createElement("a");
  element.setAttribute(
    "href",
    "data:text/plain;charset=utf-8," + encodeURIComponent(text)
  );
  element.setAttribute("download", filename || "subs.txt");
  element.style.display = "none";
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}

downloadSubsToTextFile();