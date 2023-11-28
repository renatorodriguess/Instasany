import Link from 'next/link'
import { GridContaier} from '../components/grid'
import Image from 'next/image'
import LogoImg from '../assets/logo.svg'
import SearchIcon from '../assets/icon-search.svg'
import IconUser from '../assets/icon-user.svg'

const arrayMenu = [
    'Início',
    'Benefícios',
    'Para quem é o curso?',
    'Preços promocionais',
    'Sobre nós',
]


export function Header() {
    const activedStyled = 'bg-green-actived text-opacity-100 rounded-full'
    return (
        <header className='relative w-full h-24 flex bg-green-primary'>
            <GridContaier className='flex items-center justify-between'>
                <Image
                    src={LogoImg}
                    alt="Logo"
                />
                <div className='flex items-center gap-20'>
                    <nav className='flex gap-2'>
                        {
                            arrayMenu.map((item, index) => (
                                <Link key={index} href='#' className={`px-3 py-1 text-white text-opacity-40 hover:text-opacity-100 transition-all ${index === 0 ?activedStyled : '' }`}>{item}</Link>
                            ))
                        }
                    
                    </nav>
                    <div className='flex items-center gap-6'>
                        <button>
                            <Image
                                src={SearchIcon}
                                alt='Icon Search'
                            />
                        </button>
                        <button className='flex items-center gap-2'>
                            <Image src={IconUser} alt='Icon User'/>
                            <span className='text-white font-medium'>Fazer Login</span>
                        </button>
                    </div>
                </div>
            </GridContaier>
        </header>
    )
}