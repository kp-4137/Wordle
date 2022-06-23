//
//  KeyCell.swift
//  Wordle
//
//  Created by Kishan Patel on 6/23/22.
//

import UIKit

class KeyCell: UICollectionViewCell {
    static let identifier = "KeyCell"
    
    override init(frame: CGRect) {
        super.init(frame: frame)
        backgroundColor = .darkGray
    }
    
    required init?(coder: NSCoder) {
        fatalError()
    }
}
