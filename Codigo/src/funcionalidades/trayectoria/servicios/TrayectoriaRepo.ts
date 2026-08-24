import type {Trayectoria} from "@/funcionalidades/trayectoria/types"

export interface TrayectoriaRepo{
    getAll(): Promise<Trayectoria[]>
}