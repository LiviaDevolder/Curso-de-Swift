import Swift

enum EstacoesDoAno {
    case Primavera
    case Verao
    case Outono
    case Inverno
}

func estacoes(epoca: EstacoesDoAno) {
    switch epoca {
        case .Primavera:
            print("Estamos na primavera")
        case .Verao:
            print("Estamos no verão")
        case .Outono:
            print("Estamos no outono")
        case .Inverno:
            print("Estamos no inverno")
    }
}

var epoca = EstacoesDoAno.Inverno
estacoes(epoca: epoca)