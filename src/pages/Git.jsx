import { useState } from "react";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
import "../styles/Git.css";
import ThemeToggle from "../components/ThemeToggle";

const Git = ({ darkMode, setDarkMode }) => {
  const [search, setSearch] = useState("");

  const gitCommands = [
    {
      name: "Git Init",
      command: "git init",
      description: "Yangi git repository yaratadi."
    },

    {
      name: "Git Clone",
      command: "git clone <repository-link>",
      description: "Repository nusxasini kompyuterga yuklaydi."
    },

    {
      name: "Git Status",
      command: "git status",
      description: "File holatini tekshiradi."
    },

    {
      name: "Git Add",
      command: "git add .",
      description: "Barcha fayllarni staged holatga o‘tkazadi."
    },

    {
      name: "Git Commit",
      command: 'git commit -m "message"',
      description: "O‘zgarishlarni commit qiladi."
    },

    {
      name: "Git Push",
      command: "git push origin main",
      description: "Kodlarni GitHub repositoryga yuboradi."
    },

    {
      name: "Git Pull",
      command: "git pull origin main",
      description: "Repositorydagi yangi kodlarni yuklab oladi."
    },

    {
      name: "Git Branch",
      command: "git branch",
      description: "Branchlar ro‘yxatini ko‘rsatadi."
    },

    {
      name: "Git Checkout",
      command: "git checkout branch-name",
      description: "Branch almashtirish uchun ishlatiladi."
    },

    {
      name: "Git Checkout New Branch",
      command: "git checkout -b branch-name",
      description: "Yangi branch yaratadi va o‘tadi."
    },

    {
      name: "Git Merge",
      command: "git merge branch-name",
      description: "Branchlarni birlashtiradi."
    },

    {
      name: "Git Log",
      command: "git log",
      description: "Commit tarixini ko‘rsatadi."
    },

    {
      name: "Git Reset",
      command: "git reset --hard",
      description: "Oxirgi o‘zgarishlarni bekor qiladi."
    },

    {
      name: "Git Restore",
      command: "git restore .",
      description: "Fayllarni oldingi holatiga qaytaradi."
    },

    {
      name: "Git Remote Add",
      command: "git remote add origin <repo-link>",
      description: "Remote repository ulaydi."
    },

    {
      name: "Git Fetch",
      command: "git fetch",
      description: "Remote repositorydagi ma’lumotlarni oladi."
    },

    {
      name: "Git Diff",
      command: "git diff",
      description: "Koddagi farqlarni ko‘rsatadi."
    },

    {
      name: "Git Stash",
      command: "git stash",
      description: "Temporary o‘zgarishlarni saqlaydi."
    },

    {
      name: "Git Stash Pop",
      command: "git stash pop",
      description: "Saqlangan stashni qaytaradi."
    },

    {
      name: "Git Remove",
      command: "git rm file-name",
      description: "Faylni repositorydan o‘chiradi."
    },

    {
      name: "Git Rebase",
      command: "git rebase branch-name",
      description: "Commit tarixini tartiblaydi va branchlarni birlashtiradi."
    },

    {
      name: "Git Cherry Pick",
      command: "git cherry-pick commit-id",
      description: "Bitta commitni boshqa branchga olib o‘tadi."
    },

    {
      name: "Git Revert",
      command: "git revert commit-id",
      description: "Commitni bekor qiluvchi yangi commit yaratadi."
    },

    {
      name: "Git Tag",
      command: "git tag v1.0",
      description: "Project uchun version tag yaratadi."
    },

    {
      name: "Git Show",
      command: "git show",
      description: "Oxirgi commit ma’lumotlarini ko‘rsatadi."
    },

    {
      name: "Git Remote",
      command: "git remote -v",
      description: "Ulangan remote repositorylarni ko‘rsatadi."
    },

    {
      name: "Git Branch Delete",
      command: "git branch -d branch-name",
      description: "Branchni o‘chiradi."
    },

    {
      name: "Git Branch Force Delete",
      command: "git branch -D branch-name",
      description: "Branchni majburan o‘chiradi."
    },

    {
      name: "Git Checkout Main",
      command: "git checkout main",
      description: "Main branchga qaytadi."
    },

    {
      name: "Git Switch",
      command: "git switch branch-name",
      description: "Branch almashtirish uchun yangi usul."
    },

    {
      name: "Git Switch Create",
      command: "git switch -c branch-name",
      description: "Yangi branch yaratadi va o‘tadi."
    },

    {
      name: "Git Pull Rebase",
      command: "git pull --rebase",
      description: "Pull qiladi va commitlarni tartiblaydi."
    },

    {
      name: "Git Push Force",
      command: "git push --force",
      description: "Majburan push qiladi."
    },

    {
      name: "Git Clean",
      command: "git clean -f",
      description: "Keraksiz fayllarni o‘chiradi."
    },

    {
      name: "Git Remove Cached",
      command: "git rm --cached file-name",
      description: "Faylni git trackingdan chiqaradi."
    },

    {
      name: "Git Config Username",
      command: 'git config --global user.name "Your Name"',
      description: "Global username o‘rnatadi."
    },

    {
      name: "Git Config Email",
      command: 'git config --global user.email "your@email.com"',
      description: "Global email o‘rnatadi."
    },

    {
      name: "Git Config List",
      command: "git config --list",
      description: "Git config ma’lumotlarini ko‘rsatadi."
    },

    {
      name: "Git Ignore",
      command: "touch .gitignore",
      description: ".gitignore fayl yaratadi."
    },

    {
      name: "Git Rename Branch",
      command: "git branch -m new-branch-name",
      description: "Branch nomini o‘zgartiradi."
    },

    {
      name: "Git Undo Last Commit",
      command: "git reset --soft HEAD~1",
      description: "Oxirgi commitni bekor qiladi lekin kod saqlanadi."
    },

    {
      name: "Git Hard Reset",
      command: "git reset --hard HEAD~1",
      description: "Oxirgi commit va kodni o‘chiradi."
    },

    {
      name: "Git Current Branch",
      command: "git branch --show-current",
      description: "Hozirgi branch nomini ko‘rsatadi."
    },

    {
      name: "Git File History",
      command: "git log file-name",
      description: "Fayl commit tarixini ko‘rsatadi."
    },

    {
      name: "Git Amend Commit",
      command: 'git commit --amend -m "new message"',
      description: "Oxirgi commit message ni o‘zgartiradi."
    },

    {
      name: "Git Add Specific File",
      command: "git add file-name",
      description: "Faqat bitta faylni stage qiladi."
    },

    {
      name: "Git Add Interactive",
      command: "git add -p",
      description: "O'zgarishlarni qismlarga bo'lib stage qilish."
    },

    {
      name: "Git Commit All",
      command: 'git commit -am "message"',
      description: "Stage va commitni bir vaqtda bajaradi."
    },

    {
      name: "Git Log One Line",
      command: "git log --oneline",
      description: "Commit tarixini qisqa formatda ko'rsatadi."
    },

    {
      name: "Git Log Graph",
      command: "git log --oneline --graph --all",
      description: "Branchlar tarixini grafik ko'rinishda ko'rsatadi."
    },

    {
      name: "Git Stash List",
      command: "git stash list",
      description: "Barcha stashlarni ko'rsatadi."
    },

    {
      name: "Git Stash Apply",
      command: "git stash apply",
      description: "Stashni saqlagan holda qo'llaydi."
    },

    {
      name: "Git Stash Drop",
      command: "git stash drop",
      description: "Bitta stashni o'chiradi."
    },

    {
      name: "Git Stash Clear",
      command: "git stash clear",
      description: "Barcha stashlarni o'chiradi."
    },

    {
      name: "Git Branch All",
      command: "git branch -a",
      description: "Local va remote branchlarni ko'rsatadi."
    },

    {
      name: "Git Branch Remote",
      command: "git branch -r",
      description: "Faqat remote branchlarni ko'rsatadi."
    },

    {
      name: "Git Remote Remove",
      command: "git remote remove origin",
      description: "Remote repositoryni o'chiradi."
    },

    {
      name: "Git Remote Set URL",
      command: "git remote set-url origin <new-url>",
      description: "Remote repository URLini almashtiradi."
    },

    {
      name: "Git Fetch All",
      command: "git fetch --all",
      description: "Barcha remote repositorylardan ma'lumot oladi."
    },

    {
      name: "Git Restore Staged",
      command: "git restore --staged file-name",
      description: "Staged faylni unstaged qiladi."
    },

    {
      name: "Git Reset File",
      command: "git reset file-name",
      description: "Bitta faylni stage holatidan chiqaradi."
    },

    {
      name: "Git Show Branches",
      command: "git show-branch",
      description: "Branchlar haqida ma'lumot ko'rsatadi."
    },

    {
      name: "Git Short Status",
      command: "git status -s",
      description: "Qisqa status ko'rinishi."
    },

    {
      name: "Git Blame",
      command: "git blame file-name",
      description: "Qaysi qatorni kim yozganini ko'rsatadi."
    },

    {
      name: "Git Reflog",
      command: "git reflog",
      description: "HEAD tarixini ko'rsatadi."
    },

    {
      name: "Git Bisect Start",
      command: "git bisect start",
      description: "Xato commitni topishni boshlaydi."
    },

    {
      name: "Git Bisect Good",
      command: "git bisect good",
      description: "Commit yaxshi ekanligini belgilaydi."
    },

    {
      name: "Git Bisect Bad",
      command: "git bisect bad",
      description: "Commit yomon ekanligini belgilaydi."
    },

    {
      name: "Git Bisect Reset",
      command: "git bisect reset",
      description: "Bisect jarayonini tugatadi."
    },

    {
      name: "Git Tag List",
      command: "git tag",
      description: "Barcha taglarni ko'rsatadi."
    },

    {
      name: "Git Push Tags",
      command: "git push --tags",
      description: "Barcha taglarni GitHubga yuboradi."
    },

    {
      name: "Git Delete Tag",
      command: "git tag -d v1.0",
      description: "Tagni o'chiradi."
    },

    {
      name: "Git Squash Last Commits",
      command: "git rebase -i HEAD~3",
      description: "Bir nechta commitlarni bitta commitga birlashtiradi."
    },

    {
      name: "Git Force Push Safe",
      command: "git push --force-with-lease",
      description: "Xavfsiz force push."
    },

    {
      name: "Git Clone Specific Branch",
      command: "git clone -b branch-name <repo-url>",
      description: "Ma'lum branchni clone qiladi."
    },

    {
      name: "Git Archive",
      command: "git archive --format zip --output project.zip main",
      description: "Repositoryni zip qilib export qiladi."
    }
  ];

  const filteredGit = gitCommands.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase()) ||
    item.command.toLowerCase().includes(search.toLowerCase())
  );

  const copyToClipboard = async (text) => {
    await navigator.clipboard.writeText(text);

    Toastify({
      text: "Copied ✅",
      duration: 2000,
      gravity: "top",
      position: "center",
      style: {
        background: "black",
        color: "lime",
        fontWeight: "bold",
      },
    }).showToast();
  };

  return (
    <div>
      <h1 className="Git__title HTML__title"> Useful Git Commands </h1>
      <div className="search__wrapper">
        <input
         className="search__input Git__input HTML__input"
         type="search"
         placeholder="Search git command"
         value={search}
         onChange={(e) => setSearch(e.target.value)} />

        <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>

      <div className="Git__container">
        {filteredGit.length > 0 ? (
          filteredGit.map((item, index) => (
            <div className="Git__card" key={index}>
              <h2 className="Git__name"> {item.name} </h2>
              <p className="Git__description"> {item.description} </p>

              <div className="Git__commandBox">
                <code className="Git__command"> {item.command} </code>
                <button className="Git__copyBtn" onClick={() => copyToClipboard(item.command)}> Copy </button>
              </div>
            </div>
          ))
        ) : (
          <p className="tags__not__founded"> Git command is not found ❌ </p>
        )}
      </div>
    </div>
  );
};
export default Git;