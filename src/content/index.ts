import './style.css';

const DEFAULT_WORK_START_TIME = '10:00';
const DEFAULT_WORK_END_TIME = '22:00';
const DEFAULT_ARRIVAL_STATUS = '直行直帰・リモートワーク等';
const DEFAULT_PROJECT_CODE = '--';
const DEFAULT_WORK_TYPES = ['通常出勤', '法定休日', '所定休日'];

// 勤務時間チェック
const workTimeIn = document.querySelector<HTMLInputElement>('#work-time-in');
const workTimeOut = document.querySelector<HTMLInputElement>('#work-time-out');
if (workTimeIn && workTimeIn.value > DEFAULT_WORK_START_TIME) {
  workTimeIn.classList.add('highlight');
}
if (workTimeOut && workTimeOut.value > DEFAULT_WORK_END_TIME) {
  workTimeOut.classList.add('highlight');
}

// 出社状況チェック
const arriveAtWorkId = document.querySelector<HTMLSelectElement>('#arriveAtWorkId');
const selectedOption = arriveAtWorkId?.querySelector('option[selected="selected"]');

if (selectedOption && selectedOption.textContent !== DEFAULT_ARRIVAL_STATUS) {
  arriveAtWorkId?.classList.add('highlight');
}

// 実働時間とプロジェクト合計時間の一致チェック
const totalWorkTime = document.querySelector('#total-worktime');
const projectHours = document.querySelector(
  '#workTimeTab > div.modalAction__PJtotal > span.formatted-total-hours',
);
if (
  totalWorkTime &&
  projectHours &&
  totalWorkTime.textContent?.trim() !== projectHours.textContent?.trim()
) {
  totalWorkTime.classList.add('highlight');
  projectHours.classList.add('highlight');
}

// プロジェクト名チェック
chrome.storage.sync.get('projectNames', (data) => {
  const projectNames = data.projectNames;
  const projectEntries = document.querySelectorAll(
    '#projects-holder > div.project-entry-div table.modalAction__PJTable01.form-group.project-div > tbody > tr > td.u_w59 > span > span.selection > span > span.select2-selection__rendered',
  );
  const projectExists = Array.from(projectEntries).filter(
    (entry) => ![DEFAULT_PROJECT_CODE, projectNames].flat().includes(entry.textContent),
  );
  if (projectExists) {
    projectExists.forEach((entry) => entry.classList.add('highlight'));
  }
});

// 勤務種別チェック
const workTypeName = document.querySelector('#work-type-name');
if (
  workTypeName &&
  workTypeName.textContent &&
  !DEFAULT_WORK_TYPES.includes(workTypeName.textContent.trim())
) {
  workTypeName.classList.add('highlight');
}
