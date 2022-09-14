import { BsPlus, BsFillLightningFill, BsGearFill } from 'react-icons/bs';
import { FaFire, FaPoo, FaMoon, FaSun } from 'react-icons/fa';
import useDarkMode from '../hooks/useDarkMode';

const SideBar = () => {
    return (
        <div className="fixed top-0 left-0 h-screen w-16 flex flex-col
                  bg-white dark:bg-gray-900 shadow-lg">
            <SideBarIcon icon={<FaFire size="28" />} />
            <SideBarIcon icon={<BsPlus size="32" />} />
            <SideBarIcon icon={<BsFillLightningFill size="20" />} />
            <SideBarIcon icon={<FaPoo size="20" />} />
            <SideBarIcon icon={<BsGearFill size="22" />} />
            <SideBarIcon icon={<ThemeIcon />} />
        </div>
    );
};

const SideBarIcon = ({ icon, text = 'tooltip 💡' }) => (
    <div className="sidebar-icon group">
        {icon}
        <span class="sidebar-tooltip group-hover:scale-100">
            {text}
        </span>
    </div>
);

const ThemeIcon = () => {
    const [darkTheme, setDarkTheme] = useDarkMode();
    const handleMode = () => setDarkTheme(!darkTheme);
    return (
      <span onClick={handleMode}>
        {darkTheme ? (
          <FaSun size='24' className='dark-mode-icon' />
        ) : (
          <FaMoon size='24' className='dark-mode-icon' />
        )}
      </span>
    );
  };

export default SideBar;